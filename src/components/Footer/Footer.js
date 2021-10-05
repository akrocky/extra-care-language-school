import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className=" mt-5 p-5 bg-black text-white">
            <div className="container row p-5">
                <div className="col-2"></div>
            <div className="col-4 my-3 ">
                <div className="d-flex justify-content-center align-items-center">
                <div>
                <h6><b>Opening Time:</b></h6>
                <h6><b>Monday-Friday</b></h6>
                <h6><b>9.00 - 20.00</b></h6>
                </div>
                </div>
            </div>
            <div className="col-4">
               <div className="d-flex justify-content-end">
                   <div>
                   <div className="d-flex">
                    <div><i className="fab fa-facebook"></i></div>
                    <div className="mx-2"> <i className="fab fa-twitter"></i></div>
                    <div> <i className="fab fa-instagram"></i></div>
                </div>



                <div className="mt-2">
                    <h6 >  adress:</h6>
                   
                    <h6>dream valley 12</h6>
                    
                    <h6>12343,berlin,DE</h6>
                      
                      <h6>mobile Nr. +493242424</h6>
                </div>
            </div>
            <div className="col-2"></div>
            
                   </div>
               </div>
            </div>
            <div className="f-line">
<h6></h6>
            </div>
           <div className="container">
           <div className="d-flex mx-5 mt-2">
              <p className="mx-5 px-5">Extra Care Language School is the most recent addition to the family <br /> of Kalpan  International Languages and is a leading provider of language <br /> courses in top worldwide location</p>
              <p>© 2021 Extra Care Languages School, All rights reserved</p>
              </div>
            
           </div>
        </footer>
    );
};

export default Footer;