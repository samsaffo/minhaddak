function showLang(lang) {
  document.querySelectorAll('.lang-content').forEach(el => {
    el.classList.remove('active');
  });

  document.querySelectorAll('.tab').forEach(el => {
    el.classList.remove('active');
  });

  document.getElementById(lang).classList.add('active');
  event.target.classList.add('active');
}
