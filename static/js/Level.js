const windowWidth = Number(window.innerWidth);
let noty = document.getElementById('scale');
let levelBoard = document.getElementById('levelBoard');

const levelScalePercents = {1: '4%', 2: '2%', 3: '1.2%', 4: '1.1%', 5: '1%', 6: '0.9%', 7: '0.8%', 8: '0.7%', 9: '0.6%', 10: '0.5%', 11: '0.4%', 12: '0.3', 13: '0.25%', 14: '0.2%', 15: '0.15%', 16: '0.125%', 17: '0.1%', 18: '0.075%', 19: '0.075%', 20: '0.075%', 21: '0.075%', 22: '0.075%', 23: '0.075%', 24: '0.075%', 25: '0.075%', 26: '0.075%', 27: '0.075%'}

levelBoard.style.width = `${window.localStorage.getItem('levelWidth')}`

function levelUp() {
    let levelBoard = document.getElementById('levelBoard');
    let progress = window.getComputedStyle(levelBoard).width;
    let currentScaleLevel = levelScalePercents[window.localStorage.getItem('scaleLVL')]
    let scaleLevel = Number(window.localStorage.getItem('scaleLVL'))

    window.localStorage.setItem('levelWidth', progress)
    levelBoard.style.width = `calc(${progress} + ${currentScaleLevel})`
    progress = Number(progress.slice(0, -2));

    

    // если ШКАЛА уровня заполнена, выполнить...
    if (progress >= windowWidth) { 
        window.localStorage.setItem('scaleLVL', scaleLevel + 1)
        document.getElementById('scaleLVL').innerHTML = scaleLevel+1
        levelBoard.style.width = '0%';

        var WebApp = window.Telegram.WebApp;
        WebApp.HapticFeedback.notificationOccurred('success')

        // уведомление о заполнении шкалы
        noty.style.top = '10px';
        setTimeout(()=>{ noty.style.top = '-100px'}, 3000)

        plusBalance(100)

        // начисление денег
    }
}