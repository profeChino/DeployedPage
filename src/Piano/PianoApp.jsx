import React from 'react'
import './Piano.css'
import { Piano } from "../components/Piano.jsx"
import PropTypes from 'prop-types' 

export const PianoApp = ({titulo}) => {
  return (
    <>
      <br />
      <br />
      <h1 className='h1-album'>{titulo}</h1>
      <br />
      <div className='PianoApp'>
        <Piano />
      </div>    
    </>
    
  )
}

PianoApp.propTypes = {
  titulo: PropTypes.string.isRequired
}