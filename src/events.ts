let canvasFocused = false;

const keyEvent = (event: any) => {
    if (!canvasFocused) return;

    if (!['keyup', 'keydown'].includes(event.type)) return;

    event.preventDefault();

    var code = event.code;
    _window[code] = event.type == 'keyup' ? false : true;
};

document.addEventListener('keydown', keyEvent, false);
document.addEventListener('keyup', keyEvent, false);

var _app = document.getElementById("app");

_app?.addEventListener("focus", () => {
    canvasFocused = true;
});

_app?.addEventListener("blur", () => {
    canvasFocused = false;
});
