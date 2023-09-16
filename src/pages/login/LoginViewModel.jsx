import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../../states/authUser/action';

const LoginViewModel = () => {
  const dispatch = useDispatch(); // @TODO: get dispatch function from store
  const onLogin = ({ email, password }) => {
    // @TODO: dispatch async action to login
    dispatch(asyncSetAuthUser({ email, password }));
  };
  return {
    onLogin,
  };
};

export default LoginViewModel;
