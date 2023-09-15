import React from 'react';
import { Link } from 'react-router-dom';
import InputBase from '../../components/InputBase';
import Button from '../../components/Button';
import RegisterViewModel from './RegisterViewModel';

function RegisterView() {
  const {
    email,
    name,
    onChangeEmail,
    onChangeName,
    onChangePassword,
    onRegister,
    password,
  } = RegisterViewModel();
  return (
    <div className="w-full h-[100vh] flex justify-center items-center px-4">
      <div className="max-w-4xl w-full flex flex-col drop-shadow-lg shadow p-4 border ">
        <h2 className="text-2xl text-center text-bold">Register</h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            onRegister();
          }}
        >
          <InputBase
            value={name}
            id="input-name"
            label="Name"
            type="text"
            onChangeInput={onChangeName}
            required
          />
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
            Already have an account?
            {' '}
            <Link to="/" className="text-blue-500 underline">Login</Link>
          </p>
        </form>

      </div>
    </div>
  );
}

export default RegisterView;
