let Swipes = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
    },
    keyboard:{
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    mousewheel:{
      sensivity:1,
      eventsTarget: "swiper-container"
    },
    slidesPerView: '1',
    spaceBetween: 50,
    watchOverflow: true,
});



function defaultTask(cb) {
  // place code for your default task here
  cb();
}

// @@include('alert.js')
// @@include('alert2.js')
//exports.default = defaultTask