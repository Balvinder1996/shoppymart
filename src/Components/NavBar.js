import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const NavBar=()=>
{
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 60){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
    return(
        <>      
           <nav className="navbar navbar-expand-lg navbar-dark sticky-top" id={colorChange ? "navactive" : "navigation_bar"}>
               <div className="container-fluid">

                   <Link to='/' className="navbar-brand ml-3">Shoppy Mart <span className="px-2"><i class="fas fa-shopping-bag"></i></span></Link>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>

                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul className="navbar-nav ml-5 ">
                           <li className="nav-item px-3">
                               <Link className="nav-link active" to='/'>Home</Link>
                           </li>
 
                           <li className="nav-item px-3">
                               <Link className="nav-link " aria-current="page" to='/products'>Products</Link>
                           </li>    
          
                           <li className="nav-item px-3">
                               <Link className="nav-link " aria-current="page" to='/ourservices'>Our-services</Link>
                           </li>
                            
                           <li className="nav-item px-3">
                               <Link className="nav-link"  aria-current="page" to='/aboutus'>About-us</Link>
                           </li>
                              
                           <li className="nav-item px-3">
                               <Link className="nav-link "aria-current="page"  to='/contact-us'>Contact-us</Link>
                           </li>
                       </ul>   
                       
                       <div className="ml-auto">
                           <span><Link to='/' className="text-white h5 pl-3 ml-5"><i className="fa fa-shopping-cart"></i></Link></span>
                        </div>   
                    </div>          
               </div>
            </nav>     
        </>
    )
}
export default NavBar