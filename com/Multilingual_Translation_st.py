import streamlit as st
from googletrans import LANGUAGES, Translator

# Create language dictionary outside the main function
all_languages = LANGUAGES.keys()
language_codes = {name: code for code, name in LANGUAGES.items()}  # Dictionary comprehension for efficiency

def main():
    st.write("Select a language to translate to:")
    selected_language = st.selectbox("Select language", list(language_codes.keys()))  # Use selectbox for user choice

    text_to_translate = st.text_input("Enter the text to translate : ")

    if selected_language and text_to_translate:  # Check for both inputs
        target_language = language_codes[selected_language]
        translated_text = translate_text(text_to_translate, target_language)
        st.write("Translated text:", translated_text)
    elif not selected_language:
        st.warning("Please choose a language to translate.")
    else:
        st.warning("Please enter text to translate.")

def translate_text(text, target_language):
    translator = Translator()
    try:
        print(f"Translating text: '{text}' to language code: {target_language}")
        translated_text = Translator().translate(text, dest=target_language)   
        print(f"Translation result: {translated_text}")
        return translated_text.text
    except Exception as e:  # Catch any errors during translation
        st.write(f"Translation failed: {e}")
        return "Translation failed. Please try again later."
if __name__ == "__main__":
    main()