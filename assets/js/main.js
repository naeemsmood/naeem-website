document.querySelectorAll('.video-embed').forEach(function (wrap) {
  var thumb = wrap.querySelector('.video-embed__thumb');
  if (!thumb) return;
  thumb.addEventListener('click', function () {
    var id = wrap.getAttribute('data-yt-id');
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1';
    iframe.title = 'YouTube video player';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    wrap.innerHTML = '';
    wrap.appendChild(iframe);
  });
});
