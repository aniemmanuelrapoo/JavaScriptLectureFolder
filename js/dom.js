//single element selector
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

//multipul element selector
// console.log(document.querySelectorAll('.item'));

// //looping throught list item
// const items = document.querySelectorAll('.item')

// items.forEach((item) => {
//   console.log(item);
// })

//Manipulating the DOM
const ul = document.querySelector('.items');
// ul.remove()
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'hello'
ul.children[1].innerText = 'rapoo'
ul.lastElementChild.innerHTML = '<h4>Hello</h4>'

const btn = document.querySelector('.btn')
btn.style.background = 'red'