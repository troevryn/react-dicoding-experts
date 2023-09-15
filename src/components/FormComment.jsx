/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function FormComment({
  onChangeComment, onSendForm, disabledButtonSend, valueComment,
}) {
  return (
    <div className="flex gap-4 flex-col">
      <h4 className="text-xl text-blue-500 font-medium">Beri Komentar</h4>
      <textarea onChange={onChangeComment} value={valueComment} />
      <Button backGroundColor="bg-green-500" color="text-white" label="Kirim" onClick={onSendForm} />
    </div>
  );
}

FormComment.propTypes = {
  onChangeComment: PropTypes.func.isRequired,
  onSendForm: PropTypes.func.isRequired,
  disabledButtonSend: PropTypes.bool,
  valueComment: PropTypes.string.isRequired,

};

export default FormComment;
