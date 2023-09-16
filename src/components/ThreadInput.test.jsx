/* eslint-disable import/no-extraneous-dependencies */
/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import ThreadInput from './ThreadInput';

expect.extend(matchers);

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle title typing correctly', async () => {
    // Arrange
    render(<ThreadInput onSendForm={() => {}} isLoading={false} />);
    const titleInput = await screen.getByPlaceholderText('Title');

    // Action
    await userEvent.type(titleInput, 'titletest');

    // Assert
    expect(titleInput).toHaveValue('titletest');
  });

  it('should handle body typing correctly', async () => {
    // Arrange
    render(<ThreadInput onSendForm={() => {}} isLoading={false} />);
    const bodyInput = await screen.getByPlaceholderText('Body');

    // Action
    await userEvent.type(bodyInput, 'bodytest');

    // Assert
    expect(bodyInput).toHaveValue('bodytest');
  });

  it('should handle category typing correctly', async () => {
    // Arrange
    render(<ThreadInput onSendForm={() => {}} isLoading={false} />);
    const categoryInput = await screen.getByPlaceholderText('Category');

    // Action
    await userEvent.type(categoryInput, 'categorytest');

    // Assert
    expect(categoryInput).toHaveValue('categorytest');
  });

  // ... skenario pengujian lainnya

  it('should call onSendForm function when Kirim button is clicked', async () => {
    // Arrange
    const mockSendForm = vi.fn();
    render(<ThreadInput onSendForm={mockSendForm} isLoading={false} />);
    const titleInput = await screen.getByPlaceholderText('Title');
    await userEvent.type(titleInput, 'titletest');
    const bodyInput = await screen.getByPlaceholderText('Body');
    await userEvent.type(bodyInput, 'bodytest');

    const categoryInput = await screen.getByPlaceholderText('Category');
    await userEvent.type(categoryInput, 'categorytest');
    const sendButton = await screen.getByRole('button', { name: 'Kirim' });

    // Action
    await userEvent.click(sendButton);

    // Assert
    expect(mockSendForm).toHaveBeenCalledWith({
      title: 'titletest',
      body: 'bodytest',
      category: 'categorytest',
    });
  });
});
