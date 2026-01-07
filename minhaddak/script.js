fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('site-header').innerHTML = data;

    // Now the header exists, safe to select it
    const header = document.querySelector('.header');

    const imageFiles = [
      "img/header4.jpg",
      "img/heder6.jpg",
      "img/header5.jpg"
    ];

    // preload images
    const images = imageFiles.map(src => {
      const img = new Image();
      img.src = src;
      return src;
    });

    let index = 0;

    function changeBackground() {
      header.style.backgroundImage = `url('${images[index]}')`;
      index = (index + 1) % images.length;
    }

    changeBackground();
    setInterval(changeBackground, 3000);

    // CLIENT-PRO BUTTONS HIGHLIGHT
    const buttons = document.querySelectorAll('.client-pro');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });

const buttons = document.querySelectorAll('.client-pro');

// Define the target URLs for each button
const buttonLinks = [
  'index.html', // Client (You)
  'pro.html'     // Pro (Artisan)
];

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // Remove active from all buttons
    buttons.forEach(b => b.classList.remove('active'));
    // Add active to clicked button
    btn.classList.add('active');
    // Navigate to corresponding page
    window.location.href = buttonLinks[index];
  });
});

