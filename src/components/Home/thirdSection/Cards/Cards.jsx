import React from "react";
import styled from "styled-components";

function Cards({ cardData }) {
    return (
        <CardContainer>
            {cardData.map((card, index) => (
                <Card key={index} backgroundImage={card.backgroundImage}>
                    <CardOverlay />
                    <CardContent>
                        <h3>{card.title}</h3>
                        <p>{card.intro}</p>
                        <CardDescription>{card.description}</CardDescription>
                    </CardContent>
                </Card>
            ))}
        </CardContainer>
    );
}

export default Cards;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Card = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 600px) {
        width: 90%;
        height: auto;
    }
`;

const CardOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
`;

const CardContent = styled.div`
    position: relative;
    z-index: 1;
    padding: 1.5rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    h3 {
        margin: 0;
        font-size: 1.8rem;
        font-weight: 600;
    }

    p {
        margin: 0.5rem 0;
        font-size: 1.2rem;
        font-weight: 400;
    }
`;

const CardDescription = styled.div`
    font-size: 0.9rem;
    line-height: 1.5;
    margin-top: 0.5rem;
`;
