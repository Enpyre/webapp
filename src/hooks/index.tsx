import React from 'react';
import { PyodideProvider } from './pyodide';

const AppProvider: React.FC = ({ children }) => (
  <PyodideProvider>{children}</PyodideProvider>
);

export default AppProvider;
