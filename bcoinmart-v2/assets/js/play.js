$('#play-video').on('click', function(e) {
  e.preventDefault();
  const url = $(this).data('video-url');
  const isYouTube = url.includes('youtube.com') || url.includes('youtu.be');
  const embed = isYouTube
    ? `<iframe width="560" height="315" src="${url}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
    : `<video width="560" height="315" controls autoplay><source src="${url}" type="video/mp4"></video>`;

  $('#video-overlay').addClass('open').append(embed);
});

$('.video-overlay, .video-overlay-close').on('click', function(e) {
  e.preventDefault();
  close_video();
});

$(document).on('keyup', function(e) {
  if (e.key === 'Escape') close_video();
});

function close_video() {
  $('#video-overlay').removeClass('open').find('iframe, video').remove();
}
