var balanceInner = document.getElementById('balance');

function updateBalanceLocalStorage(minus) {
    var result = Number(window.localStorage.getItem('balance')) - Number(minus);
    window.localStorage.setItem('balance', result)

    document.getElementById('balance').innerHTML = window.localStorage.getItem('balance')
    checkCosts()
}

function plusBalance(plus) {
    var result = Number(window.localStorage.getItem('balance')) + Number(plus);
    window.localStorage.setItem('balance', result)

    document.getElementById('balance').innerHTML = window.localStorage.getItem('balance')

}

function upgradeLevel(rarity) {
    // GOLD COIN
    if (rarity == 1) { 
        var res = Number(window.localStorage.getItem('gold')) + 1;
        window.localStorage.setItem('gold', res);
        document.getElementById('gold').innerHTML = res;
        document.getElementById('goldEarn').innerHTML = res * 1;
        document.getElementById('GoldPrice').innerHTML = GoldPrice[window.localStorage.getItem('gold')]
    }
    // PLATINUM COIN
    if (rarity == 2) { 
        var res = Number(window.localStorage.getItem('plat')) + 1;
        window.localStorage.setItem('plat', res);
        document.getElementById('plat').innerHTML = res;
        document.getElementById('platEarn').innerHTML = res * 5;
        document.getElementById('PlatPrice').innerHTML = PlatPrice[window.localStorage.getItem('plat')]

    }
    // DONUT COIN
    if (rarity == 3) { 
        var res = Number(window.localStorage.getItem('donut')) + 1;
        window.localStorage.setItem('donut', res);
        document.getElementById('donut').innerHTML = res;
        document.getElementById('donutEarn').innerHTML = res * 50;
        document.getElementById('DonutPrice').innerHTML = DonutPrice[window.localStorage.getItem('donut')]
    }
}

function update(position) {
    var WebApp = window.Telegram.WebApp;
    WebApp.HapticFeedback.notificationOccurred('success')
    checkCosts()
    if (position == 1) {
        updateBalanceLocalStorage(GoldPrice[window.localStorage.getItem('gold')]) // списать деньги
        upgradeLevel(1) // улучшить
        document.getElementById('notify').style = 'animation: notify 3s ease forwards'
        setTimeout(()=>{ document.getElementById('notify').style = 'animation: none;'}, 3000)
    }

    if (position == 2) {
        updateBalanceLocalStorage(PlatPrice[window.localStorage.getItem('plat')])
        upgradeLevel(2)
        document.getElementById('notify').style = 'animation: notify 3s ease forwards'
        setTimeout(()=>{ document.getElementById('notify').style = 'animation: none;'}, 3000)
    }

    if (position == 3) {
        updateBalanceLocalStorage(DonutPrice[window.localStorage.getItem('donut')])
        upgradeLevel(3)
        document.getElementById('notify').style = 'animation: notify 3s ease forwards'
        setTimeout(()=>{ document.getElementById('notify').style = 'animation: none;'}, 3000)
    }
}