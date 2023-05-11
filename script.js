let toggleBtn = document.getElementById('toggleBtn')

let hidden = document.getElementById('hidden')
let count = 0;

function hide() {
    if (count === 0) {
        hidden.style.display = 'inline-flex';
        count = 1;
    }
    else if (count === 1) {
        hidden.style.display = 'none'
        count = 0;
    }
}