
import React, { useState, useContext, useEffect } from 'react';
import { Button, Container, Paper, TextField, Typography, styled } from '@mui/material';
import { DataContext } from '../../context/DataProvider';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editDelivery } from '../../redux/actions/deliveryAction';


const EditDeliveryContainer = styled(Container)`
  margin-top: 100px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const EditDeliveryHeader = styled(Typography)`
  margin-bottom: 20px;
`;

const EditDeliveryForm = styled('form')`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 20px;
  }
`;

const EditDeliveryInput = styled(TextField)`
  margin-bottom: 10px;
`;

const EditDeliveryButton = styled(Button)`
  align-self: flex-start;
`;
const Account = () => {
  const { deliveryId } = useParams();
    const { account } = useContext(DataContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deliveryData, setDeliveryData] = useState({
    id: account.id || '',
    firstname: account.firstname || '',
    lastname: account.lastname || '',
    dboyname: account.dboyname || '',
    email: account.email || '',
    password: account.password || '',
    phone: account.phone || '',
  });
  useEffect(() => {
    if(Array.isArray(account)&& deliveryId){
    const delivery = account.find((delivery) => delivery.id === deliveryId);

    if (delivery) {
      setDeliveryData(delivery);
    }
    }
  }, [deliveryId, account]);
  

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDeliveryData({
            ...deliveryData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          await dispatch(editDelivery(deliveryData,deliveryId));
          navigate('/');
        } catch (error) {
          console.error('Error editing delivery boy:', error);
        }
      };
  return (
    <EditDeliveryContainer>
      <Paper elevation={3}>
        <EditDeliveryHeader variant="h4" component="h2" gutterBottom>
          Edit Delivery Boy
        </EditDeliveryHeader>
        <EditDeliveryForm onSubmit={handleSubmit}>
        <EditDeliveryInput
            fullWidth
            label="Delivery Boy id"
            name="id"
            value={deliveryData.id}
            onChange={handleChange}
            placeholder="Enter Delivery id" 
          />
          <EditDeliveryInput
            fullWidth
            label="Firstname"
            name="firstname"
            value={deliveryData.firstname}
            onChange={handleChange}
            placeholder="Enter Firstname" 
          />
          <EditDeliveryInput
            fullWidth
            label="Lastname"
            name="lastname"
            value={deliveryData.lastname}
            onChange={handleChange}
            placeholder="Enter Lastname" 
          />
          <EditDeliveryInput
            fullWidth
            label="dboyname"
            name="dboyname"
            value={deliveryData.dboyname}
            onChange={handleChange}
            placeholder="Enter Delivery boy name" 
          />
          <EditDeliveryInput
            fullWidth
            label="Email"
            name="email"
            value={deliveryData.email}
            onChange={handleChange}
            placeholder="Enter Email" 
          />
          <EditDeliveryInput
            fullWidth
            label="Password"
            name="password"
            value={deliveryData.password}
            onChange={handleChange}
            placeholder="Enter Password" 
          />
          <EditDeliveryInput
            fullWidth
            label="Phone"
            name="phone"
            value={deliveryData.phone}
            onChange={handleChange}
            placeholder="Enter Phone no" 
          />
          
          <EditDeliveryButton type="submit" variant="contained" color="primary">
            Update
          </EditDeliveryButton>
        </EditDeliveryForm>
      </Paper>
    </EditDeliveryContainer>
  );
};

export default Account;