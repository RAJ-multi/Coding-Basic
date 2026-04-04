d = {} #Emty Dictionary
marks = {
    "mia": 90,
    "michael": 80,
    "Ethan": 70,
    "Chris": 99,
}

print(marks, type(marks)) 
print(marks["Ethan"])
print(marks.values())
marks.update({"Ethan": 80})
print(marks)
marks.update({"Raj": 100})
print(marks)
print(marks.get("Raj"))
print(marks["mia"]) # it will give error if key is not present
print(marks.get("Raj2")) # it will give None if key is not present
print(marks.pop("Ethan") ) # it will remove the key and return the value
print(marks.popitem()) # it will remove the last item and return the key and value as a tuple