import React, { useState } from 'react';

import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterMoment';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const OrderInput = ({ createOrder }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (date == '') {
      alert("Please fill the date input")
    } else {
      createOrder({ firstName, lastName, date });

      setFirstName("");
      setLastName("");
      setDate("");
    }
  };

  const handleChangeDate = (newValue) => {
    const customedDate = newValue._d.toLocaleString()
    setDate(customedDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>הזמנה חדשה</h1>
     
      <TextField
        label="שם משפחה"
        variant="outlined"
        type="text"
        required
        id="lastName"
        name="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        sx={{ ml: 7, mb: 7 }}
      />

      <TextField
        label="שם פרטי"
        variant="outlined"
        type="text"
        required
        id="firstName"
        name="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        sx={{ mb: 7 }} />

      <LocalizationProvider dateAdapter={DateAdapter}>
        <Stack spacing={3}>

          <div className="DesktopDatePicker">
            <DesktopDatePicker
              label="Desktop תאריך"
              InputAdornmentProps={{ position: "start" }}

              inputFormat="MM/dd/yyyy"
              value={date}
              onChange={handleChangeDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>

          <div className="MobileDatePicker">
            <MobileDatePicker
              label="Mobile תאריך"
              inputFormat="MM/dd/yyyy"
              value={date}
              onChange={handleChangeDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
        </Stack>
      </LocalizationProvider>

      <Button
        type="submit"
        variant="outlined"
        endIcon={<SendRoundedIcon />}

        sx={{ mt: 3, textTransform: 'none' }}>
        הוסף הזמנה
      </Button>
    </form>
  )
}


export default OrderInput;