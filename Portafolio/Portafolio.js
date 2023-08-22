 let TarjetaDeslizante = new Swiper('.card-contenido', {
        loop: true,
        spaceBetween: 40,
        grapCursor: true,
    
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        },
    
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            600: {
                slidesPerView: 2,
            },
            968: {
                slidesPerView: 3,
            },
        },
    });
