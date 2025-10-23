// my grocery list items
let items = [
  { name: "Milk", price: 120 },
  { name: "Bread", price: 80 },
  { name: "Eggs", price: 200 }
];

// get elements
var itemInput = document.getElementById("itemInput");
var priceInput = document.getElementById("priceInput");
var addBtn = document.getElementById("addBtn");
var list = document.getElementById("groceryList");
var totalBtn = document.getElementById("totalBtn");
var totalDisplay = document.getElementById("totalDisplay");

// show the list
function showList() {
  list.innerHTML = "";
  for (var i = 0; i < items.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = items[i].name + " - ₦" + items[i].price + 
      " <button class='deleteBtn' onclick='removeItem(" + i + ")'>Delete</button>";
    list.appendChild(li);
  }
}

// add new item
addBtn.addEventListener("click", function() {
  var itemName = itemInput.value;
  var itemPrice = Number(priceInput.value);

  if (itemName != "" && !isNaN(itemPrice)) {
    items.push({ name: itemName, price: itemPrice });
    showList();
    itemInput.value = "";
    priceInput.value = "";
  } else {
    alert("please enter item name and price");
  }
});

// delete item
function removeItem(index) {
  items.splice(index, 1);
  showList();
}

// total price
totalBtn.addEventListener("click", function() {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  totalDisplay.innerText = "Total Price: ₦" + total;
});

// call it when page loads
showList();
