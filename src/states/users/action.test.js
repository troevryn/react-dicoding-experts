/* eslint-disable import/no-extraneous-dependencies */
import {
  afterEach, beforeEach, describe, expect, it, vi,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncGetUsers, receiveUsersActionCreator } from './action';

const fakeResponseUsers = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
  {
    id: 'jane_doe',
    name: 'Jane Doe',
    email: 'jane@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];
const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncGetUsers thunk', () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers;
  });

  afterEach(() => {
    api.getAllUsers = api._getAllUsers;
    // delete backup data

    delete api._getAllUsers;
  });

  // ... backup and restore

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation

    api.getAllUsers = () => Promise.resolve(fakeResponseUsers);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncGetUsers()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());

    expect(dispatch).toHaveBeenCalledWith(
      receiveUsersActionCreator(fakeResponseUsers),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncGetUsers()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
