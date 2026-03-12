//carousel
document.addEventListener('DOMContentLoaded', function () {
  var carousel = document.querySelector('#hobbies .carousel');
  if (!carousel) return;

  var carouselImgs = carousel.querySelectorAll('.carousel-img');
  var prevBtn = carousel.querySelector('.carousel-prev');
  var nextBtn = carousel.querySelector('.carousel-next');
  var currentIndex = 0;
  var total = carouselImgs.length;

  function showSlide(index) {
    if (total === 0) return;
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    currentIndex = index;
    for (var i = 0; i < total; i++) {
      carouselImgs[i].classList.toggle('active', i === currentIndex);
    }
  }

  if (prevBtn) prevBtn.addEventListener('click', function () { showSlide(currentIndex - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { showSlide(currentIndex + 1); });






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
