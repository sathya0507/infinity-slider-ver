// Get all tab elements
const tabs = document.querySelectorAll('.tab');
const slideTrack = document.querySelector('.slide-track');

// Add event listener to each tab to pause the scroll on hover
tabs.forEach(tab => {
  tab.addEventListener('mouseenter', () => {
    // Pause the scrolling animation when hovering over a tab
    slideTrack.style.animationPlayState = 'paused';
  });

  tab.addEventListener('mouseleave', () => {
    // Resume the scrolling animation when mouse leaves the tab
    slideTrack.style.animationPlayState = 'running';
  });
});
