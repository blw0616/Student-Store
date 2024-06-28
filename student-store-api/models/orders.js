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
// const addOrderItems = async (orderId, orderItems) => {
//     return prisma.order.update({
//         where: { id: parseInt(orderId) },
//         data: {
//             order_items: {
//                 create: orderItems,
//             },
//         },
//         include: {
//             order_items: true, // Include associated order items
//         },
//     });
// };

const addOrderItems = async (orderId, orderItemss) => {
    const product = await prisma.product.findUnique({where: {id: parseInt(orderItemss.product_id)}})
    console.log("starting to make item")
    console.log("orderItemss: ", orderItemss)
    const orderItem = await prisma.orderItems.create({
        data: {
            order_id: parseInt(orderId),
            product_id: orderItemss.product_id,
            quantity: orderItemss.quantity,
            price: product.price
        }
    });
    console.log("orderItem: ", orderItemss)
    return orderItem;
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
    const { customer_id, total_price, status, order_items } = orderData;

    // Ensure order_items is an array before mapping
    const orderItemsToCreate = Array.isArray(order_items) ? order_items.map(item => ({
        product_id: item.productId,
        quantity: item.quantity,
        price: item.price,
    })) : [];

    return prisma.order.create({
        data: {
            customer_id,
            total_price,
            status,
            order_items: {
                create: orderItemsToCreate,
            },
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
