'use strict';
alert('hello');
var user = prompt('Hi there, whats your name?');

while (!user) { user = prompt('really whats your name we will need it later') };

alert(' hello ' +  user +  ' and welcome to my page, im going to ask you a questions about me, Are you excited?');
console.log('user',user);

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

alert(`my dav drink ${avDrink} and my generation${age} and likeable novels ${novels} and lisence${myLisence}and work${myWork} `);

let randomNumber =prompt("guess a random number between 1 and 100") 
console.log('GUESSING A RANDOM NUMBER'+randomNumber);
for(let i = 0 ; i <= 200 ; ++i){
    if(randomNumber>=1 && randomNumber<=10){
        randomNumber=Number(randomNumber);
        console.log('it is low' +randomNumber);   
    }
        console.log('updated all the time' , i);

         if(randomNumber<=90 && randomNumber<=100) {
            randomNumber=Number(randomNumber);
            console.log('it is high'+randomNumber);


        }
        else if(randomNumber===50) {
            randomNumber=Number(randomNumber);
          alert('thats correct');
        }
        let i=0;
        while(i<=4){

            console.log('updated all the time' , i);

            i++;

        }

        let cars=prompt('what cars you like ?').toLocaleUpperCase
        let cararr=['skode','seat','audi'];
for(let i=0;i<cararr.length;i++){
    for(let j=0;j<=6;j++){
        if(i===cararr){
        console.log('guessed correct' , cararr);
        else 
        console.log('you finished 6 attempts');
    }
}


