//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }
new Swiper('.combo-slider', {
	
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},

	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 30,
	autoHeight: true,
	speed: 1100,
	loop: true,
	preloadImages: true,
	lazy: true,
	// Dotts
	pagination: {
		el: '.combo__pagination',
		clickable: true,
	},
	// Arrows
	navigation: {
		nextEl: '.arrow',
	},
	breakpoints: {
		360: {
			slidesPerViev: 1,
			autoHeight: true,
			pagination: {
				el: '.combo__pagination',
				clickable: true,
			},
		},
		768: {
			slidesPerView: 1,
			autoHeight: true,
		},
		900: {
			slidesPerView: 2,
			autoHeight: true,
		},
		1200: {
			slidesPerView: 3,
			autoHeight: true,
		},
		
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});

function sliders_bild_callback(params) { }
new Swiper('.chuan-slider', {

	// effect: 'fade',
	
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},

	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 30,
	autoHeight: true,
	speed: 1900,
	loop: true,
	preloadImages: true,
	lazy: true,
	// Dotts
	pagination: {
		el: '.chuan__pagination',
		clickable: true,
	},
	// Arrows
	navigation: {
		nextEl: '.arrow',
	},
	breakpoints: {
		360: {
			slidesPerViev: 1,
			autoHeight: true,
			pagination: {
				el: '.chuan__pagination',
				clickable: true,
			},
		},
		768: {
			slidesPerView: 1,
			autoHeight: true,
		},
		900: {
			slidesPerView: 1,
			autoHeight: true,
		},
		1250: {
			slidesPerView: 2,
			autoHeight: true,
		},
		
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});