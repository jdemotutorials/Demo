# Sample Python file for testing references

def calculate_total(price, quantity):
    total = price * quantity
    return total


def display_receipt(total):
    print("Receipt")
    print("Total:", total)


# First order
item_price = 100
item_quantity = 2

order_total = calculate_total(item_price, item_quantity)
display_receipt(order_total)


# Second order
item_price = 250
item_quantity = 3

order_total = calculate_total(item_price, item_quantity)
display_receipt(order_total)


# Third order
item_price = 150
item_quantity = 4

order_total = calculate_total(item_price, item_quantity)
display_receipt(order_total)