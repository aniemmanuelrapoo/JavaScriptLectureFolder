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

// //Manipulating the DOM
// const ul = document.querySelector('.items');
// // ul.remove()
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'hello'
// ul.children[1].innerText = 'rapoo'
// ul.lastElementChild.innerHTML = '<h4>Hello</h4>'

// const btn = document.querySelector('.btn')
// btn.style.background = 'red'

// //events
// const btn = document.querySelector('.btn')

// btn.addEventListener('mouseout', (e) =>{
//   e.preventDefault()
//   document.querySelector('#my-form').style.background = '#ccc'
//   document.querySelector('body').classList.add('bg-dark');
//   document.querySelector('.items').lastElementChild.innerHTML = 'omo e dey'
// })


//pratical
const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)
function onSubmit(e){
  e.preventDefault()

  if(nameInput.value === '' || emailInput === ""){
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fleids'

    setTimeout(() => {
      msg.remove()
    }, 3000);
  }else{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
    // append child adds something to a element
    userList.appendChild(li);

    //clear the fields
    nameInput.value = '';
    emailInput.value = '';
  }
}