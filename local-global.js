
let b = 26;
if (true) {
    b = 9; // This modifies the outer variable S
}

console.log(b); // Now it will show 9
console.log('datta');

const user = {
        names: 'alish',
        age:12,
        welcomeMessage: function() {
           console.log( `welome ${this.names} to our company`);
        }
}

console.log(this);
user.welcomeMessage();
user['names'] = 'sadia';
user.welcomeMessage();

const chai = () => {
    
    let name = 'bilal';
    console.log(name);

}
chai();


// puure arrow function

const pure_arrow = (num1,num2)=>{
    return num1+num2;
}
console.log(pure_arrow(12,3));

// another way to do this means implicit return


// const pure_arrow2 = (num1,num2)=>  num1+num2;
const pure_arrow2 = (num1,num2)=>  (num1+num2); //in round bracket we dont need to write return 
const pure_arrow3 = (num1,num2)=>  ({user_data:"helo"}); //return the object 

console.log(pure_arrow(12,3));

let array_forEach = [1,4,65,6];
// array_forEach.forEach(function(){})
// array_forEach.forEach(()=>{})
// array_forEach.forEach(()=>(num1))

( () => {
    console.log('i am named iifi')
})();

( (any)=>(console.log(`numbber is ${any}`))
)(12);