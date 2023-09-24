const get_parent =  document.querySelector('.parent');
// console.log(get_parent);
let get_data = get_parent.children.length;
console.log(get_data);

for (let index = 0; index < get_parent.children.length; index++) {
    console.log(get_parent.children[index].innerHTML);
    
}
get_parent.children[2].style.color =  'red';
const day_one = document.querySelector('.child');

console.log( day_one.parentElement); 
console.log( day_one.nextElementSibling);


const get_prent =  document.querySelector('.parent');

console.log( 'Child nodes: ' + get_prent.childNodes);



//  create the virtul element 
 
const color = ['blue', 'black', 'green'];
const text = ['alish', 'bilal black', 'hassan green']
 
function createElement(text, color) {
    const create_div = document.createElement('div');
    create_div.className = 'main';
    console.log(create_div);
    
    create_div.id= Math.round((Math.random()*10+1));
    create_div.setAttribute('title', 'genrated title');
    create_div.style.backgroundColor = 'red'; 
    create_div.style.padding = '12px';
    create_div.textContent='i am new div here';
    document.body.appendChild(create_div)
    
}


    createElement();
