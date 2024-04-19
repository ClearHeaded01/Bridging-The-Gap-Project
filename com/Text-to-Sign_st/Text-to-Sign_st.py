import streamlit as st
import cv2
import numpy as np

def main():
    st.title("ASL Gesture Image Viewer")
    st.write("This app displays the images of American Sign Language (ASL) gestures.")
    
    root_dir = r'C:\Users\tithi\Downloads\code\gesture\train'
    text_input = st.text_input("Enter text:", "")

    if st.button("Show Images"):
        try:
            x = text_input.strip()  # Remove leading and trailing whitespace
            x = ''.join(filter(str.isalnum, x))  # Keep only alphanumeric characters
            if not x:
                st.warning("Please enter alphanumeric characters only.")
                return

            paths = gen_path(root_dir, x)
            images = gen_image(paths, x)
            if images:
                # Resize images to have the same height
                min_height = min(image.shape[0] for image in images)
                images_resized = [cv2.resize(image, (int(image.shape[1] * min_height / image.shape[0]), min_height)) for image in images]
                combined_image = np.hstack(images_resized)
                st.image(combined_image, channels="BGR", caption=x)
            else:
                st.warning("No images found.")
        except Exception as e:
            st.error(f"Error: {e}")

def gen_path(root_dir, text) -> list:
    paths = []
    for i in text:
        paths.append(f'C:\\Users\\tithi\\Downloads\\code\\gesture\\train\\{i}\\0.jpg')
    return paths

def gen_image(paths : list, text) -> list:
    images = []
    for path in paths:
        image = cv2.imread(path)
        if image is not None:
            images.append(image)
    return images

if __name__ == "__main__":
    main()
