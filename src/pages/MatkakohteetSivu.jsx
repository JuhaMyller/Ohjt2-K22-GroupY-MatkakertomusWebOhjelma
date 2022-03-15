import React from "react";
import styled from "styled-components";
import Kohdekortti from "../components/MatkakohteetSivu/Kohdekortti";
import Input from "../components/ResuableComponents/Input";

const MatkakohteetSivu = () => {
  function KohdeLista() {
    return (
      <Kohdekortti /> // Kohdekortti on ReusableComponents kansiossa
    );
  }

  return (
    <Wrapper>
      <h1>MatkakohteetSivu1Testausta</h1>

      <body>
        <div>
          <Input />
        </div>
        <table></table>
      </body>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default MatkakohteetSivu;
