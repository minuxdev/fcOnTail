


function open_menu(e){
    var menu = document.getElementById("drop-menu");
    var close = document.getElementById("t-close");
    menu.style.display = "block";
    e.style.display = "none";
    close.style.display = "block";
}

function close_menu(e){
    var menu_close = document.getElementById("drop-menu");
    var _open = document.getElementById("t-open");
    menu_close.style.display = "none";
    e.style.display = "none";
    _open.style.display = "block";
}