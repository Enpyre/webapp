import React from 'react';
import Canvas from './Canvas';

const App: React.FC = () => {
  return (
    <div className="App">
      <Canvas color={0xffff0b} width={1440} height={720} x={200} y={200} />
    </div>
  );
};

export default App;
