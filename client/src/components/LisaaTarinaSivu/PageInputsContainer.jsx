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
      <div className="lisaatarina-input-container">
        <Input
          id="lisaaTarinaOtsikko"
          value={props.otsikko}
          onChange={props.setOtsikko}
          placeholder="Otsikko"
          styles={{ height: '50px' }}
        />
      </div>
      <div className="lisaatarina-input-container">
        <select
          value={props.matkakohde}
          onChange={(e) => props.setMatkakohde(e.target.value)}
          name="matkakohde"
          id="matkakohde"
          required
        >
          <option value="">Valitse matkakohde</option>,
          {matkakohteet.map((kohde) => [
            <option key={kohde._id} value={kohde._id}>
              {kohde.kohdenimi}
            </option>,
          ])}
        </select>
      </div>
      <div className="input-container-switch">
        <p>Aseta tarina yksityiseksi</p>
        <label className="switch">
          <input
            checked={props.yksityinen}
            onChange={(e) => props.setYksityinen(e.target.checked)}
            type="checkbox"
          />
          <span className="slider"></span>
        </label>
      </div>
      <div className="lisaatarina-input-container">
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
  .lisaatarina-input-container:first-child {
    margin-top: 0;
  }
  .lisaatarina-input-container {
    margin-top: 20px;
    select {
      width: 100%;
      font-size: var(--font-small);
      font-family: inherit;
      padding: 10px 15px;
      border-radius: 5px;
      border: none;
      background: var(--clr-grey);
      option {
      }
    }
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

  .input-container-switch {
    display: flex;
    margin-top: 20px;
    align-items: center;
    p {
      font-size: var(--font-small);
      font-weight: 500;
    }
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin: 0 30px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

export default PageInputsContainer;
