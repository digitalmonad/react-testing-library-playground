import React from 'react';
import './App.css';
import { List } from '../components/List';

function App() {
  return (
    <div className='App'>
      <h1 data-testid='myheading'>Heading</h1>
      <List />
    </div>
  );
}

export default App;
