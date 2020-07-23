$('.view-work').on('click', function() {
  const images = $('#bumperreplacement').position().top;

  $('html, body').animate(
    {
      scrollTop: images
    },
    1200
  );
});