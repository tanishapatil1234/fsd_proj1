//carousel
document.addEventListener('DOMContentLoaded', function () {
  var carouselImgs = document.querySelectorAll('.carousel-img');
  var prevBtn = document.querySelector('.carousel-prev');
  var nextBtn = document.querySelector('.carousel-next');
  var currentIndex = 0;
  var total = carouselImgs.length;

  function showSlide(index) {
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    currentIndex = index;
    carouselImgs.forEach(function (img, i) {
      img.classList.toggle('active', i === currentIndex);
    });
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
