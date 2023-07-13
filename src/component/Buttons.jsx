import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';


const Buttons = () => {
  return (
    <div>
    <label className='searchbar'>
     <input type="text" name="name" placeholder='search here' className='searchbar1'/>
     <FontAwesomeIcon icon={faMicrophone} className='icon'/>
     <br/>
    </label>
    <button className='search'> Google Search </button>
    <button className='lucky'> I am feeling lucky! </button>
    </div>
  )
}

export default Buttons