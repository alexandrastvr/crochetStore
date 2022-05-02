import React from 'react';
import Layout from '../../components/layout/Layout';
import {connect} from 'react-redux';
import deleteBtn from '../../utils/icons/delete.svg';
import {removeFromCart} from '../../redux/cart/CartActions';

function Cart(props) {
  return (
    <Layout>
        <div className='page-content selected-products'>
            <h1 className='mt-4 mb-3'>Coșul de cumpărături</h1>
                             {
                        props.cartProducts.map((product) => {
                            return(
                                <div className="product d-flex flex-row justify-content-between align-items-center m-2">
                                    <div className="w-50 d-flex flex-row justify-content-start align-items-center">
                                        <img src={product.image} width="100px" alt="Produs"/>
                                        <p className='ms-2 me-2'>{ product.name }</p>
                                    </div>
                                    <p className="w-10">{ product.price } { product.currency }</p>
                                    <button className="btn btn-outline-light"
                                            onClick={() => props.removeFromCart(
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
        cartProducts: state.cart.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (product) => dispatch(removeFromCart(product))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);