/* eslint-disable react/no-danger */
/* eslint-disable no-shadow */
import React from 'react';
import LabelCategory from '../../../components/LabelCategory';
import DetailThreadViewModel from './DetailThreadViewModel';
import LikeDisLikeAuthor from '../../../components/LikeDisLikeAuthor';
import FormComment from '../../../components/FormComment';
import CardComment from '../../../components/CardComment';

function DetailThreadView() {
  const {
    threadDetail,
    onVoteDown,
    onVoteNeutral,
    onVoteUp,
    authUser,
    comment,
    onChangeComment,
    onSendFormComment, onVoteDownComment, onVoteUpComment, onVoteNeutralComment,
  } = DetailThreadViewModel();
  if (!threadDetail) {
    return null;
  }
  const {
    category,
    title,
    body,
    owner: { name, avatar },
    comments,
    downVotesBy,
    upVotesBy,
    createdAt,
  } = threadDetail;
  const tempUpVotesBy = threadDetail?.upVotesBy?.filter(
    (voteId) => voteId === authUser.id,
  );
  const tempDownVotesBy = threadDetail?.downVotesBy?.filter(
    (voteId) => voteId === authUser.id,
  );
  return (
    <div className="flex flex-col gap-4">
      <LabelCategory label={category ?? '-'} />
      <h2 className="text-blue-500 font-bold text-3xl">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: body ?? '-' }} />
      <LikeDisLikeAuthor
        author={name}
        countComment={comments?.length}
        countVoteDown={downVotesBy.length}
        countVoteUp={upVotesBy.length}
        createdAt={createdAt ?? '-'}
        onVoteDown={onVoteDown}
        onVoteUp={onVoteUp}
        avatar={avatar}
        onVoteNeutral={onVoteNeutral}
        voteDownBy={tempDownVotesBy.length}
        voteUpBy={tempUpVotesBy.length}
      />
      <hr />
      <FormComment
        onChangeComment={onChangeComment}
        onSendForm={onSendFormComment}
        valueComment={comment}
      />
      <div className="flex flex-col gap-4">
        <h4 className="text-blue-500 font-medium text-lg">
          Beri Komentar (
          {comments.length}
          )
        </h4>
        {comments.map((comment) => {
          const tempUpVotesByComment = comment?.upVotesBy?.filter(
            (voteId) => voteId === authUser.id,
          );
          const tempDownVotesByComment = comment?.downVotesBy?.filter(
            (voteId) => voteId === authUser.id,
          );
          return (
            <CardComment
              key={comment.id}
              {...comment}
              voteDownBy={tempDownVotesByComment.length}
              voteUpBy={tempUpVotesByComment.length}
              countVoteDown={comment.downVotesBy.length}
              countVoteUp={comment.upVotesBy.length}
              onVoteUp={() => onVoteUpComment(comment.id)}
              onVoteDown={() => onVoteDownComment(comment.id)}
              onVoteNeutral={() => onVoteNeutralComment(comment.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DetailThreadView;
