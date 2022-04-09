import { render, screen } from '@testing-library/react';
import { Login } from './Login';

describe('Componetns', () => {
  describe('Login', () => {
    it('has username field', () => {
      render(<Login />);
      const usernameInputElement = screen.getByPlaceholderText(/username/i);
      expect(usernameInputElement).toBeInTheDocument();
    });

    it('has password field', () => {
      render(<Login />);
      const passwordInputElement = screen.getByPlaceholderText(/password/i);
      expect(passwordInputElement).toBeInTheDocument();
    });

    it('has button element', () => {
      render(<Login />);
      const buttonElement = screen.getByRole(/button/);
      expect(buttonElement).toBeInTheDocument();
    });

    it('username field is empty', () => {
      render(<Login />);
      const usernameInputElement = screen.getByPlaceholderText(
        /username/i
      ) as HTMLInputElement;
      expect(usernameInputElement.value).toBe('');
    });

    it('password field is empty', () => {
      render(<Login />);
      const passwordInputElement = screen.getByPlaceholderText(
        /password/i
      ) as HTMLInputElement;
      expect(passwordInputElement.value).toBe('');
    });

    it('button should be disabled', () => {
      render(<Login />);
      const buttonElement = screen.getByRole('button') as HTMLInputElement;
      expect(buttonElement).toBeDisabled();
    });
  });
});
