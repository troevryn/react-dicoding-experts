/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {

  AiOutlineShareAlt,

} from 'react-icons/ai';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';
import LikeDislikeButton from './LikeDislikeButton';

function LikeDisLikeAuthor({
  countVoteUp,
  countVoteDown,
  onVoteNeutral,
  onVoteUp,
  onVoteDown,
  countComment,
  author,
  createdAt,
  voteUpBy,
  voteDownBy,
  avatar,
}) {
  return (
    <div className="flex gap-4 items-end bottom-0">
      <LikeDislikeButton
        countVoteDown={countVoteDown}
        countVoteUp={countVoteUp}
        onVoteDown={onVoteDown}
        onVoteNeutral={onVoteNeutral}
        onVoteUp={onVoteUp}
        voteDownBy={voteDownBy}
        voteUpBy={voteUpBy}

      />
      <div className="flex gap-2 items-center">
        <AiOutlineShareAlt size={16} />
        {countComment}
      </div>
      <div>{postedAt(createdAt)}</div>
      <div className="flex items-center gap-2">
        dibuat oleh
        {' '}
        <img src={avatar} className="w-[25px] h-[25px] rounded-full" alt="avatar" />
        <strong>{author}</strong>
      </div>
    </div>
  );
}

LikeDisLikeAuthor.propTypes = {
  countVoteUp: PropTypes.number.isRequired,
  countVoteDown: PropTypes.number.isRequired,
  onVoteNeutral: PropTypes.func.isRequired,
  onVoteUp: PropTypes.func.isRequired,
  onVoteDown: PropTypes.func.isRequired,
  countComment: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  voteUpBy: PropTypes.number.isRequired,
  voteDownBy: PropTypes.number.isRequired,
};

export default LikeDisLikeAuthor;
