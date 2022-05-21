import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

function InputBar() {
  const [searchVal, setSearchVal] = useState("");

  const navigate = useNavigate();

  // this function will run when the form is submitted
  const searchHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchVal}`);
  };

  return (
    <StyledSearch className="searchSection">
      <div className="input">
        <form onSubmit={(e) => searchHandler(e)}>
          <div>
            <input
              type="text"
              placeholder="Search..."
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              required
            />
            <button>
              <BiSearchAlt />
            </button>
          </div>
        </form>
      </div>
    </StyledSearch>
  );
}

const StyledSearch = styled.section`
  min-height: 5vh;
  width: 90%;
  margin: auto;
  .input {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      position: relative;
      width: 100%;
    }
    input {
      font-size: 1.5rem;
      border-radius: 50px;
      border: none;
      margin: 2rem 0rem;
      padding: 1rem 3rem;
      color: white;
      border: none;
      outline: none;
      background: linear-gradient(35deg, #494949, #313131);
    }
    button {
      position: absolute;
      top: 50%;
      left: 0%;
      transform: translate(100%, -50%);
      background: transparent;
      border: none;
      border-radius: 50px;
      transition: all ease 0.3s;
      font-size: 1.2rem;
      color: white;
      cursor: pointer;
    }
  }
`;

export default InputBar;
