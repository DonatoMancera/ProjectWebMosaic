import React from "react";
import styled from "styled-components";
import Cards from "./Cards/Cards";

function ThirdSection() {

    const cardData = [
        {
            title: "E-commerce",
            intro: "Yllamco laboris nisi ut aliquip ex ea commodo.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
            backgroundImage: require("./Cards/Foto1.jpg")
        },
        {
            title: "Your CV as website",
            intro: "Yllamco laboris nisi ut aliquip ex ea commodo.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
            backgroundImage: require("./Cards/Foto2.jpg")
        },
        {
            title: "Another Service",
            intro: "Yllamco laboris nisi ut aliquip ex ea commodo.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
            backgroundImage: "/img-source/another-image.jpg"
        }
    ];
    
    return (
        <>
            <ThirdContainer>
                <div className="thirdTextContainer">
                    <h2>Discover more of our services</h2>
                    <p>Beyond designing web pages, we design solutions.<br/>
                    In our platform, we turn your vision into digital reality. 
                    From conceptualization to implementation, 
                    our expert team will guide you through every step of 
                    the website creation process. With intuitive tools and
                    a wide range of customizable designs, we're here to help you stand out online. Start today and take your web presence to the next level!
                    </p>
                </div>
                <Cards cardData={cardData}/>
            </ThirdContainer>
        </>
    );
}

export default ThirdSection;

const ThirdContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
    font-family: "Poppins", sans-serif;
    background-color: #2C2B2B;
    width: 100%;
    color: white;
    .thirdTextContainer {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
        padding: 2rem;

        h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #FFFFFF;
        }
        p {
            font-size: 1.5rem;
            margin-top: 0.5rem;
            line-height: 1.5;
        }
    }
    
    @media (max-width: 900px) {
        padding: 2rem 1rem;

        .thirdTextContainer {
            h2 {
                font-size: 2rem;
            }
            p {
                font-size: 1.2rem;
            }
        }
    }

    @media (max-width: 768px) {
    margin: 0;
    padding: 0;

        .thirdTextContainer {
            h2 {
                font-size: 1.5rem;
            }
            p {
                font-size: 1rem;
            }
        }
    }
`;
