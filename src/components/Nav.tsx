import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <nav>
        <NavLink to="/">
          <h2 id="logo">Yumtum</h2>
        </NavLink>
      </nav>
    </StyledNav>
  );
};

const StyledNav = styled.header`
  min-height: 5rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
  color: orange;
`;

export default Nav;
