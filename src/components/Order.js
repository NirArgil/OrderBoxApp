import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import IconButton from '@mui/material/IconButton';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import EditIcon from '@mui/icons-material/Edit';
import "../App.scss"
import { Button } from '@mui/material';


const Order = ({ toggleOrder, firstName, lastName, date, completed, id, removeOrder, updateOrder }) => {
    const state = useSelector((state) => ({ ...state.orders }));

    const [isEditing, setIsEditing] = useState(false);
    const [editFirstName, setEditFirstName] = useState(firstName);
    const [editLastName, setEditLastName] = useState(lastName);
    const [editDate, setEditDate] = useState(date);

    const handleUpdate = (e) => {
        e.preventDefault();
        updateOrder(id, editFirstName, editLastName, editDate);
        setIsEditing(false);
    };

    function orderNum(id) {
        return state.orders.findIndex(order => order.id === id);
    }
    console.log(orderNum(id));

    return (
        <div>
            {isEditing ? (

                <form className="OrderEditForm" onSubmit={handleUpdate}>
                    <br />
                    <input
                        type="text"
                        name="firstName"
                        placeholder="שם פרטי"
                        value={editFirstName}
                        onChange={(e) => setEditFirstName(e.target.value)} />

                    <input
                        type="text"
                        name="lastName"
                        placeholder="שם משפחה"
                        value={editLastName}
                        onChange={(e) => setEditLastName(e.target.value)} />

                    <input
                        type="text"
                        name="date"
                        placeholder="תאריך"
                        value={editDate}
                        onChange={(e) => setEditDate(e.target.value)} />
                    <br />

                    <Button
                        type="submit"
                        variant="outlined"
                        className="SaveBtn"
                        sx={{ mt: 2, textTransform: 'none' }}>
                        עדכון פרטי הזמנה
                    </Button>
                </form>

            ) : (
                <li className="OrderTask">
                    <p><b>{(orderNum(id) + 1)} הזמנה</b></p> <br />
                    <p>פרטים</p>
                    <p>,שם פרטי: {firstName}</p>
                    <p>,שם משפחה: {lastName}</p>
                    <p>:תאריך {date} </p>
                    <p><b>?הזמנה בוצעה בהצלחה</b></p>
                    <span onClick={toggleOrder} className={completed ? "OrderCompleted" : null}>כן</span>

                </li>
            )}

            <div className="orderButtons">
                {isEditing ? (
                    null
                ) : (
                    <IconButton>
                        <EditIcon onClick={() => setIsEditing(true)}></EditIcon>
                    </IconButton>
                )}

                <IconButton>
                    <HighlightOffOutlinedIcon onClick={removeOrder}></HighlightOffOutlinedIcon>
                </IconButton>
            </div>
        </div>
    )
}

export default Order;
