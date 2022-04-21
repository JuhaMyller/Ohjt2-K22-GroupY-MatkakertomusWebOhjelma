import React, { useEffect, useState } from 'react';
import Input from '../ResuableComponents/Input';
import Button from '../ResuableComponents/Button';
import axios from '../../api/Axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import serverUrl from '../../utils/serverUrl';

const JasenKortti = () => {
  return (
    <div className='kohdekortti' style={{ backgroundImage: `url(${kuva})` }}>
      <div className='Jasenkortti'>
        <h1>
          {etunimi} {sukunimi}
        </h1>
        <h4>{nimimerkki}</h4>
        <p>{esittely}</p>
      </div>
      <div className='kohdekortti_tarinat'>
        <p>{createdAt}</p>
        <p></p>
      </div>
    </div>
  );
};
export default JasenKortti;
