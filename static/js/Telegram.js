// Telegram Initialisation
alert('working')
var WebApp = window.Telegram.WebApp;
const TelegramUserID = WebApp.WebAppUser.id; // user_id from inline mode

document.getElementById('telegram_id').innerHTML = 'ID: ', TelegramUserID;