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
let novels=prompt("do you like novels ?");
novels=novels.toLocaleUpperCase();
console.log('novels liked'+ novels);
let myName=prompt("what's my name?");
console.log('my name is'+ myName);
myName =myName.toLowerCase();

