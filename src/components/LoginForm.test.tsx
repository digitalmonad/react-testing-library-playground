import {
  render,
  screen,
  fireEvent,
  act,
  waitForElementToBeRemoved,
  waitFor,
} from '@testing-library/react';
import { LoginForm } from './LoginForm';

describe('Componetns', () => {
  describe('LoginForm', () => {
    it('has username field', () => {
      render(<LoginForm />);
      const usernameInputElement = screen.getByPlaceholderText(/username/i);
      expect(usernameInputElement).toBeInTheDocument();
    });

    it('has password field', () => {
      render(<LoginForm />);
      const passwordInputElement = screen.getByPlaceholderText(/password/i);
      expect(passwordInputElement).toBeInTheDocument();
    });

    it('has button element', () => {
      render(<LoginForm />);
      const buttonElement = screen.getByRole(/button/);
      expect(buttonElement).toBeInTheDocument();
    });

    it('username field is empty', () => {
      render(<LoginForm />);
      const usernameInputElement = screen.getByPlaceholderText(
        /username/i
      ) as HTMLInputElement;
      expect(usernameInputElement.value).toBe('');
    });

    it('password field is empty', () => {
      render(<LoginForm />);
      const passwordInputElement = screen.getByPlaceholderText(
        /password/i
      ) as HTMLInputElement;
      expect(passwordInputElement.value).toBe('');
    });

    it('button is disabled by default', () => {
      render(<LoginForm />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toBeDisabled();
    });

    it('error is not visible by default', () => {
      render(<LoginForm />);
      const errorElement = screen.getByTestId('error-message');
      expect(errorElement).not.toBeVisible();
    });

    it('username should change', () => {
      render(<LoginForm />);
      const usernameInputElement = screen.getByPlaceholderText(
        /username/i
      ) as HTMLInputElement;

      const testText = 'John';
      fireEvent.change(usernameInputElement, { target: { value: testText } });
      expect(usernameInputElement.value).toBe(testText);
    });

    it('password should change', () => {
      render(<LoginForm />);
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

      render(<LoginForm />);

      const usernameInputElement = screen.getByPlaceholderText(
        /username/i
      ) as HTMLInputElement;

      const passwordInputElement = screen.getByPlaceholderText(
        /password/i
      ) as HTMLInputElement;

      const buttonElement = screen.getByRole('button');

      fireEvent.change(usernameInputElement, { target: { value: username } });
      fireEvent.change(passwordInputElement, { target: { value: password } });

      expect(buttonElement).not.toBeDisabled();
    });

    it('button should be disabled when submitting', async () => {
      const username = 'John';
      const password = 'password123';

      const promise = Promise.resolve();
      const handleFormSubmit = jest.fn(() => promise);

      render(<LoginForm onSubmit={handleFormSubmit} />);

      const usernameInputElement = screen.getByPlaceholderText(
        /username/i
      ) as HTMLInputElement;

      const passwordInputElement = screen.getByPlaceholderText(
        /password/i
      ) as HTMLInputElement;

      const buttonElement = screen.getByRole('button');

      fireEvent.change(usernameInputElement, { target: { value: username } });
      fireEvent.change(passwordInputElement, { target: { value: password } });
      fireEvent.click(buttonElement);

      await waitFor(() => {
        expect(buttonElement).toBeDisabled();
      });
      await waitFor(() => {
        expect(buttonElement).not.toBeDisabled();
      });
      expect(handleFormSubmit).toHaveBeenCalledWith({ username, password });
    });
  });
});
