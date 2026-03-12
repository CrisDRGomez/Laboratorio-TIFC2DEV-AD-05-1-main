const color =["green", "blue", "red"];
function randomColor(){
    return colors[Math.floor(Math.random() * color.length)];
}

const title = document.querySelectorAll("h5");
title.forEach(title => {
    title.addEventListener("click", function(){
        title.style.color = randomColor();
    });
});