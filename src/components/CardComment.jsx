/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import LikeDislikeButton from './LikeDislikeButton';
import { postedAt } from '../utils';

function CardComment({
  countVoteDown,
  countVoteUp,
  onVoteDown,
  onVoteNeutral,
  onVoteUp,
  content,
  createdAt,
  voteUpBy,
  voteDownBy,
  owner,
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 justify-between items-center">
        <div className="flex gap-2 items-center">
          {/* <div className="w-[50px] h-[50px] bg-green-50 rounded-full ">xx</div> */}
          <img alt="avatar" className="w-[25px] h-[25px] rounded-full" src={owner?.avatar} />
          <div>{owner?.name}</div>
        </div>

        <div><strong>{postedAt(createdAt)}</strong></div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <LikeDislikeButton
        countVoteDown={countVoteDown}
        countVoteUp={countVoteUp}
        onVoteDown={onVoteDown}
        onVoteNeutral={onVoteNeutral}
        onVoteUp={onVoteUp}
        voteDownBy={voteDownBy}
        voteUpBy={voteUpBy}
      />
      <hr />
    </div>
  );
}
const userShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
};

CardComment.propTypes = {
  countVoteUp: PropTypes.number.isRequired,
  countVoteDown: PropTypes.number.isRequired,
  onVoteNeutral: PropTypes.func.isRequired,
  onVoteUp: PropTypes.func.isRequired,
  onVoteDown: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  voteUpBy: PropTypes.number.isRequired,
  voteDownBy: PropTypes.number.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
};

export default CardComment;
