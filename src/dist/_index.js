$(window).on('scroll', function () {
    console.log(revealed);
    if (revealed != '0') {
        if (getDifference($(document).scrollTop(), scrollPositionCache) > 300) {
            move(false, revealed);
            revealed = '0';
        }
    }
});

let lastRevealed = '0';
let revealed = '0';
let scrollPositionCache = 0;
function toggle(id) {
    if (revealed != '0') {
        move(false, lastRevealed);
        move(false, id);
        revealed = '0';
        scrollPositionCache = $(document).scrollTop();
    } else {
        move(false, lastRevealed);
        move(true, id);
        revealed = id;
        scrollPositionCache = $(document).scrollTop();
    }
    lastRevealed = id;
}
function move(reveal, id) {
    try {
        //reveal = !reveal;
        var elem = document.getElementById('image-' + id);
        var elemMobile = document.getElementById('image-' + id + '-mobile');
        var flag = document.getElementById('flag-' + id);
        if (reveal) {
            flag.classList.remove('hover:-left-8', 'hover:rounded-r-sm');
            flag.classList.add('hover:-left-32');
            elem.style.right = 45 + '%';
            $(elemMobile).fadeOut(400);
        } else {
            flag.classList.remove('hover:-left-32');
            flag.classList.add('hover:-left-8', 'hover:rounded-r-sm');
            elem.style.right = 98 + '%';
            $(elemMobile).fadeIn(400);
        }
    } catch (err) {
    }
}
