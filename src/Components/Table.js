import React, { useEffect, useState } from 'react'
import './Table.css'
import RestaurantCard from './RestaurantCard'
import Search from './Search'

const Table = ({ allRestaurants }) => {

  const [displayedData, setDisplayedData] = useState([])
  const [formInput, setFormInput] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const [numberOfPages, setNumberOfPages] = useState(0)

  useEffect(() => {
    let result = displayDataForCurrentPage()
    setDisplayedData(result)
  }, [!formInput.length, currentPage])

  const displayDataForCurrentPage = () => {
    let pageNum = Math.ceil(allRestaurants.length / 10)
    setNumberOfPages(pageNum)
    let firstIndex = 10 * currentPage
    let lastIndex = 10 * (currentPage + 1)
    let range = allRestaurants.slice(firstIndex, lastIndex)
    return range
  }

  const updateResults = () => {
    setDisplayedData(allRestaurants
      .filter(restaurant => restaurant.name.toUpperCase().includes(formInput.toUpperCase())
      || restaurant.city.toUpperCase().includes(formInput.toUpperCase())
      || restaurant.genre.toUpperCase().includes(formInput.toUpperCase())))
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
      <div className='table-buttons' >
        {currentPage !== 0 && 
          <button className='prev-button' onClick={() => setCurrentPage(currentPage - 1)} >Previous</button>
        }
        {currentPage < numberOfPages - 1 &&
          <button className='next-button' onClick={() => setCurrentPage(currentPage + 1)} >Next</button>
        }
      </div>
    </>
  )
}

export default Table