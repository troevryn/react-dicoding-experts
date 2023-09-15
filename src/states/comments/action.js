import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  ADD_COMMENT: 'ADD_COMMENT',
  TOGGLE_LIKE_COMMENT: 'TOGGLE_LIKE_COMMENT',
  TOGGLE_DISLIKE_COMMENT: 'TOGGLE_DISLIKE_COMMENT',
  TOGGLE_NEUTRAL_COMMENT: 'TOGGLE_NEUTRAL_COMMENT',
};

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function toggleLikeCommentActionCreator({ commentId, userId, threadId }) {
  return {
    type: ActionType.TOGGLE_LIKE_COMMENT,
    payload: {
      commentId,
      userId,
      threadId,
    },
  };
}
function toggleNeutralCommentActionCreator({ commentId, userId, threadId }) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_COMMENT,
    payload: {
      commentId,
      userId,
      threadId,
    },
  };
}
function toggleDislikeCommentActionCreator({ commentId, userId, threadId }) {
  return {
    type: ActionType.TOGGLE_DISLIKE_COMMENT,
    payload: {
      commentId,
      userId,
      threadId,
    },
  };
}

function asyncAddComment({ content }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { threadDetail } = getState();
    try {
      const comment = await api.createComment({
        content,
        threadId: threadDetail.id,
      });
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncToogleLikeComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(
      toggleLikeCommentActionCreator({
        threadId: threadDetail.id,
        userId: authUser.id,
        commentId,
      }),
    );
    dispatch(showLoading());

    try {
      await api.toggleLikeComment({ commentId, threadId: threadDetail.id });
    } catch (error) {
      alert(error.message);
      dispatch(
        toggleLikeCommentActionCreator({
          threadId: threadDetail.id,
          userId: authUser.id,
          commentId,
        }),
      );
    } finally {
      dispatch(hideLoading());
    }
  };
}
function asyncToogleDislikeComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(
      toggleDislikeCommentActionCreator({
        threadId: threadDetail.id,
        userId: authUser.id,
        commentId,
      }),
    );
    dispatch(showLoading());

    try {
      await api.toggleDislikeComment({ commentId, threadId: threadDetail.id });
    } catch (error) {
      alert(error.message);
      dispatch(
        toggleDislikeCommentActionCreator({
          threadId: threadDetail.id,
          userId: authUser.id,
          commentId,
        }),
      );
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncToogleNeutralComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(
      toggleNeutralCommentActionCreator({
        threadId: threadDetail.id,
        userId: authUser.id,
        commentId,
      }),
    );
    dispatch(showLoading());

    try {
      await api.toggleNeutralComment({ commentId, threadId: threadDetail.id });
    } catch (error) {
      alert(error.message);
      dispatch(
        toggleNeutralCommentActionCreator({
          threadId: threadDetail.id,
          userId: authUser.id,
          commentId,
        }),
      );
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  addCommentActionCreator,
  asyncAddComment,
  ActionType,
  asyncToogleDislikeComment,
  asyncToogleLikeComment,
  asyncToogleNeutralComment,
};
