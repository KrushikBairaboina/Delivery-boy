import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  styled,
} from '@mui/material';
import { editOrder } from '../../redux/actions/orderAction';
const EditOrderContainer = styled(Container)`
  margin-top: 70px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const EditOrderHeader = styled(Typography)`
  margin-bottom: 20px;
`;

const EditOrderForm = styled('form')`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 10px;
  }
`;

const EditOrderInput = styled(TextField)`
  margin-bottom: 10px;
`;

const EditOrderButton = styled(Button)`
  align-self: flex-start;
`;

const EditOrder = () => {
  const { orderId, index } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    username: '',
    status: '',
    longTitle: '',
    
  });

  const { orders } = useSelector((state) => state.getOrders);

  useEffect(() => {
    const order = orders.find((order) => order.id === orderId);

    if (order && order.products[index]) {
      const { id, username, status} = order;
      const { longTitle } = order.products[index].title;
      setFormData({ id, username, status, longTitle});
    }
  }, [orderId, index, orders]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(editOrder(formData, orderId, index));
      navigate('/');
    } catch (error) {
      console.error('Error editing order:', error);
    }
  };

  return (
    <EditOrderContainer>
      <Paper elevation={3}>
        <EditOrderHeader variant="h4" component="h2" gutterBottom>
          Edit Order
        </EditOrderHeader>
        <EditOrderForm onSubmit={handleSubmit}>
        <InputLabel style={{ color: 'black' ,marginLeft:10,fontWeight: 'bold'}}>Id:</InputLabel>
          <EditOrderInput
            fullWidth
            name="id"
            value={formData.id}
            readOnly
          />
          <InputLabel style={{ color: 'black' ,marginLeft:10, fontWeight: 'bold'}}>Username:</InputLabel>
          <EditOrderInput
            fullWidth
          
            name="username"
            value={formData.username}
          />
          <InputLabel style={{ color: 'black' ,marginLeft:10,fontWeight: 'bold'}}>Title:</InputLabel>
          <EditOrderInput
            fullWidth
            name="longTitle"
            value={formData.longTitle}
          />
          <InputLabel style={{ color: 'black' ,marginLeft:10,fontWeight: 'bold'}}>Status:</InputLabel>
          <Select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <MenuItem value="Placed">Placed</MenuItem>
            <MenuItem value="Pickedup">Pickedup</MenuItem>
            <MenuItem value="Out for Delivery">Out for Delivery</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
          </Select>
          <EditOrderButton type="submit" variant="contained" color="primary">
            Update
          </EditOrderButton>
        </EditOrderForm>
      </Paper>
    </EditOrderContainer>
  );
};

export default EditOrder;
