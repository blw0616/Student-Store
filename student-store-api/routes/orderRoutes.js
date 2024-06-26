const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/", orderController.getAllOrders);
router.get("/:order_id/total", orderController.getOrderTotal); 
router.get("/:id", orderController.getOrderByID);
router.post("/", orderController.createOrder);
router.post("/:id/items", orderController.addOrderItems);
router.put("/:id", orderController.updateOrder);
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
