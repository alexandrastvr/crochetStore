import React from 'react';
import favFull from '../../utils/icons/favorite.svg';
import favEmpty from '../../utils/icons/favorite_border.svg';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/cart/CartActions';
import {addToFavourites} from '../../redux/favourites/FavouritesActions';
import { removeFromFavourites } from '../../redux/favourites/FavouritesActions';

function PoductItem(props){
    const {id, image, name, price, currency, addToCart, addToFavourites, removeFromFavourites, addedToFavs} = props;
    return (
      <div className='product-item me-2 mb-2'>
        <Link to={`/product/${id}`}>
          <div className='image'><img src={image} width='280px'/></div>
        </Link>
        <div className='name-heart d-flex flex-row align-items-start justify-content-between'>
          <Link to={`/product/${id}`} style={{textDecoration:'none'}}>
            <h5 className='product-name mt-2'>{name}</h5>
          </Link>

        {
          addedToFavs 
            ?  <button
                className="btn btn-outline-light"
                onClick={() => {
                  removeFromFavourites({
                    product : {
                    id
                    }
                  })
                }}>
                <img className='heart' src={addedToFavs ? favFull : favEmpty} width='18px' />
              </button>
            :  <button
                className="btn btn-outline-light"
                onClick={() => {
                  addToFavourites({
                    product : {
                      image,
                      name,
                      price,
                      currency,
                      id
                    }
                  })
                }}>
                <img className='heart' src={addedToFavs ? favFull : favEmpty} width='18px' />
              </button>
        }
        </div>

          <p>{price}{currency}</p>
          <button
            className="cart-btn mt-3"
            onClick={() => addToCart({
              product : {
                image,
                name,
                price,
                currency,
                id
              }
            })}
          >Adauga in cos!</button>
      </div>
    )
  
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    addToFavourites: (product) => dispatch(addToFavourites(product)),
    removeFromFavourites: (product) => dispatch(removeFromFavourites(product))
  }
}

export default connect(null, mapDispatchToProps)(PoductItem);