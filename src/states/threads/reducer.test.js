/* eslint-disable import/no-extraneous-dependencies */
import { describe, it, expect } from 'vitest';
import threadsReducer from './reducer';

describe('talkReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'Thread Test 1',
            body: 'test123',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
            category: 'redux',
            ownerId: 'user-2',
            createdAt: '2023-08-22T10:06:55.588Z',
          },
          {
            id: 'thread-2',
            title: 'Thread Test 2',
            body: 'test123',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
            category: 'redux',
            ownerId: 'user-2',
            createdAt: '2023-08-22T10:06:55.588Z',
          },
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given by ADD_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Test 1',
        body: 'test123',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
        category: 'redux',
        ownerId: 'user-2',
        createdAt: '2022-09-22T10:06:55.588Z',
      },
    ];

    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Thread Test 2',
          body: 'test123',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
          category: 'redux',
          ownerId: 'user-2',
          createdAt: '2022-09-22T10:06:56.588Z',
        },
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the threads with the toggled like thread when given by TOGGLE_LIKE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Talk Test 1',
        body: 'test123',
        upVotesBy: [],
        downVotesBy: ['user-1'],
        totalComments: 0,
        category: 'redux',
        ownerId: 'user-2',
        createdAt: '2022-09-22T10:06:55.588Z',
      },
    ];

    const action = {
      type: 'TOGGLE_LIKE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
        downVotesBy: [],
      },
    ]);
  });

  it('should return the threads with the toggled dislike thread when given by TOGGLE_DISLIKE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Talk Test 1',
        body: 'test123',
        upVotesBy: ['user-1'],
        downVotesBy: [],
        totalComments: 0,
        category: 'redux',
        ownerId: 'user-2',
        createdAt: '2022-09-22T10:06:55.588Z',
      },
    ];

    const action = {
      type: 'TOGGLE_DISLIKE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with the toggled neutral upVotesBy thread when given by TOGGLE_NEUTRAL_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Talk Test 1',
        body: 'test123',
        upVotesBy: ['user-1'],
        downVotesBy: [],
        totalComments: 0,
        category: 'redux',
        ownerId: 'user-2',
        createdAt: '2022-09-22T10:06:55.588Z',
      },
    ];

    const action = {
      type: 'TOGGLE_NEUTRAL_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
      },
    ]);
  });
});
