// Carousel
document.addEventListener('DOMContentLoaded', function () {
  var track = document.querySelector('#hobby-carousel .carousel-track');
  var prevBtn = document.getElementById('carousel-prev');
  var nextBtn = document.getElementById('carousel-next');
  if (!track || !prevBtn || !nextBtn) return;

  var total = 3;
  var currentIndex = 0;

  function goTo(index) {
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    currentIndex = index;
    track.style.transform = 'translateX(-' + (currentIndex * 100 / total) + '%)';
  }

  prevBtn.onclick = function () { goTo(currentIndex - 1); };
  nextBtn.onclick = function () { goTo(currentIndex + 1); };






// form 

  var form = document.getElementById('contact-form');
  var messageEl = document.getElementById('form-message');

  if (!form || !messageEl) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var nameInput = document.getElementById('name');
    var name = nameInput ? nameInput.value.trim() : '';

    if (name) {
      messageEl.textContent = 'Thanks, ' + name + '! Your message was received.';
    } else {
      messageEl.textContent = 'Thanks! Your message was received.';
    }

    messageEl.style.display = 'block';
  });
});
