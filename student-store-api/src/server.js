const express = require('express');
const port = 3000;
const cors = require("cors");
const morgan = require("morgan")

const productRoutes = require("../routes/productRoutes")
const orderRoutes = require("../routes/orderRoutes")
const orderItemRoutes = require("../routes/OrderItemRoutes")


//middleware
const app = express();
app.use(cors()); // Enable CORS middleware to handle cross-origin requests
app.use(morgan("dev"));
app.use(express.json()); //Enable the use of JSON data


app.get("/", (req, res) =>{
    res.send("Hello girl!")
})

//add products routes here
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/orderItems", orderItemRoutes);


app. listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
