import React, { useEffect, useState } from 'react'
import Table from '../Components/Table'
import './HomePage.css'
// import { getRestaurantData } from '../api/apiCalls'
import fakeData from '../fakeData'

const HomePage = () => {

  const [allRestaurants, setAllRestaurants] = useState(fakeData.restaurants)

  // useEffect(() => {
  //   async function getAndSetRestaurants() {
  //     try{
  //       let data = await getRestaurantData()
  //       setAllRestaurants(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getAndSetRestaurants()
  // }, [])

  return (
    <main>
      <h1 className="header-one" >Welcome!</h1>
      <h2 className="header-two" >Find your next favorite restaurant:</h2>
      <Table allRestaurants={allRestaurants} />
    </main>
  )
}

export default HomePage