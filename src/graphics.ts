let app: any = undefined;

const colorToInt = (color: string) => {
    return parseInt(color.replace("#", "0x"));
}

const drawCanvas = (
  height: number,
  width: number,
  color: string = '#000000',
  update: (delta: number) => void,
) => {
    if (app) {
        app.destroy(true);
    }
    app = new _window.PIXI.Application(
      {
        width,
        height,
        backgroundColor: colorToInt(color)
      }
    );
    const canvasDiv: any = document.getElementById("app");
    canvasDiv.innerHTML = '';
    canvasDiv.appendChild(app.view);
    app.ticker.add(update);
    app.ticker.maxFPS = 60;
}

const drawCircle = (x: number, y: number, r: number, color: string) => {
    const graphics = new _window.PIXI.Graphics()
    graphics.lineStyle(0);
    graphics.beginFill(colorToInt(color), 1);
    graphics.drawCircle(x, y, r);
    graphics.endFill();
    app.stage.addChild(graphics);
    return graphics;
}

_window.drawCanvas = drawCanvas;
_window.drawCircle = drawCircle;
