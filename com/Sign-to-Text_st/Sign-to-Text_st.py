import streamlit as st
import numpy as np
import cv2
from keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array

# Load the TensorFlow model
model_path = r"C:\Users\tithi\Downloads\code\Threshold.h5"
model = load_model(model_path)
words = {i: letter for i, letter in enumerate(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                                               'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                                               'del', 'nothing', 'space'])}

background = None
accumulated_weight = 0.5

ROI_top = 100
ROI_bottom = 300
ROI_right = 150
ROI_left = 350

def cal_accum_avg(frame, accumulated_weight):
    global background
    if background is None:
        background = frame.copy().astype("float")
        return None
    cv2.accumulateWeighted(frame, background, accumulated_weight)

def edge_detection(image):
    minValue = 70
    blur = cv2.GaussianBlur(image, (5, 5), 2)
    th3 = cv2.adaptiveThreshold(blur, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, 11, 2)
    ret, res = cv2.threshold(th3, minValue, 255, cv2.THRESH_BINARY_INV+cv2.THRESH_OTSU)
    contours, hierarchy = cv2.findContours(th3.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if len(contours) == 0:
        return None
    else:
        hand_segment_max_cont = max(contours, key=cv2.contourArea)
        return (res, hand_segment_max_cont)

# Streamlit app
def main():
    st.title("American Sign Language Detection")
    st.write("This app detects and translates American Sign Language gestures.")

    # Video capture setup
    video_feed = st.empty()
    predicted_box = st.empty()
    cam = cv2.VideoCapture(0)

    # Main loop
    while True:
        ret, frame = cam.read()
        if not ret:
            st.error("Failed to grab frame")
            break

        frame = cv2.flip(frame, 1)
        frame_copy = frame.copy()
        roi = frame[ROI_top:ROI_bottom, ROI_right:ROI_left]
        gray_frame = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
        gray_frame = cv2.GaussianBlur(gray_frame, (9, 9), 0)

        hand = edge_detection(gray_frame)
        if hand is not None:
            thresholded, hand_segment = hand
            cv2.drawContours(frame_copy, [hand_segment + (ROI_right, ROI_top)], -1, (255, 0, 0), 1)
            
            # Draw red square around detected gesture region
            cv2.rectangle(frame_copy, (ROI_right, ROI_top), (ROI_left, ROI_bottom), (0, 0, 255), 2)
            
            # Preprocess the frame for TensorFlow model
            thresholded = cv2.cvtColor(thresholded, cv2.COLOR_GRAY2RGB)
            thresholded = cv2.resize(thresholded, (64, 64))  # Resize to match model's expected input
            thresholded = img_to_array(thresholded)
            thresholded = thresholded / 255.0  # Normalize to [0, 1]
            # Convert to grayscale to match the model's expected input
            thresholded = cv2.cvtColor(thresholded, cv2.COLOR_RGB2GRAY)
            # Add a batch dimension and channel dimension
            thresholded = np.expand_dims(thresholded, axis=0)
            thresholded = np.expand_dims(thresholded, axis=-1)
            # Predict with TensorFlow model
            pred = model.predict(thresholded)
            predicted = words[np.argmax(pred, axis=1)[0]]
            predicted_box.text(f"Predicted value: {predicted}")

        # Display the frame
        video_feed.image(frame_copy, channels="BGR", use_column_width=True)

        k = cv2.waitKey(1) & 0xFF
        if k == 27:
            break

    cam.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
