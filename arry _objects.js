const obj = {
    name: 'tehreem',
    studen: {
        eightClassStudent : {
            class: 'eightt',
            roll: 'four'
        }
    }
}

console.log(obj.studen.eightClassStudent.roll);
console.log(obj.name);

const mysumb = Symbol("tehreem_symbol")
const class_4 = {
    class:'fourth',
    name: 'bilal',
    admission_date : new Date,
    [mysumb]: "change_alisha_symbol"
}

const class_5 = {
    class:'five',
    name: 'Ali',
    admission_date : new Date
    
}
// now going to merge the object
// let merge_class = Object.assign({}, class_4,class_5)
let merge_class= {...class_4,...class_5};
console.log(merge_class);

// we have array of objects

let array_of_objects = [
    {
        name:'alishba',
        age: 12
    },
    {
        name :'sania',
        age: 12
    }
]

// can also used map here
console.log(array_of_objects[1].name);
const arry_object_keys = Object.entries(class_5);
console.log(arry_object_keys); 


console.log(class_4[mysumb]);
// Object.freeze(class_4);
class_4['name'] = 'hassan';
console.log(class_4);
class_4.greating = function() {
    console.log('Hello tehreem greating');
}

class_4.greatingTwo = function() {
    console.log(`Hello tehreem greating, ${this.name}`);
}


// when we want to refrence the same object we use this jn sa object ly rahy h 
// usmy kitni kitni or kya kya properties h for we take thsi

console.log(class_4.greating());
console.log(class_4.greatingTwo());
// koi b hum jub constructor sa bnaty h to wo sigleton object bnta h 


// object deststructring 


const object_destructure = {
    name: "DSA",
    cource_no: 12121223,
    cource_fee: 500000
}

console.log(object_destructure.cource_no);
// another syntax todo
const {name:fn ,cource_no: ci} = object_destructure;
console.log(fn,ci);


// const nav = ({company}) =>{

// }
// nav(company = 'helo')

