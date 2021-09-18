"use strict";
var _window = window;
var run = function () {
    var textarea = document.getElementById("code");
    var code = textarea === null || textarea === void 0 ? void 0 : textarea.value;
    console.log(_window.pyodide.runPython(code));
};
// graphics.js?
var app = undefined;
var drawCanvas = function (x, y) {
    app = new _window.PIXI.Application({ width: x, height: y });
    var canvasDiv = document.getElementById("app");
    canvasDiv.innerHTML = '';
    canvasDiv.appendChild(app.view);
};
var drawCircle = function (x, y, r, color) {
    var graphics = new _window.PIXI.Graphics();
    graphics.lineStyle(0);
    graphics.beginFill(color, 1);
    graphics.drawCircle(x, y, r);
    graphics.endFill();
    app.stage.addChild(graphics);
};
_window.drawCanvas = drawCanvas;
_window.drawCircle = drawCircle;
