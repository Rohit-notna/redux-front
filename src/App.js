import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import { Provider } from 'react-redux';
import store from '../src/Store/Store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="Cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
