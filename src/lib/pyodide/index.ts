import { loadPackage } from './pyodide_src/load-pyodide';
import { registerJsModule } from './pyodide_src/api';

export interface Pyodide {
  globals: import('./pyodide_src/pyproxy.gen').PyProxy;
  FS: any;
  pyodide_py: import('./pyodide_src/pyproxy.gen').PyProxy;
  version: string;
  loadPackage: typeof loadPackage;
  loadPackagesFromImports: typeof import('./pyodide_src/api').loadPackagesFromImports;
  loadedPackages: any;
  isPyProxy: typeof import('./pyodide_src/pyproxy.gen').isPyProxy;
  pyimport: typeof import('./pyodide_src/api').pyimport;
  runPython: typeof import('./pyodide_src/api').runPython;
  runPythonAsync: typeof import('./pyodide_src/api').runPythonAsync;
  registerJsModule: typeof registerJsModule;
  unregisterJsModule: typeof import('./pyodide_src/api').unregisterJsModule;
  setInterruptBuffer: typeof import('./pyodide_src/api').setInterruptBuffer;
  toPy: typeof import('./pyodide_src/api').toPy;
  registerComlink: typeof import('./pyodide_src/api').registerComlink;
  PythonError: typeof import('./pyodide_src/api').PythonError;
  PyBuffer: typeof import('./pyodide_src/pyproxy.gen').PyBuffer;
}

async function loadPyodide() {
  const pyodide = (await (window as any).loadPyodide({
    indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.18.0/full/',
  })) as Pyodide;
  return pyodide;
}

export default loadPyodide;
