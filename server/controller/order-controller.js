import Orders from "../model/order-schema.js";

export const getOrders = async (request, response) => {
    try {
        const orders = await Orders.find({});

        response.status(200).json(orders);
    }catch (error) {
        response.status(500).json({message: error.message});
    }
}
export const editOrder = async (request, response) => {
    try {
      const orderId = request.params.id; 
      
      const existingOrder = await Orders.findOne({ id: orderId });
      
      if (!existingOrder) {
        return response.status(404).json({ message: 'Order not found' });
      }
  
      const editedOrderData = request.body;

      Object.assign(existingOrder, editedOrderData);
  
      await existingOrder.save();
  
      response.status(200).json({ message: 'Order updated successfully', order: existingOrder });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }