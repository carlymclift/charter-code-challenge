import React, {useEffect, useState} from 'react'
import './Table.css'
import fakeData from '../fakeData'
import RestaurantCard from './RestaurantCard'
import { getRestaurantData } from '../api/apiCalls'

const Table = () => {
// console.log(fakeData.restaurants)

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    setRestaurants(fakeData.restaurants)

    // const data = getRestaurantData()
    // setRestaurants(data)
  })

  const cards = restaurants.map(restaurants => {
    return(
      <RestaurantCard
        key={restaurants.id}
        {...restaurants}
      />
    )
  })

  return (
    <div className="table-container" >
      {cards}
    </div>
  )
}

export default Table