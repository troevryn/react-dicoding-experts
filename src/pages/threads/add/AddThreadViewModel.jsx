import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { asyncAddThread } from '../../../states/threads/action';

const AddThreadViewModel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function submitAddThread({ body, title, category }) {
    setIsLoading(true);
    dispatch(asyncAddThread({ body, category, title }));
    navigate('/');
    setIsLoading(false);
  }
  return {

    submitAddThread,
    isLoading,
  };
};

export default AddThreadViewModel;
