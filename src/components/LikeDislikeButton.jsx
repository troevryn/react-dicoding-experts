import React from 'react';
import PropTypes from 'prop-types';

import {
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
  AiTwotoneDislike,
} from 'react-icons/ai';

function LikeDislikeButton({
  voteUpBy,
  voteDownBy,
  onVoteNeutral,
  onVoteUp,
  onVoteDown,
  countVoteUp,
  countVoteDown,
}) {
  return (
    <div className="flex gap-2">
      <div className="flex gap-2 items-center">
        {voteUpBy > 0 ? (
          <AiFillLike size={16} onClick={() => onVoteNeutral()} />
        ) : (
          <AiOutlineLike size={16} onClick={() => onVoteUp()} />
        )}
        {countVoteUp}
      </div>
      <div className="flex gap-2 items-center">
        {voteDownBy > 0 ? (
          <AiTwotoneDislike
            size={16}
            onClick={() => {
              onVoteNeutral();
            }}
          />
        ) : (
          <AiOutlineDislike
            size={16}
            onClick={() => {
              onVoteDown();
            }}
          />
        )}

        {countVoteDown}
      </div>
    </div>
  );
}

LikeDislikeButton.propTypes = {
  countVoteUp: PropTypes.number.isRequired,
  countVoteDown: PropTypes.number.isRequired,
  onVoteNeutral: PropTypes.func.isRequired,
  onVoteUp: PropTypes.func.isRequired,
  onVoteDown: PropTypes.func.isRequired,

  voteUpBy: PropTypes.number.isRequired,
  voteDownBy: PropTypes.number.isRequired,
};

export default LikeDislikeButton;
