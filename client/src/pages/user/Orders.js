import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import UserMenu from '../../components/Layout/UserMenu';
import { useAuth } from '../../components/context/Auth';
import axios from 'axios';
import moment from 'moment';

const Orders = () => {
  const { auth, setAuth } = useAuth();
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const { data } = await axios.get('/api/v1/auth/orders');
      setOrders(data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <Layout title={'User-Orders'}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1 className='text-center'>All Orders</h1>
            {orders.map((o, i) => {
              return(
               <div className='border-shadow'>
                 <table className='table table-bordered'>
                 <thead className='thead-light'>
                    <tr>
                      <th scope='col'>#</th>
                      <th scope='col'>Title</th>
                      <th scope='col'>Buyer</th>
                      <th scope='col'>Price</th>
                      <th scope='col'>Date</th>
                      <th scope='col'>Quantity</th>
                      <th scope='col'>Status</th>
                    </tr>
                 </thead>

                  <tbody>
                    <tr>
                        <th>{i + 1}</th>
                        <th>{o?.product.title}</th>
                        <th>{o?.user.name}</th>
                        <th>{o?.product.price}</th>
                        <th>{moment(o?.createdAt).fromNow()}</th>
                        <th>{o?.quantity}</th>
                        <th>{o?.payment.success ? "Success" : "Failed"}</th>

                    </tr>
                  </tbody>
                 </table>
                 <div className='container'>
                    {o?.product.map((p, i) => {
                      return(
                        <div key={i} className='row'>
                          <div className='col-md-4'>
                            <img src={p?.product.images[0].url} alt={p?.product.title} style={{width: '100px', height: 'auto'}}/>
                          </div>
                          <div className='col-md-8'>
                            <h5>{p?.product.title}</h5>
                            <p>{p?.product.description}</p>
                            <p>{p?.product.price}</p>
                            <p>{p?.product.category}</p>
                            <p>{p?.product.subs}</p>
                          </div>
                        </div>
                      )


                    }
                    )}
                 </div>
               </div>
            )})}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
