// PROBLEM 1

// var animal1 = "chicken"
// var animal2 = "monkey"
// var animal3 = "chickenmonkey"

// for (let i = 1; i <=100; i++) {
//     const currentNumber = i

//     if (currentNumber % 7 === 0 && currentNumber % 5 === 0) {
//         console.log(i + animal3) 
//     } else if (currentNumber % 7 === 0 ) {
//         console.log(i + animal2)
//     } else if (currentNumber % 5 === 0) {
//         console.log(i + animal1)
//     } else  {
//         console.log(i) }
// }

//                                               PROBLEM 2 

// let bandNumber = 1

// const takeNumber = function (bandName) {
//     console.log(`${bandName}${bandNumber}`)  
//    bandNumber += 1
// }

// takeNumber("Galactic Scum")
// takeNumber("Underdogs")
// takeNumber("TheDogUnders")
// takeNumber("TheSumGalactic")

//                                               PROBLEM 3


let sentence = ["The","walrus","danced","through","the","trees"];
let words = []
let excitement = "!"
function addExcitement (sentence) {
    for(var i=0;i<=sentence.length;i++) {
     console.log(sentence[i])
     words.push(sentence[i])
     console.log(words)

     if(words % 3 === 0) {
         words.push(sentence[i])
        console.log(excitement)
    }
}
}

addExcitement(sentence)

