// Telegram Initialisation

var WebApp = window.Telegram.WebApp;
const TelegramUserID = WebApp.initDataUnsafe; // user_id from inline mode

alert('Ur UID ', TelegramUserID)

document.getElementById('telegram_id').innerHTML = TelegramUserID;