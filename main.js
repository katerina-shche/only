const container = document.getElementById('container');
const map = document.getElementById('map');
const overlay = document.getElementById('overlay');
console.log(container, map, overlay);



const onResize = () => {
    container.style.width = `${window.innerWidth}px`;
    container.style.height = `${(window.innerWidth * 1080 / 1920)}px`;
    map.style.width = `${window.innerWidth}px`;
    map.style.height = `${(window.innerWidth * 1080 / 1920)}px`;
    overlay.style.width = `${window.innerWidth}px`;
    overlay.style.height = `${(window.innerWidth * 1080 / 1920)}px`;
    console.log(window.innerWidth);
};
window.addEventListener("resize", onResize)
