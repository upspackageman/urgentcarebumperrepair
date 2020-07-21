$('.view-work').on('click', function() {
  const images = $('#insurance').position().top;

  $('html, body').animate(
    {
      scrollTop: images
    },
    1200
  );
});