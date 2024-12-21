function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Loading animation
window.onload = function() {
  const loadingScreen = document.getElementById('loading-screen');

  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
    document.body.style.overflowY = 'auto'; // Enable scrolling
  }, 3000); // Hide loader after 3 seconds

  setTimeout(() => {
    loadingScreen.style.display = 'none'; 
  }, 6000); // Remove loader completely after 6 seconds
}

// Add fade-out animation to loading screen
loadingScreen.classList.add('fade-out'); 

// Disable scrolling during loading
document.body.style.overflowY = 'hidden'; 
