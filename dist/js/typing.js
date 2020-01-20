//jQuery onload
$(function () {
    animationCurser();
});

function whichAnimationEvent() {
    var t,
        el = document.createElement("fakeelement");

    var animations = {
        "animation": "animationend",
        "OAnimation": "oAnimationEnd",
        "MozAnimation": "animationend",
        "WebkitAnimation": "webkitAnimationEnd"
    }

    for (t in animations) {
        if (el.style[t] !== undefined) {
            return animations[t];
        }
    }
}

function animationCurser() {
    var animationEvent = whichAnimationEvent();

    $('#l1').addClass("curser");
    $('#l1').one(animationEvent,
        function (event) {
            // Do something when the transition ends
            $('#l1').removeClass('curser');
            $('#l2').addClass('curser');
        });
}