const header = document.querySelector(".header");
const navIcon = document.querySelector(".mobile_icon");
const toglenav = () => {
    header.classList.toggle("active")
}


navIcon.addEventListener("click", () => toglenav());



// Categorie

// box 1 start
const plus1 = () => {
    document.getElementById("plus1").style.display = "none";
    document.getElementById("subract1").style.display = "block";
    document.getElementById("categorie_hide1").style.display = "block";
    console.log("i")
}
const sub1 = () => {
    document.getElementById("plus1").style.display = "block";
    document.getElementById("subract1").style.display = "none";
    document.getElementById("categorie_hide1").style.display = "none";

    console.log("i")
}
// box 22 start

const plus2 = () => {
    document.getElementById("plus2").style.display = "none";
    document.getElementById("subract2").style.display = "block";
    document.getElementById("categorie_hide2").style.display = "block";
    console.log("hi")
}
const sub2 = () => {
    document.getElementById("plus2").style.display = "block";
    document.getElementById("subract2").style.display = "none";
    document.getElementById("categorie_hide2").style.display = "none";

    console.log("hi")
}
const plus3 = () => {
    document.getElementById("plus3").style.display = "none";
    document.getElementById("subract3").style.display = "block";
    document.getElementById("categorie_hide3").style.display = "block";
    console.log("hi")
}
const sub3 = () => {
    document.getElementById("plus3").style.display = "block";
    document.getElementById("subract3").style.display = "none";
    document.getElementById("categorie_hide3").style.display = "none";

    console.log("hi")
}



// SELECTION START
const selection = document.querySelector(".section_icon");
const list_gallery =document.getElementById("list_gallery");
const grid_gallery =document.getElementById("grid_gallery");

const list = ()=>{
    selection.classList.add("list")
    selection.classList.remove("grid")
    list_gallery.style.display = "block";
    grid_gallery.style.display = "none";
    console.log("hhh");
}
const grid = ()=>{
    selection.classList.add("grid")
    selection.classList.remove("list")
    grid_gallery.style.display = "block";
    list_gallery.style.display = "none";
    console.log("--");
}


// SHOP SHOW