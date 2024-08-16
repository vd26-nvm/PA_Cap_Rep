window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 100) {
        nav.style.backgroundColor = '#212227';

      } else {
        nav.style.backgroundColor = 'transparent';

      }
  //AI part is this progress bar and the dark mode below that
  const documentHeight = document.body.offsetHeight;
  const windowHeight = window.innerHeight; 
  const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
  const progressBar = document.querySelector('.progress-bar');
  progressBar.style.width = `${progress}%`;
    
  if (progress >= 100) {
    progressBar.classList.add('full');
  } else {
      progressBar.classList.remove('full');
  }
});

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {

  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Light Mode';
  } else {
    themeToggle.textContent = 'Dark Mode';
  }
  const elements = document.querySelectorAll('*');
  elements.forEach((element) => {
    if (document.body.classList.contains('dark-mode')) {
      element.style.backgroundColor = '#333';
      element.style.color = '#fff';
      element.style.backgroundImage = "url('vidhan_images\darkMode.png')";
      element.style.backgroundRepeat = "no-repeat";
      element.style.backgroundSize = "cover";
    } else {
      element.style.backgroundColor = '';
      element.style.backgroundImage = 'background.jpg';
      element.style.backgroundRepeat = 'no-repeat';
      element.style.backgroundSize = 'cover';      
      element.style.color = '';
    }
  });
});

