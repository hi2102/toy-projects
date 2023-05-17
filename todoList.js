
const title = document.getElementById('title');
const list = document.getElementById('list');
const addBtn = document.getElementById('add-btn');

list.addEventListener('click', activeItem)
addBtn.addEventListener('click', addTodo)

function activeItem(e) {
  if (e.target.nodeName === 'LI') {
    title.textContent = e.target.innerText;
    const li = e.target.parentNode.children;
    for(let i=0; i<li.length; i++){
      li[i].removeAttribute('class');
    }
  }
    e.target.setAttribute('class', 'active')
}

function addTodo() {
  const userInput = document.getElementById('user-input');
  list.innerHTML += `<li>${userInput.value}</li>`
  userInput.value = '';
}
