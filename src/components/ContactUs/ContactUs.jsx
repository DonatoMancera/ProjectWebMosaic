
import React, { useState, useEffect } from 'react';
import { FaHome, FaPhoneVolume, FaMailBulk } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

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
        <div className="contact">
            {/* Sección de título */}
            <section className="page__title page__contact">
                {/* Contenedor */}
                <div className="container">
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <div className="content__contact">
                                <div className="content__text">
                                    <div className="col-6 d-flex">
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
                <div className="content row">
                    {/* Información de contacto */}
                    <div className="col-md-6">
                        <div className="contactus__info">
                            <div className="common__contact">
                                <h3 className="title__info text-black fs-1 p-4">TO MAKE REQUESTS FOR FURTHER INFORMATION, CONTACT US</h3>
                            </div>
                            <div>
                                {/* Mostrar información de contacto */}
                                <div data-aos="fade-up" data-aos-duration="3000">
                                    <div className="contact__info p-3">
                                        <FaHome className="commonIcons" />
                                        <div className="fs-5">Address:</div>
                                        <div className="fs-6 text-black">Your Address 00 00000</div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="3000">
                                    <div className="contact__info p-3">
                                        <FaPhoneVolume className="commonIcons" />
                                        <div className="fs-5">Phone:</div>
                                        <div className="fs-6 text-black">321 123456</div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="3000">
                                    <div className="contact__info p-3">
                                        <FaMailBulk className="commonIcons" />
                                        <div className="fs-5">Email:</div>
                                        <div className="fs-6 text-black">your@email.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulario de contacto */}
                    <div className="container_formulario">
                        <div className="formulario col-6 m-2 p-4 d-flex content-justify-center" data-aos="zoom-out">
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
                                <div className="input-box mb-3" data-aos="fade-left">
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
                                <div className="input-box mb-3" data-aos="fade-left">
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
                                <div className="input-box mb-3" data-aos="fade-left">
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
                                <div className="input-box mb-3" data-aos="fade-left">
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
                                <div className="d-grid gap-2 mx-auto" data-aos="fade-left">
                                    <button type="submit" className="btn btn-outline-warning fw-bold">SEND NOW</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;



