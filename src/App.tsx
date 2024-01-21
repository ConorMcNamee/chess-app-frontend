import React from 'react';
import './App.css';

import ChessBoard from './components/ChessBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChessBoard rows={8} columns={8} />
      </header>
    </div>
  );
}

export default App;
