
import { FaHome , FaPhoneVolume, FaMailBulk } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'




const ContactUs = () => {

    /*AOS*/
    useEffect(() => {
        Aos.init();
    },)
    /*********************************************/

    const [header] = React.useState({
        mainHeader: "TO MAKE REQUESTS FOR FURTHER INFORMATION, CONTACT US"
    });
    const [state] = React.useState([
        {
            id: 1,
            icon: <FaHome className="commonIcons" />,
            heading: "Address:",
            text:
                "Your Address 00 00000",
        },
        {
            id: 2,
            icon: <FaPhoneVolume className="commonIcons" />,
            heading: "Phone:",
            text:
                "321 123456",
        },
        {
            id: 3,
            icon: <FaMailBulk className="commonIcons" />,
            heading: "Email:",
            text:
                "your@email.com",
        },
    ]);
    return ( 
        <div className="contact">
            <section className=" page__title page__contact">
                <div className="container">
                    <div className="row">
                        <div className=" d-flex justify-content-center">
                            <div className="content__contact">
                                <div className="content__text">

                                    <div className="col-6 d-flex">
                                        <div className="container__text text-black " data-aos="zoom-out-down">
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



            <section className="container">
                <div className="content row">
                    <div className="col-md-6">
                        <div className="contactus__info">
                        <div className="common__contact">
                                    <h3 className="title__info text-black fs-1 p-4">{header.mainHeader}</h3>
                                </div>

                                <div>
                                    {state.map((info) => (

                                        <div data-aos="fade-up" data-aos-duration="3000">
                                            <div className="contact__info p-3">
                                                {info.icon}
                                                <div className="fs-5">{info.heading}</div>
                                                <div className="fs-6 text-black">{info.text}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                        </div>
                    </div>

                    <div className="container_formulario">
                        <div className="formulario col-6 m-2 p-4 d-flex content-justify-center" data-aos="zoom-out">
                            <form>
                                <div class="input-box mb-3">
                                    <input type="text" id="exampleFormControlInput1" required />
                                    <label for="" class="form-label">Full Name</label>
                                    <span></span>
                                </div>
                                <div class="input-box mb-3" data-aos="fade-left">
                                    <input type="text" id="exampleFormControlInput1" required />
                                    <label for="" class="form-label">Last Name</label>
                                    <span></span>
                                </div>
                                <div class="input-box mb-3" data-aos="fade-left">
                                    <input type="email" id="exampleFormControlInput1" required />
                                    <label for="" class="form-label">Your Email</label>
                                    <span></span>
                                </div>
                                <div class="input-box mb-3" data-aos="fade-left">
                                    <input type="tel" id="exampleFormControlInput1" required />
                                    <label for="" class="form-label">Phone</label>
                                    <span></span>
                                </div>
                                <div class="input-box mb-3" data-aos="fade-left">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    <label for="exampleFormControlTextarea1" class="form-label"></label>
                                </div>

                                <div class="d-grid gap-2 mx-auto" data-aos="fade-left">
                                    <button type="button" class="btn btn-outline-warning ">SEND NOW</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </section>

        </div>

    )
}

export default ContactUs