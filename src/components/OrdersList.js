import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../App.scss'

import { completeOrder, removeOrder, updateOrder } from "../redux/action"
import Order from './Order';
import { List, ListItem } from '@mui/material';

const OrdersList = () => {
    const state = useSelector((state) => ({ ...state.orders }));
    let dispatch = useDispatch();

    const update = (id, updatedFirstName, updatedLastName, updatedDate) => {
        dispatch(updateOrder({ id, updatedFirstName, updatedLastName, updatedDate }));
    };

    return (
        <>
            <List>
                <div className="orderList">
                    <h3>רשימת הזמנות</h3>
                    <h4>{state.orders.length} :מספר הזמנות</h4>
                    {state.orders && state.orders.map((order) => {
                        return (
                            <div key={order.id} className="order">
                                <Order
                                    key={order.id}
                                    id={order.id}
                                    firstName={order.firstName}
                                    lastName={order.lastName}
                                    date={order.date}
                                    num={order.indexOf}

                                    completed={order.completed}
                                    toggleOrder={() => dispatch(completeOrder(order))}
                                    removeOrder={() => dispatch(removeOrder(order))}
                                    updateOrder={update}
                                />
                            </div>
                        )
                    })}
                </div>
            </List>
        </>
    )
}


export default OrdersList
