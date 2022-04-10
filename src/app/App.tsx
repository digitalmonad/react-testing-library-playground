import React from 'react';
import './App.css';
import { LoginForm } from '../components/LoginForm';
import { authApi } from '../api/auth';

function App() {
  return (
    <div className='App'>
      <h1 data-testid='main-heading'>Testing App</h1>
      <LoginForm onSubmit={authApi.login} />
    </div>
  );
}

export default App;
