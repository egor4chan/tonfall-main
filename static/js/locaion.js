// location.href + vibration
function locate(src) {
    var WebApp = window.Telegram.WebApp;
    WebApp.HapticFeedback.impactOccurred('light')

    location.href = src;
}


