const header = document.querySelector(".header");
const navIcon = document.querySelector(".mobile_icon");
const toglenav = () => {
    header.classList.toggle("active")
}


navIcon.addEventListener("click", () => toglenav());


// image seclection
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

const image1 = document.getElementById("img1");
const image2 = document.getElementById("img2");
const image3 = document.getElementById("img3");

const one = ()=>{
    
}
card1.addEventListener("click",()=>{
    image1.style.display="block";
    image2.style.display="none";
    image3.style.display="none";
});

card2.addEventListener("click",()=>{
    image1.style.display="none";
    image2.style.display="block";
    image3.style.display="none";
});

card3.addEventListener("click",()=>{
    image1.style.display="none";
    image2.style.display="none";
    image3.style.display="block";
});











// center 

const center1=document.getElementById ('center_box1');
const center2=document.getElementById('center_box2');
const center3=document.getElementById('center_box3');
const container1=document.getElementById('container_1');
const container2=document.getElementById('container_2');
const container3=document.getElementById('container_3');


const descript =()=>{
    center1.classList.add("center_box1");
    center2.classList.remove("center_box1");
    center3.classList.remove("center_box1");
    container1.style.display="block";
    container2.style.display="none";
    container3.style.display="none";
}

const review =()=>{
    center1.classList.remove("center_box1");
    center2.classList.add("center_box1");
    center3.classList.remove("center_box1");
    container1.style.display="none";
    container2.style.display="block";
    container3.style.display="none";
}

const tag =()=>{
    center1.classList.remove("center_box1");
    center2.classList.remove("center_box1");
    center3.classList.add("center_box1");
    container1.style.display="none";
    container2.style.display="none";
    container3.style.display="block";
}












var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });




















  // Get the elements
const decreaseButton = document.querySelector('.descrease');
const increaseButton = document.querySelector('.increase');
const valueElement = document.querySelector('.value');

// Initialize the current value
let currentValue = 1;

// Function to update the value element
function updateValue() {
    valueElement.textContent = currentValue;
}

// Increase button click event
increaseButton.addEventListener('click', () => {
    currentValue++;
    updateValue();
});

// Decrease button click event
decreaseButton.addEventListener('click', () => {
    if (currentValue > 1) {
        currentValue--;
        updateValue();
    }
});

// Initialize the value
updateValue();
