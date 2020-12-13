function toggleThemes() {
    let container = document.querySelector(".container");
    let toggleBall = document.querySelector(".toggle-ball");
    let boxes = document.querySelectorAll("div.big-box, div.small-box");
    let boxesHover = document.querySelector(".big-box:hover");
    let textItems = document.querySelectorAll("h4.header_h4, p.screen-name, h4.big-box_h4, p.small-box-type_p");

    container.classList.toggle("container__light-theme");

    toggleBall.classList.toggle("toggle-ball__light-theme");

    boxes.forEach(box => {
        box.classList.toggle("box__light-theme");
    });

    textItems.forEach(textItem => {
        textItem.classList.toggle("text__light-theme");
    });
}
