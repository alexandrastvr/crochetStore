import React from 'react';
import PoductItem from '../productItem/ProductItem';
import {connect} from 'react-redux';
import '../layout/main.css';

function ProductList(props) {
    const {items, favProducts} = props;

  return (
    <div className='d-flex flex-row flex-wrap justify-content-start'>
        {
            items
                ? items.map((item, index) => {
                    return(
                        <PoductItem
                            key = {index}
                            image = {item.image}
                            name = {item.name}
                            price = {item.price}
                            currency = {item.currency}
                            id = {item.id}
                            addedToFavs = {favProducts.find(el => el.id == item.id) ? true : false}
                        />
                    )
                })
                : null
        }
    </div>
  )
}
function mapStateToProps(state) {
    return {
        favProducts: state.favourites.favouriteProducts
    }
}
export default connect(mapStateToProps)(ProductList)