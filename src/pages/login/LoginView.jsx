/* eslint-disable no-restricted-globals */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../../components/LoginInput';
import { asyncSetAuthUser } from '../../states/authUser/action';

function LoginView() {
  const dispatch = useDispatch(); // @TODO: get dispatch function from store
  const onLogin = ({ email, password }) => {
    // @TODO: dispatch async action to login
    dispatch(asyncSetAuthUser({ email, password }));
  };
  return (
    <div className="w-full h-[100vh] flex justify-center items-center px-4">
      <div className="max-w-4xl w-full flex flex-col drop-shadow-lg gap-4 shadow p-4 border ">
        <h2 className="text-2xl text-center text-bold">Login</h2>
        <LoginInput onLogin={onLogin} />
        <p>
          Don&apos;t have an account?
          {' '}
          <Link to="/register" className="text-blue-500 underline">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginView;
