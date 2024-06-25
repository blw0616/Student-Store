const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient;

const getAllOrderItems = async () => {
    return prisma.orderItems.findMany();
};

const getOrderItemByID = async (id) => {
    return prisma.orderItems.findUnique({ where: {id: parseInt(id)} });
};

const createOrderItem = async (orderItemData) => {
    return prisma.orderItems.create({ data: orderItemData});
};

const updateOrderItem = async (id, orderItemData) => {
    return prisma.orderItems.update({
        where: {id: parseInt(id)},
        data: orderItemData,
    });
};

const deleteOrderItem = async (id) =>{
    return prisma.orderItems.delete({ where: {id: parseInt(id)} });
}

module.exports = {
    getAllOrderItems,
    getOrderItemByID,
    createOrderItem,
    updateOrderItem,
    deleteOrderItem,
}