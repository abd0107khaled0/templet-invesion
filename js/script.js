window.onscroll = function(){
    'use strict';

    let background = document.querySelector("header nav");
    let ul_li = document.querySelector("header nav .collapse ul li a span");
    let ul_li2 = document.querySelector("header nav .collapse ul li a .span2");
    let ul_li3 = document.querySelector("header nav .collapse ul li a .span3");
    let ul_li4 = document.querySelector("header nav .collapse ul li a .span4");
    let ul_li5 = document.querySelector("header nav .collapse ul li a .span5");
    let i_link = document.querySelector("header nav .collapse ul .i-link");
    let i_link7 = document.querySelector("header nav .collapse ul .i-link .span7");
    
    if( window.pageYOffset >= '0' ){
        background.style.backgroundColor = "white";
        ul_li.style.color = "#000";
        ul_li2.style.color = "#000";
        ul_li3.style.color = "#000";
        ul_li4.style.color = "#000";
        ul_li5.style.color = "#000";
        i_link.style.color = "#000";
        i_link7.style.color = "#000";
    }
    if( window.pageYOffset <= '0' ){
        background.style.backgroundColor = "transparent";
        ul_li.style.color = "#FFF";
        ul_li2.style.color = "#FFF";
        ul_li3.style.color = "#FFF";
        ul_li4.style.color = "#FFF";
        ul_li5.style.color = "#FFF";
        i_link.style.color = "#FFF";
        i_link7.style.color = "#FFF";
    }
}