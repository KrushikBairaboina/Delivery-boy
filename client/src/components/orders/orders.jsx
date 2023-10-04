import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Grid,Button } from '@mui/material';
import { getOrders } from '../../redux/actions/orderAction';
import { DataContext } from '../../context/DataProvider';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';


const Order = () => {
  const { orders } = useSelector((state) => state.getOrders);
  const dispatch = useDispatch();
  const { account } = useContext(DataContext);

  useEffect(() => {
    if (account) {
      dispatch(getOrders());
    }
  }, [dispatch, account]);

  const generateSNO = () => {
    let sno = 1;
    return function () {
      return sno++;
    };
  };

  const getSNO = generateSNO();


  const pendingOrders = orders.filter(order => order.status !== 'Delivered' && order.deliveryBoy === account.dboyname);
  const completedOrders = orders.filter(order => order.status === 'Delivered' && order.deliveryBoy === account.dboyname);

  return (
    <>
      {account ? (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={3}>
              
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={12}>
                      <strong>
                        Pending Orders ({pendingOrders.length} Orders)
                      </strong>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>SNO</strong></TableCell>
                    <TableCell><strong>ID</strong></TableCell>
                    <TableCell><strong>Image</strong></TableCell>
                    <TableCell><strong>Title</strong></TableCell>
                    <TableCell><strong>Quantity</strong></TableCell>
                    <TableCell><strong>Price</strong></TableCell>
                    <TableCell><strong>Description</strong></TableCell>
                    <TableCell><strong>Address</strong></TableCell>
                    <TableCell><strong>Status</strong></TableCell>
                    <TableCell><strong>Action</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pendingOrders.map((order) => (
                    order.products.map((product, index) => (
                      <TableRow key={order.id + index}>
                        <TableCell>{getSNO()}</TableCell>
                        <TableCell>{order.id}</TableCell>
                        <TableCell>
                          <img
                            src={product.url} 
                            alt={product.title.longTitle} 
                            style={{ maxWidth: '100px' }}
                          />
                        </TableCell>
                        <TableCell>{product.title.longTitle}</TableCell> 
                        <TableCell>{product.quantity}</TableCell> 
                        <TableCell>{product.price}</TableCell> 
                        <TableCell>{product.description}</TableCell> 
                        <TableCell>*************</TableCell>
                        <TableCell>{order.status}</TableCell>
                        <TableCell>
                    <Link to={`/editOrder/${order.id}/${index}`} style={{ textDecoration: 'none' }}>
                      <Button variant="contained" color="primary">
                        EDIT
                      </Button>
                    </Link>
                  </TableCell>
                      </TableRow>
                    ))
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3}>
              
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={12}>
                      <strong>
                        Completed Orders ({completedOrders.length} Orders)
                      </strong>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>SNO</strong></TableCell>
                    <TableCell><strong>ID</strong></TableCell>
                    <TableCell><strong>Image</strong></TableCell>
                    <TableCell><strong>Title</strong></TableCell>
                    <TableCell><strong>Quantity</strong></TableCell>
                    <TableCell><strong>Price</strong></TableCell>
                    <TableCell><strong>Description</strong></TableCell>
                    <TableCell><strong>Address</strong></TableCell>
                    <TableCell><strong>Status</strong></TableCell>
                    <TableCell><strong>Action</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {completedOrders.map((order) => (
                    order.products.map((product, index) => (
                      <TableRow key={order.id + index}>
                        <TableCell>{getSNO()}</TableCell>
                        <TableCell>{order.id}</TableCell>
                        <TableCell>
                          <img
                            src={product.url} 
                            alt={product.title.longTitle} 
                            style={{ maxWidth: '100px' }}
                          />
                        </TableCell>
                        <TableCell>{product.title.longTitle}</TableCell> 
                        <TableCell>{product.quantity}</TableCell> 
                        <TableCell>{product.price}</TableCell> 
                        <TableCell>{product.description}</TableCell>
                        <TableCell>*************</TableCell>
                        <TableCell>{order.status}</TableCell>
                        <TableCell>
                      <Link to={`/editOrder/${order.id}/${index}`} style={{ textDecoration: 'none' }}>
                      <Button variant="contained" color="primary">
                        EDIT
                      </Button>
                    </Link>
                  </TableCell>
                      </TableRow>
                    ))
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <Footer/>
      )}
    </>
  );
};

export default Order;
