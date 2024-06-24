import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    property: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'properties'
    },

    status: {
        type: String,
        required: true,
    },



}, {
    timestamps: true,
})

const Orders = mongoose.model('orders', orderSchema)

export default Orders