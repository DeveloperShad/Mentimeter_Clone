// window.onscroll = function() { myFunction() };

// // Get the navbar
// var navbar = document.getElementsByClassName("top_nav");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky")
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }
var popUp = document.getElementsByClassName("pop_up")
var cross = document.getElementById("cross_image")

function popOut(e) {
    e.target.parentNode.parentNode.remove()
}
cross.addEventListener('click', popOut)
var learn = document.querySelector(".learn")

function bg_color() {
    learn.style.background = "#101834"
    learn.style.color = "white"

}

function bg_color1() {
    learn.style.background = "#FF80AB"
    learn.style.color = "#101834"

}
learn.addEventListener('mouseenter', bg_color)
learn.addEventListener('mouseleave', bg_color1)

var vid = document.getElementById("vid")
var a = document.getElementById("ancor")
var feat = document.getElementById("feat")

function change_bg_color() {
    vid.style.background = "#196CFF"
    a.style.color = "white"

}

function change_bg_color1() {
    vid.style.background = "white"
    a.style.color = "#196CFF"

}
vid.addEventListener('mouseenter', change_bg_color)
vid.addEventListener('mouseleave', change_bg_color1)

function change_bg_color2(e) {
    e.target.style.background = "#196CFF"
    e.target.firstChild.style.color = "white"

}

function change_bg_color12(e) {
    e.target.style.background = "white"
    e.target.firstChild.style.color = "#196CFF"

}
document.querySelectorAll('.features').forEach(item => {
    item.addEventListener('mouseenter', change_bg_color2)
    item.addEventListener('mouseleave', change_bg_color12)
})
var getStart = document.querySelector(".get")

function change_bg(e) {
    e.target.style.background = "#BABBB8"

}

function change_bg1(e) {
    e.target.style.background = "white"
    e.target.style.color = "#196CFF"
}
getStart.addEventListener('mouseenter', change_bg)
getStart.addEventListener('mouseleave', change_bg1)

function nav_ele_color(e) {
    e.target.style.color = "rgb(25, 108, 255)"

}

function nav_ele_color1(e) {

    e.target.style.color = "black"
}
document.querySelectorAll('.det_hover').forEach(item => {
    item.addEventListener('mouseenter', nav_ele_color)
    item.addEventListener('mouseleave', nav_ele_color1)
})