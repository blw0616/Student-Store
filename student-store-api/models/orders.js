const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient;

const getAllOrders = async () => {
    return prisma.orders.findMany();
};

const getOrderByID = async (id) => {
    return prisma.orders.findUnique({ where: {id: parseInt(id)} });
};

const createOrder = async (orderData) => {
    return prisma.orders.create({ data: orderData});
};

const updateOrder = async (id, orderData) => {
    return prisma.orders.update({
        where: {id: parseInt(id)},
        data: orderData,
    });
};

const deleteOrder = async (id) =>{
    return prisma.orders.delete({ where: {id: parseInt(id)} });
}

module.exports = {
    getAllOrders,
    getOrderByID,
    createOrder,
    updateOrder,
    deleteOrder,
}