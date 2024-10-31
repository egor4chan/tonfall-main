var frens = document.getElementById('frenshtml');
var board = document.getElementById('boardhtml');
var shop = document.getElementById('shophtml');

function src_shop() {
    var board = document.getElementById('boardhtml');
    board.style = 'opacity: 0; z-index: -100; position: absolute;'

    shop.style = 'opacity: 1; z-index: 100';

}

function src_frens() {
    
        var board = document.getElementById('boardhtml');
        board.style = 'opacity: 0; z-index: -100; position: absolute;'

        frens.style = 'opacity: 1; z-index: 100';

}