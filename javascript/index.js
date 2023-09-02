const header = document.querySelector(".header");
const navIcon = document.querySelector(".mobile_icon");
const toglenav = () => {
    header.classList.toggle("active")
}


navIcon.addEventListener("click", () => toglenav());




/* =================
    //SLIDER START//
    ================ */


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/* ===============
    //SLIDER END//
    ============== */



    

/*  ========================
    //INDEX CARD BOX START//
    ======================== */

const men = document.querySelector(".box_men");
const women = document.querySelector(".box_women");
const hot = document.querySelector(".box_hot");




const men_block = () => {
    document.getElementById("men_main").style.display = "block";
    document.getElementById("women_main").style.display = "none";
    document.getElementById("hot_main").style.display = "none";
    men.classList.add("active");
    women.classList.remove("active");
    hot.classList.remove("active");
}

const women_block = () => {
    document.getElementById("men_main").style.display = "none";
    document.getElementById("women_main").style.display = "block";
    document.getElementById("hot_main").style.display = "none";
    men.classList.remove("active");
    hot.classList.remove("active");
    women.classList.add("active");
}

const hot_block = () => {
    document.getElementById("men_main").style.display = "none";
    document.getElementById("women_main").style.display = "none";
    document.getElementById("hot_main").style.display = "block";
    hot.classList.add("active");
    men.classList.remove("active");
    women.classList.remove("active");
}
/*  ======================
    //INDEX CARD BOX END//
    ====================== */


/*  ================================
    //INDEX  SECOND CARD BOX START//
    ================================ */
const men2 = document.querySelector(".box_men2"); 2
const women2 = document.querySelector(".box_women2");
const hot2 = document.querySelector(".box_hot2");

const men_block2 = () => {
    document.getElementById("men_main2").style.display = "block";
    document.getElementById("women_main2").style.display = "none";
    document.getElementById("hot_main2").style.display = "none";
    men2.classList.add("active");
    women2.classList.remove("active");
    hot2.classList.remove("active");
}

const women_block2 = () => {
    document.getElementById("men_main2").style.display = "none";
    document.getElementById("women_main2").style.display = "block";
    document.getElementById("hot_main2").style.display = "none";
    men2.classList.remove("active");
    hot2.classList.remove("active");
    women2.classList.add("active");
}

const hot_block2 = () => {
    document.getElementById("men_main2").style.display = "none";
    document.getElementById("women_main2").style.display = "none";
    document.getElementById("hot_main2").style.display = "block";
    hot2.classList.add("active");
    men2.classList.remove("active");
    women2.classList.remove("active");
}
/*  ==============================
    //INDEX  SECOND CARD BOX END//
    ============================= */
// men.addEventListener("click", () => men_block());


// document.querySelector buttom id display false 