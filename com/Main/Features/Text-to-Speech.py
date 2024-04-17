from gtts import gTTS 
import os
def main():
    text = input("Enter text : ")
    texttospeech(text)
def texttospeech(text):
    tts = gTTS(text)
    tts.save("Hello.mp3")
    os.system("start Hello.mp3")
    print("hello")
main()