import React from 'react'
import './Search.css'

const Search = ({ setFormInput, updateResults }) => {
  return (
    <>
      <input type='text' onChange={(e) => setFormInput(e.target.value)}></input>
      <button onClick={updateResults} >Submit</button>
    </>
  )
}

export default Search