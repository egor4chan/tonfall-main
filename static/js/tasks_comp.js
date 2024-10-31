// если задание с пончиками выполнено или перевыполнено
if (Number(document.getElementById('donutTotalNeed').innerHTML) <= Number(donutTotalClaimed)) {
    document.getElementById('donutsTotalDiv').style = 'animation: breef 1s infinite';
    document.getElementById('donutsTotalDiv').setAttribute('onclick', 'claim()')
    document.getElementById('donutTotal').innerHTML = 10;
    console.log("EEEEVVEEVVEVE")
    console.log('LS:', donutTotalClaimed)
}

else {
    document.getElementById('donutsTotalDiv').setAttribute('onclick', 'shake("donutsTotalDiv")')
    document.getElementById('donutsTotalDiv').style.animation = 'none'
    console.log('LS:', donutTotalClaimed)
}



