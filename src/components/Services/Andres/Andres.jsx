import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";
import Img from "./ESTA.png"
import htmlIcon from "../Icons/HTML.png";
import cssIcon from "../Icons/CSS2.png";
import bootstrapIcon from "../Icons/Bootstrap.png";
import jsIcon from "../Icons/JS.png";
import pythonIcon from "../Icons/python.png";

const StockTickerContext = createContext();

const skills = [
    { name: "HTML", level: "100%", icon: htmlIcon },
    { name: "CSS", level: "100%", icon: cssIcon },
    { name: "Bootstrap", level: "70%", icon: bootstrapIcon },
    { name: "JavaScript", level: "80%", icon: jsIcon },
    { name: "Python", level: "70%", icon: pythonIcon },
    ];

const  Andres = () => {
    const [stockTicker, setStockTicker] = useState({
        text: "Andres Sebastian Fernandez Florez - BackEnd developer",
    });
    return (
        <StockTickerContext.Provider value={{ stockTicker, setStockTicker }}>
        <ContainerAll>
            <ProfileContainer>
            <ProfileImage src={Img} alt="Andres Sebastian Fernandez Florez" />
            <SkillList>
                {skills.map((skill, index) => (
                <SkillItem key={index}>
                    <SkillIcon src={skill.icon} alt={skill.name} />
                    <SkillName>{skill.name}</SkillName>
                    <SkillLevel>
                    <SkillProgress level={skill.level}></SkillProgress>
                    <SkillPercentage>{skill.level}</SkillPercentage>
                    </SkillLevel>
                </SkillItem>
                ))}
            </SkillList>
            </ProfileContainer>
            <StockTickerContainer />
        </ContainerAll>
        </StockTickerContext.Provider>
    );
}

export default Andres;

const ContainerAll = styled.div`
    @import url("https://fonts.cdnfonts.com/css/aileron");
    margin-top: 2rem;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: #2c2b2b;
    color: white;
    padding: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
    `;

    const ProfileContainer = styled.div`
    text-align: center;
    position: relative;
    max-width: 800px;
    width: 100%;
    `;

    const ProfileImage = styled.img`
    margin-top: 75px;
    width: 25rem;
    z-index: 4;
    max-width: 100%;

    @media (max-width: 768px) {
        width: 15rem;
    }
    `;

    const SkillList = styled.ul`
    font-family: "Aileron", sans-serif;
    font-weight: 600;
    color: white;
    list-style: none;
    padding: 0;
    margin: 2rem 0 0;

    @media (max-width: 768px) {
        margin-top: 1rem;
    }
    `;

    const SkillItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    `;

    const SkillIcon = styled.img`
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;

    @media (max-width: 768px) {
        width: 1.5rem;
        height: 1.5rem;
    }
    `;

    const SkillName = styled.span`
    flex: 1;
    text-align: left;
    `;

    const SkillLevel = styled.div`
    display: flex;
    align-items: center;
    flex: 2;
    `;

    const SkillProgress = styled.div`
    height: 1rem;
    background-color: #444;
    border-radius: 0.5rem;
    overflow: hidden;
    position: relative;
    flex: 1;
    margin-right: 1rem;

    &:before {
        content: "";
        display: block;
        height: 100%;
        width: 0;
        background-color: #00bfff;
        transition: width 1s ease-in-out;
    }

    &:hover:before {
        width: ${(props) => props.level};
    }
    `;

    const SkillPercentage = styled.span`
    width: 3rem;
    text-align: right;
    `;

    const StockTickerContainer = () => {
    const { stockTicker } = useContext(StockTickerContext);

    return (
        <StockTicker>
        <div className="ticker-content">
            <span>{stockTicker.text}</span>
        </div>
        </StockTicker>
    );
    };

    const StockTicker = styled.div`
    font-size: 1.2rem;
    border-block: 1px solid white;
    overflow: hidden;
    position: absolute;
    top: 13rem;
    z-index: 0;
    width: 100%;

    .ticker-content {
        display: inline-block;
        white-space: nowrap;
        padding-left: 100%;
        animation: scroll 10s linear infinite;

        span {
        font-family: "Aileron", sans-serif;
        color: white;
        font-style: italic;
        font-weight: 700;
        font-size: 40px;
        }
    }

    @keyframes scroll {
        0% {
        transform: translateX(0%);
        }
        100% {
        transform: translateX(-100%);
        }
    }

    @media (max-width: 768px) {
        font-size: 4rem;
        top: 25rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
        top: 23rem;
    }
    `;

