import JasenetLista from '../components/JasenetSivu/JasenetLista';
import React, { useEffect } from 'react';
const JasenetSivu = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <h1>
      <JasenetLista />
    </h1>
  );
};
export default JasenetSivu;
