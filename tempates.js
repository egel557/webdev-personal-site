"use strict"

const navTemplate = document.createElement("nav")

navTemplate.classList.add("navbar", "navbar-expand-lg", "bg-dark", "navbar-dark")
navTemplate.innerHTML = `
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Eigel Asinas</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                ${createNavLink("index.html", "Home")}
                ${createNavLink("about.html", "About")}
                ${createNavLink("testimonies.html", "Testimonies")}
            </ul>
        </div>
    </div>
`

const mainNav = document.getElementById("main-nav")
mainNav.classList = navTemplate.classList
mainNav.innerHTML = navTemplate.innerHTML
const body = document.body
body.style.backgroundImage = "url('background.jpg')"
body.style.backgroundSize = "cover"

function createNavLink(path, label){
    let pathArr = window.location.href.split("/")
    let currentPath = pathArr[pathArr.length - 1]
    return `
        <li class="nav-item">
            <a class="nav-link ${currentPath === path && "active"}" aria-current="page" href="${path}">${label}</a>
        </li>
    `
}
