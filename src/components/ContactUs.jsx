import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";




const ContactUs = () => {

    return (
        <div>
            <section className="bg bg-warning">
                <div className="container1">
                    <div className="row d-flex">
                        <div className="col-6">
                            <div className="bg__content d-flex justify-content-center">
                                <div className="bg__section">
                                    <ul className="contactCircles bg-warning">
                                        <li>
                                            <FaFacebookF />
                                        </li>
                                        <li>
                                            <FaTwitter />
                                        </li>
                                        <li>
                                            <FaInstagram />
                                        </li>
                                        <li>
                                            <FaWhatsapp />
                                        </li>
                                    </ul>

                                    <div className="col-6 d-flex align-items-center">
                                        <div className="container__text text-black ">
                                            <h1 className="display-1 fw-bold">Contact Us</h1>
                                            <p className="display-5">DO YOU NEED HELP?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="row">
            <div className="col-md-6 d-flex content-justify-center">
                    <div className="contactus__img">
                        <img src="assets/images/contactus.jpg" alt="contact us" />
                    </div>
                </div>

                <div className="container_formulario">
                <div className="formulario col-6 m-2 p-4 d-flex content-justify-center">
                    <form>
                        <div class="input-box mb-3">
                            <input type="text" id="exampleFormControlInput1" required />
                            <label for="" class="form-label">Full Name</label>
                            <span></span>
                        </div>
                        <div class="input-box mb-3">
                            <input type="text" id="exampleFormControlInput1" required />
                            <label for="" class="form-label">Last Name</label>
                            <span></span>
                        </div>
                        <div class="input-box mb-3">
                            <input type="email" id="exampleFormControlInput1" required />
                            <label for="" class="form-label">Your Email</label>
                            <span></span>
                        </div>
                        <div class="input-box mb-3">
                            <input type="tel" id="exampleFormControlInput1" required />
                            <label for="" class="form-label">Phone</label>
                            <span></span>
                        </div>
                        <div class="input-box mb-3">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                        </div>
                        
                        <div class="d-grid gap-2 mx-auto">
                        <button type="button" class="btn btn-outline-warning">SEND</button>
                        </div>
                    </form>
                </div>
                </div>
                
                
            </section>
            
        </div>
        
    )
}

export default ContactUs