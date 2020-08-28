"use strict";

var products = document.querySelector(".products");
var item = document.querySelectorAll(".products__item");
var cardLayer = document.querySelectorAll(".card");
var weigthBubble = document.querySelectorAll(".element__weight");
var body = document.querySelector("body");

function selectItem(target) {
    let localCard = target.closest("aside").querySelector(".card");
    let localDefaultSpan = target.closest("aside").querySelector(".products__availability");
    let localDisabledSpan = target.closest("aside").querySelector(".products__availability-disabled");
    let localSelectedSpan = target.closest("aside").querySelector(".products__availability-selected");
    let localWeigthBubble = target.closest("aside").querySelector(".element__weight");

    if (localCard.classList.contains("card--selected")) {
        console.log("found")
        localCard.classList.remove("card--selected");

        localDefaultSpan.classList.remove("visually-hidden");
        localWeigthBubble.classList.remove("element__weight--selected")
        localSelectedSpan.classList.add("visually-hidden");
    } else if (localCard.classList.contains("card--disabled")) {
        return
    } else {
        localCard.classList.add("card--selected")

        localDefaultSpan.classList.add("visually-hidden");
        localWeigthBubble.classList.add("element__weight--selected")
        localSelectedSpan.classList.remove("visually-hidden");
    }
}

function onCardHighlight(target) {
    let localAside = target.closest("aside");
    localAside.querySelector(".card").classList.add("card--selected-hover");

    localAside.querySelector(".element__weight").classList.add("element__weight--selected-hover");
    localAside.querySelector(".element__dream").classList.add("visually-hidden");
    localAside.querySelector(".element__dream-selected-hover").classList.remove("visually-hidden");
    setTimeout(function () {
        localAside.querySelector(".card").classList.remove("card--selected-hover");

        localAside.querySelector(".element__weight").classList.remove("element__weight--selected-hover");
        localAside.querySelector(".element__dream").classList.remove("visually-hidden");
        localAside.querySelector(".element__dream-selected-hover").classList.add("visually-hidden");
    }, 1000)
}

products.onclick = function (evt) {
    let target = evt.target;
    selectItem(target);
}

products.onmouseout = function (evt) {
    let target = evt.target;
    if (target.className != "card" && target.className != "element__img") return;
    onCardHighlight(target);
}

