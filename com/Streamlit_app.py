import streamlit as st
from gtts import gTTS 
import os

def main():
    st.title("Text to Speech Converter")

    # Input text using Streamlit text input widget
    text = st.text_area("Enter text:", "")

    # Button to trigger text-to-speech conversion
    if st.button("Convert to Speech"):
        text_to_speech(text)

def text_to_speech(text):
    if text:
        tts = gTTS(text)
        tts.save("output.mp3")
        st.audio("output.mp3", format="audio/mp3")
    else:
        st.warning("Please enter some text.")

if __name__ == "__main__":
    main()
