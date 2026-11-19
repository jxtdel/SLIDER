const productSwiper = new Swiper('.productSwiper', {

    // NUMBER OF SLIDE VISIBLE AT A TIME
    slidesPerView: 1,

    // spaces between slides
    spaceBetween: 20,

    // NAVIGATION ARROWS
    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev'
    },

    // PAGINATION DOT
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
  
    // RESPONSIVE BREAKPOINT
    breakpoints: {
        // SMALL SCREENS AND ABOVE
        576: {
            slidesPerView: 1,
            spaceBetween: 15
        },

        // MEDUIM SCREENS AND ABOVE
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // LARGE SCREENS AND ABOVE
        1200: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    },
    loop: true,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false
    },
});