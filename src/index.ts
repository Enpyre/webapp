const _window: any = window;

const run = () => {
  const code = _window.editor.getValue();
  console.log('===============================')
  console.log(code)
  console.log('===============================')
  console.log(_window.pyodide.runPython(code));
};
