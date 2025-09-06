import React from 'react'
import Navbar from '../components/Navbar'
import Arrivals from './Arrivals'
import JeansBelow2 from './JeansBelow2'
import JeansBelow1 from './JeansBelow1'


const Jeans = () => {
  return (
    <>
      <Navbar/>
      <Arrivals/>
      <br/>
      <JeansBelow1/>
      <JeansBelow2/>
      <JeansBelow1/>
      <JeansBelow2/>
    </>
  )
}

export default Jeans