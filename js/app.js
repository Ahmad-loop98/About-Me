'use strict';
alert('hello');
let favDrink=prompt("do i like tea?");
console.log('your fav drink'+ favDrink);
favDrink =favDrink.toLowerCase();
if(favDrink=='yes'||favDrink=='y'){
    alert('awesome');

}
else if (favDrink=='no'||favDrink=='n'){
    alert('not expected'); 
}



let age=prompt("am i 90s generation ?").toLowerCase();
if(age=='yes'||age=='y'){
    alert('awesome');

}else if(age=="no"||age=='n'){
alert('thought you older');
}
console.log(' age'+ age);
let novels=prompt("do you i like novels ?");
novels=novels.toLocaleUpperCase();
console.log('novels liked'+ novels);
if(novels=='yes'||novels=='y'){
    alert('awesome');

}
else if (novels=='no'||novels=='n'){
    alert('not expected'); 
}

let myLisence=prompt("so you think i can drive ?");
console.log('my lisence'+ myLisence);
myLisence =myLisence.toLowerCase();
if(myLisence=='yes'||myLisence=='y'){
    alert('awesome');

}
else if (myLisence=='no'||myLisence=='n'){
    alert('you guessed wrong'); 
}
let myWork=prompt("do i worked before ").toLocaleLowerCase
console.log('my work was'+myWork);
switch(myWork){
    case'yes':
    case'y':
alert('good job');
break;
case'no':
case'n':
alert('no it isnt');
break;
default:
    alert('you tried in a good way');

}
let userName=prompt("whats your name?")
console.log('your name'+userName);
alert(`my dav drink ${avDrink} and my generation${age} and likeable novels ${novels} and lisence${myLisence}and work${myWork} `);
