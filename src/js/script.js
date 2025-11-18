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