import React from 'react';
import {Link} from 'react-router-dom';

function HomeCategory(props) {
  return (
    <div className='category d-flex flex-column justify-content-center m-3'>
        <img className="bg-image" src={props.image} />
        <h3 className='mt-2 mb-3'>{props.title}</h3>
        <p className='mb-3'>{props.description}</p>
        <Link to={`/category/${props.routeName}`}>
            <button className='ctg-btn mt-4'>Vezi produse!</button>
        </Link>
    </div>
  )
}

export default HomeCategory