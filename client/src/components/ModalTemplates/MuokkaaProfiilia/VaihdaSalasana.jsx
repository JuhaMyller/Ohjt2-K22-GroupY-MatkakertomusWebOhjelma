import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { useModalContext } from '../../ResuableComponents/Modal/ModalContext';

import Input from '../../ResuableComponents/Input';
import Button from '../../ResuableComponents/Button';

const VaihdaSalasana = () => {
  const [vanhaSalasana, setVanhaSalasana] = useState('');
  const [salasana, setSalasana] = useState('');
  const [salasanaTarkistus, setSalasanaTarkistus] = useState('');

  const [error, setError] = useState('');

  const { closeModal } = useModalContext();
  const axios = useAxiosPrivate();

  useEffect(() => {
    if (!error) return;
    const timeout = setTimeout(() => {
      setError('');
    }, 3000);
    return () => clearTimeout(timeout);
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (salasana !== salasanaTarkistus)
      return setError('salasanat eivät täsmää');
    try {
      const response = await axios.put('/api/user/changepassword', {
        salasana: vanhaSalasana,
        uusiSalasana: salasana,
      });
      if (response.status === 200) {
        toast.success('Salasana vaihdettu', {
          position: 'top-center',
          duration: 1500,
        });
        closeModal();
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <Input
        id="vanhasalasana"
        placeholder="Vanha salasana"
        value={vanhaSalasana}
        onChange={setVanhaSalasana}
        type="password"
      />
      <Input
        id="uusisalasana"
        placeholder="Uusi salasana"
        value={salasana}
        onChange={setSalasana}
        type="password"
      />

      <Input
        id="salasanatarkistus"
        placeholder="Uusi salasana"
        value={salasanaTarkistus}
        onChange={setSalasanaTarkistus}
        type="password"
      />
      <div className="btn">
        <Button type="submit">Tallenna</Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  padding: 10px;
  width: 400px;
  max-width: 90%;
  margin: auto;
  p {
    color: red;
    padding: 10px 0;
  }
  input {
    margin-top: 5px;
  }
  .btn {
    margin: 20px auto;
    width: fit-content;
  }
`;

export default VaihdaSalasana;
