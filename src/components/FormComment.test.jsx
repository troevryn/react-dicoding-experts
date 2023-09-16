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
import FormComment from './FormComment';

expect.extend(matchers);

describe('FormComment component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle username typing correctly', async () => {
    // Arrange
    render(<FormComment onSendForm={() => {}} />);
    const commentInput = await screen.getByPlaceholderText('Komentar');

    // Action
    await userEvent.type(commentInput, 'commenttest');

    // Assert
    expect(commentInput).toHaveValue('commenttest');
  });

  // ... skenario pengujian lainnya

  it('should call kirim function when kirim button is clicked', async () => {
    // Arrange
    const mockLogin = vi.fn();
    render(<FormComment onSendForm={mockLogin} />);
    const commentInput = await screen.getByPlaceholderText('Komentar');
    await userEvent.type(commentInput, 'commenttest');
    const loginButton = await screen.getByRole('button', { name: 'Kirim' });

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toHaveBeenCalledWith('commenttest');
  });
});
