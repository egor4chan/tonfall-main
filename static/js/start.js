var WebApp = window.Telegram.WebApp;

WebApp.expand()
WebApp.headerColor = '#1e1e24'
WebApp.backgroundColor = '#1e1e24';
WebApp.bottomBarColor = '#1e1e24'

setTimeout(()=>{
    WebApp.HapticFeedback.impactOccurred('light')
    location.href = '/game'
}, 3500)