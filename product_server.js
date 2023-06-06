const express = require('express');
const app = express();
const port = 3000;

let products = [
    {
      id: 1,
      name: 'iPhone 12',
      brand: 'Apple',
      price: 999.99,
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      brand: 'Samsung',
      price: 899.99,
      category: 'Electronics'
    },
    {
      id: 3,
      name: 'AirPods Pro',
      brand: 'Apple',
      price: 249.99,
      category: 'Electronics'
    },
    {
      id: 4,
      name: 'Nike Air Max',
      brand: 'Nike',
      price: 129.99,
      category: 'Footwear'
    },
    {
      id: 5,
      name: 'Sony PlayStation 5',
      brand: 'Sony',
      price: 499.99,
      category: 'Gaming'
    }
  ];


// GET "/products/4/Samsung"


// query of maxPrice maybe***
app.get("/products", (req, res) => {
    // if no maxPrice send all products
    console.log(req.query)
    const limit = req.query.limit;
    if (req.query.maxPrice) {
        // filter out the ones that are too expensive
        let cheaperProducts = products.filter((product) => {
            // if we want to put the product in the new array, just return true! :)
            if (product.price < req.query.maxPrice) {
                return true
            }
        });
        let finalArray = cheaperProducts;
        if (limit) {
            finalArray = cheaperProducts.slice(0, limit)
        }
        res.send(finalArray);
    } else {

        let finalArray = products;
        if (limit) {
            finalArray = products.slice(0, limit)
        }
        res.send(finalArray);
    }
    // IF YES - send only products with lower price
});

app.get('/products/:id', (req, res) => {
    let myProduct = products.find((product) => {
        if (product.id == req.params.id) {
            return true
        }
    })
    console.log(myProduct)
    res.send(myProduct)
})

app.get('/products/:id/:brand', (req, res) => {
    products.forEach((product) => {
        if (product.id == req.params.id) {
            if (product.brand === req.params.brand) {
                res.send("Matching brands!")
            } else {
                res.send("No Match!")
            }
        }
    })
})




app.listen(port,() => {
    console.log('listening on port' , port);
});