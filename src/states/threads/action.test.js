/* eslint-disable import/no-extraneous-dependencies */
import {
  describe, beforeEach, afterEach, it, vi, expect,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import {
  addThreadActionCreator,
  asyncAddThread,
  asyncGetThreads,
  receiveThreadsActionCreator,
} from './action';

const fakeThreadsResponse = [
  {
    id: 'threads-1',
    text: 'threads Test 1',
    user: 'user-1',
    replyTo: '',
    likes: [],
    createdAt: '2022-09-22T10:06:55.588Z',
  },
];
const fakeThreadResponse = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'users-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncGetThreads thunk', () => {
  beforeEach(() => {
    api._getThreads = api.getThreads;
  });

  afterEach(() => {
    api.getThreads = api._getThread;
    // delete backup data

    delete api._getThreads;
  });

  // ... backup and restore

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation

    api.getThreads = () => Promise.resolve(fakeThreadsResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncGetThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());

    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadsActionCreator(fakeThreadsResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getThreads = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncGetThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});

describe('asyncAddThread thunk', () => {
  beforeEach(() => {
    api._createThread = api.createThread;
  });

  afterEach(() => {
    api.createThread = api._createThread;
    // delete backup data

    delete api._createThread;
  });

  // ... backup and restore

  it('should dispatch action correctly when action add thread  fetching success', async () => {
    // arrange
    // stub implementation

    api.createThread = () => Promise.resolve(fakeThreadResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncAddThread({
      body: fakeThreadResponse.body,
      category: fakeThreadResponse.category,
      title: fakeThreadResponse.title,
    })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      addThreadActionCreator(fakeThreadResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when add thread fetching failed', async () => {
    // arrange
    // stub implementation
    api.createThread = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncAddThread({
      body: fakeThreadResponse.body,
      category: fakeThreadResponse.category,
      title: fakeThreadResponse.title,
    })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
