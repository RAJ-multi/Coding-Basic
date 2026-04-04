let Code_name = [123,22, john, Jane, Bob, Alice, false, Fuckboy, Fuckgirl,"Not Present" ]
console.log(Code_name)
console.log(Code_name[0]) 
console.log(Code_name[16])  // will return undefined because there is no element at index 16
console.log('Length of the array: ' + Code_name.length)
Code_name[16] = 91 // will add the element 91 at index 16 and  will define
console.log(Code_name[16]) // will return 91
Code_name[0] = 456 // will change the value at index 0 to 456
console.log(typeof Code_name[0])
