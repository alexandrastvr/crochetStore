import React from 'react';
import fbIcon from '../../utils/icons/facebook.svg';
import instaIcon from '../../utils/icons/instagram.svg';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className='footer d-flex d-row align-items-end justify-content-around mt-3 w-100'>
        <div>
            <h4 className='mb-4 mt-1'>Contact</h4>
            <a href="https://www.google.com"><img src={fbIcon} width='25px' className='me-2'/></a>
            <a href="https://www.google.com"><img src={instaIcon} width='25px' className='ms-2'/></a>
            <p className='email mt-2'>cucurigu@mail.com</p>
        </div>
        <div>
          <Link to='/about' style={{textDecoration:'none'}}>
            <p className='mt-3'>About</p>
          </Link>
          <Link to='/terms' style={{textDecoration:'none'}}>
            <p className='mt-4'>Terms and conditions</p>
          </Link>
        </div>
    </div>
  )
}

export default Footer