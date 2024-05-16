import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/assets/images/home/img1.png" class="d-block w-100" alt="imagen1" height="500px"/>
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/images/home/img2.png" class="d-block w-100" alt="imagen2" height="500px"/>
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/images/home/img3.png" class="d-block w-100" alt="imagen3" height="500px"/>
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/images/home/img4.png" class="d-block w-100" alt="imagen4" height="500px"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/*/ Our Mision  */}

            <div className="container py-2 my-5">
                
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/img6.jpg" alt="About Us" height="400px" width="550px" />
                    </div>

                    <div className="col-md-6">
                        <h1 className="fw-bold mb-4 text-center">Our Mission</h1>
                        <hr/>
                        <p className='lead mb-4'>
                        Welcome to (your enterprise), where innovation meets reliability. Founded on the principles of cutting-edge technology and unwavering commitment to excellence, we are your trusted partner for business services and IT solutions.
                        Our mission is to drive your success through innovative and tailored IT solutions. We believe in the power of technology to propel businesses forward, and we are committed to delivering solutions that not only meet but exceed your expectations.
                        </p>
                    
                        <NavLink to="/contactus" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    
                </div>

            {/*Discover more of our services*/}

            <div className="container py-2 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="fw-bold mb-4 text-center">Discover more of our services</h3>
                        <hr/>
                        <p className="lead mb-4">
                        Choosing Tech Corp means choosing a partner dedicated to your success. We blend technical expertise with a client-centric approach, ensuring that every solution we provide contributes to your business growth.
                        Join us on the journey to technological excellence. Together, let's shape a future where your business not only survives but thrives in the digital era.
                        </p>
                    </div>

                    <div className="col-md-6">
                        <h2 className="fw-bold mb-4 text-center p-5">Why choosing Us?</h2>
                    </div>
                </div>

                {/* Cards */}
                
                

            </div>

            

            </div>
        </div>
    )
}

export default Home 