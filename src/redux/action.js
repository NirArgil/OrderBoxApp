import * as types from "./actionType.js";

export const completeOrder = (order) => ({
    type: types.COMPLETE_ORDER,
    payload: order,
});

export const addOrder = (order) => ({
    type: types.ADD_ORDER,
    payload: order,
});

export const removeOrder = (order) => ({
    type: types.REMOVE_ORDER,
    payload: order,
});

export const updateOrder = (order) => ({
    type: types.UPDATE_ORDER,
    payload: order,
});