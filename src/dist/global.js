// PRELOADER

$(document).ready(function () {
    // TODO: REMOVE
    $('#preloader-wrapper').hide();
    let visitedSites = localStorage.getItem('visited_sites');
    if (visitedSites != '') {
        let site = window.location.host + window.location.pathname;
        if (!visitedSites.includes(site)) {
            visitedSites += site;
            localStorage.setItem('visited_sites', visitedSites);
        } else {
            $('#preloader-wrapper').hide();
        }
    } else {
        let sites = [window.location.host + window.location.pathname];
        localStorage.setItem('visited_sites', sites);
    }
});
window.onload = function () {
    setTimeout(() => {
        $('#preloader-wrapper').fadeOut();
    }, 500);
};

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
function getCookie(cname) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

function fetchFromDataSource(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            callback(json);
        });
}

function getDifference(a, b) {
    return Math.abs(a - b);
}


function hello() {
    console.log(
        'SOURCE CODE INDEX      http://' + window.location.host + '/source.html'
    );
}
hello();