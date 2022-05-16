import React from "react";
import styled from "styled-components";

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <nav>
        <h2 id="logo">Yumtum</h2>
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
