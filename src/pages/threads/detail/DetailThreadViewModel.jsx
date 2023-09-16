/* eslint-disable max-len */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  asyncReceiveThreadDetail,
  asyncToogleDislikeThreadDetail,
  asyncToogleLikeThreadDetail,
  asyncToogleNeutralThreadDetail,
} from '../../../states/threadDetail/action';
import {
  asyncAddComment, asyncToogleDislikeComment, asyncToogleLikeComment, asyncToogleNeutralComment,
} from '../../../states/comments/action';

function DetailThreadViewModel() {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states); // @TODO: get talkDetail and authUser state from store
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(asyncReceiveThreadDetail(id));
    }
  }, [dispatch, id]);

  function onVoteUp() {
    dispatch(asyncToogleLikeThreadDetail());
  }
  function onVoteDown() {
    dispatch(asyncToogleDislikeThreadDetail());
  }
  function onVoteNeutral() {
    dispatch(asyncToogleNeutralThreadDetail());
  }
  function onSendFormComment(comment) {
    dispatch(asyncAddComment({ content: comment }));
  }
  function onVoteDownComment(commentId) {
    dispatch(asyncToogleDislikeComment(commentId));
  }
  function onVoteUpComment(commentId) {
    dispatch(asyncToogleLikeComment(commentId));
  }

  function onVoteNeutralComment(commentId) {
    dispatch(asyncToogleNeutralComment(commentId));
  }

  return {
    threadDetail,
    authUser,
    onVoteDown,
    onVoteUp,
    onVoteNeutral,
    onSendFormComment,
    onVoteDownComment,
    onVoteUpComment,
    onVoteNeutralComment,
  };
}

export default DetailThreadViewModel;
