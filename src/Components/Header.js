import React from "react";
import styled from "styled-components";
import { useState } from "react";
import {selectCars} from '../features/car/carSlice';
import { useSelector } from "react-redux";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <HeaderContainer>
      <Logo src="/images/logo.svg" />
      <Menu>
        {cars && cars.map((car,index) => <a key ={index} href="">{car}</a> )}

      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <a href="#">
          {" "}
          <i
            i
            onClick={() =>
              burgerStatus ? setBurgerStatus(false) : setBurgerStatus(true)
            }
            class="fa-solid fa-bars"
          ></i>
        </a>
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CustomClose>
          <i
            onClick={() =>
              burgerStatus ? setBurgerStatus(false) : setBurgerStatus(true)
            }
            class="fa-solid fa-xmark"
          ></i>
        </CustomClose>
        {cars && cars.map((car,index) =>  <li><a key ={index} href="">{car}</a></li> )}
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Used Inventory</a>
        </li>
        <li>
          <a href="">Trade-in</a>
        </li>
        <li>
          <a href="">Cyber-Truck</a>
        </li>
        <li>
          <a href="">Accessories</a>
        </li>
        <li>
          <a href="">Solar Panels</a>
        </li>
      </BurgerNav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 1000;
  flex-basis: 100%;
`;

const Logo = styled.img`
  margin-left: 2rem;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-inline: auto;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  margin-right: 2rem;
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0.5rem;
    font-size:1rem;
  }
  i {
    font-size: 2rem;
    cursor: pointer;
  }
  @media (max-width: 450px){
    a{
      font-size:0.8rem;
    }
  }
  
`;

const BurgerNav = styled.div`
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: all linear 0.5s;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 310px;
  height: 100vh;
  z-index: 1000;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  a {
    font-size: 1.5rem;
    line-height: 1.5;
  }
  a:hover {
    border-bottom: 3px solid black;
    transition: all linear 0.3s;
  }
`;

const CustomClose = styled.div`
  margin-left: auto;
  font-size: 2rem;
  margin-right: 1rem;
  cursor: pointer;
`;
