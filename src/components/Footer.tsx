import React from "react";
import styled from "styled-components";

function Footer() {
  return <StlyedFoot>© Yumtum 2022</StlyedFoot>;
}

const StlyedFoot = styled.footer`
  min-height: 5vh;
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;

export default Footer;
