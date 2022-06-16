window.onload = () => {
    document.getElementById('open').addEventListener('click', move)
    document.getElementById('closed').addEventListener('click', move2)
}

function move() {
    document.getElementById('article').classList.add('rotate')
    document.getElementById('icons').classList.add('rotate-icons')
}

function move2() {
    document.getElementById('article').classList.remove('rotate')
    document.getElementById('icons').classList.remove('rotate-icons')
}