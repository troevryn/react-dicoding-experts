import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import InputBase from './InputBase';
import Button from './Button';

function ThreadInput({ onSendForm, isLoading = false }) {
  const [title, onChangeTitle] = useInput('');
  const [body, onChangeBody] = useInput('');
  const [category, onChangeCategory] = useInput('');
  return (
    <div className="flex flex-col gap-4">
      <InputBase
        label="Title"
        type="text"
        required
        placeholder="Title"
        value={title}
        onChangeInput={onChangeTitle}
        id="title-input"
      />
      <InputBase
        label="body"
        type="text"
        required
        placeholder="Body"
        value={body}
        onChangeInput={onChangeBody}
        id="body-input"
        textarea
      />

      <InputBase
        label="Category"
        type="text"
        required
        placeholder="Category"
        value={category}
        onChangeInput={onChangeCategory}
        id="category-input"
      />
      <Button
        backGroundColor="bg-green-500"
        type="button"
        onClick={() => {
          onSendForm({
            category, body, title,
          });
        }}
        color="text-white"
        label={isLoading ? 'Loading...' : 'Kirim'}
        disabled={isLoading}
      />

    </div>
  );
}
ThreadInput.propTypes = {
  onSendForm: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,

};

export default ThreadInput;
