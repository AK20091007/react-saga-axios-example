// App.js
import React from 'react';
import ErrorBoundary from '../src/ErrorBoundaries/ErrorBoundary';
import AppRouter from './Router';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <AppRouter />
      </div>
    </ErrorBoundary>
  );
}

export default App;
