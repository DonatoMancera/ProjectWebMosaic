import React from "react";
import styled from "styled-components";


function FirstSection(){
    return (
        <>
            <FirstContainer>
                <div className="homeContainer">
                    <h1>TRANSFORMING BUSINESSES,<br/>EMPOWERING FUTURES</h1>
                    <button>LET'S BUILD A WEBSITE</button>
                    <svg className="redForm" width="947" height="511" viewBox="0 0 947 511" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M0 465.312C0 490.164 20.1472 510.312 45 510.312L157.662 510.311L315.324 510.312H472.992H630.661H788.346H901.034C925.887 510.312 946.034 490.164 946.034 465.312V45.2231C946.034 9.87173 907.143 -11.675 877.171 7.07114L788.346 62.6283L647.042 7.40248C636.509 3.2858 624.812 3.286 614.279 7.40306L472.992 62.6283L331.706 7.40352C321.173 3.28618 309.475 3.28627 298.941 7.40375L157.662 62.6283L68.8656 7.08017C38.8941 -11.6691 0 9.87745 0 45.2303V465.312Z" fill="#FF1F1F"/>
                    </svg>
                    <svg className="semiCircle" width="1093" height="536" viewBox="0 0 1093 536" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M556.746 0C249.243 0 0 239.718 0 535.47H339.259C339.259 419.949 436.631 326.348 556.746 326.348C676.804 326.348 774.176 419.949 774.176 535.47H1093C1093 239.722 864.192 0 556.746 0Z" fill="#FFFF00"/>
                    </svg>
                    <svg className="blackFlower" width="878" height="840" viewBox="0 0 878 840" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M439.075 178.778C439.075 -82.6299 227.956 -39.4672 339.725 199.088C227.956 -39.4704 53.3401 82.5493 257.554 256.509C53.3401 82.5493 -54.5761 262.326 206.77 341.11C-54.5761 262.326 -77.1369 468.779 196.154 438.265C-77.1369 468.779 -10.44 666.206 227.541 531.171C-10.44 666.206 133.985 820.475 295.504 603.767C133.982 820.475 331.159 904.908 388.291 643.5C331.159 904.908 546.995 904.908 489.863 643.5C546.995 904.908 744.172 820.471 582.65 603.767C744.172 820.475 888.594 666.203 650.613 531.171C888.594 666.206 955.29 468.779 682 438.265C955.29 468.779 932.73 262.326 671.384 341.11C932.73 262.326 824.81 82.5493 620.6 256.509C824.814 82.5493 650.198 -39.4672 538.429 199.088C650.194 -39.4704 439.075 -82.6299 439.075 178.778Z" fill="#2C2B2B"/>
                    </svg>
                </div>
                <div className="homeTextContainer">
                    <h3>Web Programming</h3>
                    <h3>Back-End Services</h3>
                    <h3>Web Desing</h3>
                </div>
            </FirstContainer>
        </>
    )
}

export default FirstSection;

const FirstContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    width: 100%;
    height: 20rem;
    margin-top: 2rem;
    position: relative;
    .homeContainer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        h1 {
            font-family: "Poppins", sans-serif;
            font-weight: 900;
            font-size: 2.5rem;
            margin-top: 3.5rem;
            margin-left: 5px;
        }
        button {
            font-family: "Poppins", sans-serif;
            font-weight: 400;
            font-style: normal;
            margin-top: 4rem;
            margin-left: 5px;
            height: 3.5rem;
            padding: 3px;
            background-color: #2C2B2B; 
            color: #fff; 
            border: none;
            border-radius: 10px; 
            padding: 10px 20px; 
            font-size: 16px; 
            cursor: pointer; 
            transition: background-color 0.3s, color 0.3s;
        }
        button:hover {
            background-color: #FFFF00; 
            color: black; 
        }
        .redForm {
            display: block;
            position: absolute;
            width: 30%;
            height: 30%;
            z-index: -1;
            left: 50px;
            transform: rotate(15deg);
            transition: .3s;
            animation: moveRedForm 4s ease-in 2s infinite;
        }
        @keyframes moveRedForm {
            0% {
                transform: rotate(15deg) rotateY(180deg);
            }
            50% {
                transform: rotate(15deg) rotateY(0deg);
            }
            100% {
                transform: rotate(15deg) rotateY(-180deg);
            }
        }
        .semiCircle {
            display: block;
            position: absolute;
            width: 30%;
            height: 30%;
            z-index: -1;
            left: 400px;
            transform: rotate(15deg);
            animation: deformAndBounce 1s ease-in-out 2s infinite;
        }
        @keyframes deformAndBounce {
            0% {
                transform: rotate(15deg) scale(1);
            }
            25% {
                transform: rotate(15deg) scale(1.2);
            }
            50% {
                transform: rotate(15deg) scale(0.8);
            }
            75% {
                transform: rotate(15deg) scale(1.1);
            }
            100% {
                transform: rotate(15deg) scale(1);
            }
        }
        .blackFlower {
            display: block;
            position: absolute;
            width: 40%;
            height: 40%;
            z-index: -1;
            left: 700px;
            top: 60px;
            transition: .3s;
        }
        .blackFlower:hover {
            animation: moveblackflower 3s linear infinite;
            z-index: 3;
        }
        @keyframes moveblackflower {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
    .homeTextContainer {
        font-family: "Poppins", sans-serif;
        font-weight: 200;
        font-size: 20px;
        font-style: normal;
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    @media (max-width: 900px) {
        height: auto;
        .homeContainer {
            align-items: center;
            h1 {
                font-size: 2rem;
                text-align: center;
                margin: 2rem 0;
            }
            button {
                margin-left: 0;
            }
            .redForm {
                width: 50%;
                height: 50%;
                left: 0;
            }
            .semiCircle {
                width: 50%;
                height: 50%;
                left: 50%;
                transform: translateX(-50%);
            }
            .blackFlower {
                width: 30%;
                height: 30%;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }
        .homeTextContainer {
            flex-direction: column;
            align-items: center;
            h3 {
                margin: 0.5rem 0;
            }
        }
    }
`