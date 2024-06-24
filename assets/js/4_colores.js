function pintar(div) {
    div.style.backgroundColor = "black";
}

let div1 = document.getElementById("1");
div1.addEventListener("click", function() {
    pintar(div1)
})
let div2 = document.getElementById("2");
div2.addEventListener("click", function() {
    pintar(div2)
})

let div3 = document.getElementById("3");
div3.addEventListener("click", function() {
    pintar(div3)
})

let div4 = document.getElementById("4");
div4.addEventListener("click", function() {
    pintar(div4)
})




