import React from 'react';
import PropTypes from 'prop-types';
import InputBase from './InputBase';
import Button from './Button';
import useInput from '../hooks/useInput';

function LoginInput({ onLogin }) {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  return (
    <form
      className="flex flex-col gap-4"
    >
      <InputBase
        value={email}
        id="input-email"
        label="Email"
        type="email"
        onChangeInput={onChangeEmail}
        required
        placeholder="Email"
      />
      <InputBase
        value={password}
        id="input-password"
        label="Password"
        type="password"
        placeholder="Password"
        onChangeInput={onChangePassword}
        required
      />
      <Button
        label="Submit"
        type="button"
        backGroundColor="bg-green-500"
        color="text-white"
        onClick={() => onLogin({ email, password })}
      />

    </form>
  );
}
LoginInput.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginInput;
