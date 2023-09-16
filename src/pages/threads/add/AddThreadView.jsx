import React from 'react';
import AddThreadViewModel from './AddThreadViewModel';
import ThreadInput from '../../../components/ThreadInput';

function AddThreadView() {
  const {

    submitAddThread,
    isLoading,
  } = AddThreadViewModel();

  return (
    <form
      className="flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold">Tambahkan Thread</h2>
      <ThreadInput
        onSendForm={submitAddThread}
        isLoading={isLoading}
      />
    </form>
  );
}

export default AddThreadView;
