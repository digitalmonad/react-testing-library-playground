import { render, screen, fireEvent } from '@testing-library/react';
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

    it('button is disabled by default', () => {
      render(<Login />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toBeDisabled();
    });

    it('error is not visible by default', () => {
      render(<Login />);
      const errorElement = screen.getByTestId('error-message');
      expect(errorElement).not.toBeVisible();
    });

    it('username should change', () => {
      render(<Login />);
      const usernameInputElement = screen.getByPlaceholderText(
        /username/i
      ) as HTMLInputElement;

      const testText = 'John';
      fireEvent.change(usernameInputElement, { target: { value: testText } });
      expect(usernameInputElement.value).toBe(testText);
    });

    it('password should change', () => {
      render(<Login />);
      const passwordInputElement = screen.getByPlaceholderText(
        /password/i
      ) as HTMLInputElement;

      const testText = 'password123';
      fireEvent.change(passwordInputElement, { target: { value: testText } });
      expect(passwordInputElement.value).toBe(testText);
    });

    it('button should not be disabled when input fields are filled', () => {
      const username = 'John';
      const password = 'password123';

      render(<Login />);

      const usernameInputElement = screen.getByPlaceholderText(
        /username/i
      ) as HTMLInputElement;

      const passwordInputElement = screen.getByPlaceholderText(
        /password/i
      ) as HTMLInputElement;

      fireEvent.change(usernameInputElement, { target: { value: username } });
      fireEvent.change(passwordInputElement, { target: { value: password } });

      const buttonElement = screen.getByRole('button');

      expect(buttonElement).not.toBeDisabled();
    });
  });
});
