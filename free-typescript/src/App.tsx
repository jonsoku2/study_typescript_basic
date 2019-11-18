import React from 'react';

const App = () => {
  const sum = (a: number, b: number): number => {
    return a + b;
  };
  return <div>{sum(1, 2)}</div>;
};

export default App;
