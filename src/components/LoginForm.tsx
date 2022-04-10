import React, { FC, useEffect, useState } from 'react';

type LoginPropsT = {
  onSubmit?: (params: { username: string; password: string }) => void;
};

export const LoginForm: FC<LoginPropsT> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      onSubmit && (await onSubmit({ username, password }));
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          disabled={isLoading || (!username && !password)}
          type={'submit'}
        >
          Login
        </button>
        <div
          data-testid={'error-message'}
          style={{ visibility: error ? 'visible' : 'hidden' }}
        >
          Something went wrong
        </div>
      </form>
    </div>
  );
};
