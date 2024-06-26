const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllOrders = async () => {
    return prisma.order.findMany({
        include: {
            order_items: true,
        },
    });
};

const getOrderByID = async (id) => {
    return prisma.order.findUnique({
        where: { id: parseInt(id) },
        include: {
            order_items: true, // Include associated order items
        },
    });
};

// Adding order items to an existing order
const addOrderItems = async (orderId, orderItems) => {
    return prisma.order.update({
        where: { id: parseInt(orderId) },
        data: {
            order_items: {
                create: orderItems,
            },
        },
        include: {
            order_items: true, // Include associated order items
        },
    });
};

const getOrderTotal = async (orderId) => {
    const order = await prisma.order.findUnique({
        where: { id: parseInt(orderId) },
        select: {
            total_price: true,
        },
    });
    return order ? order.total_price : null;
};

const createOrder = async (orderData) => {
    return prisma.order.create({
        data: {
            ...orderData,
            order_items: {
                create: orderData.order_items,
            },
        },
        include: {
            order_items: true, // Include associated order items
        },
    });
};

const updateOrder = async (id, orderData) => {
    return prisma.order.update({
        where: { id: parseInt(id) },
        data: orderData,
    });
};

const deleteOrder = async (id) => {
    return prisma.order.delete({
        where: { id: parseInt(id) },
    });
};

module.exports = {
    getAllOrders,
    getOrderByID,
    createOrder,
    updateOrder,
    addOrderItems,
    getOrderTotal,
    deleteOrder,
};
