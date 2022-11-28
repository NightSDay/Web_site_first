let images = document.getElementById('block');

let left = 0;

function toRight() {
    if(left < 2) {
        left++
        images.style.left = -left * 880 + 'px'
    }
    else {
        left = 0
        images.style.left = -left * 880 + 'px'
    }
}
function toLeft() {
    if(left === 0) {
        left = 2
        images.style.left = -left * 880 + 'px'
    }
    else {
        left--
        images.style.left = -left * 880 + 'px'
    }
}