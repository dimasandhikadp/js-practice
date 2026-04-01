// Data yang digunakan
const cart = [
  { name: "Mouse", price: 50000, quantity: 2 },
  { name: "Keyboard", price: 150000, quantity: 1 },
  { name: "Monitor", price: 1200000, quantity: 1 },
  { name: "Mousepad", price: 30000, quantity: 3 }
];

function showCartItems(cart){
  for (let i = 0; i < cart.length; i++) {
    const subtotal = cart[i].price * cart[i].quantity;
    console.log(`${cart[i].name} = ${subtotal}`);
  }
}

function getTotalPrice(cart){
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
  }
  return totalPrice;
}

function getTotalItems(cart){
  let totalItem = 0;
  for (let i = 0; i < cart.length; i++) {
    totalItem += cart[i].quantity;
  }
  return totalItem;
}

function getMostExpensiveItem(cart) {
  let mostExpensiveItem = cart[0];
  for (let i = 0; i < cart.length; i++) {
    if (mostExpensiveItem.price < cart[i].price) {
      mostExpensiveItem = cart[i];
    }
  }
  return mostExpensiveItem.name;
}

console.log("=== Shopping Cart ===\n");

showCartItems(cart);

console.log("\nTotal Belanja:", getTotalPrice(cart));
console.log("Total Item:", getTotalItems(cart));
console.log("Barang Termahal:", getMostExpensiveItem(cart));