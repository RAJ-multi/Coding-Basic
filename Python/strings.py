name = "Pritom Sen Raj"
print(name[0])
print(name[-1]) # prints the last character 
print(name[0:6]) # prints characters from index 0 to 5
print(name[0:]) # prints characters from index 0 to end
print(name[:6]) # prints characters from start to index 5
print(name[:]) # prints the whole string
print(name[::2]) # prints every second character
print(name[-5:-2]) # The easist way to do that is:
                   # think like that print(name[2:5]) and it works same as print(name[-5:-2])
print(name[1:6:2]) #  it will take 1-5 first then jump 2 from 1 until 6 come o it will be 1st take "ritom" then it will jump (r) to 2 character (t) then again 2 (m) so result: rtm
print(len(name))
print(name.endswith("rrya"))
print(name.endswith("Raj"))
print(name.startswith("P"))

a = 'Raj , Mira and Ayla are friend with each other. \n But Raj and Mira/Ayla are close friend than 3 people together. \'Ayla\'\t, \'Raj\'\t ,\'Mira\'\t'

print(a)