import React from 'react';
import logo from '../../utils/images/logo.png';
import heart from '../../utils/icons/favorite.svg';
import cart from '../../utils/icons/shopping_cart.svg';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../../redux/user/userActions';
import products from '../../utils/products.json';

function Header(props) {
    const {numberOfProducts, user, signOut} = props;
    const menuItems = Object.keys(products);
  return (
    <div className=''>
        <div className='header align-items-end d-flex flex-row justify-content-between'>
                <Link to='/' style={{textDecoration:'none'}}>
                    <img src={logo} width='75px' className='mb-3 me-2'/>
                    <span className='brand-name'>tangled</span>
                </Link>   
            <div className='align-items-center d-flex flex-row'>
                {
                    user
                     ? <span className='login-text'>Salut, {user.displayName}!</span>
                     :null
                }
                { user
                    ? <button className="btn login-text" onClick={() => signOut()}>Delogare</button>
                    : <Link to="/login" className="h5"><button className='btn login-text'>Logare</button></Link>
                }
                <Link to='/favourites'>
                    <img className='mb-2' src={heart}/>
                </Link>
                <Link to='/cart' style={{textDecoration:'none', color:'black'}} className='align-items-center d-flex flex-row mb-2'>
                    <img src={cart}/>
                    <p>{numberOfProducts}</p>
                </Link>
            </div>
        </div>
        <div className='menu d-flex flex-row justify-content-evenly'>
            {
                menuItems.map((item) => {
                    return (
                        <Link to={`/category/${item}`} style={{textDecoration:'none'}}>
                            <span>{item}</span>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

function mapStateToProps(state) {
    return {
        numberOfProducts: state.cart.products.length,
        user: state.user.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);