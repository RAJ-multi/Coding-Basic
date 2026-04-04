p =set() #Empty Set
r = {1,1,3,4,7,8,8,8,10,10,11,12}
print(r) #Remove Duplicates
K = {"Raj", "Rohit", "Rahul", "Rohit",1,2,3,4,5,6,7,8,9,10}
print(K,type(K)) #Set can have different data types but it is not ordered and it is unchangeable
K.add(577)
print(K,type(K))
#PROPERTIES OF SET
#1. Unordered
#2.UNINDEXED
#3.UNCHANGEABLE
#4. NO DUPLICATES
print(len(K))
print(K.remove(1))
print(K.pop()) #Removes a random element from the set (not the last one and also not recommended to use as it is not predictable)

s1 = {16,18,26,28,29}
s2 = {18,29,30,31,32}
print(s1.union(s2))  #Elements that are in either s1 or s2 or both
print(s1.intersection(s2)) #Elements that are in both s1 and s2
print(s1.difference(s2)) #Elements that are in s1 but not in s2
print(s1.symmetric_difference(s2)) #Elements that are in either s1 or s2 but not in both
print(s1.issubset(s2))
print(s1.issuperset(s2))