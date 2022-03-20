document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const section = this.getAttribute('href').substring(1);
    if (section) {
      seamless.scrollIntoView(document.querySelector(`.${section}`), {
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  });
});