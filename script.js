//selectors
const itemInput = document.getElementById('itemInput');
const addItemButton = document.getElementById('addItemButton');
const itemsList = document.getElementById('itemsList');
//const deleteBtn = document.getElementById('deleteBtn')

//eventListeners
addItemButton.addEventListener('click', addNewItem);
//deleteBtn.addEventListener('click', deleteItem);
//checkbox.addEventListener('click', crossItem);

//functons
function addNewItem(event) {
  event.preventDefault();

  //Create div
  const itemsListDiv = document.createElement('div');
  itemsListDiv.setAttribute('id', 'item');

  //Create checkbox
  const checkbox = document.createElement('button');
  checkbox.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
  checkbox.setAttribute('id', 'checkbox');
  itemsListDiv.appendChild(checkbox);
  //Create li
  const newItem = document.createElement('li');
  newItem.innerText = itemInput.value;
  newItem.setAttribute('id', 'newItem');
  itemsListDiv.appendChild(newItem);
  //Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  deleteBtn.setAttribute('id', 'deleteBtn');
  itemsListDiv.appendChild(deleteBtn);

  itemInput.value = '';

  itemsList.appendChild(itemsListDiv);
};

//Delete item once deleteBtn is clicked
//Cross item's text once checkbox is clicked
