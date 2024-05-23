import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import saleImg from "./SALE.png"
function SecondSection() {

    const words = ["Companies", "Entrepreneurs", "Universities", "Developers", "Professionals", "you"];
    const [wordsIndex, setWordsIndex] = useState(0);
    const [characterIndex, setCharacterIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCharacterIndex(prevCharacterIndex => {
            if (prevCharacterIndex === words[wordsIndex]?.length) {
            setWordsIndex(prevWordsIndex => (prevWordsIndex + 1) % words.length);
            return 0;
        } else {
            return prevCharacterIndex + 1;
        }
        });
    }, 340);

    return () => clearInterval(intervalId);
    }, [wordsIndex, characterIndex]);
    return(
        <>
            <SecondContainer>
                <div className="custom-shape-divider-top-1716244571">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className="textContainer">
                    <h2>!Nice To Meet you!</h2>
                    <p>We're the digital websites companie <br/>
                    for {words[wordsIndex]?.slice(0, characterIndex)}  who want to<br/>
                    explore and create <span className="secondSpan" >Fantastic</span><br/>
                    experiences.</p>
                </div>
                <img src={saleImg} alt="" />
            </SecondContainer>
        </>
    )
}

export default SecondSection



const SecondContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    background-color: #FFFF00;
    width: 100%;
    height: 20rem;
    padding-bottom: 5rem;
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family: "Poppins", sans-serif;
    position: relative;

    img {
        width: 15rem;
        position: absolute;
        left: 86rem;
        top: 16rem;
        transform: rotate(20deg);
        transition: transform 0.5s ease-in-out;
        @media (max-width: 768px){
            left: 25.5rem;
            width: 13rem;
            top: 9rem;
        }
    }

    @keyframes enlargeShrink {
        0%, 100% {
            transform: scale(1) rotate(20deg);
        }
        50% {
            transform: scale(1.1) rotate(-20deg);
        }
    }

    img:hover {
        animation: enlargeShrink 0.5s ease-in-out infinite;
    }

    .custom-shape-divider-top-1716244571 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
    }

    .custom-shape-divider-top-1716244571 svg {
        position: relative;
        display: block;
        width: 100%;
        height: 150px;
    }

    .custom-shape-divider-top-1716244571 .shape-fill {
        fill: #ffffff;
    }

    .textContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        z-index: 1;
        position: relative;

        h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;

        }
        p {
            font-size: 2rem;
        }
        .firstSpan {
            position: relative;
            &::before {
                content: 'Companies';
                animation: words 20s infinite;
            }
            &::after {
                content: '';
                position: absolute;
                width: calc(100% + 8px);
                right: -8px;
                height: 100%;
                border-left: 2px solid black;
                animation: cursor .7s infinite, typing 20s steps(14);
            }
        }

        @keyframes cursor {
            to {
                border-left: 2px solid #FFFF00;
            }
        }

        @keyframes words {
            0%, 20% {
                content: 'Entrepreneurs';
            }
            21%, 40% {
                content: 'Universities';
            }
            41%, 60% {
                content: 'Developers';
            }
            61%, 80% {
                content: 'Professionals';
            }
            81%, 100% {
                content: 'you';
            }
        }

        @keyframes typing {
            10%, 15%, 30%, 35%, 50%, 55%, 70%, 75%, 90%, 95% {
                width: 0;
            }
            5%, 20%, 25%, 40%, 45%, 60%, 65%, 80%, 85% {
                width: calc(100% + 8px);
            }
        }

        .secondSpan {
            color: #FFFF00;
        }
    }

    @media (max-width: 900px) {
        height: auto;
        margin-top: 2rem;

        .custom-shape-divider-top-1716244571 {
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
        }
        .custom-shape-divider-top-1716244571 svg {
            width: 100%;
            height: auto;
        }
        .textContainer {
            h2 {
                font-size: 2rem;
                text-align: center;
            }
            p {
                font-size: 1.5rem;
                text-align: center;
                margin: 0.5rem 0;
            }
        }
    }

    @media (max-width: 558px) {
        height: auto;
        padding: 1rem;

        .textContainer {
            h2 {
                font-size: 1.5rem;
                margin-bottom: 0.5rem;
            }
            p {
                font-size: 1.2rem;
            }
        }
    }
`
