import React from 'react';
import Layout from '../../components/layout/Layout';
import products from '../../utils/products.json';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/CartActions';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }
    componentDidMount() {
        const itemId = this.props.match.params.productId;
        const productsArray = Object.values(products).reduce((prev,next) => prev.concat(next.items), []);
        const currentProduct = productsArray.find(item => item.id == itemId);  
        this.setState({product: currentProduct});
    }
   
    render() {
        return (
            <Layout>
                <div className='page-content'>
                    <div className='item d-flex flex-row flex-wrap justify-content-center mt-5 pb-3 pt-3'>
                        <div>
                            <img className='me-3' src={this.state.product.image} width='350px'/>
                        </div>
                        <div className='info'>
                            <h5 className='mb-4 mt-2'>{this.state.product.name}, {this.state.product.price}{this.state.product.currency}</h5>
                            <p><strong>Gramaj: </strong> {this.state.product.weight} g</p>
                            <p><strong>Material: </strong>{this.state.product.material}</p>
                            <p>{this.state.product.description}</p>
                            <button  
                                className="cart-btn mt-3"
                                onClick={() => this.props.addToCart({
                                    product : {
                                    image: this.state.product.image,
                                    name: this.state.product.name,
                                    price: this.state.product.price,
                                    currency: this.state.product.currency,
                                    id: this.state.product.id
                                    }
                                })}
                            >Adauga in cos!</button>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product))
    }
}

export default connect(null, mapDispatchToProps)(Product)