document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item h3');

  faqItems.forEach(item => {
    item.addEventListener('click', function () {
      this.parentElement.classList.toggle('active');
    });
  });
});
