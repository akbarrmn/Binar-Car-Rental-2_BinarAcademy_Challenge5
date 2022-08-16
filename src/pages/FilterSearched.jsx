import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FilterSearch from '../components/FilterSearch'
import CardCars from '../components/CardCars'

export default function FilterSearched() {
  return (
    <div>
        <Navbar/>
        <FilterSearch/>
        <CardCars/>
        <Footer/>
    </div>
  )
} 