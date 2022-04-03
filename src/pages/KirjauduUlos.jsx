import React, { useEffect } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { KIRJAUDU_ULOS_SUCCESS } from '../Redux/Actions/authActions';

const KirjauduUlos = () => {
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.auth.accessToken);
  useEffect(async () => {
    if (!accessToken) {
      navigate('/', { replace: true });
      return toast.error('Et ole kirjautunut sisään', {
        position: 'top-center',
        duration: 2000,
      });
    }
    try {
      await axiosPrivate.post('/api/user/logout');
      dispatch({ type: KIRJAUDU_ULOS_SUCCESS });
      navigate('/', { replace: true });
    } catch (error) {
      toast.error('Ilmeni virhe kirjautuessa ulos', {
        position: 'top-center',
        duration: 2000,
      });
    } finally {
      return navigate('/', { replace: true });
    }
  }, []);

  return <></>;
};

export default KirjauduUlos;
