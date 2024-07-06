import React from 'react'
import ReactDOM from 'react-dom/client'
import Assesstment from "./Components/02 - Assesstment/Assesstment.tsx";
import ProductsComponents from "./Components/study/ProductsComponents.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Patents from "./Components/Assesstment-02/Patents.tsx";
import SignIn from "./Components/Sign-In/Sign-In.tsx";
import Dashboard from "./Components/Dashboard/Dashboard.tsx";
import BaseURL from "./Components/Assesstment-02/BaseURL.tsx";

// import {createBrowserRouter, Route, RouterProvider} from 'react-router-dom'
// import SignIn from "./Components/Sign-In/Sign-In.tsx";
// import Dashboard from "./Components/Dashboard/Dashboard.tsx";
// import HomePage from "./Components/Home/HomePage.tsx";
// import LineCharts from "./Components/Dashboard/Chart-js/Lines.tsx";
// import App from './App.tsx'
// import './index.css'


const baseUrl = 'https://api.patentsview.org/patents/query'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

      {/*<SignIn/>*/}
      {/*<Dashboard/>*/}
      {/*<BaseURL/>*/}


      {/*<RouterProvider router = {router} />*/}
      {/*<Assesstment/>*/}
      {/*<ProductsComponents/>*/}


      <BrowserRouter>
          <Routes>
              <Route path="/sign-in" element={<SignIn/>}/>
              <Route path="/patents" element={<Patents baseUrl={baseUrl}/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
      </BrowserRouter>


  </React.StrictMode>,
)
