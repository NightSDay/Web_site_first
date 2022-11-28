
function slideUp() {
    var outer = document.getElementById('outer');
    document.getElementById('b').addEventListener('click', function(event) {
        if (outer.style.maxHeight){
            outer.style.maxHeight = null;
            outer.classList.add('closed');
        }
        else {
            outer.style.maxHeight = outer.scrollHeight + 'px';
            outer.classList.remove('closed');
        }
    });
    outer.style.maxHeight = outer.scrollHeight + 'px';
}

