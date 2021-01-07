import React, { useEffect, useState } from 'react'
import './Table.css'
import RestaurantCard from './RestaurantCard'
import Search from './Search'

const Table = ({ allRestaurants }) => {

  const [displayedData, setDisplayedData] = useState([])
  const [formInput, setFormInput] = useState('')

  useEffect(() => {
    setDisplayedData(allRestaurants
      .sort((a, b) => a.name.localeCompare(b.name)))
  }, [!formInput.length])

  const updateResults = () => {
    setDisplayedData(allRestaurants
      .filter(restaurant => restaurant.name.toUpperCase()
      .includes(formInput.toUpperCase())))
  }

  const restaurantCards = displayedData.map(restaurants => {
    return(
      <RestaurantCard
        key={restaurants.id}
        {...restaurants}
      />
    )
  })

  return (
    <>
      <Search 
        setFormInput={setFormInput}
        updateResults={updateResults} 
      />
      <div className="table-container" >
        { restaurantCards }
      </div>
    </>
  )
}

export default Table