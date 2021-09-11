import React, { createContext, useContext, useEffect } from 'react';
import loadPyodide, { Pyodide } from '../lib/pyodide';

interface PyodideContextData {
  pyodide: Pyodide | null;
}

const PyodideContext = createContext<PyodideContextData>(
  {} as PyodideContextData,
);

const PyodideProvider: React.FC = ({ children }) => {
  const [pyodide, setPyodide] = React.useState<Pyodide | null>(null);

  useEffect(() => {
    const load = async () => {
      const _pyodide = await loadPyodide();
      setPyodide(_pyodide);
    };
    load();
  }, []);

  return (
    <PyodideContext.Provider value={{ pyodide }}>
      {children}
    </PyodideContext.Provider>
  );
};

function usePyodide(): PyodideContextData {
  const context = useContext(PyodideContext);

  if (!context) {
    throw new Error('usePyodide must be used within an PyodideProvider');
  }

  return context;
}

export { PyodideProvider, usePyodide };
