var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// prints out My name is Keith

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// prints out 3

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// prints out 
// 0 : ducks
// 1 : dogs
// 2 : lions

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// prints out
// Suspects include: Jay, Val, Harvey, Rick
// Suspect three is: Keith

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

// prints out Poirot

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

//prints out the murderer is Rick

//////////////////// MY LAST DRINK ////////////////////////////

var drink =  "beer"

var stillAtCodeClan = function() {
  drink = 'borovicka';
  var footLights = function() {
    var drink = 'beer';
    drink = 'scotch';
    var drink = 'too much';
    drink = 'water'
  }
  footLights();
}

stillAtCodeClan();

console.log('my last drink was', drink);