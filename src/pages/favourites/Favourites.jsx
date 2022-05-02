import React from 'react';
import Layout from '../../components/layout/Layout';
import {connect} from 'react-redux';
import {removeFromFavourites} from '../../redux/favourites/FavouritesActions';
import deleteBtn from '../../utils/icons/delete.svg';

function Favourites(props) {
        return (
          <Layout>
            <div className='page-content selected-products'>
              <h1 className='mt-4 mb-3'>Produsele favorite</h1>
              {
                props.products.map((product) => {
                  return (
                    <div className="product  d-flex flex-row justify-content-between align-items-center m-2">
                                    <div className="w-50 d-flex flex-row justify-content-start align-items-center">
                                        <img src={product.image} width="100px" alt="Produs"/>
                                        <p className='ms-2 me-2'>{ product.name }</p>
                                    </div>
                                    <p className="w-">{ product.price } { product.currency }</p>
                                    <button className="btn btn-outline-light"
                                            onClick={() => props.removeFromFavourites(
                                                {
                                                    product: {
                                                        id: product.id
                                                    }
                                                }
                                            )}
                                    >
                                        <img src={deleteBtn} />
                                    </button>
                                </div>
                  )
                })
              }
            </div>
          </Layout>
        )
}
function mapStateToProps(state) {
  return {
    products: state.favourites.favouriteProducts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromFavourites: (product) => dispatch(removeFromFavourites(product))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Favourites);