'use strict';
/*function userName() {
    alert('hello');
    let user = prompt('Hi there, whats your name?');

    alert(' hello ' + user + ' and welcome to my page, im going to ask you a questions about me, Are you excited?');
    console.log('user', user);
}
userName();
function Drink() {
    let favDrink = prompt('do i like tea?');
    console.log('your fav drink' + favDrink);
    favDrink = favDrink.toLowerCase();
    if (favDrink == 'yes' || favDrink == 'y') {
        alert('awesome');

    }
    else if (favDrink == 'no' || favDrink == 'n') {
        alert('not expected');
    }
}
Drink();
function generation() {
    let age = prompt('am i 90s generation ?').toLowerCase();
    if (age == 'yes' || age == 'y') {
        alert('awesome');

    } else if (age == 'no' || age == 'n') {
        alert('thought you older');
    }
    console.log(' age' + age);
}
generation();
function nov() {
    let novels = prompt('do you i like novels ?');
    novels = novels.toLocaleUpperCase();
    console.log('novels liked' + novels);
    if (novels == 'yes' || novels == 'y') {
        alert('awesome');

    }
    else if (novels == 'no' || novels == 'n') {
        alert('not expected');
    }
}
nov();
function Lisence() {
    let myLisence = prompt('so you think i can drive ?');
    console.log('my lisence' + myLisence);
    myLisence = myLisence.toLowerCase();
    if (myLisence == 'yes' || myLisence == 'y') {
        alert('awesome');

    }
    else if (myLisence == 'no' || myLisence == 'n') {
        alert('you guessed wrong');
    }
}
Lisence();
function work() {
    let myWork = prompt('do i worked before ').toLocaleLowerCase;
    console.log('my work was' + myWork);
    switch (myWork) {
        case 'yes':
        case 'y':
            alert('good job');
            break;
        case 'no':
        case 'n':
            alert('no it isnt');
            break;
        default:
            alert('you tried in a good way');

    }
}
work();*/

function random() {
  let randomNumber = prompt('guess a random number between 1 and 100');
  for (let i = 0; i < 6; ++i) {

    if (randomNumber >= 1 && randomNumber <= 10) {
      randomNumber = Number(randomNumber);

      alert('it is low' + randomNumber);
    }


    if (randomNumber >= 90 && randomNumber <= 100) {
      randomNumber = Number(randomNumber);
      alert('it is high' + randomNumber);


    }
    else if (randomNumber === 50) {
      randomNumber = Number(randomNumber);
      alert('thats correct');
      break;
    }
  }
  alert('the right number is 50');
}
random();
function car() {

  let cars = prompt('what cars you like ?').toLocaleUpperCase;
  let cararr = ['skode', 'seat', 'audi'];
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j <= cararr.length; j++) {
      if (cararr[j] === cars) {
        alert('yes it is');
      }
      else {
        alert('not of my fav car');
        break;
      }
    }
  }
}
car();
