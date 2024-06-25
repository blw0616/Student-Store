const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient;

const getAllOrders = async () => {
    return prisma.order.findMany();
};

const getOrderByID = async (id) => {
    return prisma.order.findUnique({
        where: { id: parseInt(id) },
        include: {
            order_items: true, // Include associated order items
        },
    });
};


const createOrder = async (orderData) => {
    return prisma.order.create({ data: orderData});
};

const updateOrder = async (id, orderData) => {
    return prisma.order.update({
        where: {id: parseInt(id)},
        data: orderData,
    });
};

const deleteOrder = async (id) =>{
    return prisma.order.delete({ where: {id: parseInt(id)} });
}

module.exports = {
    getAllOrders,
    getOrderByID,
    createOrder,
    updateOrder,
    deleteOrder,
}