var balanceLocalStorage = Number(window.localStorage.getItem('balance'));


function checkCosts() { // красная цена в магазие
    var goldCost = document.getElementById('goldCost').innerHTML;
    var platCost = document.getElementById('platCost').innerHTML;
    var donutCost = document.getElementById('donutCost').innerHTML;
    var balanceLocalStorage = Number(window.localStorage.getItem('balance'));

    goldCost = parseInt(goldCost.match(/\d+/))
    platCost = parseInt(platCost.match(/\d+/))
    donutCost = parseInt(donutCost.match(/\d+/));

if (balanceLocalStorage >= Number(goldCost)) {
    document.getElementById('goldCost').style.color = 'white';
    document.getElementById('goldtask').setAttribute('onclick', 'update(1)');
}
if (balanceLocalStorage < Number(goldCost)) {
    document.getElementById('goldCost').style.color = 'red';
    document.getElementById('goldtask').setAttribute('onclick', 'shake(1)');
}
if (balanceLocalStorage >= Number(platCost)) {
    document.getElementById('platCost').style.color = 'white';
    document.getElementById('plattask').setAttribute('onclick', 'update(2)');
}
if (balanceLocalStorage < Number(platCost)) {
    document.getElementById('platCost').style.color = 'red';
    document.getElementById('plattask').setAttribute('onclick', 'shake(2)');
}
if (balanceLocalStorage >= Number(donutCost)) {
    document.getElementById('donutCost').style.color = 'white';
    document.getElementById('donuttask').setAttribute('onclick', 'update(3)');
}
if (balanceLocalStorage < Number(donutCost)) {
    document.getElementById('donutCost').style.color = 'red';
    document.getElementById('donuttask').setAttribute('onclick', 'shake(3)');
}
else {
    console.log('Balance LS: ', balanceLocalStorage)
    console.log('Gold cost: ', goldCost)
}
}

checkCosts()

function shake(pos) {
    if (pos == 1) 
        var goldTask = document.getElementById('goldtask');
    if (pos == 2)
        var goldTask = document.getElementById('plattask')
    if (pos == 3)
        var goldTask = document.getElementById('donuttask')
    goldTask.style = 'animation: shake 0.3s forwards';

    setTimeout(()=>{
        goldTask.style.animation = ''
    }, 300)
}

