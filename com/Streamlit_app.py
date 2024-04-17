import streamlit as st
from googletrans import LANGUAGES, Translator

# Create language dictionary outside the main function
all_languages = LANGUAGES.keys()
language_codes = {name: code for code, name in LANGUAGES.items()}  # Dictionary comprehension for efficiency

def main():
  st.write("Select a language to translate to:")
  selected_language = st.selectbox("", list(language_codes.keys()))  # Use selectbox for user choice

  text_to_translate = st.text_input("Enter the text to translate : ")

  if selected_language and text_to_translate:  # Check for both inputs
      target_language = language_codes[selected_language]
      translated_text = translate_text(text_to_translate, target_language)
      st.write("Translated text:", translated_text)
  else:
      st.warning("Please enter both text and choose a language to translate.")

def translate_text(text, target_language):
  translator = Translator()
  translated_text = translator.translate(text, dest=target_language)
  return translated_text.text

main()
