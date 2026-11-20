// calculator.js
// Functions and variables in this file are referenced by other files.

export const TAX_RATE = 0.12;

export function calculateTotal(price, quantity) {
    const subtotal = price * quantity;
    const tax = subtotal * TAX_RATE;
    return subtotal + tax;
}

export function calculateDiscount(total, discountRate) {
    return total * discountRate;
}
