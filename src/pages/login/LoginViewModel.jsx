import { useDispatch } from 'react-redux';
import useInput from '../../hooks/useInput';
import { asyncSetAuthUser } from '../../states/authUser/action';

const LoginViewModel = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const dispatch = useDispatch(); // @TODO: get dispatch function from store
  const onLogin = () => {
    // @TODO: dispatch async action to login
    dispatch(asyncSetAuthUser({ email, password }));
  };
  return {
    email, password, onChangeEmail, onChangePassword, onLogin,
  };
};

export default LoginViewModel;
