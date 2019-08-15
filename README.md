# Bamazon


## About This App:

I've created an Amazon-like storefront using MySQL. The app will take in orders from customers and deplete stock from the store's inventory. If there isn't enough inventory to complete the orderk you'll get a message saying this.

****

## Built with Visual Studio Code

## Technologies used to create this app:
- JavaScript
- Node.js
- Node.js packages: 
    -Inquirer.js
    -mysql
    -CLI Table
-MySQL

****

## This app can be found on my GitHub page
- https://github.com/erikh24/Bamazon.git
- https://erikh24.github.io/Bamazon/

****

## I was the sole creator of this project.
 
****

# Instructions:

 To run this app, you first need to open the terminal and navigate to the folder where the app is located. Once there, you can do any of the following.

## To seach for available products:
Enter **node bamazonCustomer.js** in the terminal.

![image](/images/table-of-products.png)

    
Then, just enter the product number that you want to purchase and press enter. Then enter the quantity that you want to order.

![image](/images/enter-product-id-and-qty.png)


Once you press enter, your order will be complete if there is enough stock on hand to fill your order. The screen will display the total you paid.

![image](/images/completed-order.png)


If there wasn't enough stock on hand to complete your order, you will see a message similar to the image below.

![image](/images/not-enough-stock.png)

****