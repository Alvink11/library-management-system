var swiper = new Swiper(".book-slider", {
    loop:true,
    centeredSlides: true,
    autoplay:{
        delay: 9500,
        disableOnInteration: false,
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,       
      },
      768: {
        slidesPerView: 2,       
      },
      1024: {
        slidesPerView: 3, 
      },
    },
  });