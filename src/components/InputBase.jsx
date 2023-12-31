/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

function InputBase({
  type, onChangeInput, label, id, required, value, textarea, placeholder,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      {textarea ? (
        <textarea className="rounded" value={value} onChange={onChangeInput} id={id} name={id} required={required} placeholder={placeholder} />
      ) : (
        <input
          className="rounded"
          id={id}
          name={id}
          required={required}
          value={value}
          onChange={onChangeInput}
          type={type}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

InputBase.propTypes = {
  type: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  textarea: PropTypes.bool,
};

export default InputBase;
