words = {
    "konnichiwa": "hello",
    "arigatou": "thank you",
    "sumimasen": "excuse me"
}

word = input("Enter a Japanese word: ")

print(words.get(word, "Word not found in the dictionary."))