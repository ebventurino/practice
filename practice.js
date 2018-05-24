//                                                PROBLEM 1

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

//start with an array
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
//add an exclamation point to a variable
let addExcitement = "!"
      //declare a function
  function overlyExcited(arrayOfWords) {
      //add a space
    var sentence = " ";
     //add a for loop, loop through arrayOfWords(sentence)
    for (var i = 0; i < arrayOfWords.length; i = i + 1) {
      // new variable equals arrayofwords(sentence) loops
      var currentWordsInArray = arrayOfWords[i];
      //sentence = sentence plus a space, plus current words in the array
      sentence = sentence + " " + currentWordsInArray; 
       // if statement - if the word is divisible by 3, add a word plus ex point
       if (i % 3 === 0) {
        sentence += addExcitement + addExcitement
      }
      //console log the sentence
      console.log(sentence)
    }
  }
   
  // Invoke the function and pass in the array
  overlyExcited(sentence);
