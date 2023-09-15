import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetLeaderboards } from '../../states/leaderboards/action';

const LeaderboardsViewModel = () => {
  const {
    leaderboards = [],

  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetLeaderboards());
  }, [dispatch]);

  function shortName(name) {
    const tempName = name.split(' ');
    if (tempName.length > 1) {
      return tempName[0].slice(0, 1) + tempName[1].slice(0, 1);
    }
    return name.slice(0, 2);
  }
  return {
    leaderboards,
    shortName,
  };
};

export default LeaderboardsViewModel;
