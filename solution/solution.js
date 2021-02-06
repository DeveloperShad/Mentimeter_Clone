//For Business class
var bus = document.querySelector('.business_more')

function change_color() {
    bus.style.background = "#BABBB8"
    bus.style.color = "black"

}

function change_color1() {
    bus.style.background = "white"
    bus.style.color = "#196CFF"

}
bus.addEventListener('mouseenter', change_color)
bus.addEventListener('mouseleave', change_color1)

var more_det1 = document.querySelector(".lrm1")
var more_det2 = document.querySelector(".lrm2")
var more_det3 = document.querySelector(".lrm3")
var more_det4 = document.querySelector(".lrm4")
var getStart = document.querySelector(".get")

function change_bg_color(e) {
    e.target.style.background = "#196CFF"
    e.target.style.color = "white"

}

function change_bg_color1(e) {
    e.target.style.background = "white"
    e.target.style.color = "#196CFF"

}

function change_bg(e) {
    e.target.style.background = "#BABBB8"

}

function change_bg1(e) {
    e.target.style.background = "white"
    e.target.style.color = "#196CFF"
}
getStart.addEventListener('mouseenter', change_bg)
getStart.addEventListener('mouseleave', change_bg1)

more_det1.addEventListener('mouseenter', change_bg_color)
more_det1.addEventListener('mouseleave', change_bg_color1)

more_det2.addEventListener('mouseenter', change_bg_color)
more_det2.addEventListener('mouseleave', change_bg_color1)

more_det3.addEventListener('mouseenter', change_bg_color)
more_det3.addEventListener('mouseleave', change_bg_color1)

more_det4.addEventListener('mouseenter', change_bg_color)
more_det4.addEventListener('mouseleave', change_bg_color1)