import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Nav: React.FC = () => {
  const [logoHover, setLogoHover] = useState(true);
  return (
    <StyledNav>
      <nav>
        <NavLink to="/">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            id="logo"
            onMouseEnter={() => setLogoHover(false)}
            onMouseLeave={() => setLogoHover(true)}
          >
            {logoHover ? "Yumtum" : "Yummy In My Tummy"}
          </motion.h2>
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
