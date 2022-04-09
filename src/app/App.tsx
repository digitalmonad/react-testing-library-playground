import React from 'react';
import './App.css';
import { Login } from '../components/Login';

function App() {
  return (
    <div className='App'>
      <h1 data-testid='main-heading'>Testing App</h1>
      <Login />
    </div>
  );
}

export default App;
