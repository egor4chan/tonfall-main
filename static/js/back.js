function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
}

var coin
var randomID

function counter(event)  {
        // добавляем обработчик события "mousemove"
        const x = event.clientX; // получаем координату X мыши
        const y = event.clientY; // получаем координату Y мыши
        add_clicker_effect(x, y)
}

function spawn() {
    var coinRarity = Number(getRandomArbitrary(1, 101)).toFixed(0);
    var randomID = getRandomArbitrary(100000, 999999)

    if (coinRarity < 3 ) {
        create_coin(3, randomID)
    }

    if (coinRarity < 21 && coinRarity > 3) {
        create_coin(2, randomID)
    }

    if (coinRarity >= 21 && coinRarity != 101) {
        create_coin(1, randomID)
    }
    if (coinRarity == 101) {
        create_coin(4, randomID)
    }

}

setInterval(spawn, 466)

function create_coin(rarity, id) {
    coin = document.createElement('img')

    if (rarity == 1) {
        coin.setAttribute('src', 'static/js/images/IMG_0933.PNG')
        var func = `tap(${id}, ${rarity})`
    }
    if (rarity == 2) {
        coin.setAttribute('src', 'static/js/images/silver.PNG')
        var func = `tap(${id}, ${rarity})`
    }
    if (rarity == 3) {
        coin.setAttribute('src', 'static/js/images/donut.PNG')
        var func = `tap(${id}, ${rarity})`
    }
    if (rarity == 4) {
        coin.setAttribute('src', 'static/js/images/ton.PNG')
        var func = `openTON()`
    }

    
    coin.setAttribute('class', 'bcoin')

    if (id % 2 == 0) {
        coin.style = `animation: drop 4s forwards; left: ${getRandomArbitrary(-10, 70)}%`;
    }
    else {
        coin.style = `animation: drop_second 4s forwards; left: ${getRandomArbitrary(-10, 70)}%`;
    }
        
    document.body.appendChild(coin)


    coin.setAttribute('id', `coin${id}`)
     // передаем айди через надатие в функцию
    coin.setAttribute('onclick', func)

    coin.addEventListener('click', counter)


    setTimeout(()=>{
        document.getElementById(`coin${id}`).remove()
    }, 4000)


}


function add_clicker_effect(x, y, count) {
    let el = document.createElement("h6");
    el.setAttribute('id', 'counter')
    el.innerHTML = '?', count;
    el.style.position = 'absolute';
    el.style.userSelect = 'none';
    el.style.webkitUserSelect = 'none';
    
    el.style.top = `${y}px`
    el.style.left = `${x}px`
    document.body.appendChild(el)
    el.onclick = click;
    setTimeout(() => {
        el.remove();
    }, 200)
}
