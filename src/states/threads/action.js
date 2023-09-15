/* eslint-disable max-len */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_LIKE_THREAD: 'TOGGLE_LIKE_THREAD',
  TOGGLE_DISLIKE_THREAD: 'TOGGLE_DISLIKE_THREAD',
  TOGGLE_NEUTRAL_THREAD: 'TOGGLE_NEUTRAL_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function toggleLikeThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_LIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}
function toggleNeutralThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}
function toggleDislikeThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DISLIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncGetThreads() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const threads = await api.getThreads();
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncToogleLikeThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleLikeThreadActionCreator({ threadId, userId: authUser.id }));
    dispatch(showLoading());

    try {
      await api.toggleLikeThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeThreadActionCreator({ threadId, userId: authUser.id }));
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncToogleDislikeThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleDislikeThreadActionCreator({ threadId, userId: authUser.id }));
    dispatch(showLoading());

    try {
      await api.toggleDislikeThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleDislikeThreadActionCreator({ threadId, userId: authUser.id }));
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncToogleNeutralThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleNeutralThreadActionCreator({ threadId, userId: authUser.id }));
    dispatch(showLoading());

    try {
      await api.toggleNeutralThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralThreadActionCreator({ threadId, userId: authUser.id }));
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  addThreadActionCreator, asyncAddThread, asyncGetThreads, ActionType, receiveThreadsActionCreator, asyncToogleDislikeThread, asyncToogleNeutralThread, asyncToogleLikeThread,
};
