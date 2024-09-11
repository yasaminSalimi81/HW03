const boxes = document.getElementsByClassName("boxes");
const code1 = Math.floor(Math.random()*255);
const code2 = Math.floor(Math.random()*255);
const code3 = Math.floor(Math.random()*255);
const newcolor = 'rgb(' + code1 + ',' + code2 + ',' + code3 + ')';
boxes[0].addEventListener("Click", () => {
    boxes[0].style.background = newcolor;
});
boxes[1].addEventListener("click", () => {
    boxes[1].style.background = newcolor;
});
boxes[2].addEventListener("click", () => {
    boxes[2].style.background = newcolor;
});
