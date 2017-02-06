// Section 1

// What types are these?

// /* 1.1 */ 1; number
// /* 1.2 */ "cat"; string
// /* 1.3 */ true; boolean
// /* 1.4 */ []; object
// /* 1.5 */ {}; object
// /* 1.6 */ 1.1; number
// /* 1.7 */ var myVariable; undefined


// Section 2

// What is the truthiness/falsiness values of the following values?

// /* 2.1 */ 1;  true
// /* 2.2 */ "cat";  true
// /* 2.3 */ true; true
// /* 2.4 */ NaN; false
// /* 2.5 */ []; true
// /* 2.6 */ {}; true
// /* 2.7 */ undefined; false
// /* 2.8 */ ""; false
// /* 2.9 */ 0; false


// Section 3

// Using examples that are different from above...

// // 3.1 Assign a variable that is a number
// var number = 3;
// // 3.2 Assign a variable that is a string
// var name = "Peter";
// // 3.3 Assign a variable that is a boolean
// var truth = false;
// // 3.4 Assign a variable that is an object
// var array = [];


// Section 4

// // 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
// if (2) {
//   console.log("hello");
// }
// else {
//   console.log("bye");
// }


// Section 5

// var animals = ["raccoon","hedgehog","mouse","gerbil"];

// // 5.1. Assign the first element to a variable
// var annoying = animals[0];
// // 5.2. Assign the last element to a variable
// var noIdeaWhatItIs =  animals[3];
// // 5.3. Assign the length of an array to a variable
// var arrayLength = animals.length;
// // 5.4. Add an item to the end of the array
// var newElement = "monkey";
// animals.push(newElement);
// // 5.5. Add an item to the start of the array
// animals.unshift(newElement);
// // 5.6. Assign the index of hedgehog to a variable
// var indexOfHedgehog = animals.indexOf("hedgehog");


// Section 6

// // 6.1 Create an array of 5 vegetables
// var vegetables = [ "carrot", "pumpkin", "mushroom", "cabbage", "lettuce" ];
// // 6.2 Loop over the array and write to the console using a "while"
// var count = 0;
// while (count < vegetables.length) {
//   console.log(vegetables[count]);
//   count += 1;
// }
// // 6.3 Loop again using a "for" with a counter
// for (var i = 0; i < vegetables.length; i++) {
//   console.log(vegetables[i]);
// }
// // 6.4 Loop again using a "for of"
// for (var health of vegetables) {
//   console.log(health);
// }


// Section 7

var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

// Write functions for the following tasks!
// 7.1 Calculate the total cash in accounts

var totalSum = function(array) {
  var sum = 0;
  for (account of array) {
    sum += account.amount;
  }
  return sum;
}
console.log(totalSum(accounts));

// 7.2 Find the amount of money in the account with the largest balance

var findTheRichestAmount =  function(array) {
  return array.sort(function(first, second) {
    return second.amount - first.amount;
  })[0].amount;
}
console.log(findTheRichestAmount(accounts));  

// 7.3 Find the name of the account with the smallest balance

var findThePoorest =  function(array) {
  return array.sort(function(first, second) {
    return first.amount - second.amount;
  })[0].name;
}
console.log(findThePoorest(accounts));

// 7.4 Calculate the average bank account value

var findAverage = function(array) {
  var average = totalSum(array) /  array.length;
  return average;
}
console.log(findAverage(accounts));

// 7.5 Find the value of marcs bank account

var findMarcsSavings = function(array, holder) {
  var marcsSavings;
  for (each of array) {
    if (each.name === holder) {
      marcsSavings = holder + " : " + each.amount;
    }
  }
  if (marcsSavings == undefined) {
    marcsSavings = "No such holder found";
  }
  return marcsSavings;
}
console.log(findMarcsSavings(accounts, "marc"));
console.log(findMarcsSavings(accounts, "steve"));

// 7.6 Find the holder of the largest bank account

var findTheRichestHolder =  function(array) {
  return array.sort(function(first, second) {
    return second.amount - first.amount;
  })[0].name;
}
console.log(findTheRichestHolder(accounts));  

// 7.7 Calculate the total cash in business accounts

var totalBusinessSum = function(array) {
  var sum = 0;
  for (account of array) {
    if (account.type == "business") {
      sum += account.amount;
    }
  }
  return sum;
}
console.log(totalBusinessSum(accounts));

// 7.8 Find the largest personal account owner

var findTheRichestPersonalHolder =  function(array) {
  var miniArray = [];
  for (each of array) {
    if (each.type == "personal") {
      miniArray.push(each);
    }
  }
  return miniArray.sort(function(first, second) {
    return second.amount - first.amount;
  })[0].name;
}
console.log(findTheRichestPersonalHolder(accounts)); 

// Section 8

// Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method

var myPerson = {
  name: "Peter",
  height: 175,
  favouriteFood: "pizza",
  eat: function() {
    return "ham ham ham";
  }
}

console.log(myPerson);
console.log(myPerson.eat());