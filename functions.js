function carDailyPrice( val1, val2, ...number) {
    return number ;
}
console.log(carDailyPrice(12,13,23,45,45,45));

// pasing object to the functtion

const user_obj_pass = {
    name: 'sudhanshu',
    email: 'tehreemsaleem@gmail.com'
}

function passObject(anyObject) {
    return `user object name is ${anyObject.name} and email is ${anyObject.email}`  //this is a keyword which refers to current context of execution in javascript
}
console.log(passObject(user_obj_pass));    //here we are passing an object as parameter and returning it's value using

// console.log(obj_return);


// local scop and global scope
