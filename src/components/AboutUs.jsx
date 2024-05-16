
import { FaCircleCheck } from "react-icons/fa6";
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'


const AboutUs = () => {
    useEffect(()=> {
        Aos.init();
    }, )

    const [header] = React.useState({
        mainHeader: "Frequently Asked Questions"
    });
    const [state] = React.useState([
        {
            id: 1,
            icon: <FaCircleCheck className="commonIcons" />,
            heading: "What IT solutions does your company offer ?",
            text:
                "Our company offers a wide range of IT solutions including network infrastructure setup, cloud computing services, cybersecurity solutions, software development, and IT consulting services.",
        },
        {
            id: 2,
            icon: <FaCircleCheck className="commonIcons" />,
            heading: "How can IT solutions benefit my business ?",
            text:
                "IT solutions can benefit your business by improving operational efficiency, enhancing productivity, ensuring data security, providing access to advanced technologies, and enabling better decision-making through data analytics.",
        },
        {
            id: 3,
            icon: <FaCircleCheck className="commonIcons" />,
            heading: "Are your IT solutions customizable to suit our business requirements ?",
            text:
                "Yes, our IT solutions are highly customizable and tailored to meet the unique requirements of each business. We work closely with our clients to understand their specific needs and provide customized solutions accordingly.",
        },
        {
            id: 4,
            icon: <FaCircleCheck className="commonIcons" />,
            heading: "Do you provide ongoing support and maintenance for the IT solutions ?",
            text:
                "Yes, we offer comprehensive support and maintenance services for the IT solutions we provide. Our team of skilled professionals ensures that your systems are up-to-date, secure, and performing optimally at all times.",
        },
    ]);

    return (
        <div className="hero">

            <section className="bg bg-black">
                <div className="container1">
                    <div className="row">
                        <div class="col-6 d-flex justify-content-center">
                            <div className="content__text text-warning text-center" data-aos="zoom-out-down">
                                <h1 className="display-1 fw-bold">About Us</h1>
                                <p className="display-5">OUR HISTORY</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>

                <div className="row container__contact">
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="aboutus__img">
                            <img src="assets/images/aboutus.jpg" className="rounded" alt="aboutus" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="aboutus__info">
                            <h1 className="aboutus_title">Who We are</h1>
                            <div className="aboutus__info-p1">
                                Welcome to Tech Corp, where innovation meets reliability. Founded on the principles of cutting-edge technology and unwavering commitment to excellence, we are your trusted partner for business services and IT solutions.
                            </div>
                            <div className="about__info-p2">
                                At Tech Corp, we are a team of passionate professionals dedicated to empowering businesses with transformative technology solutions. With a rich history of successful partnerships and a forward-thinking approach, we strive to be at the forefront of the ever-evolving tech landscape.
                            </div>
                            <div class="d-grid gap-2 mx-auto">
                        <button type="button" class="btn btn-outline-dark">CONTACT US</button>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="question">
                <div className="container_question">
                    <div className="question__header">
                        <div className="common">
                            <h3 className="heading">{header.mainHeader}</h3>
                            <div className="commonBorder"></div>
                        </div>

                        <div className="row">
                            {state.map((info) => (
                                
                                <div className="col-md-6 box">
                                    <div className="question__box">
                                        {info.icon}
                                        <div className="question__box-header">{info.heading}</div>
                                        <div className="question__box-p">{info.text}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default AboutUs