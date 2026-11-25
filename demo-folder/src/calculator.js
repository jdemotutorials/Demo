// calculator.js
// Functions and variables in this file are referenced by other files.
// Test Comments: The functions and variables in this file are imported and used in other files, such as app.js and display.js. This allows for modular code organization and reusability of the functions across different parts of the application.

export const TAX_RATE = 0.12;

export function calculateTotal(price, quantity) {
    const subtotal = price * quantity;
    const tax = subtotal * TAX_RATE;
    return subtotal + tax;
}

export function calculateDiscount(total, discountRate) {
    return total * discountRate;
}
