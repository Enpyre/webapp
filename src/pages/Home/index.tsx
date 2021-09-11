import React, { useState } from 'react';
import Editor from '../../components/Editor';
import { usePyodide } from '../../hooks/pyodide';
import { Py2JsResult } from '../../lib/pyodide/pyodide_src/pyodide';
import { Container } from './styles';

const Home: React.FC = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState<Py2JsResult | undefined>(undefined);
  const { pyodide } = usePyodide();

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <Container>
      <Editor onChange={handleCodeChange} />
      <button
        type="button"
        onClick={() => {
          pyodide?.runPython(code);
          const _output = pyodide?.globals.x;
          setOutput(_output);
        }}
      >
        Run
      </button>
      {output && (
        <div>
          <h1>Output</h1>
          <pre>{JSON.stringify(output, null, 2)}</pre>
        </div>
      )}
    </Container>
  );
};

export default Home;
