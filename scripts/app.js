
window.onload = () => {
	var Cookies = document.cookie.split(';');
	for (var i = 0; i < Cookies.length; i++) {
		document.cookie = Cookies[i] + "=;expires=" + new Date(0).toUTCString();
	}
}


document.addEventListener('mousemove', el => {
	Object.assign(document.documentElement, {
		style: `
        --move-x: ${(el.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(el.clientX - window.innerHeight / 2) * -.01}deg;
        `
	})
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.layers', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.layers',
			start: 'center',
			end: '720',
			scrub: true
		}
	})

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: '-100',
				scrub: true
			}
		})
	})

}

window.addEventListener("load", function () {
	// This event is triggered when the page and all its resources have finished loading.
	var loadingOverlay = document.querySelector(".loading-overlay");
	if (loadingOverlay) {
	  loadingOverlay.style.display = "none";

	  // Remove the class that disables scrolling
	  document.body.classList.remove("disable-scrolling");
	}
  });

  // Add an event listener to wait for images to load
  window.addEventListener("DOMContentLoaded", function () {
	var images = document.querySelectorAll("img");
	var loadedImageCount = 0;

	images.forEach(function (img) {
	  img.addEventListener("load", function () {
		loadedImageCount++;

		// Check if all images are loaded
		if (loadedImageCount === images.length) {
		  // All images are loaded, you can remove the loading overlay
		  var loadingOverlay = document.querySelector(".loading-overlay");
		  if (loadingOverlay) {
			loadingOverlay.style.display = "none";

			// Remove the class that disables scrolling
			document.body.classList.remove("disable-scrolling");
		  }
		}
	  });
	});
  });