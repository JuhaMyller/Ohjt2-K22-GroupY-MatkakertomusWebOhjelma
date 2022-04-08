import React from 'react';
import styled from 'styled-components';
import Input from '../ResuableComponents/Input';
import Button from '../ResuableComponents/Button';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const PageInputsContainer = (props) => {
  const matkakohteet = useSelector((state) => state.matkakohteet.Matkakohteet);
  return (
    <Wrapper>
      <div className="input-container">
        <Input
          id="lisaaTarinaOtsikko"
          value={props.otsikko}
          onChange={props.setOtsikko}
          placeholder="Otsikko"
          styles={{ height: '50px' }}
        />
      </div>
      <div className="input-container">
        <select name="matkakohde" id="matkakohde">
          <option value=""></option>,
          {matkakohteet.map((kohde) => [
            <option value={kohde._id}>{kohde.kohdenimi}</option>,
          ])}
        </select>
        <Input
          id="lisaaTarinaMatkakohde"
          value={props.matkakohde}
          onChange={props.setMatkakohde}
          placeholder="Matkakohde"
          styles={{ height: '50px' }}
        />
      </div>
      <div className="input-container">
        <textarea
          id="lisaaTarinaTarina"
          value={props.tarina}
          onChange={(e) => props.setTarina(e.target.value)}
          rows="20"
          cols="40"
          placeholder="Tarina"
        />
      </div>
      <div className="button">
        <Button type="submit">Tallenna</Button>
      </div>
    </Wrapper>
  );
};

PageInputsContainer.propTypes = {
  tarina: PropTypes.string.isRequired,
  otsikko: PropTypes.string.isRequired,
  matkakohde: PropTypes.string.isRequired,
  setTarina: PropTypes.func.isRequired,
  setOtsikko: PropTypes.func.isRequired,
  setMatkakohde: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  max-width: 750px;
  width: 90%;
  margin: auto;
  .input-container:first-child {
    margin-top: 0;
  }
  .input-container {
    margin-top: 20px;
    textarea {
      width: 100%;
      font-size: var(--font-small);
      font-family: inherit;
      padding: 5px 15px;
      border-radius: 5px;
      border: none;
      background: var(--clr-grey);
      resize: none;
    }
  }
  .button {
    width: fit-content;
    margin: 50px auto;
    margin-right: 19px;
  }
`;

export default PageInputsContainer;
