document.addEventListener('DOMContentLoaded', function() {
  // Background Slideshow
  const bgSlide = document.getElementById("slide-bg");
  const backgrounds = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg"
  ];
  let bgIndex = 0;

  function changeBackground() {
    bgSlide.style.backgroundImage = `url('${backgrounds[bgIndex]}')`;
    bgIndex = (bgIndex + 1) % backgrounds.length;
  }


// Add this to your existing script.js
function initLogoScroller() {
  const scroller = document.querySelector('.logo-scroller');
  if (!scroller) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  // Mouse events
  scroller.addEventListener('mousedown', (e) => {
    isDown = true;
    scroller.style.cursor = 'grabbing';
    startX = e.pageX - scroller.offsetLeft;
    scrollLeft = scroller.scrollLeft;
  });

  scroller.addEventListener('mouseleave', () => {
    isDown = false;
    scroller.style.cursor = 'grab';
  });

  scroller.addEventListener('mouseup', () => {
    isDown = false;
    scroller.style.cursor = 'grab';
  });

  scroller.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scroller.offsetLeft;
    const walk = (x - startX) * 2;
    scroller.scrollLeft = scrollLeft - walk;
  });

  // Touch events for mobile
  scroller.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - scroller.offsetLeft;
    scrollLeft = scroller.scrollLeft;
  });

  scroller.addEventListener('touchend', () => {
    isDown = false;
  });

  scroller.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - scroller.offsetLeft;
    const walk = (x - startX) * 2;
    scroller.scrollLeft = scrollLeft - walk;
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Your existing code
  initLogoScroller();
});

  

  // Set first background and start slideshow
  if (bgSlide) {
    changeBackground();
    setInterval(changeBackground, 5000);
  }

  // Navigation scroll effect
  const navbar = document.querySelector('.navbar');
  
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        navbar.style.background = 'rgba(255,255,255,0.98)';
      } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        navbar.style.background = 'var(--white)';
      }
    });
  }

  // Button hover effects
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
      this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
  });

  // Course card animations
  const courseCards = document.querySelectorAll('.course-card');
  
  courseCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
  });

  console.log('Africa Skills website loaded successfully!');
});