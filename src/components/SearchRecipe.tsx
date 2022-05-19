import React from "react";
import styled from "styled-components";

function SearchRecipe() {
  return (
    <StyledSearch className="searchSection">
      <div className="input">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className="content">
        <h2>Stuff fo here</h2>
      </div>
    </StyledSearch>
  );
}

const StyledSearch = styled.section`
  min-height: 90vh;
  width: 90%;
  margin: auto;
  .input {
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      font-size: 1.5rem;
      border-radius: 5px;
      border: none;
      margin: 2rem 1rem;
      padding: 1rem;
      background: #c2c2c2;
    }
    button {
      padding: 1rem;
      background: orange;
      border: none;
      border-radius: 5px;
      transition: all ease 0.5s;
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

export default SearchRecipe;
