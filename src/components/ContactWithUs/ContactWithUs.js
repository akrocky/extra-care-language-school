import React from 'react';
import './ContactWithUs.css'

const ContactWithUs = () => {
    return ( 

        <div className="row mx-3 my-5">
            <div className="col-6">
            <div className="m-5">
            <h4 className="ms-2 p-3 bold bg-black text-white text-center">  Adress:</h4>
                   
                   <div className="d-flex justify-content-center">
                   <div >
                   <h6>dream valley 12
                       
                       </h6>
                       
                       <h6>berlin,DE</h6>
                         
                         <h6>Mobile Nr. +49234135325</h6>
                         <h6>Email: mmj@hh.com</h6>
                   </div>
                   </div>
            </div>
            </div>
            <div className="col-6">
            <iframe src ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310846.42014112277!2d13.144554017505381!3d52.50651327145431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin!5e0!3m2!1sen!2sde!4v1633369708459!5m2!1sen!2sde" width="600" height="450" style={{border:0}}  loading="lazy"></iframe>
            </div>

        </div>
    );
};

export default ContactWithUs;