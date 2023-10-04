import React, { Component } from 'react';
import { Box } from '@mui/material';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Account from './components/account/account';
import DataProvider from './context/DataProvider';
import Order from './components/orders/orders';
import EditOrder from './components/orders/editOrder';
class App extends Component {
  render() {
    return (
      <DataProvider>
        <BrowserRouter>
          <Header/>
          <Box style={{marginTop: 54}}>
          </Box>  
          <Routes>
            <Route path='/' element={<Order/>} />
            <Route path='/account/:deliveryId' element={<Account/>}/>
            <Route path='/editOrder/:orderId/:index' element={<EditOrder/>}/>
          </Routes>
        </BrowserRouter>
      
      </DataProvider>
    );
  }
}

export default App;
