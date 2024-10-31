var balance = window.localStorage.getItem('balance');
var level = window.localStorage.getItem('donut');

const GoldPrice = {1: 100, 2: 300, 3: 1000, 4: 2000, 5: 5000, 6: 7500, 7: 10000, 8: 15000, 9: 20000, 10: 44444}
const PlatPrice = {1: 200, 2: 500, 3: 1500, 4: 2500, 5: 7500, 6: 12500, 7: 15000, 8: 20000, 9: 30000, 10: 55555}
const DonutPrice = {1: 300, 2: 1000, 3: 3000, 4: 5000, 5: 10000, 6: 20000, 7: 25000, 8: 30000, 9: 37500, 10: 66666}
// debug 
//window.localStorage.setItem('balance', 10)
//window.localStorage.setItem('scaleLVL', 1)
// если пользователь зарегистрирован
if (balance != null) {
    var balance = window.localStorage.getItem('balance');
    document.getElementById('balance').innerHTML = balance;

    document.getElementById('scaleLVL').innerHTML = window.localStorage.getItem('scaleLVL');
    
    document.getElementById('gold').innerHTML = window.localStorage.getItem('gold');
    document.getElementById('plat').innerHTML = window.localStorage.getItem('plat');
    document.getElementById('donut').innerHTML = window.localStorage.getItem('donut');

    document.getElementById('goldEarn').innerHTML = window.localStorage.getItem('gold');
    document.getElementById('platEarn').innerHTML = Number(window.localStorage.getItem('plat')) * 5;
    document.getElementById('donutEarn').innerHTML = Number(window.localStorage.getItem('donut')) * 50;

    document.getElementById('GoldPrice').innerHTML = GoldPrice[window.localStorage.getItem('gold')]
    document.getElementById('PlatPrice').innerHTML = PlatPrice[window.localStorage.getItem('plat')]
    document.getElementById('DonutPrice').innerHTML = DonutPrice[window.localStorage.getItem('donut')]
}


// если это новый пользователь
else {
    document.getElementById('balance').innerHTML = 0;
    window.localStorage.setItem('balance', 0);
    window.localStorage.setItem('gold', 1)
    window.localStorage.setItem('plat', 1)
    window.localStorage.setItem('donut', 1)

    window.localStorage.setItem('scaleLVL', 1)
    // начисляем первый уровень всем позициям 
}

if (level == null) {
    window.localStorage.setItem('gold', 1)
    window.localStorage.setItem('plat', 1)
    window.localStorage.setItem('donut', 1)
}

if (window.localStorage.getItem('scaleLVL') == null) {
    window.localStorage.setItem('scaleLVL', 1)
} 
