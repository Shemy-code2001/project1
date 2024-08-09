document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.project-slider');
    const dots = document.querySelectorAll('.dot');
    
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        const cardWidth = slider.querySelector('.project-card').offsetWidth;
        slider.scrollTo({
          left: cardWidth * index,
          behavior: 'smooth'
        });
        
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
      });
    });
    
    slider.addEventListener('scroll', () => {
      const index = Math.round(slider.scrollLeft / slider.querySelector('.project-card').offsetWidth);
      dots.forEach(d => d.classList.remove('active'));
      dots[index].classList.add('active');
    });
  });


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


// Function to handle scroll animations
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add('active');
    }
  });
}

// Add scroll event listener
window.addEventListener('scroll', handleScrollAnimations);

// Initial check for elements in viewport
handleScrollAnimations();