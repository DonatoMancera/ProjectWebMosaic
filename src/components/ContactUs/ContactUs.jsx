
import React, { useState, useEffect } from 'react';
import { FaHome, FaPhoneVolume, FaMailBulk } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styled from "styled-components";

const ContactUs = () => {
    // Inicialización de AOS
    useEffect(() => {
        Aos.init();
    }, []);

    // Estado para los campos del formulario
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    // Manejar cambios en los campos del formulario
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Manejar envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:8000/api/contact-us/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data); // Manejar respuesta del servidor
            } else {
                console.error('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        
        <Contactus>
            {/* Sección de título */}
            <section className="page__title page__contact">
                {/* Contenedor */}
                <div className="container p-5">
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <div className="content__contact">
                                <div className="content__text">
                                    <div className="col">
                                        <div className="container__text text-black" data-aos="zoom-out-down">
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

            {/* Sección de formulario */}
            <section className="container">
                <div className="row">
                    {/* Información de contacto */}
                    <div className="col-md-6">
                        <div className="contactus__info">
                            <div className="common__contact">
                                <h3 className="title__info text-black fs-2 p-4">TO MAKE REQUESTS FOR FURTHER INFORMATION, CONTACT US</h3>
                            </div>
                            <div>
                                {/* Mostrar información de contacto */}
                                <div data-aos="fade-up" data-aos-duration="3000">
                                    <div className="contact__info p-3">
                                        <FaHome className="commonIcons" />
                                        <div className="fw-bold fs-4">Address:</div>
                                        <div className="fs-5 text-black">Your Address 00 00000</div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="3000">
                                    <div className="contact__info p-3">
                                        <FaPhoneVolume className="commonIcons" />
                                        <div className="fw-bold fs-4">Phone:</div>
                                        <div className="fs-5 text-black">321 123456</div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="3000">
                                    <div className="contact__info p-3">
                                        <FaMailBulk className="commonIcons" />
                                        <div className="fw-bold fs-4">Email:</div>
                                        <div className="fs-5 text-black">your@email.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulario de contacto */}
                    <div className="container_formulario col-md-6 mt-4">
                        <div className="formulario d-flex content-justify-center">
                            <form onSubmit={handleSubmit}>
                                <div className="input-box mb-3">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label className="form-label">Full Name</label>
                                    <span></span>
                                </div>
                                <div className="input-box mb-3">
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label className="form-label">Last Name</label>
                                    <span></span>
                                </div>
                                <div className="input-box mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label className="form-label">Your Email</label>
                                    <span></span>
                                </div>
                                <div className="input-box mb-3">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label className="form-label">Phone</label>
                                    <span></span>
                                </div>
                                <div className="input-box mb-3">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="3"
                                        required
                                    ></textarea>
                                    <label className="form-label">Message</label>
                                </div>
                                <div class="d-flex gap-2 mx-auto">
                                <button type="button" class="btn btnanimate fw-bold">SEND NOW</button>
                                </div>
            
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Contactus>
    );
};

export default ContactUs;

const Contactus = styled.section`
.page__contact {
    background: #DDF247;
  }
  
  /*Titulo Contact Us*/
  .container__text {
    align-items: center;
    justify-content: center;
  }
  
  .contact__info,
  .title__info {
    font-family: "Poppins", sans-serif;
  }
  
  /*Formulario*/
  .container_formulario {
    width: 550px;
  }
  
  .formulario {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.85);
    border-radius: 30px;
    height: 550px;
  }
  
  .input-box {
    position: relative;
    width: 400px;
  }
  
  .input-box input {
    width: 100%;
    background: transparent;
    color: #F4F4F2;
    border: none;
    outline: none;
    box-shadow: none;
    font-size: 1.2em;
    padding: 15px 0 10px 0;
    font-family: "Poppins", sans-serif;
  }
  
  .input-box label {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    color: #F4F4F2;
    font-size: 19px;
    letter-spacing: 1px;
    pointer-events: none;
    transition: .3s;
  }
  
  .input-box input:valid~label,
  .input-box input:focus~label {
    color: #DDF247;
    top: 0;
    font-size: 0.85em;
  }
  
  .input-box span {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #F4F4F2;
    overflow: hidden;
  }
  
  .input-box span::before {
    content: '';
    position: absolute;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #101010, #DDF247);
    animation: animate 2s linear infinite;
    transition: .5s;
  }
  
  .input-box input:valid~span::before,
  .input-box input:focus~span::before {
    left: 0;
  }

.btnanimate{
    background: #DDF247;
    border:none;
    color: #101010;
    width: 100%;
    transition: .4s all;
  }

.btnanimate:hover {
    background: #DDF247;
    transform: scale(1.2);
  }
  
  .commonIcons {
    font-size: 40px;
    color: #ff4a57;
    margin-bottom: 15px;
  }
  
  .question__box:hover .commonIcons {
    color: yellow;
  }
  
  @keyframes animate {
    0% {
      background-position-x: 0;
    }
  
    100% {
      background-position-x: 400px;
    }
  }
`



