import React from 'react';
import Layout from '../../components/layout/Layout';
import HomeCategory from '../../components/HomeCategory/HomeCategory';
import products from '../../utils/products.json';

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            categories:[],
            categoryNames:[]
        }
    }
    componentDidMount(){
        const categories = Object.values(products);
        const categoryNames = Object.keys(products);
        this.setState({categories, categoryNames});
    }

    render(){
        return (
           <Layout>
               <div className='page-content home d-flex flex-column align-items-start'>
                   {
                       this.state.categories.map((category,index) => {
                            return(
                                <HomeCategory
                                    key = {index}
                                    image = {category.image}
                                    title = {category.name}
                                    description = {category.description}
                                    routeName = {this.state.categoryNames[index]}
                                />
                            )
                       })
                   }
               </div>
           </Layout> 
        )
    }
}

export default Home