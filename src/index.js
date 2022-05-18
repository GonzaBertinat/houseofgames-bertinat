import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './store/CartContext';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBqDQEjXVX-h92_bOEiB77WSkcZ1_8TAjs",
  authDomain: "houseofgames-bertinat.firebaseapp.com",
  projectId: "houseofgames-bertinat",
  storageBucket: "houseofgames-bertinat.appspot.com",
  messagingSenderId: "297769063290",
  appId: "1:297769063290:web:79b8e4dc066a92a641bcc3"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
