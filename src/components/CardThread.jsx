/* eslint-disable react/no-danger */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import {
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineShareAlt,
  AiTwotoneDislike,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { postedAt } from '../utils';
import LikeDisLikeAuthor from './LikeDisLikeAuthor';
import LabelCategory from './LabelCategory';

function CardThread({
  body,
  title,
  ownerId = '',
  id,
  createdAt,
  downVotesBy,
  upVotesBy,
  totalComments,
  category,
  onVoteDown,
  onVoteUp,
  onVoteNeutral,
  authUser,
  user,
}) {
  // eslint-disable-next-line no-shadow
  const tempUpVotesBy = upVotesBy?.filter((voteId) => voteId === authUser);
  const tempDownVotesBy = downVotesBy?.filter((voteId) => voteId === authUser);

  return (
    <div className="flex flex-col gap-4 border-2 shadow-sm rounded p-4 relative ">
      <LabelCategory label={category} />
      <Link to={`/threads/${id}`}>
        <h3 className="text-xl text-blue-500 hover:text-blue-400">{title}</h3>
      </Link>
      <div
        className="truncate line-clamp-3 "
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <LikeDisLikeAuthor
        author={user?.name ?? '-'}
        createdAt={createdAt}
        onVoteDown={() => onVoteDown(id)}
        onVoteUp={() => onVoteUp(id)}
        onVoteNeutral={() => onVoteNeutral(id)}
        countComment={totalComments}
        countVoteDown={downVotesBy.length}
        countVoteUp={upVotesBy.length}
        voteDownBy={tempDownVotesBy.length}
        voteUpBy={tempUpVotesBy.length}
        avatar={user.avatar}
      />
    </div>
  );
}
const userShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  avatar: PropTypes.string,
};

CardThread.propTypes = {
  category: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  onVoteDown: PropTypes.func.isRequired,
  onVoteNeutral: PropTypes.func.isRequired,
  onVoteUp: PropTypes.func.isRequired,
};

export default CardThread;
