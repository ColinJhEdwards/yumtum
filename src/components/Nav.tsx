import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
  const [logoHover, setLogoHover] = useState(true);
  return (
    <StyledNav>
      <nav>
        <NavLink to="/">
          <h2
            id="logo"
            onMouseEnter={() => setLogoHover(false)}
            onMouseLeave={() => setLogoHover(true)}
          >
            {logoHover ? "Yumtum" : "Yummy In My Tummy"}
          </h2>
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
