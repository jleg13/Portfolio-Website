const pythonPreview1_btn = document.querySelector('#python1');
const pythonPreview1_outer = document.querySelector('.python1__replit');
const pythonPreview1_inner = document.querySelector('.replit1__inner');

const pythonPreview2_btn = document.querySelector('#python2');
const pythonPreview2_outer = document.querySelector('.python2__replit');
const pythonPreview2_inner = document.querySelector('.replit2__inner');

let showRepl1 = false;
let showRepl2 = false;

pythonPreview1_btn.addEventListener('click', openPreview1);
pythonPreview1_inner.addEventListener('click', closePreview1);

pythonPreview2_btn.addEventListener('click', openPreview2);
pythonPreview2_inner.addEventListener('click', closePreview2);

function openPreview1() {
    if (!showRepl1) {
        pythonPreview1_outer.classList.add('open');
        pythonPreview1_inner.classList.add('open');
        showRepl1 = true;
    }
}

function closePreview1() {
    if (showRepl1) {
        pythonPreview1_outer.classList.remove('open');
        pythonPreview1_inner.classList.remove('open');
        showRepl1 = false;
    }
}

function openPreview2() {
    if (!showRepl2) {
        pythonPreview2_outer.classList.add('open');
        pythonPreview2_inner.classList.add('open');
        showRepl2 = true;
    }
}

function closePreview2() {
    if (showRepl2) {
        pythonPreview2_outer.classList.remove('open');
        pythonPreview2_inner.classList.remove('open');
        showRepl2 = false;
    }
}