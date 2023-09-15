import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from '../../../hooks/useInput';
import { asyncAddThread } from '../../../states/threads/action';

const AddThreadViewModel = () => {
  const [title, onChangeTitle] = useInput('');
  const [body, onChangeBody] = useInput('');
  const [category, onChangeCategory] = useInput('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function submitAddThread() {
    setIsLoading(true);
    dispatch(asyncAddThread({ body, category, title }));
    navigate('/');
    setIsLoading(false);
  }
  return {
    title,
    body,
    category,
    onChangeBody,
    onChangeCategory,
    onChangeTitle,
    submitAddThread,
    isLoading,
  };
};

export default AddThreadViewModel;
