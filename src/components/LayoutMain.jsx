/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineHome, AiOutlineLogout, AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Loading from './LoadingBar';

function LayoutMain({ children }) {
  return (
    <div className="h-[100vh] flex flex-col">
      <Link to="/threads/add">
        <div className="absolute z-10 w-[50px] h-[50px] bg-green-500 rounded-full flex justify-center items-center bottom-24 right-4">
          <AiOutlinePlus color="#fff" size={32} />
        </div>
      </Link>
      <Loading />

      <header className="bg-green-600 w-full top-0 sticky p-4">
        <h1 className="text-white text-3xl">App Forum</h1>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-8 py-4 overflow-y-auto">
        {children}
      </main>
      <footer className="bottom-0 bg-green-600 w-full p-4 sticky text-white">
        <div className="flex justify-center">
          <nav className="flex gap-4 items-center">
            <Link to="/">
              <div className="flex flex-col items-center hover:text-gray-300">
                <AiOutlineHome size={32} />
                Home
              </div>
            </Link>
            <Link to="/leaderboards">
              <div className="flex flex-col items-center hover:text-gray-300">
                <MdOutlineLeaderboard size={32} />
                {' '}
                Leader

              </div>
            </Link>
            <button
              className="flex flex-col items-center hover:text-gray-300 justify-center"
              onClick={() => {
                localStorage.clear();
                location.assign('/');
              }}
            >
              <AiOutlineLogout size={32} />
              Logout

            </button>
          </nav>
        </div>
      </footer>
    </div>
  );
}
LayoutMain.propTypes = {

  children: PropTypes.element,

};

export default LayoutMain;
