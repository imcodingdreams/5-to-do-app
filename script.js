const itemInput = document.getElementById('itemInput');
const addItemButton = document.getElementById('addItemButton');
const itemsList = document.getElementById('itemsList');

addItemButton.addEventListener('click', addNewItem);

function addNewItem() {
if (itemInput.value === '') {
    alert ("Please, add a to do.");
  } else {
  const itemsListDiv = document.createElement('div');
  itemsListDiv.setAttribute('id', 'item');

  const checkbox = document.createElement('button');
  checkbox.innerHTML = '<i id="strikeCheck" class="fa-regular fa-square"></i>';
  checkbox.setAttribute('id', 'checkbox');
  checkbox.addEventListener('click', crossItem);
  itemsListDiv.appendChild(checkbox);

  const newItem = document.createElement('li');
  newItem.innerText = itemInput.value;
  newItem.setAttribute('id', 'newItem');
  itemsListDiv.appendChild(newItem);

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  deleteBtn.setAttribute('id', 'deleteBtn');
  deleteBtn.addEventListener('click', deleteItem);

  itemsListDiv.appendChild(deleteBtn);
  itemInput.value = '';
  itemsList.appendChild(itemsListDiv);
  }
};

function deleteItem(e) {
  const deleteBtn = e.target;
  const itemsListDiv = deleteBtn.parentElement;
  itemsList.removeChild(itemsListDiv);
};

function crossItem(e) {
  const checkbox = e.target;
  const parentDiv = checkbox.parentElement;
  const childElements = parentDiv.childNodes;
  if (e.target === checkbox) {
    const strikethrough = childElements[1];
    strikethrough.style.setProperty("text-decoration", "line-through");
    strikethrough.style.setProperty("color", "gray"); 
    checkbox.innerHTML = '<i class="fa-regular fa-square-check"></i>';
    checkbox.style.setProperty("color", "gray"); 
  }
};




