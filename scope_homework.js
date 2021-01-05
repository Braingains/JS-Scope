// ## Brief

// Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.

// ### MVP

// #### Episode 1

// ```js

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// The scenario is a const containing an object with various information.
// declareMurderer is an anonymously declared function that prints the verdict, it returns the value "Miss Scarlet"
// attached to the key murderer.
// The value "Miss Scarlet" is assigned to the const verdict, and is then logged to the console.
// The murderer is Miss Scarlet.
```

#### Episode 2

```js
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
```

// const "murderer" is assigned the string "Professor Plum"
// const changeMurderer is a function that reassigns "murderer" to Mrs Peacock.
// const declareMurderer is a function that returns the string 
// "The murderer is" and then the value stored in "murderer".
// the changeMurderer function is called, but cannot change the value of murderer, as it's a const.
// The code outputs an error.

#### Episode 3

```js
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
```

// murderer is assigned "Professor Plum".
// const declareMurderer function assigns "Mrs Peacock" to the murderer variable and returns the 
// string 'the murderer is' and then the value stored in murderer.
// const firstVerdict saves the data from calling the declareMurderer function and prints the 
// string 'First Verdict' followed by the value stored in the firstVerdict variable.
// firstVerdict is "Mrs Peacock", as it calls the declareMurderer function with reassigns 
// 'murderer' from 'Professor Plum' to 'Mrs Peacock'.

// const secondVerdict is assigned the data 'the murderer is' and then the data stored in 
// the murderer variable.
// secondVerdict is "Professor Plum", as the murderer variable was only changed locally within 
// the declareMurderer function.

#### Episode 4

```js
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);
```

// The three suspects are defined.
// declareAllSuspects function changes suspectThree to 'Colonel Mustard' within the 
// function, and then returns the three suspects.
// const suspects is assined the result of the declareAllSuspects function, and when logged 
// to console prints "the suspects are 'Miss Scarlet', 'Professor Plum', 'Colonel Mustard'
// the next console log prints 'suspect three is 'Mrs Peacock', as suspectThree was only 
// changed locally within the declareAllSuspects function.


#### Episode 5

```js
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
```

// const scenario is assigned information within an object.
// const changeWeapon is a function that takes the argument newWeapon and reassigns scenario.weapon 
// to newWeapon
// const declareWeapo is a function that returns 'the weapon is' followed by the value stored at
//  scenario.weapon

// changeWeapon function is called, which changes the scenario.weapon value from 'candle stick' to 
// 'revolver'.
// const verdict is the result of declareWeapon, when logged to console it prints 'Revolver', as 
// although const scenario itself cannot be reassigned, the values within the object can be changed.

#### Episode 6

```js
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
```

// murderer variable is assigned 'Colonel Mustard'.
// const changeMurderer function reassigns the murderer to 'Mr Green', and then the 
// function-within-a-function plotTwist reassigns the murderer to "Mrs White", plotTwist is then called.

// const declareMurderer returns 'the murderer is' followed by the value stored in murderer.

// changeMurderer function is called, changing the murderer into 'Mr.Green' and then into 'Mrs White".
// The murderer is Mrs White.

#### Episode 7

```js
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
```
// Professor Plum is assigned to murderer.
// changeMurderer reassigns Mr Green to murderer, this contains plotTwist - which 
// locally assigns 'Colonel Mustard' to murderer, and unexpectedOutcome - which globally assigns 
// 'Miss Scarlet' to murderer.
// unexpectedOutcome is called, and then plotTwist is called. The murderer is now 'Miss Scarlet', 
// but as it is assigned with let, outside of the function murderer is 'Professor Plum'.
// changeMurderer is called.
// verdict is assigned the result of declareMurderer.
// The murderer is 'Professor Plum'.

#### Episode 8

```js
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
```
const scenario is an object containing values.

// changeScenario function changes the value of scenario.murderer to 'Mrs Peacock'
// and scenario.room to 'dining room'. It then runs plotTwist which checks if scenario.room 
// is equal to 'dining room' and if so changes scenario.murderer to 'Colonel Mustard'. 
// It then runs unexpectedOutcome, where if scenario.murderer is equal to murderer it changes 
// scenario.weapon to 'Candle Stick'.

// changeScenario is called, which then calls plotTwist, which then calls unexpectedOutcome.
// const verdict is assigned 'Candle Stick', which is then logged to console.





#### Episode 9

```js
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
```

// murderer variable is assigned 'professor Plum'.
// The if statement reassigns the murderer, but only within the loop.
// verdict is the result of declareMurderer.
// The murderer is 'Professor Plum'