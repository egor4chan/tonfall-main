let donutTotalClaimed = window.localStorage.getItem('donutTotalClaimed');

//window.localStorage.setItem('donutTotalClaimed', 13)

if (donutTotalClaimed != null) {
    document.getElementById('donutTotal').innerHTML = donutTotalClaimed;
}

else {
    window.localStorage.setItem('donutTotalClaimed', 0)
    document.getElementById('donutTotal').innerHTML = 0;
}

function claim() {
    console.log('CLAIM')
    window.localStorage.setItem('donutTotalClaimed', 0);
    document.getElementById('donutTotal').innerHTML = 0;
    document.getElementById('donutsTotalDiv').style.animation = 'none'
}

function shake(pos) {
    document.getElementById(pos).style = 'animation: shake 0.3s forwards'

    setTimeout(()=>{
        document.getElementById(pos).style.animation = ''
    }, 300)
}