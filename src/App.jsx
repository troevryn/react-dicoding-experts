/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { asyncPreloadProcess } from './states/isPreload/action';
import RegisterView from './pages/register/RegisterView';
import LoginView from './pages/login/LoginView';
import LayoutMain from './components/LayoutMain';
import LeaderboardsView from './pages/leaderboards/LeaderboardsView';
import ThreadsView from './pages/threads/ThreadsView';
import DetailThreadView from './pages/threads/detail/DetailThreadView';
import AddThreadView from './pages/threads/add/AddThreadView';
import Loading from './components/LoadingBar';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states); // @TODO: get authUser and isPreload state from store

  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  useEffect(() => {
    // @TODO: dispatch async action to preload app
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <LayoutMain>
      <Routes>
        <Route path="/" element={<ThreadsView />} />
        <Route path="/threads/:id" element={<DetailThreadView />} />
        <Route path="/threads/add" element={<AddThreadView />} />
        <Route path="/leaderboards" element={<LeaderboardsView />} />
      </Routes>
    </LayoutMain>
  );
}

export default App;
