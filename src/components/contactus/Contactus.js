import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Contactus() {
  return (
    <div>
         <div id='contact' className='py-16 bg-gray-950'>
        <div className='w-9/12 mx-auto bg-white p-14'> 
        <div className='columns-2'>
            <div>
                <p><FontAwesomeIcon icon={faLocationPin} /> Police Kandasamy street, Ramanathapuram, Coimbatore - 641045.</p>
                <p><FontAwesomeIcon icon={faPhone} /> +91 93605 13248</p>
                <p><FontAwesomeIcon icon={faEnvelope} /> arula@parkisolutions.com</p>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Contactus