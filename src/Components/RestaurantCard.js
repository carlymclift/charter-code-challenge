import React from 'react'
import './RestaurantCard.css'

const RestaurantCard = ({address1, attire, city, genre, hours, id, lat, long, name, state, tags, telephone, website, zip}) => {
  const openHours = hours.split(';').map(day => (<p key={day} style={{margin: '0'}}>{day}</p>))

  return (
    <div className='card-box' >
        <h3 className='restaurant-name' >{name}</h3>
        <div>
          <p>{address1} {city}, {state}, {zip}</p>
          <p>Phone: {telephone}</p>
          <a target='_blank' rel='noreferrer' href={website} >Website</a>
          <p>Hours:</p>
          <div className='hours' >
            {openHours}
          </div>
        </div>
    </div>
  )
}

export default RestaurantCard