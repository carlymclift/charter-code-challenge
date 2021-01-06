import React, { useEffect, useState } from 'react'
import './Table.css'
import fakeData from '../fakeData'
import RestaurantCard from './RestaurantCard'
// import { getRestaurantData } from '../api/apiCalls'

const Table = () => {
// console.log(fakeData.restaurants)

  const [allRestaurants, setRestaurants] = useState(fakeData.restaurants)

  // useEffect(() => {
  //   setRestaurants(fakeData.restaurants)

  //   // async function getAndSetRestaurants() {
  //   //   try{
  //   //     let data = await getRestaurantData()
  //   //     setRestaurants(data)
  //   //   } catch (error) {
  //   //     console.log(error)
  //   //   }
  //   // }
  //   // getAndSetRestaurants()
  // }, [])

  const cards = allRestaurants.map(restaurants => {
    return(
      <RestaurantCard
        key={restaurants.id}
        {...restaurants}
      />
    )
  })

  return (
    <>
    <button onClick={() => setRestaurants(allRestaurants.sort((a, b) => a.name.localeCompare(b.name)))}>Alphabetize Results</button>
    <div className="table-container" >
      {cards}
    </div>
    </>
  )
}

export default Table