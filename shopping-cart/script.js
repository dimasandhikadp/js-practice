// Data yang digunakan
const cart = [
  { name: "Mouse", price: 50000, quantity: 2 },
  { name: "Keyboard", price: 150000, quantity: 1 },
  { name: "Monitor", price: 1200000, quantity: 1 },
  { name: "Mousepad", price: 30000, quantity: 3 }
];

function showCartItems(cart){
  for (let i = 0; i < cart.length; i++) {
    let subtotal = cart[i].price * cart[i].quantity;
    console.log(`${cart[i].name} = ${subtotal}`);
  }
}

function getTotalPrice(cart){
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price;
  }
  console.log(totalPrice);
}

function getTotalItem(cart){
  
}

showCartItems(cart);
getTotalPrice(cart);