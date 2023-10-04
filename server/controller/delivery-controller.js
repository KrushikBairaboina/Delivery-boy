import Delivery from "../model/delivery-schema.js";


export const deliverySignUp = async (request, response) => {
    try {
        const exist = await Delivery.findOne({ dboyname: request.body.dboyname });
        if(exist) {
            return response.status(401).json({ message: 'Dboy  already exist'});
        }
        const delivery = request.body;
        const newDelivery = new Delivery(delivery);
        await newDelivery.save();
        response.status(200).json({ message: delivery });
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}
export const deliveryLogIn = async (request, response) => {
    try {
        const dboyname = request.body.dboyname;
        const password = request.body.password;
        let delivery = await Delivery.findOne({ dboyname: dboyname, password:password });
        if(delivery) {
            return response.status(200).json({data:delivery});
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.json('Error: ', error.message);        
    }
}
export const editDelivery = async (request, response) => {
    try {
      const deliveryId = request.params.id; 
      
      const existingDelivery = await Delivery.findOne({ id: deliveryId });
      
      if (!existingDelivery) {
        return response.status(404).json({ message: 'Delivery boy not found' });
      }
  
      const editedDeliveryData = request.body;

      Object.assign(existingDelivery, editedDeliveryData);
  
      await existingDelivery.save();
  
      response.status(200).json({ message: 'Delivery boy data updated successfully', delivery: existingDelivery });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }
  export const getDelivery = async (request, response) => {
    try {
        const delivery = await Delivery.find({});

        response.status(200).json(delivery);
    }catch (error) {
        response.status(500).json({message: error.message});
    }
}