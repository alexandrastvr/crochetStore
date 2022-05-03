import './components/layout/main.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Terms from './pages/terms/Terms';
import Category from './pages/category/Category';
import Cart from './pages/cart/Cart';
import Favourites from './pages/favourites/Favourites';
import Product from './pages/product/Product';
import Login from './pages/login/Login';
import Page404 from './pages/page404/Page404';
import {Switch, Route} from 'react-router-dom';

import './components/layout/main.css';
import './pages/favourites/Favourites.css';
import './components/header/Header.css';
import './components/footer/Footer.css';
import './components/HomeCategory/HomeCategory.css';
import './components/productItem/ProductItem.css';
import './pages/category/Category.css';
import './pages/favourites/Favourites.css';
import './pages/home/Home.css';
import './pages/login/Login.css';
import './pages/product/Product.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/category/:categoryName" component={Category }/>
        <Route exact path="/product/:productId" component={Product}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/terms" component={Terms}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/favourites" component={Favourites}/>
        <Route path="*" component={Page404}/>
      </Switch>
    </div>
  );
}

export default App;
