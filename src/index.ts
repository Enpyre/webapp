const _window: any = window;

const run = () => {
  const textarea: any = document.getElementById("code");
  const code = textarea?.value;
  console.log(_window.pyodide.runPython(code));
}

// graphics.js?

let app: any = undefined;

const drawCanvas = (x: number, y: number) => {
    app = new _window.PIXI.Application({ width: x, height: y });
    const canvasDiv: any = document.getElementById("app");
    canvasDiv.innerHTML = '';
    canvasDiv.appendChild(app.view);
}

const drawCircle = (x: number, y: number, r: number, color: number) => {
    const graphics = new _window.PIXI.Graphics()

    graphics.lineStyle(0);
    graphics.beginFill(color, 1);
    graphics.drawCircle(x, y, r);
    graphics.endFill();

    app.stage.addChild(graphics);
}

_window.drawCanvas = drawCanvas;
_window.drawCircle = drawCircle;
