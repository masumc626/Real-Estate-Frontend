import React, { useState } from 'react'
import ImagesLogo from '../../utils/ImagesLogo';
import EyeLogo from '../../utils/EyeLogo';
import EditLogo from '../../utils/EditLogo';
// import images from '../../test/heshan-perera-aIJa8dPdzRI-unsplash.jpg'

export default function PropertyData({ item }) {
  const { _id, image, property, contact, area, views, status, daysLeft } = item;
  const [view, setView] = useState(true);
  return (
    <tr key={item._id}>
      <td>{_id}</td>
      <td onClick={() => {
        setView(!view)
      }}>
        {
          view ?
          <ImagesLogo/>
          :
          <div className='image-container'>
          <button onClick={() => { setView(!view) }}>Close</button>
          <img src={image} alt={_id} />
          </div>
        }
      </td>
      <td>{property}</td>
      <td>{contact}</td>
      <td>{area}</td>
      <td>{views}</td>
      <td>{status}</td>
      <td>{daysLeft}</td>
      <td className='action-container'><EyeLogo/><EditLogo/></td>
    </tr>
  )
}
