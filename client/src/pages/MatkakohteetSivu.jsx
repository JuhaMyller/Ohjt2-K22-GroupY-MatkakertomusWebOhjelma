import React, { useEffect } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import KohdeLista from '../components/MatkakohteetSivu/KohdeLista';
import { useDispatch } from 'react-redux';
import { getMatkakohteet } from '../Redux/Actions/matkakohdeActions';

const MatkakohteetSivu = () => {
  const dispatch = useDispatch();
  const axios = useAxiosPrivate();

  const handleGetMatkakohteet = () => {
    dispatch(getMatkakohteet(axios));
  };

  useEffect(() => {
    handleGetMatkakohteet();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div>
      <KohdeLista />
    </div>
  );
};

export default MatkakohteetSivu;
