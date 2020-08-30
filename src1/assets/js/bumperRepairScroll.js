$('.view-work').on('click', function() {
  const images = $('#bumperrepair').position().top;

  $('html, body').animate(
    {
      scrollTop: images
    },
    1200
  );
});