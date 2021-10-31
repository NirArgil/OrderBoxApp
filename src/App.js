import { useSelector, useDispatch } from 'react-redux';
import './App.scss';
import Navbar from './components/Navbar';
import OrdersList from './components/OrdersList';
import OrderInput from './components/OrderInput';
import { addOrder } from './redux/action';

//RTL
import RTL from './components/RTL';

import Grid from '@mui/material/Grid';


function App() {
  let dispatch = useDispatch();

  const create = (newOrder) => {
    dispatch(addOrder(newOrder));
  };

  return (
    <div className="App">
      <Navbar />

      <Grid container spacing={1}>

        <Grid className="Input" item xs={12} md={8}>
          <RTL>
            <OrderInput createOrder={create} />
          </RTL>
        </Grid>

        <Grid item xs={12} md={4}>
          <OrdersList />
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
