import React from "react";
import styled from "styled-components";
import Kohdekortti from "../MatkakohteetSivu/Kohdekortti";

const MatkakohteetSivu = () => {
  function KohdeLista() {
    return (
      <Kohdekortti /> // Kohdekortti on ReusableComponents kansiossa
    );
  }

  return (
    <Wrapper>
      <h1>MatkakohteetSivu</h1>

      <body>
        <div>
          <input type="text" className="searchBar" placeholder="Hae kohteita">
            <button className="SearchButton" onClick={() => handleFetch()}>
              Hae
            </button>
          </input>
        </div>
        <table></table>
      </body>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default MatkakohteetSivu;
