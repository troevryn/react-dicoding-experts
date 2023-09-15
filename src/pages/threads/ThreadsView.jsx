/* eslint-disable react/button-has-type */
import React from 'react';
import ThreadsViewModel from './ThreadsViewModel';
import CardThread from '../../components/CardThread';
import LabelCategory from '../../components/LabelCategory';

function ThreadsView() {
  const {
    threadList,
    onVoteDown,
    onVoteNeutral,
    onVoteUp,
    category,
    categoryList,
    onClickFilterThreads,
  } = ThreadsViewModel();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 flex-wrap">
        {categoryList.map((categoryItem) => (
          <button
            className={`${categoryItem === category ? 'bg-gray-500 text-white rounded-xl' : ''}`}
            onClick={() => {
              onClickFilterThreads(categoryItem);
            }}
          >
            <LabelCategory label={categoryItem} key={categoryItem} />
          </button>
        ))}
      </div>
      <h2 className="text-2xl font-bold">Diskusi Tersedia</h2>
      <div className="grid grid-cols-1  gap-4">
        {threadList?.map((thread) => (
          <CardThread
            {...thread}
            key={thread.id}
            onVoteDown={onVoteDown}
            onVoteNeutral={onVoteNeutral}
            onVoteUp={onVoteUp}
          />
        ))}
      </div>
    </div>
  );
}

export default ThreadsView;
