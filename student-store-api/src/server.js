const express = require('express');
const port = 3000;
const cors = require("cors");
const morgan = require("morgan")

const productRoutes = require("/Users/bailey.williams/Documents/FTLWork/Student-Store/student-store-api/routes/productRoutes")


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


app. listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
