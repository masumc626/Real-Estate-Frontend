import React, { useState } from 'react'
import '../styles/propertyNav.css'
import { Link } from 'react-router-dom'

export default function PropertyNav({section}) {

    const intialState = {
        basic : "",
        property : "",
        general : "",
        location : "",
    }
    const [style, setStyle] = useState({
        ...intialState,
        [section] : "option-active"
    });

  return (
    <div>
        <div className='add-new-property txt-clr'>ADD NEW PROPERTY</div>
      <div className='property-nav-container txt-clr'>
        <Link to={'/basicinfo'}><button className={`property-nav-option txt-clr ${style.basic}`}>Basic Info</button></Link>
        <Link to={'/propertydetails'}><button className={`property-nav-option txt-clr ${style.property}`}>Property Detail</button></Link>
        <Link to={'/generalinfo'}><button className={`property-nav-option txt-clr ${style.general}`}>General Info</button></Link>
        <Link to={'/locationinfo'}><button className={`property-nav-option txt-clr ${style.location}`}>Location Info</button></Link>
      </div>
    </div>
  )
}
