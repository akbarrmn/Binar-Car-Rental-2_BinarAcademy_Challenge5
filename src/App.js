import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import FilterSearched from './pages/FilterSearched';
import DetailCar from './pages/DetailCar';
import Payment from './pages/Payment';
import Payout from './pages/Payout';


import React, { useEffect } from 'react';
import {useDispatch} from "react-redux"
import {fetchData} from "./redux/actions/carsAction"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  },[])

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/cars' element={<FilterSearched />} />
            <Route path='/cars/detail/:id' element={<DetailCar />} />
            <Route path='/cars/payment/:id' element={<Payment />} />
            <Route path='/cars/payout' element={<Payout />} />
            <Route path='*' element={<><h1 className='text-center'>404 ERROR</h1></>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
