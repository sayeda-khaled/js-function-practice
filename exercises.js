    (function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------
 function max(num1, num2){
   if (num1 > num2) {
     return num1;
   } else {
     return num2;
   }

   }



  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
  function maxOfThree(num1, num2, num3){
    if (num1 > num2 && num1 > num3) {
      return num1;
    } else if (num2 > num1 && num2 > num3 ) {
      return num2;
    } else {
      return num3;
    }

  }


  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

  function isVowel(x) {
    if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u') {
      return true;
    } else {
      return false;
    }
  }


  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------


  // function rovarspraket(str) {
  //   var rest = "";
  //   for (let i = 0; i < str.length; i++) {
  //   if (str.charAt(i) == 'a'  || str.charAt(i) == 'e'  || str.charAt(i)  == 'i' || str.charAt(i)  == 'o' || str.charAt(i)  == 'u') {
  //   rest = rest + "str.chartAt(i)";
  //     }
  //
  //    else {
  //       rest = rest + "str.charAt(i)" + 'o' + "str.charAt(i)";
  //     }
  //   }
  //   return rest;
  // }
  //
  // rovarspraket();
  // console.log(rest);

/*
function rovarspraket(text) {
  let translation = '';

  text.toLowerCase().split('').forEach(function(char) {
    if('abcdfghjklmnpqrstvwxyz'.includes(char)){
      translation += char +'o'+char;
    }
    else{
      translation += char;
    }
  });
  return translation;
}

*/



function rovarspraket(text) {

  let textArray = text.toLowerCase().split("");

  for(let i = 0; i < text.length; i++) {

    if('bcdfghjklmnpqrstvwxyz'.includes(textArray[i])) {
      textArray[i] = textArray[i] + 'o' + textArray[i];
    }
  }
  return textArray.join(''); //joining without a space, meaning putting words together
}



  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------



  var array = []
   function sum(array) {
     var result = 0;
     for(let i = 0; i < array.length; i++){
       result += array[i];
     }
     return result;
   }

   function multiply(array) {
     var product= 1;
     for (let i = 0; i < array.length; i++ ){
       product *= array[i];
     }
     return product;
   }

   //one solutioin

   // function sum(arr) {
   //   arr.reduce(function(acc, i) {
   //     return acc + i;
   //   })};


   // function sum(arr) {
   //   let total = "";
   //   for(let i= 0; i<arr.length; i++) {
   //     total += arr[i];
   //   }
   //   return total;
   // }



   // function multiply(arr) {
   //
   //   let total = "";
   //   for(let i= 0; i<arr.length; i++) {
   //     total *= arr[i];
   //   }
   //   return total;
   // }





  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------

  function reverse(str){
    return str.split("").reverse().join("");


  }

  /* Another way of doing it:

  function reverse(str){

  let newString = '';
  for (let i = 0, i < str.length; i++) {    //to decrement, set i--
  newString = str.charAt(i) + newString;
}

return newString;

  */

  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------




function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = 0;



  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord) {
      longestWord = words[i].length;
    }
  }

  return longestWord;
}





  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------



function filterLongWords(arr, i) {

  return arr.filter(function(word){
    return word.length > i
  })
};




  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------




function charFreq(str) {

  const freqList = {};

  str.split('').forEach(function(char) {  // review this "call back function"-- in the wild, they are annonumous function..

    freqList[char] = freqList[char] + 1 || 1; // we are using [], becuase we are using an object
  }
);

return freqList;
}


  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongeWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();
