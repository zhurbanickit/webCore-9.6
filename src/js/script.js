document.querySelector(".services_main_button_visible").onclick = function () {
    console.log("click .services_main_button_visible")
    document.querySelector(".services_main_button_hidden").style.display = "flex" ;
    document.querySelector(".services_main_button_visible").style.display = "none";
    document.querySelector(".services_main_title_hiden").style.display = "flex" ;
}

document.querySelector(".services_main_button_hidden").onclick = function () {
  console.log("click .services_main_button_hidden")  
  document.querySelector(".services_main_button_visible").style.display = "flex" ;
  document.querySelector(".services_main_button_hidden").style.display = "none" ;
  document.querySelector(".services_main_title_hiden").style.display = "none" ;
}

document.querySelector(".pair_button").onclick = function () {
    console.log("click .pair_button")
    document.querySelector(".repair_brands_button_hidden").style.display = "flex" ;
    document.querySelector(".pair_button").style.display = "none";
    document.querySelector(".repair_brands_hidden_red").style.display = "flex" ;
}

document.querySelector(".repair_brands_button_hidden").onclick = function () {
  console.log("click .repair_brands_button_hidden")  
  document.querySelector(".pair_button").style.display = "flex" ;
  document.querySelector(".repair_brands_button_hidden").style.display = "none" ;
  document.querySelector(".repair_brands_hidden_red").style.display = "none" ;
}


document.querySelector(".repair_types_button_all").onclick = function () {
    console.log("click .repair_types_button_all")
    document.querySelector(".repair_types_button_hidden").style.display = "flex" ;
    document.querySelector(".repair_types_button_all").style.display = "none";
    document.querySelector(".repair_types_hidden_green").style.display = "flex" ;
   
}

document.querySelector(".repair_types_button_hidden").onclick = function () {
  console.log("click .repair_types_button_hidden")  
  document.querySelector(".repair_types_button_all").style.display = "flex" ;
  document.querySelector(".repair_types_button_hidden").style.display = "none" ;
  document.querySelector(".repair_types_hidden_green").style.display = "none" ;
}

const swiper = new Swiper(".repair_brands_swipper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".repair_brands_swiper_pagination",
  },
});