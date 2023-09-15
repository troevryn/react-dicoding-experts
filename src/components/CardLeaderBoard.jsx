import React from 'react';
import PropTypes from 'prop-types';

function CardLeaderBoard({ name, score, avatar }) {
  return (
    <div className="flex justify-between gap-4">
      <div className="flex items-center gap-4">
        <img src={avatar} className="w-[50px] h-[50px] rounded-full" alt={name} />
        {name}
      </div>

      <div className="text-xl font-medium">{score}</div>
    </div>
  );
}

CardLeaderBoard.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default CardLeaderBoard;
