import * as types from "./actionType.js";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    orders: [],
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_ORDER:

            const newOrder = {
                id: uuidv4(),
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                date: action.payload.date,
                completed: false
            };

            const addedOrders = [...state.orders, newOrder];
            return {
                ...state,
                orders: addedOrders,
            };

        case types.REMOVE_ORDER:
            const filterOrder = state.orders.filter((t) => t.id !== action.payload.id);
            return {
                ...state,
                orders: filterOrder,
            };

        case types.UPDATE_ORDER:
            const updatedOrders = state.orders.map((order) => {
                if (order.id === action.payload.id) {
                    return { ...order, firstName: action.payload.updatedFirstName, lastName: action.payload.updatedLastName, date: action.payload.updatedDate };
                }
                return order;
            });
            return {
                ...state,
                orders: updatedOrders,
            }
        case types.COMPLETE_ORDER:
            const toggleOrders = state.orders.map((t) =>
                t.id === action.payload.id ? { ...action.payload, completed: !action.payload.completed } : t);
            return {
                ...state,
                orders: toggleOrders,
            };
        default:
            return state;
    }
}

export default ordersReducer;