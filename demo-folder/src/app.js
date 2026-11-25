// app.js
import { TAX_RATE, calculateTotal } from "./calculator.js";
import { showReceipt } from "./display.js";

const itemPrice = 250;
const itemQuantity = 2;


const orderTotal = calculateTotal(itemPrice, itemQuantity);

console.log("Tax rate:", TAX_RATE);
console.log("Order total:", orderTotal.toFixed(2));

showReceipt(itemPrice, itemQuantity);
