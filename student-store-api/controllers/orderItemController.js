const orderItemModel = require("../models/orderItem")

const getAllOrderItems = async (req, res) => {
try {
    const orderItems = await orderItemModel.getAllOrderItems();
    res.status(200).json(orderItems);
} catch (error) {
    res.status(400).json({ error: error.message});
}
}

const getOrderItemByID = async (req, res) => {
try {
    const orderItem = await orderModel.getOrderItemByID(req.params.id);
    if (orderItem) {
    res.status(200).json(orderItem);
    } else {
    res.status(404).json({ error: "Order Item not found" });
    }
} catch (error) {
    res.status(400).json({ error: error.message });
}
};

//Function to create a new car
const createOrderItem = async (req, res) => {
try {
    const newOrderItem = await orderModel.createOrderItem(req.body);
    res.status(201).json(newOrderItem);
} catch (error) {
    res.status(400).json({ error: error.message });
}
};

//Function to update a car
const updateOrderItem = async (req, res) => {
try {
    const updatedOrderItem = await orderItemModel.updateOrderItem(req.params.id, req.body);
    if (updatedOrderItem) {
    res.status(200).json(updatedOrderItem);
    } else {
    res.status(404).json({ error: "Order Item not found" });
    }
} catch (error) {
    res.status(400).json({ error: error.message });
}
};

//Function to delete a car
const deleteOrderItem = async (req, res) => {
try {
    const deletedOrder = await orderModel.deleteOrderItem(req.params.id);
    if (deletedOrderItem) {
    res.status(200).json(deletedOrderItem);
    } else {
    res.status(404).json({ error: "Order Item not found" });
    }
} catch (error) {
    res.status(400).json({ error: error.message });
}
};
module.exports = {
    getAllOrderItems,
    getOrderItemByID,
    createOrderItem,
    updateOrderItem,
    deleteOrderItem,
}