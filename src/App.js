import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Link,Route,Switch} from 'react-router-dom'
import NavBar from './Components/NavBar';
import ContactUs from './Components/Contact-us/Contact-us';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import AboutUs from './Components/AboutUs/AboutUs';
import OurServices from './Components/Our-services/Ourservices';

  
function App() {
  return (
   <>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/contact-us' component={ContactUs}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/aboutus' component={AboutUs}/>
        <Route exact path='/ourservices' component={OurServices}/>
      </Switch>
      <Footer/>
    </Router>
   </>
  );
}

export default App;
