import React from "react";
import styled from "styled-components";
import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiChopsticks, GiTacos, GiCroissant } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Cuisines() {
  return (
    <StyledIcons>
      <NavLink to="/cuisine/american">
        <div className="icon">
          <FaHamburger />
          <p>American</p>
        </div>
      </NavLink>
      <div className="icon">
        <GiChopsticks />
        <p>Chinese</p>
      </div>
      <div className="icon">
        <FaPizzaSlice />
        <p>Italian</p>
      </div>
      <div className="icon">
        <GiTacos />
        <p>Mexican</p>
      </div>
      <div className="icon">
        <GiCroissant />
        <p>French</p>
      </div>
    </StyledIcons>
  );
}

const StyledIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
  }

  .icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0rem 1rem;
    align-items: center;
    width: 90px;
    height: 90px;
    background: linear-gradient(35deg, #494949, #313131);
    border-radius: 50%;
    color: white;
    cursor: pointer;
    transition: all ease 0.5s;
    &:hover {
      background: orange;
      color: black;
      transform: translateY(-10px);
    }
    svg {
      font-size: 2rem;
    }

    p {
      font-size: 0.7rem;
      margin-top: 0.5rem;
    }
  }
`;

export default Cuisines;
