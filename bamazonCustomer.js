var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "maseXLXL1!",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log("Greetings and welcome to Bamazon")
    start();
});

function start() {
    connection.query("SELECT * FROM products", function (err, response) {
        if (err) {
            throw err;
        }
        var table = new Table(
            {
                head: ["Product ID", "Product Name", "Department Name", "Price", "Quantity"],
                colWidths: [13, 35, 20, 12, 15],
            });

        for (var i = 0; i < response.length; i++) {
            table.push(
                [response[i].item_id, response[i].product_name, response[i].department_name, response[i].price, response[i].stock_quantity]
            );
        }
        console.log(table.toString());
        buySomething();
    });
}

function buySomething() {
    inquirer.prompt([
        {
            name: "choice",
            type: "number",
            message: "What product ID would you like to buy?"
        },
        {
            name: "qty",
            type: "number",
            message: "How many would you like to buy?",
        },
    ]).then(function (answer) {
        // console.log(answer);
        checkStock(answer);
    })
}

function checkStock(answer) {
    connection.query("SELECT * FROM products WHERE ?",
        {
            item_id: answer.choice
        },
        function (err, response) {
            if (err) {
                throw err;
            }
            if (response[0].stock_quantity < answer.qty) {
                // console.log("There are not enough available to complete your order.")
                connection.end(function (err) {
                    if (err) {
                        throw err;
                    }
                    console.log("There are not " + answer.qty + " of that item available so your order could not be completed. You will need to order a quantity of " + response[0].stock_quantity + " or less. Please try again.");
                });
            }
            else {
                // console.log("There are enough to buy")
                updateDBqty(answer, response);
            }
        }
    );
}

function updateDBqty(answer, response) {
    connection.query("UPDATE products SET ? WHERE ?", [
        {
            stock_quantity: response[0].stock_quantity - answer.qty
        },
        {
            item_id: answer.choice
        }
    ],
        function (err) {
            if (err) {
                throw err;
            }
            console.log("Your purchase is complete!")
            orderCost(answer, response);
        }
    )
}
function orderCost(answer, response) {

    console.log("You're total is: $" + answer.qty * response[0].price);
    connection.end();
}