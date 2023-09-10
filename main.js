const container = document.getElementById('container');
const map = document.getElementById('map');
const overlay = document.getElementById('overlay');
const buttons = document.getElementsByTagName('button');
console.log(buttons);

// addEventListener to size overlay on page load
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
    console.log(window.innerWidth);
};
const onBtnClick = (e) => {
    if (e.target.closest('.map-btn') && !e.target.closest('.map-btn').classList.contains('opened-btn')) {
        e.target.closest('.map-btn').classList.add('opened-btn');
    } else if (e.target.closest('.map-btn') && e.target.closest('.map-btn').classList.contains('opened-btn')) {
        e.target.closest('.map-btn').classList.remove('opened-btn');
    }
}
window.addEventListener("resize", onResize);
window.addEventListener("load", onLoad);
document.addEventListener('click', onBtnClick);
