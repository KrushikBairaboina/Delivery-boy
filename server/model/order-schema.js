import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    username: String,
    status: String,
    deliveryBoy: String,
    products: [
        {
            title: {
                shortTitle: String, 
                longTitle: String,  
            },
            quantity: Number,
            price: Number,
            description: String,
            url: String,
            detailUrl: String,
        }
    ]
});

const Orders = mongoose.model('orders', OrderSchema);

export default Orders;
