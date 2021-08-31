let productList = ["Iphone 11", "Iphone X", "Iphone 8", "Iphone XS", "Iphone 8 plus"];
function display() {
	let content = "";
	for (let i = 0; i < productList.length; i++) {
		content += `
    <tr>
    <td>${productList[i]}</td>
    <td><button onclick="edit(${i})">Edit</button></td>
    <td><button onclick="remove(${i})">Delete</button></td>
  </tr>
    `;
	}
	document.getElementById("products").innerHTML = content;
}
display();

function add() {
	let newValue = document.getElementById("newP").value;
	productList.push(newValue);
	display();
}

function remove(e) {
	productList.splice(e, 1);
	display();
}

function edit(e) {
	let newValue = prompt("Moi ban nhap vao ten moi", productList[e]);
	productList[e] = newValue;
	display();
}
