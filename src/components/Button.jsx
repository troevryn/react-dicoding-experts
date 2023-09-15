/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

function Button({
  color, backGroundColor, type = 'button', className = '', onClick = () => {}, label = '', disabled,
}) {
  return (
    <button type={type} disabled={disabled} className={`px-4 py-2 disabled:opacity-70 disabled:cursor-not-allowed rounded ${color} ${backGroundColor} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}
Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  onClick: PropTypes.func,
  color: PropTypes.string,
  backGroundColor: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
export default Button;
