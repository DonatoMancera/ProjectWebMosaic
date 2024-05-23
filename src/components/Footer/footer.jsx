import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <TopLine />
      <FooterContent>
        <LeftContent>
          <p>Información breve sobre la empresa o servicio.</p>
        </LeftContent>
        <RightContent>
          <FooterLinks>
            <div><a href="#">Contact Us</a></div>
            <div><a href="#">About Us</a></div>
          </FooterLinks>
        </RightContent>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  height: auto;
  background-color: white;
  color: black;
  padding: 10px 0;
`;

const TopLine = styled.div`
  height: 2px;
  background-color: black;
  margin-bottom: 20px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  flex-wrap: wrap; 
  padding: 0 20px; 

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center; 
  }
`;

const LeftContent = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    width: 100%; 
    margin-bottom: 20px; 
  }
`;

const RightContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;

  @media (max-width: 768px) {
    width: 100%; 
    align-items: center; 
  }
`;

const FooterLinks = styled.div`
  div {
    display: inline-block;
    width: 100%;
    margin-left: 10rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: solid 2px black;

    &:hover {
      background-color: #FFFF00;
    }
    @media (max-width: 768px) {
      margin-left: 0%;
      
      
    }
  }

  a {
    color: black;
    text-decoration: none;
    margin-bottom: 10px;
    transition: color 0.3s;
    padding-left: 1rem;
    padding-right: 5rem;

    &:hover {
      color: white;
    }
  }
`;