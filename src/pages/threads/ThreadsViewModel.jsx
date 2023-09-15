/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncGetThreads,
  asyncToogleDislikeThread,
  asyncToogleLikeThread,
  asyncToogleNeutralThread,
} from '../../states/threads/action';
import { asyncGetUsers } from '../../states/users/action';

const ThreadsViewModel = () => {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const onVoteUp = (id) => {
    dispatch(asyncToogleLikeThread(id));
  };
  const onVoteDown = (id) => {
    dispatch(asyncToogleDislikeThread(id));
  };
  const onVoteNeutral = (id) => {
    dispatch(asyncToogleNeutralThread(id));
  };
  const onClickFilterThreads = (categoryItem) => {
    if (category === categoryItem) {
      setCategory('');
    } else {
      setCategory(categoryItem);
    }
  };
  useEffect(() => {
    dispatch(asyncGetUsers());

    dispatch(asyncGetThreads());
  }, [dispatch]);
  const categoryThread = [];
  const categoryList = threads.map((thread) => {
    if (categoryThread.includes(thread.category) === false) {
      categoryThread.push(thread.category);
      return thread.category;
    }
  });

  const threadList = threads
    ?.filter((thread) => thread.category.includes(category))
    .map((thread) => ({
      ...thread,
      user: users.find((user) => user.id === thread.ownerId) ?? {},
      authUser: authUser.id,
    }));
  return {
    users,
    onVoteDown,
    onVoteNeutral,
    onVoteUp,
    threadList,
    categoryList,
    category,
    onClickFilterThreads,
  };
};

export default ThreadsViewModel;
