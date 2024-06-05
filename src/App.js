import { Provider } from 'react-redux';
import ShowProducts from './store/showProducts';
import store from './redux/store';
import './App.css';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import ShowCart from './store/showCart';
import Payment from './store/payment';
import Home from './store/home';
import Navigator from './store/navigator';


function App() {

  return (
    <div >
      <header>
       {/*  */}

        <BrowserRouter>
          <Provider store={store}>
            <Navigator />
            <Routes>
            <Route exact path="/" element={<Home />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/showCart" element={<ShowCart />} />
              <Route exact path="/showProducts" element={<ShowProducts />} />
              <Route exact path="/payment" element={<Payment />} />
              {/* <Route exact path="/showProducts/showCart" element={<ShowCart />}></Route> */}
            </Routes>
          </Provider>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
