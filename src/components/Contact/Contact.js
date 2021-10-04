import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import './Contact.css';
const Contact = () => {
    return (
        <>
            <Breadcrumb pageName='Contact Us' formPage='Home' toPage='Contact'></Breadcrumb>
            <div className='container my-5'>
                <div className="row">
                    <div className="col-md-6">
                        <h2 className='heading'>Leave Us A Message</h2>
                        <div className='text-center mb-2'>
                            <h4>Feel Free to Contact With Us</h4>
                            <h6>We Always ready to help you.</h6>
                        </div>
                        <div className="address">
                            <div className="icon">
                                <i className="fas fa-envelope-open-text"></i>
                            </div>
                            <div className="text-area">
                                <h5>Email Address :</h5>
                                <h5>expert@gmail.com</h5>
                            </div>
                        </div>
                        <div className="address my-2">
                            <div className="icon">
                            <i className="fas fa-phone-volume"></i>
                            </div>
                            <div className="text-area">
                                <h5>Phone Number : </h5>
                                <h5>+88 12345 67890</h5>
                            </div>
                        </div>
                        <div className="address">
                            <div className="icon">
                            <i className="fas fa-location-arrow"></i>
                            </div>
                            <div className="text-area">
                                <h5>Our Location :</h5>
                                <h5>119/A, Sea View, USA</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='mt-5'>
                            <input type="text" className='form-control mb-3' placeholder='Enter Name' />
                            <input type="text" className='form-control mb-3' placeholder='Enter Subject' />
                            <input type="text" className='form-control mb-3' placeholder='Enter Address' />
                            <textarea className='form-control mb-3' id="" cols="30" rows="10" placeholder="Message"></textarea>
                            <button className='send-message'>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;