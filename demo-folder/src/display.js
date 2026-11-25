// display.js
import { calculateTotal, calculateDiscount } from "./calculator.js";

export function showReceipt(price, quantity) {
    const total = calculateTotal(price, quantity);
    const discount = calculateDiscount(total, 0.10);

    console.log("Total:", total.toFixed(2));
    console.log("Discount:", discount.toFixed(2));
}
