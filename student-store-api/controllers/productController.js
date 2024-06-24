const productModel = require("../models/product")

const getAllProducts = async (req, res) => {
try {
    const products = await productModel.getAllProducts();
    res.status(200).json(products);
} catch (error) {
    res.status(400).json({ error: error.message});
}
}

const getProductByID = async (req, res) => {
try {
    const product = await productModel.getProductByID(req.params.id);
    if (product) {
    res.status(200).json(product);
    } else {
    res.status(404).json({ error: "Product not found" });
    }
} catch (error) {
    res.status(400).json({ error: error.message });
}
};

//Function to create a new car
const createProduct = async (req, res) => {
try {
    const newProduct = await productModel.createProduct(req.body);
    res.status(201).json(newProduct);
} catch (error) {
    res.status(400).json({ error: error.message });
}
};

//Function to update a car
const updateProduct = async (req, res) => {
try {
    const updatedProduct = await productModel.updateProduct(req.params.id, req.body);
    if (updatedProduct) {
    res.status(200).json(updatedProduct);
    } else {
    res.status(404).json({ error: "Car not found" });
    }
} catch (error) {
    res.status(400).json({ error: error.message });
}
};

//Function to delete a car
const deleteProduct = async (req, res) => {
try {
    const deletedProduct = await productModel.deleteProduct(req.params.id);
    if (deletedProduct) {
    res.status(200).json(deletedProduct);
    } else {
    res.status(404).json({ error: "Product not found" });
    }
} catch (error) {
    res.status(400).json({ error: error.message });
}
};

module.exports = {
    getAllProducts,
    getProductByID,
    createProduct,
    updateProduct,
    deleteProduct,
}