"use strict";

//ADJUST THAT TO THE ACTUAL BACKGROUND-SIZE OF
//THE RADIAL GRADIENT IN THE CSS:
const shadowSize = 100;

const wrapper = document.getElementById("wrapper");
const btn = document.querySelector("button");
const btns = document.querySelectorAll("button");

wrapper.addEventListener("pointermove", e => {
    e.currentTarget.style.backgroundPosition =
    `${e.x - shadowSize / 2}px ${e.y - shadowSize / 2}px`;

    document.documentElement.style.setProperty("--btn-pos-x",
        `${e.x - shadowSize / 2}px`);
    document.documentElement.style.setProperty("--btn-pos-y",
        `${e.y - shadowSize / 2}px`);
});