window.onload = () => {
    const progress = document.querySelector('.progress');
    
    // Force the initial width to render at 0
    progress.style.width = '0px';
  
    // Let the browser paint that state, then animate to 182px
    requestAnimationFrame(() => {
      progress.style.width = '182px';
    });
  
    // Redirect after 10 seconds
    setTimeout(() => {
      window.location.href = 'homepage.html';
    }, 10000);
  };
  