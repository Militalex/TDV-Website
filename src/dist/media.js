var audio = new Audio();
audio.volume = 0.2;

var currentAudioTitle = '';
var currentAudioFoot = '';
var currentAudioImage = '';

var iconIsPlaying = false;

var waitForMouse = false;

function setWaitForMouse(e) {
    waitForMouse = e;
}

function updateAudio(v) {
    $('#audioVisual').attr('style', 'width: ' + v + '%;');
    audio.volume = v / 100;
}

setInterval(() => {
    updateMeta();
}, 100);

function changePlayState() {
    if(audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function updateMeta() {
    $('#timeRun').text(fancyTimeFormat(Math.round(audio.currentTime)));
    $('#timeRemain').text(fancyTimeFormat(Math.round(audio.duration)));
    $('#musicTitle').text(currentAudioTitle);
    $('#musicFoot').text(currentAudioFoot);
    if (!waitForMouse)
        $('#progressBar').val(~~((audio.currentTime / audio.duration) * 100));
    updateSlider(~~((audio.currentTime / audio.duration) * 100));

    if (!audio.paused && !iconIsPlaying) {
        $('#playingIcon').html(
            '<path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>'
        );
        iconIsPlaying = true;
    } else if (audio.paused && iconIsPlaying) {
        $('#playingIcon').html(
            '<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>'
        );
        iconIsPlaying = false;
    }

    if($('#audioImage').attr('src') != currentAudioImage) {
        $('#audioImage').attr('src', currentAudioImage)
    }
}

function updateSlider(val) {
    $('#progressVisual').attr('style', 'width: ' + val + '%;');
}
function updateSliderManual(val) {
    audio.currentTime = Math.round(audio.duration * (val / 100));
}

function playSong(newSong, title, foot, image) {
    audio.src = newSong;
    currentAudioTitle = title;
    currentAudioFoot = foot;
    currentAudioImage = image;
    displayMediplayer();
    audio.play();
}
function displayMediplayer() {
    $('#media').fadeIn(200);
}

function fancyTimeFormat(duration) {
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = '';

    if (hrs > 0) {
        ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }

    ret += '' + mins + ':' + (secs < 10 ? '0' : '');
    ret += '' + secs;
    return ret;
}
