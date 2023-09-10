const bkgh = 1080;
const bkgw = 1920;
const container = document.getElementById('container');
const map = document.getElementById('map');
const overlay = document.getElementById('overlay');
const buttons = document.getElementsByTagName('button');

const onLoad = () => {
    overlay.style.width = `${window.innerWidth}px`;
    overlay.style.height = `${(window.innerWidth * 1080 / 1920)}px`; 
}
const onResize = () => {
    container.style.width = `${window.innerWidth}px`;
    container.style.height = `${(window.innerWidth * 1080 / 1920)}px`;
    map.style.width = `${window.innerWidth}px`;
    map.style.height = `${(window.innerWidth * 1080 / 1920)}px`;
    overlay.style.width = `${window.innerWidth}px`;
    overlay.style.height = `${(window.innerWidth * 1080 / 1920)}px`;
};
const onBtnClick = (e) => {
    if (!e.target.closest('.map-btn')) {
        return;
    } else {
        let btn = e.target.closest('.map-btn');
        let span = btn.getElementsByTagName('span');
        console.log(btn)
    if (btn && !btn.classList.contains('opened-btn')) {
        btn.classList.add('opened-btn');
        var delay = setTimeout(() => {span[0].classList.add('opened-span')}, 100);
    } else if (btn && btn.classList.contains('opened-btn')) {
        btn.classList.remove('opened-btn');
        span[0].classList.remove('opened-span');
        clearTimeout(delay);
    }
}
}

window.addEventListener("resize", onResize);
window.addEventListener("load", onLoad);
document.addEventListener('click', onBtnClick);
