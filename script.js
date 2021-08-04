let loadBtn = document.getElementById('loadbtn')
let hide1 = document.getElementById("hide1")
let hide2 = document.getElementById("hide2")
let hide3 = document.getElementById("hide3")
let hide4 = document.getElementById("hide4")
let hide5 = document.getElementById("hide5")
let hide6 = document.getElementById("hide6")
let hide7 = document.getElementById("hide7")
let hide8 = document.getElementById("hide8")

loadBtn.addEventListener('click', load);

function load() {
    hide1.classList.remove("hide")
    hide2.classList.remove("hide")
    hide3.classList.remove("hide")
    hide4.classList.remove("hide")
    setTimeout(ok = () => {

        hide5.classList.remove("hide")
        hide6.classList.remove("hide")
        hide7.classList.remove("hide")
        hide8.classList.remove("hide")
    }, 4000)
}

function next() {
    window.location.href = "mobile.html"
    // let f = document.getElementById("cart_img").src
    // let a = document.getElementById("cart_text").innerHTML

    // let card1img = document.getElementById("card_img")
    // let card1text = document.getElementById("card_text")



    // f.src = card1img
    // a.innerHTML = card1text
}

let login = () => {
    window.open("login.html", " ", "width=650,height=420")
}