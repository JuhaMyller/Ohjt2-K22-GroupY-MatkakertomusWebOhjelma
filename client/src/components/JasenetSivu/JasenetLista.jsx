import JasenKortti from './JasenKortti';
import React, { useEffect, useState } from 'react';
import Input from '../ResuableComponents/Input';
import Button from '../ResuableComponents/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import serverUrl from '../../utils/serverUrl';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const JasenetLista = () => {
  const axios = useAxiosPrivate();

  const haeMatkaaja = async () => {
    const responseMatkaajat = await axios.get('/api/user');
    console.log(responseMatkaajat);
  };
  useEffect(() => {
    haeMatkaaja();
  }, []);
  return (
    <div>
      <JasenKortti />
    </div>
  );
};
export default JasenetLista;
