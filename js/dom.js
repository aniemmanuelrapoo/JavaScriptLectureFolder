//single element selector
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

//multipul element selector
// console.log(document.querySelectorAll('.item'));

//looping throught list item
const items = document.querySelectorAll('.item')

items.forEach((item) => {
  console.log(item);
})