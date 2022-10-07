const itemInput = document.getElementById('itemInput');
const addItemButton = document.getElementById('addItemButton');
const itemsList = document.getElementById('itemsList');

addItemButton.addEventListener('click', addNewItem);

function addNewItem() {
  if (itemInput.value === '') {
      alert ("Please, add a to do.");
  } else {
  const itemsListDiv = document.createElement('div');
  itemsListDiv.setAttribute('class', 'item');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('class', 'checkbox');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.addEventListener('click', crossItem);
  itemsListDiv.appendChild(checkbox);

  const newItem = document.createElement('li');
  newItem.innerText = itemInput.value;
  newItem.setAttribute('class', 'new-item');
  itemsListDiv.appendChild(newItem);

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  deleteBtn.setAttribute('class', 'delete-btn');
  deleteBtn.addEventListener('click', function(e) {
    deleteItem(e, checkbox);
  });

  itemsListDiv.appendChild(deleteBtn);
  itemInput.value = '';
  itemsList.appendChild(itemsListDiv);
  }
};

function crossItem(e) {
  const checkbox = e.target;
  const parentDiv = checkbox.parentElement;
  const childElements = parentDiv.childNodes;
  const strikethrough = childElements[1];
  if (checkbox.checked) {
    strikethrough.style.setProperty("text-decoration", "line-through")
    strikethrough.style.setProperty("color", "gray");
  } else {
    strikethrough.style.setProperty("text-decoration", "none");
    strikethrough.style.setProperty("color", "black");
  }
};

function deleteItem(e, checkboxElement) {
  const deleteBtn = e.target;
  const itemsListDiv = deleteBtn.parentElement;
  if (checkboxElement.checked) {
    itemsList.removeChild(itemsListDiv);
  }
};
