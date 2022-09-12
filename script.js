button.addEventListener("click", addItems)
function addItems() {
  let newItem = document.getElementById("item-added").value;
  document.getElementById("item-added").value = ''; 
  return document.getElementById("new-item").innerText = newItem; 
}


let itemsList = [];