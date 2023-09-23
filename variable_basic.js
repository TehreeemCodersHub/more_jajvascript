// console.log('data');
// let value = '12';
// console.log(typeof(Number(12)));
// console.log(typeof(value));

let score = 'data';

console.log(typeof(score));

let int_number = Number(score);
console.log(typeof(int_number));

num1 = num2 = num3 = 2+2;
console.log(num1);
console.log(null > 0);

// jitny b data kis trha sa memory ma store hty h kis trha sa access hty h 
// ppremitve data types ==> call by value 
// non premitive cal by refrence => jinkka refrencec memory ma allocarte ky jaa sktta h 


let data = null;
let tehreem;
console.log(data);
console.log(tehreem);

const id = Symbol('12')
const dataId = Symbol('12')
console.log(id === dataId);


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// STACK AND HEAP

// stack for premitive type------> whenever jo b variable decalre kraya h deaclare a variable hamy uski copy milti h 
// or jub b memoory heap ma define hti h uska hamy refrence milta h  jo b change kery h original ma change kary gy  

let youtubeChannel  = 'tehreem channal';
let anotherName = youtubeChannel;
anotherName = 'hassanChannal';

// console.log(anotherName);
// console.log(youtubeChannel);


let userData = {
    name: 'tehreem',
    age: 16
}
userData_2 =  userData;
userData_2.name = 'hassan';

console.log(userData_2);
console.log(userData);

const names = 'tehreem';
console.log(names.charAt('h'));
console.log(names.__proto__);

const game_name = new String('alisha');
const new_game = game_name.substring(0,4);
const data_slice = game_name.slice(0,-1);
console.log('am slice: '+ data_slice);
console.log(new_game);
console.log(game_name[0]);
console.log(game_name.__proto__);
console.log(game_name.toUpperCase()); // accessing the prototype method


const url = 'http://alisha@20googol.com';
console.log(url.replace('@20', '-'));
console.log(url.includes('@20'));
console.log(url.split('@'));

let text = 'tehreem websitte';
let result = text.link('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_str_link');
console.log(result);

let nummber = 123;
console.log(typeof(nummber));

const number = new Number(12122);
console.log((number).toString().length);
console.log(number.toFixed(2));
console.log(number.toLocaleString());
console.log(Math.floor((Math.random()*10)+1));


const date = new Date()
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleTimeString());
console.log(date.getTime());

const custom_date = new Date(2023,0,12,5,3);
console.log(custom_date.getTime()); //if i want to compare the time between two things then we can get the time 
console.log(custom_date);

const check_quiz = Date.now()
console.log(check_quiz);
console.log(Math.floor(check_quiz/1000));


check_quiz.toLocaleString('default', {
    month:'long'
})
console.log(check_quiz);


// DEEP COPY DO NOT SHARE THE SAME REFRRENCE 
// SHALLOW COPY SHARE THE SASME refrence aarray do shallow copy

const data_array = new Array(1,2,4);
console.log(data_array);
data_array.push(9);
console.log("after push", data_array);
data_array.shift(12);
console.log("after shift ", data_array);
console.log(data_array.includes(12));
console.log(data_array.indexOf(4));

const new_array = data_array.join();
console.log(`new array ${new_array}`);
console.log(`data_array ${data_array}`);
