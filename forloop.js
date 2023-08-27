// loops are the tools that we can use to control the flow of the task and to so repeatative task

var a = 'Hello world'

// the for loops

for(var i=0 ; i<10 ; i++){
    console.log(a)
}

// You have an Array and you have to square each element of that Array

var num = [2, 3, 4, 5, 6, 7, 8]

var squaredArr = []  //empty array
for(var i=0 ; i<num.length ; i++){
    squaredArr.push(num[i]*num[i])
}
console.log(squaredArr);