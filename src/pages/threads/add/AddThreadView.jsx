import React from 'react';
import InputBase from '../../../components/InputBase';
import Button from '../../../components/Button';
import AddThreadViewModel from './AddThreadViewModel';

function AddThreadView() {
  const {
    body,
    category,
    onChangeBody,
    onChangeCategory,
    onChangeTitle,
    submitAddThread,
    title, isLoading,
  } = AddThreadViewModel();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitAddThread();
      }}
      className="flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold">Tambahkan Thread</h2>
      <InputBase
        label="Title"
        type="text"
        required
        value={title}
        onChangeInput={onChangeTitle}
        id="title-input"
      />
      <InputBase
        label="body"
        type="text"
        required
        value={body}
        onChangeInput={onChangeBody}
        id="body-input"
        textarea
      />

      <InputBase
        label="Category"
        type="text"
        required
        value={category}
        onChangeInput={onChangeCategory}
        id="category-input"
      />
      <Button backGroundColor="bg-green-500" type="submit" color="text-white" label={isLoading ? 'Loading...' : 'Kirim'} disabled={isLoading} />
    </form>
  );
}

export default AddThreadView;
