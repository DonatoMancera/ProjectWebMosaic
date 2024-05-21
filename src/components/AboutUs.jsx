
import { FaCircleCheck } from "react-icons/fa6";
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import about from '../components/assets/images/aboutus.jpg';

const AboutUs = () => {

    /*AOS*/
    useEffect(() => {
        Aos.init();
    },)
    /*********************************************/

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
        <div className="about">

            <section className="page__title bg-black">
                <div className="container">
                    <div className="row">
                        <div class="d-flex justify-content-center">
                            <div className="content__text text-warning text-center" data-aos="zoom-out-down">
                                <h1 className="display-1 fw-bold">About Us</h1>
                                <p className="display-5">OUR HISTORY</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
                <section className="container">
                    <div className="content row">
                        <div className="col-md-6 d-flex">
                            <div className="aboutus__img" data-aos="flip-left">
                                <img src={about} alt="about us" width="450px" height="350px"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="aboutus__info mt-0 mb-0" data-aos="flip-right">
                                <h1 className="aboutus__title text-black" data-aos="fade-right">Who We are</h1>
                                <div className="about__text fs-6">
                                <p className="aboutus__info-p1" data-aos="fade-left">
                                    Welcome to WebMosaic, where innovation meets reliability. Founded on the principles of cutting-edge technology and unwavering commitment to excellence, we are your trusted partner for business services and IT solutions.
                                </p>
                                <p className="about__info-p2" data-aos="fade-left">
                                    At WebMosaic, we are a team of passionate professionals dedicated to empowering businesses with transformative technology solutions. With a rich history of successful partnerships and a forward-thinking approach, we strive to be at the forefront of the ever-evolving tech landscape.
                                </p>
                                </div>
                                <div class="d-grid gap-2 mx-auto" data-aos="fade-up" data-aos-duration="3000">
                                    <button type="button" class="btn btn-outline-dark">CONTACT US</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="question text-black">
                    <div className="container" data-aos="zoom-in-up">
                        <div className="container_question">
                            <div className="question__header" data-aos="fade-up-left">
                                <div className="common">
                                    <h3 className="heading text-black fs-1">{header.mainHeader}</h3>
                                    <div className="commonBorder bg-light"></div>
                                </div>

                                <div className="row">
                                    {state.map((info) => (

                                        <div className="col-md-6" data-aos="fade-up" data-aos-duration="3000">
                                            <div className="question__box">
                                                {info.icon}
                                                <div className="question__box-header fs-5">{info.heading}</div>
                                                <div className="question__box-p fs-6 text-black">{info.text}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default AboutUs