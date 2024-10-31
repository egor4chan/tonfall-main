// game functions

// получение уровней
var goldLVL = Number(document.getElementById('gold').innerHTML)
var platLVL = Number(document.getElementById('plat').innerHTML)
var donutLVL = Number(document.getElementById('donut').innerHTML)

function tap(rid, rarity) {
    var WebApp = window.Telegram.WebApp;
    WebApp.HapticFeedback.impactOccurred('light');
    var balance = Number(document.getElementById('balance').innerHTML);
    var elid = 'coin' + rid;
    var object = document.getElementById(elid)

    

    var newBalance = Number(window.localStorage.getItem('balance'))
    document.getElementById(elid).onclick = ''

    if (rarity == 1) {
        var coinsPerTap = 1 * goldLVL
        window.localStorage.setItem('balance', newBalance + 1 * Number(window.localStorage.getItem('gold'))) 
    }
    if (rarity == 2) {
        var coinsPerTap = 5 * platLVL
        window.localStorage.setItem('balance', newBalance + 5 * Number(window.localStorage.getItem('plat')))
    }
    if (rarity == 3) {
        var coinsPerTap = 50 * donutLVL
        window.localStorage.setItem('donutTotalClaimed', Number(window.localStorage.getItem('donutTotalClaimed')) + 1)
        window.localStorage.setItem('balance', newBalance + 50 * Number(window.localStorage.getItem('donut')))
    }

    object.style.transition = '0.5s'
    object.style.top = '-100px'
    
    object.style.scale = '1.3'

    setTimeout(()=> {object.style.scale = '0'; object.removeEventListener('click', counter);}, 100)
    
    
    document.getElementById('balance').innerHTML = balance + Number(coinsPerTap)
    levelUp()

}

function openTON() {
    // при нажатии на падающий TON
    var tonCloud = document.getElementById('ton');
    
    tonCloud.style.top = '25%';
}


function hide() {
    var tonCloud = document.getElementById('ton');
    
    tonCloud.style.top = '-55%';
}