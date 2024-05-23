import React, {useState} from 'react'
import styled from 'styled-components'
import Burguer from './BurguerItem/burguer.jsx'
import { Link } from 'react-router-dom'

function NavBar() {

    const [clicked, setClicked] = useState(false)
    const handleClick = (e) => {
        if (e.target.tagName === 'A') return;
        setClicked(!clicked);
    }
    return(
        <>
            <NavContainer>
                <h2>Web<span>Mosaic</span></h2>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <Link onClick={(e) => {handleClick(e);}} to={`/Home`}>Home</Link>
                    <Link onClick={(e) => {handleClick(e);}} to={`/aboutus`}>About Us</Link>
                    <Link onClick={(e) => {handleClick(e);}} to={`/services`}>Servises</Link>
                    <Link onClick={(e) => {handleClick(e);}} to={`/contactus`}>Contact Us</Link>
                </div>
                <div className="burguerContainer">
                    <Burguer clicked= {clicked} handleClick={handleClick}/>
                </div>
                <BgDiv className={`${clicked ? 'active' : ''}`} ></BgDiv>
            </NavContainer>
        </>
    )
}

export default NavBar

const NavContainer = styled.nav`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
    z-index: 30;
    h2{
        font-family: "Rubik", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-size: 2.5rem;
        span{
            font-family: "Rubik", sans-serif;
            font-optical-sizing: auto;
            font-weight: 800;
            font-style: normal;
            color: #FF1F1F;
            z-index: 10;
        }
    }
    position: sticky;
    top: 0;
    padding: 0;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 2px solid black;
    @media(max-width: 768px) {
        justify-content: space-between;
        width: 100%;
    }
    a{
        font-family: "Poppins", sans-serif;
        font-weight: 300;
        font-style: normal;   
        color: black;
        text-decoration: none;
        margin-right: 1rem;
        margin-left: 1rem;
    }
    .links{
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        a{
            color: black;
            font-size: 2rem;
            display: block;
            
        }
        @media(min-width: 768px){
            position: initial;
            margin: 0;

            a{
                display: inline;
                
            }
        }

    }
    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 60%;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 1;
        a{
            color: #FFFF00;
            font-size: 2.3rem;
            margin-top: 2rem;
        }
    }
    .burguerContainer{
        @media(min-width: 768px){
            display: none;
        }
    }

`
const BgDiv = styled.div`
    position: absolute;
    background-color: #2C2B2B;
    top: -1000px;
    left: -1000px;
    z-index: 0; 
    width: 100%;
    height: 100%;
    transition: all .6s ease;
    &.active{
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 500px;
    }

`