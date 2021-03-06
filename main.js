document.addEventListener('keyup', (event)=> {
    if(event.keyCode === 13){
    toggleThemes();
    }
});

function toggleThemes() {
    let container = document.querySelector(".container");
    let toggleBall = document.querySelector(".toggle-ball");
    let toggleBallHidden = document.querySelector(".toggle-ball__hidden");
    let boxes = document.querySelectorAll("div.big-box, div.small-box");
    let boxesHover = document.querySelector(".big-box:hover");
    let textItems = document.querySelectorAll("h4.header_h4, p.screen-name, h4.big-box_h4, p.small-box-type_p");
    let bgTop = document.querySelector(".bg-top");

    bgTop.classList.toggle("bg-top__light-theme");

    container.classList.toggle("container__light-theme");

    toggleBallHidden.classList.toggle("toggle__show");


    toggleBall.classList.toggle("toggle__hide");

    boxes.forEach(box => {
        box.classList.toggle("box__light-theme");
    });

    textItems.forEach(textItem => {
        textItem.classList.toggle("text__light-theme");
    });

}
