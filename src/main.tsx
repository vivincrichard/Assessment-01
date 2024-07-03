import React from 'react'
import ReactDOM from 'react-dom/client'

import {createBrowserRouter, Route, RouterProvider} from 'react-router-dom'
import SignIn from "./Components/Sign-In/Sign-In.tsx";
import Dashboard from "./Components/Dashboard/Dashboard.tsx";
import HomePage from "./Components/Home/HomePage.tsx";
// import LineCharts from "./Components/Dashboard/Chart-js/Lines.tsx";
// import App from './App.tsx'
// import './index.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

      {/*<SignIn/>*/}
      <Dashboard/>

      {/*<HomePage/>*/}

      {/*<RouterProvider router = {router} />*/}

  </React.StrictMode>,
)
