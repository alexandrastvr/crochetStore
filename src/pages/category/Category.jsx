import React from 'react';
import Layout from '../../components/layout/Layout';
import ProductList from '../../components/productList/ProductList';
import products from '../../utils/products.json';

class Category extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      category: {}
    }
  }

  componentDidMount(){
    const routeParam = this.props.match.params.categoryName;
    console.log(this.props);
    this.setState({category:products[routeParam]});
  }

  render(){
    return (
      <Layout>
        <div className='category-page page-content'>
          <h2 className='mt-4 mb-3'>{this.state.category.name}</h2>
          <ProductList items = {this.state.category.items} />
        </div>
      </Layout>
    )
  }
}

export default Category