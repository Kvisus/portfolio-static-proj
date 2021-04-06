let d = document.querySelector('img');

/* d.onclick = function (d) {
    d.target.style.transform = "rotate(20deg)";
} */

function Rotate(t) {
    t.target.style.transform = "scale(-1,1)";
    t.target.removeEventListener('click',Rotate);
    t.target.addEventListener('click',RotateBack);
}

function RotateBack(t) {
    t.target.style.transform = "scale(1,1)";
    t.target.removeEventListener('click',RotateBack);
    t.target.addEventListener('click',Rotate);
}

d.addEventListener('click', Rotate);
