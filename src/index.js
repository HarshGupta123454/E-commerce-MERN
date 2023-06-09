import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvidor } from "./context/Productcontext"
import { Filterappcontext } from './context/Filtercontext';
import { ToastContainer } from 'react-toastify';
import { Loginappcontext } from './context/Logincontext';
import { CartAppContext } from './context/Cartcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Loginappcontext>
      <AppProvidor>
        <Filterappcontext>
          <CartAppContext>
            <App />
          </CartAppContext>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            style={{ fontSize: "20px" }}
            theme="light" />
        </Filterappcontext>
      </AppProvidor>
    </Loginappcontext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
