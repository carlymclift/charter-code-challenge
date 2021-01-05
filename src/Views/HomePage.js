import React from 'react'
import Table from '../Components/Table'
import './HomePage.css'

const HomePage = () => {

  return (
    <main>
      <h1 className="header-one" >Welcome!</h1>
      <h2 className="header-two" >Find your next favorite restaurant:</h2>
      <Table/>
    </main>
  )
}

export default HomePage