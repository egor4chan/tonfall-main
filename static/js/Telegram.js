// Telegram Initialisation

var WebApp = window.Telegram.WebApp;
var TelegramUserID = WebApp.initDataUnsafe.user.id; // user_id from inline mode

alert('Ur UID ', TelegramUserID)

document.getElementById('telegram_id').innerHTML = TelegramUserID;