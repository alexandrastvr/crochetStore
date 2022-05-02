import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './main.css';

function Layout(props) {
  return (
    <div className='layout container-fluid w-50 m-auto'>
        <Header/>
            {props.children}
        <Footer/>
    </div>
  )
}

export default Layout