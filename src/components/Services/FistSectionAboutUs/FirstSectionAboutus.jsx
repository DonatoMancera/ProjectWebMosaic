import React from "react";
import styled from "styled-components";
import firtImg from "./firstImg.png"
import secondImg from "./secondImg.png"

function FirstSectionAboutUs(){
    return(
        <AboutUsConteiner>
            <div class="custom-shape-divider-top-1716245214">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="img-container">
                <img src={secondImg} alt="" />
            </div>
            <div className="textContainer">
                <h1>we want you to know more about us</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni modi eveniet aspernatur illum nobis.</p>
                <button>Explore</button>
            </div>
            <div className="img-container">
                <img src={firtImg} alt="" />
            </div>
        </AboutUsConteiner>
    )
}

export default FirstSectionAboutUs;

const AboutUsConteiner = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    overflow: hidden;

    .custom-shape-divider-top-1716245214 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
    }

    .custom-shape-divider-top-1716245214 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 140px;
    }

    .custom-shape-divider-top-1716245214 .shape-fill {
        fill: #ffffff;
    }

    .img-container {
        width: 40%;
        margin: 2rem 0;
        &:nth-child(2){
            display: none;
        }
        @media (max-width: 768px) {
            width: 100%;
            &:nth-child(2){
            display: initial;
        }
        }

        img {
            width: 100%;
            height: auto;
            opacity: 0.5;
        }
    }
    .textContainer {
    font-family: "Poppins", sans-serif;
    color: white;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    text-align: center;

    @media (max-width: 768px) {
        width: 100%;

    }

    h1 {
        color: #2c2b2b;
        font-weight: 900;
        margin-bottom: 1rem;

        @media (max-width: 768px) {
        font-size: 2rem;
        }
    }

    p {
        color: #2c2b2b;
        font-size: 1.1rem;
        margin-bottom: 2rem;
        max-width: 25rem;

        @media (max-width: 768px) {
        font-size: 1.5rem;
        }
    }

    button {
        font-weight: 200;
        font-style: normal;
        height: 2.5rem;
        margin-top: 1.5rem;
        background-color: #2c2b2b;
        color: #fff;
        border: none;
        border-radius: 10px;
        padding: 10px 20px;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;

        @media (max-width: 768px) {
        font-size: 1.2rem;
        }
    }

    button:hover {
        background-color: #ffff00;
        color: black;
    }
}
    
`