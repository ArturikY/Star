// Main
const mainContainer = document.querySelector('.container')

// Burger
const burger = document.querySelector('.header__burger')
const menuHeader = document.querySelector('.nav_content')

burger.addEventListener('click', () => {
	burger.classList.toggle('active')
	menuHeader.classList.toggle('active')
})

// Swiper
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

let preview = 2

if (parseInt(getComputedStyle(mainContainer).width) > 720) {
	preview = 2
} else {
	preview = 1
}

// init Swiper:
const swiper = new Swiper('.swiper', {
	// configure Swiper to use modules
	modules: [Navigation],
	slidesPerView: preview,
	spaceBetween: 30,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

// Switch
// const btnSwitch = document.querySelector('.switch')

// btnSwitch.addEventListener('click', () => {
// 	if (!btnSwitch.contains('active')) {
// 		btnSwitch.add('active')
// 	}
// })
