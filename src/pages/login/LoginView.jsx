import React from 'react';
import { Link } from 'react-router-dom';
import InputBase from '../../components/InputBase';
import LoginViewModel from './LoginViewModel';
import Button from '../../components/Button';

function LoginView() {
  const {
    email, onChangeEmail, onChangePassword, onLogin, password,
  } = LoginViewModel();
  return (
    <div className="w-full h-[100vh] flex justify-center items-center px-4">
      <div className="max-w-4xl w-full flex flex-col drop-shadow-lg shadow p-4 border ">
        <h2 className="text-2xl text-center text-bold">Login</h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
        >
          <InputBase
            value={email}
            id="input-email"
            label="Email"
            type="email"
            onChangeInput={onChangeEmail}
            required
          />
          <InputBase
            value={password}
            id="input-password"
            label="Password"
            type="password"
            onChangeInput={onChangePassword}
            required
          />
          <Button
            label="Submit"
            type="submit"
            backGroundColor="bg-green-500"
            color="text-white"
          />
          <p>
            Don&apos;t have an account?
            {' '}
            <Link to="/register" className="text-blue-500 underline">Register</Link>
          </p>
        </form>

      </div>
    </div>
  );
}

export default LoginView;
