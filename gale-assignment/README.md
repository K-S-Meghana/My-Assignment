GALE Assignment

to build a responsive shopping cart page

Features:
1. List all products from the JSON(provided in `data.json`) in the cart page as per the design.
2. User should be able to remove the product entirely from the Cart using Delete Button.
3. User should be able to increment/decrement individual line item count in the cart and calculate the subtotal 
appropriately.
4. Gift item appears for which they are present in the JSON and only if the line item count is more than zero. 
There will be only one gift(with count 1) per line item.
5. Order summary should display the below
a. subtotal -> Total of all the items price in the cart
b. Total discount -> Applied only if the cart price increases more then the amount provided in the json 
and the respective discount percentage is applied to it)
c. Standard Shipping -> Applied based on the chosen "Pincode" from the "Delivery Availability" 
Section.
d. Checkout button will be enabled only if
i. The user has at least one line item in the cart
ii. The user has entered an valid pincode.
e. Continue Shopping is just a link currently pointing to nothing.
6. Delivery Availability section should display the data and tick marks based on the data available for the 
pincodes in the provided JSON. For any invalid pincode, the user should not be able to click on checkout.
7. The Discount Tag notification appears only if there is any discount provided in the JSON. In case there is no 
discount provided, the notification should not be shown and the total discount will be always 0 in the Order 
Summary Section.
8. The header bar displays icon and links. These have no functionalities associated with them.
9. The footer also provides links that have no functionalities.
10. The cart data should be persisted in the browser so that the user lands on the same state when they reload 
the page
