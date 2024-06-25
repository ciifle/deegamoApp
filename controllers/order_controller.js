import Orders from "../models/order_model.js";
import Property from "../models/property_model.js";

export const getOrders = async (req, res) => {
    try {
        const orders = await Orders.find().sort({ createdAt: -1 }).populate("user")
            .populate("property");
        res.status(200).json(orders)

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

export const getOrderById = async (req, res) => {
    try {
        const order = await Orders.findById(req.params.id).populate("user")
            .populate("property");
        res.status(200).json(order)

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}


export const getRecentOrders = async (req, res) => {
    try {
        const orders = await Orders.find().sort({ createdAt: -1 }).limit(30).populate("user")
            .populate("property");
        res.status(200).json(orders)

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}


export const getMyOrders = async (req, res) => {
    try {
        const orders = await Orders.find({ user: req.params.id }).populate("user")
            .populate("property");
        res.status(200).json(orders)

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}



export const cancelOrders = async (req, res) => {
    try {
        const order = await Orders.findById(req.params.id).populate("user")
        const { status} = req.body;


        if (order) {
            order.status = status;
            await order.save()
            res.status(200).json(order)
            
        }else{
            res.status(400).json({message:"Order Not found"})
        }

        
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}


export const addOrdersItems = async (req, res) => {
    try {
        const { user, property, status } = req.body;
        

        const ispropertyFounded = await Orders.findOne({property: property})

        if (ispropertyFounded) {
            res.status(400).json({message:"aleardy added"})
        }else{
            const order = await Orders.create({
                user,
                property,
                status
            })
    
            await order.save()
            res.status(201).json(order);
        }


    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}