/* eslint-disable max-len */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_LIKE_THREAD_DETAIL: 'TOGGLE_LIKE_THREAD_DETAIL',
  TOGGLE_DISLIKE_THREAD_DETAIL: 'TOGGLE_DISLIKE_THREAD_DETAIL',
  TOGGLE_NEUTRAL_THREAD_DETAIL: 'TOGGLE_NEUTRAL_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
  TOGGLE_LIKE_COMMENT: 'TOGGLE_LIKE_COMMENT',
  TOGGLE_DISLIKE_COMMENT: 'TOGGLE_DISLIKE_COMMENT',
  TOGGLE_NEUTRAL_COMMENT: 'TOGGLE_NEUTRAL_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleLikeThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_LIKE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}
function toggleDislikeThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_DISLIKE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}
function toggleNeutralThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(clearThreadDetailActionCreator());
    dispatch(showLoading());

    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncToogleLikeThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(toggleLikeThreadDetailActionCreator(authUser.id));
    dispatch(showLoading());
    try {
      await api.toggleLikeThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}
function asyncToogleDislikeThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(toggleDislikeThreadDetailActionCreator(authUser.id));
    dispatch(showLoading());
    try {
      await api.toggleDislikeThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncToogleNeutralThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(toggleNeutralThreadDetailActionCreator(authUser.id));
    dispatch(showLoading());
    try {
      await api.toggleNeutralThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  asyncReceiveThreadDetail, asyncToogleLikeThreadDetail, ActionType,
  clearThreadDetailActionCreator, receiveThreadDetailActionCreator,
  toggleLikeThreadDetailActionCreator,
  asyncToogleNeutralThreadDetail,
  asyncToogleDislikeThreadDetail,
};
