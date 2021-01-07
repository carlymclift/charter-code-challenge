import React from 'react'
import './Search.css'

const Search = ({ setFormInput, updateResults }) => {

  const checkForSubmit = (e) => {
    console.log(e.charCode)
    if (e.charCode === 13) {
      updateResults()
    }
  }

  return (
    <>
      <input type='text' 
        onChange={(e) => setFormInput(e.target.value)}
        onKeyPress={checkForSubmit}
      />
      <button onClick={updateResults}>Submit</button>
    </>
  )
}

export default Search