
let total = 0;
let products = [
                'Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];
for (let i = 0; i < products.length; i++) { 

let subArray = products[i].split(':');
let name = subArray[0];
let price = Number(subArray[1]);

total += price;
let itemText = `${name} - $${price}`;
console.log(itemText);
}

