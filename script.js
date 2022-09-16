const itemInput = document.getElementById('itemInput');
const addItemButton = document.getElementById('addItemButton');
const itemsList = document.getElementById('itemsList');

addItemButton.addEventListener('click', addNewItem);

function addNewItem() {
  //Create div
  const itemsListDiv = document.createElement('div');
  itemsListDiv.setAttribute('id', 'item');

  //Create checkbox
  const checkbox = document.createElement('button');
  checkbox.innerHTML = '<i id="strikeCheck" class="fa-sharp fa-solid fa-check"></i>';
  checkbox.setAttribute('id', 'checkbox');
  checkbox.addEventListener('click', crossItem);
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
  deleteBtn.addEventListener('click', deleteItem);

  itemsListDiv.appendChild(deleteBtn);
  itemInput.value = '';
  itemsList.appendChild(itemsListDiv);
};

function deleteItem(e) {
  const deleteBtn = e.target;
  const itemsListDiv = deleteBtn.parentElement;
  itemsList.removeChild(itemsListDiv);
}

// Fix e.target for each checkbox
function crossItem(e) {
  const checkbox = e.target;
  if (e.target === checkbox) {
    const strikethrough = document.getElementById("newItem");
    strikethrough.style.setProperty("text-decoration", "line-through");
    strikethrough.style.setProperty("color", "gray");
    const strikeCheck = document.getElementById("strikeCheck");
    strikeCheck.style.setProperty("color", "gray");
  }
};


