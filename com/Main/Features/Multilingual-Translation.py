from googletrans import LANGUAGES, Translator
def main():
    all_languages = LANGUAGES.keys()
    d = {}
    # Print all language codes and names
    for code, name in LANGUAGES.items():
        d[name] = code
    print(d.keys())
    text_to_translate = input("Enter the text to translate : ")
    target = input("Choose a destination language from above list : ")  # Change this to your desired language code, e.g., "es" for Spanish
    target_language = d[target]
    translated_text = translate_text(text_to_translate, target_language)
    print("Translated text:", translated_text)
def translate_text(text, target_language):
    translator = Translator()
    translated_text = translator.translate(text, dest=target_language)
    return translated_text.text
main()
