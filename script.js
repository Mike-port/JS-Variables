const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
// totalBox.textContent = '';
let products = [
                'Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];
for (let i = 0; i < products.length; i++) { // number 2
  // number 3
let subArray = products[i].split(':');
let name = subArray[0];

let price = Number(subArray[1]);

  // number 4
total += price;

  // number 5

  let itemText = `${name} - $${price}`;

  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  console.log(itemText);
}

