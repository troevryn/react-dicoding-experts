import React from 'react';
import LeaderboardsViewModel from './LeaderboardsViewModel';
import CardLeaderBoard from '../../components/CardLeaderBoard';

function LeaderboardsView() {
  const { leaderboards } = LeaderboardsViewModel();
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Klasmen Pengguna Aktif</h2>
      <div className="flex gap-4 justify-between text-xl font-bold">
        <div>Pengguna</div>
        <div>Skor</div>
      </div>
      <div className="flex flex-col gap-4">
        {leaderboards.map((leaderboard) => (
          <CardLeaderBoard
            key={leaderboard.id}
            avatar={leaderboard.user.avatar}
            name={leaderboard.user.name}
            score={leaderboard.score}
          />
        ))}

      </div>
    </div>
  );
}

export default LeaderboardsView;
