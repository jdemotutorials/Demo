// calculator.js (Class version)
export class OrderCalculator {
  constructor(taxRate = 0.12) {
    this.taxRate = taxRate;
  }

  calculateTotal(price, quantity) {
    const subtotal = price * quantity;
    const tax = subtotal * this.taxRate;
    return subtotal + tax;
  }

  calculateDiscount(total, discountRate) {
    return total * discountRate;
  }
}
