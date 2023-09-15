/* eslint-disable no-shadow */
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useInput from '../../hooks/useInput';
import { asyncRegisterUser } from '../../states/users/action';

const RegisterViewModel = () => {
  const [name, onChangeName] = useInput();
  const [email, onChangeEmail] = useInput();
  const [password, onChangePassword] = useInput();
  const dispatch = useDispatch(); // @TODO: get dispatch function from store
  const navigate = useNavigate();
  const onRegister = () => {
    dispatch(
      asyncRegisterUser({
        email,
        name,
        password,
        navigate,
      }),
    );
  };
  return {
    name,
    email,
    password,
    onChangeName,
    onChangePassword,
    onChangeEmail,
    onRegister,
  };
};

export default RegisterViewModel;
