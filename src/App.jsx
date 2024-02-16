import React, { useState,useReducer } from "react";

import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";
import { cartReducer, iniTialState } from "./reducer/CartReducer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  // const [cartData, setCartData] = useState([]); // after reducer this no need
  const[darkMode,setDarkMode]=useState(true)

  const[state,dispatch]=useReducer(cartReducer,iniTialState)

  return (
    <>
      <ThemeContext.Provider value={{darkMode,setDarkMode}}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer/>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
