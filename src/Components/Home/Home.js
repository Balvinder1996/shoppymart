import React from 'react';
import './Home.css';
import img from '../../assets/iii.png';
import img2 from '../../assets/sale3.gif'
import {Link} from 'react-router-dom';
import HomeChild from './HomeChild';
import img3 from '../../assets/sale2.gif'



const Home=()=>
{
    function onChange(isVisible) {
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    }
    return(
        <>
        {/* starting section first */}

        <section id="one">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6  mt-3 d-flex flex-column  justify-content-center align-items-center">
                        <div>
                             <h3>Welcome to Shoppy Mart</h3>
                             <p>Explore the Latest Brand on the Discount Prices.</p>
                             <button className="btn" id="champ">Explore Now</button>
                        </div>

                    </div>
                    <div className="col-md-6 ">
                        <div className="container">
                            <img src={img} className="img-fluid"/>
                        </div>

                    </div>

                </div>
            </div>
         </section>

         {/* ending section second */}


         {/* starting section second */}

         <section className="mt-2  mb-3">
             <div className="container-fluid">
                 <div className="row ">
                     <div className="col-md-5 mt-4">
                         <h2>Top deals</h2>
                         <h5 className="pr-5">Brand New collection of the various accessiories and  brands.
                             Top offer applied before the session end.Brand New collection of the various accessiories and  brands.
                             Top offer applied before the session end.Brand New collection of the various accessiories and  brands.
                             Top offer applied before the session end.Brand New collection of the various accessiories and  brands.
                             Top offer applied before the session end.Brand New collection of the various accessiories and  brands.
                             Top offer applied before the session end.Brand New collection of the various accessiories and  brands.
                             Top offer applied before the session end.
                         </h5>
                     </div>
                     <div className="col-md-7">
                         <img src={img2} className="img-fluid"/>  
                     </div>
                 </div>
             </div>
         </section>

         {/* ending section second */}


         {/* starting of third section */}
         <section className="mt-2 py-5" id="secthird">
             <div className='container-fluid py-5'>
                 <div className='row text-center'>
                     <div className='col-md-3'>
                         <h2>Products Range</h2>
                        <HomeChild sending="245"/>
                     </div>
                     <div className='col-md-3'>
                        <h2>Clients</h2>
                        <HomeChild sending="250"/>
                     </div>
                     <div className='col-md-3'>
                        <h2>Brands</h2>
                        <HomeChild sending="45"/>
                     </div>
                     <div className='col-md-3'>
                         <h2>Countries connected</h2>
                        <HomeChild sending="20"/>
                     </div>
                 </div>
             </div>

         </section>
         {/* ending of third section */}

         {/* Start of fourth section */}
         <section className="my-4">
             <div className="container-fluid ">
                 <div className="row " >
                     <div className="col-md-6 ">
                         <div className="container my-3 pt-3">
                            <img src={img3} className="img-fluid" />
                         </div>
                     </div>
                     <div className="col-md-6 ">
                       <div className="container mt-3">
                         <h2 className="text-center">Shop Now</h2>
                        <div className="ml-5 mt-4 ">
                            
                              <h4 className="py-3"><i class="fa fa-check-circle" aria-hidden="true"></i>
                                     1000's of Products on discount prices.Order today.
                              </h4>
                              <h4 className="py-3"> <i class="fa fa-check-circle" aria-hidden="true"></i>
                                    1000's of Products on discount prices Order today.
                              </h4>
                              <h4 className="py-3"> <i class="fa fa-check-circle" aria-hidden="true"></i>
                                    1000's of Products on discount prices Order today.
                               </h4>
                              <h4 className="py-3"> <i class="fa fa-check-circle" aria-hidden="true"></i>
                                      1000's of Products on discount prices Order today.
                              </h4>
                             
                        </div>
                      </div>
                     </div>
                 </div>
             </div>
         </section>
         {/* End of fourth section */}
       
        </>
    )
}
export default Home