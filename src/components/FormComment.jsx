/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import useInput from '../hooks/useInput';

function FormComment({
  onSendForm, disabledButtonSend,
}) {
  const [comment, onChangeComment, setComment] = useInput('');
  return (
    <div className="flex gap-4 flex-col">
      <h4 className="text-xl text-blue-500 font-medium">Beri Komentar</h4>
      <textarea onChange={onChangeComment} value={comment} placeholder="Komentar" />
      <Button
        backGroundColor="bg-green-500"
        color="text-white"
        label="Kirim"
        onClick={() => {
          onSendForm(comment);
          setComment('');
        }}
      />
    </div>
  );
}

FormComment.propTypes = {
  onSendForm: PropTypes.func.isRequired,
  disabledButtonSend: PropTypes.bool,

};

export default FormComment;
