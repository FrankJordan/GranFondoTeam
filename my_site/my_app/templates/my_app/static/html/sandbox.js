/*// strings
console.log('hello, world');
let email='frank.jordan@a1.net';
console.log(email);

// string concat

let firstName = 'Frank';
let lastName = 'Jordan';

Name = firstName + ' ' + lastName;
console.log (Name);

// getting characters

console.log(Name[3])

// string length

console.log(Name.length);

// string methods

console.log(Name.toUpperCase())
let result=Name.toLowerCase()
console.log(result)
console.log(Name)

let index=email.indexOf('@');
console.log(index)

let result2=email.lastIndexOf('n');
console.log(result2)

let result3=email.slice(0,10);
console.log(result3)

let result4=email.substr(4,10);
console.log(result4)

let result5=email.replace('a', '€');
console.log(result5)

let radius=10;
const pi=3.14;

area=pi*radius**2;
console.log(area);

console.log(5 * (10-3)**2);

let likes=10;
likes/=31;
console.log(likes);

console.log(5/0);
let result10 = 'the blog has ' + likes + 'likes';
console.log(result10)


const title='Best reads of 2019'
const author='frank'
const likess = 10;

let res = `The blog called ${title} by ${author} has ${likess} likes`;
console.log(res);


let html=`
<h2>${title}</h2>`;
console.log(html);


let ninjas =['Frank', 'Ralf', 'Didi'];
console.log(ninjas[0]);

ninjas[1]='Ken'

console.log(ninjas[1]);

console.log(ninjas.length);

console.log(ninjas.join(';'));
console.log(ninjas.indexOf('Didi'))



for (let i=0; i<ninjas.length;i++){
console.log(`<div>${ninjas[i]}</div>`);
}
let i=5;

do
{
console.log(`<div>${ninjas[i]}</div>`);
i++;
} while (i<ninjas.length)



function greet () {
console.log ('hello there')
};

const speak = function(){

console.log('greet you')}

greet();
speak();*/


/*
const greet =() => 'hello world';

console.log(greet());


const myFunc = (callbackFunc) => {
let value = 50;
callbackFunc(value);
}

myFunc (value => {
console.log(value)
});

let name = ['Ralf', 'frank', 'Birgit', 'Felix','Luisa'];

const logPerson = (person, index) => {console.log(`${index} - hello ${person}`)};

name.forEach((person, index) =>{console.log(index,person)});
name.forEach(logPerson);*/


// object literals

/*const blogs = [
{title:'Running', likes:30},
{title:'Swimming', likes:35},
{title:'Cycling', likes:40},
{title:'XCSki', likes:3},
];
console.log(blogs);*/

/*let user = {
    name:'frank',
    age:30,
    email:'frank.jordan@a1.net',
    location: 'Scharnitz',
    blog: [
        {title:'Running', likes:30},
        {title:'Swimming', likes:35},
        {title:'Cycling', likes:40},
        {title:'XCSki', likes:3},
        ],
    login() {console.log ('user logged in')},
    logout:function() {console.log ('user logged out')},
    logBlogs(){
    this.blog.forEach(blog => {console.log(blog.title, blog.likes)})
    }
    };


user.logBlogs();
console.log(this);*/

// Math object

/*console.log(Math.PI);

console.log(Math.round(Math.random()*100))*/
/*
const para = document.querySelector('body > div:nth-child(2) > p:nth-child(2)');
console.log(para)*/

/*
const paras = document.querySelectorAll('p');
paras.forEach (para => {console.log(para)})
console.log(paras.length);


const title = document.getElementById('page-title');
console.log(title);

const errors = document.getElementsByClassName('error');
console.log(errors);*/
/*

const para= document.querySelector('p');
console.log(para.innerText);
para.innerText='Changed';
console.log(para.innerText);
para.color ='#123456'*/

/*
const paras = document.querySelectorAll('p');
paras.forEach (para => {console.log(para.innerText);
para.innerText += ' new text';
});
*/


//const content = document.querySelector('.content');
//body > div.content > p


//content.innerHTML +='<h2> THIS IS NEW </h2>';

/*
const names = ['Ralf', 'frank', 'Birgit', 'Felix','Luisa'];


names.forEach (name => {content.innerHTML += `<p>${name}</p>`});

console.log(content.innerHTML);

const div = document.querySelector('div');
//div.setAttribute('style', 'color:red');

div.style.margin = '50px';
div.style.color ='crimson';
div.style.fontSize ='60px';
div.style.margin='';*/

/*
const content = document.querySelector('div');
console.log(content.classList);
content.classList.remove('error');
content.classList.add('success');
console.log(content.classList);*/

/*
const paras = document.querySelectorAll('p');
console.log(paras);

paras.forEach (p => {
if (p.textContent.includes('error')){
p.classList.add('error');
}
if (p.textContent.includes('success')){
p.classList.add('success');
}


});
*/

/*
const article = document.querySelector('article');
*//*console.log(article.children)
console.log(Array.from(article.children));
*//*

Array.from(article.children).forEach(child=>
{
child.classList.add('article-element')
})*/
//
//const title = document.querySelector('h2');
//console.log(title.parentElement);
//console.log(title.parentElement.parentElement);
//console.log(title.previousElementSibling);

/*
const button = document.querySelector('button');
button.addEventListener('click', ()=> {console.log('you clicked me');
});*/

/*
const items = document.querySelectorAll('li');
console.log(items);
items.forEach(item => {item.addEventListener('click', e=> {
console.log('item clicked');
console.log(e.target);
e.target.style.textDecoration = 'line-through';
})});
*/

const ul = document.querySelector('ul');
const button = document.querySelector('button');

/*button.addEventListener('click', ()=> {
const li = document.createElement('li');
li.textContent='something new to do';
ul.prepend(li);
});*/

/*const items = document.querySelectorAll('li');

items.forEach (item => {
item.addEventListener('click', e => {
console.log('event in li');
e.stopPropagation();
e.target.remove();
});
});*/

/*
ul.addEventListener('click', e =>{
//console.log('event in ul');
console.log(e);
if(e.target.tagName === 'LI'){
e.target.remove();
}
})*/

/*
const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', e=>{
console.log(e);
});

const mouseMove = document.querySelector('.box');

mouseMove.addEventListener('mousemove', e => {
//console.log(e.offsetX, e.offsetY)
mouseMove.textContent = `x pos ${e.offsetX} y pos ${e.offsetY}`})

document.addEventListener('wheel', e => {
console.log(e.pageX, e.pageY);
})*/

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
// const username = document.querySelector('#username');
form.addEventListener('submit', e =>{
e.preventDefault();
//console.log(username.value);
const username = form.username.value;

if (usernamePattern.test(username)){
   feedback.textContent ='that username is valid';
} else   {

  feedback.textContent ='that username is invalid, must contain letters only and length between 6 and 12 characters';
}
});


// testing RegEx


//const username='frankjordan';
//const pattern = /^[a-z]{6,}$/

/*
let result = pattern.test(username);
console.log(result);
if (result) {
console.log('regex test passed');}
else
{console.log('regex failed');}
*/

/*
let result = username.search(pattern);
console.log(result);*/
form.username.addEventListener('keyup', e => {
// console.log(e.target.value, form.username.value);
if(usernamePattern.test(e.target.value)){
console.log('passed');
form.username.setAttribute('class','success');
} else{
console.log('failed');
form.username.setAttribute('class','error');
}
});