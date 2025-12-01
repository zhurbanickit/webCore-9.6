document.querySelector('.services_main_button_visible').onclick = function () {
  console.log('click .services_main_button_visible')
  document.querySelector('.services_main_button_hidden').style.display = 'flex'
  document.querySelector('.services_main_button_visible').style.display = 'none'
  document.querySelector('.services_main_title_hiden').style.display = 'flex'
}

document.querySelector('.services_main_button_hidden').onclick = function () {
  console.log('click .services_main_button_hidden')
  document.querySelector('.services_main_button_visible').style.display = 'flex'
  document.querySelector('.services_main_button_hidden').style.display = 'none'
  document.querySelector('.services_main_title_hiden').style.display = 'none'
}

document.querySelector('.pair_button').onclick = function () {
  console.log('click pair_button')
  document.querySelector('.repair_brands_button_hidden').style.display = 'flex'
  document.querySelector('.pair_button').style.display = 'none'
  document
    .querySelectorAll('.repair_brands_hidden_red')
    .forEach((el) => (el.style.display = 'flex'))
}

document.querySelector('.repair_brands_button_hidden').onclick = function () {
  console.log('click .repair_brands_button_hidden')
  document.querySelector('.pair_button').style.display = 'flex'
  document.querySelector('.repair_brands_button_hidden').style.display = 'none'
  document
    .querySelectorAll('.repair_brands_hidden_red')
    .forEach((el) => (el.style.display = 'none'))
}

document.querySelector('.repair_types_button_all').onclick = function () {
  console.log('click .repair_types_button_all')
  document.querySelector('.repair_types_button_hidden').style.display = 'flex'
  document.querySelector('.repair_types_button_all').style.display = 'none'
  // document.querySelector('.repair_types_hidden_green').style.display = 'flex'
  document
    .querySelectorAll('.repair_types_hidden_green')
    .forEach((el) => (el.style.display = 'flex'))
}

document.querySelector('.repair_types_button_hidden').onclick = function () {
  console.log('click .repair_types_button_hidden')
  document.querySelector('.repair_types_button_all').style.display = 'flex'
  document.querySelector('.repair_types_button_hidden').style.display = 'none'
  // document.querySelector('.repair_types_hidden_green').style.display = 'none'
  document
    .querySelectorAll('.repair_types_hidden_green')
    .forEach((el) => (el.style.display = 'none'))
}

document.querySelector('.nav_menu_left_burger').onclick = function () {
  console.log('click .nav_menu_left_burger')
  document.querySelector('.slider').style.display = 'block'
  document.querySelector('.slider').style.position = 'fixed'
  document.querySelector('.slider').style.height = '100%'
  // document.querySelector('.slider').style.z-index = '1'
  document.querySelector('.nav_menu').style.filter = 'blur(6px)'
  document.querySelector('.services').style.filter = 'blur(6px)'
  document.querySelector('.repair').style.filter = 'blur(6px)'
  document.querySelector('.commercial').style.filter = 'blur(6px)'
  document.querySelector('.buttoms').style.filter = 'blur(6px)'
  document.querySelector('.prices').style.filter = 'blur(6px)'
  document.querySelector('.slider').style.filter = 'blur(0)'
}

document.querySelector('.slider_left_button').onclick = function () {
  console.log('click .slider_left_button')
  document.querySelector('.slider').style.display = 'none'
  document.querySelector('.nav_menu').style.filter = 'blur(0)'
  document.querySelector('.services').style.filter = 'blur(0)'
  document.querySelector('.repair').style.filter = 'blur(0)'
  document.querySelector('.prices').style.filter = 'blur(0)'
  document.querySelector('.commercial').style.filter = 'blur(0)'
  document.querySelector('.buttoms').style.filter = 'blur(0)'
  document.querySelector('.slider').style.filter = 'none'
}

// const swiper = new Swiper('.swiper', {
//   direction: 'horizontal',
//   loop: true,

//   pagination: {
//     el: '.swiper-pagination'
//   }
// })

// console.log(swiper)

// const swiper1 = new Swiper('.swiper1', {
//   direction: 'horizontal',
//   loop: true,

//   pagination: {
//     el: '.swiper-pagination-1'
//   }
// })

// const swiper = new swiper('.prices_hidden', {
//   direction: 'horizontal',
//   loop: true,

//   pagination: {
//     el: '.prices_main_pagination'
//   }
// })

document.querySelectorAll('[data-swiper]').forEach((swiperElement) => {
  const swiperId = swiperElement.getAttribute('data-swiper')
  const paginationEl = swiperElement.querySelector(
    `[data-pagination="${swiperId}"]`
  )

  new Swiper(swiperElement, {
    loop: true,

    pagination: {
      el: paginationEl,
      clickable: true
    },
    centeredSlides: true,

    slideClass: `swiper-slide-${swiperId}`
    // другие настройки...
  })
})
