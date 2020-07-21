$('.view-work').on('click', function() {
  const images = $('#process').position().top;

  $('html, body').animate(
    {
      scrollTop: images
    },
    1200
  );
});