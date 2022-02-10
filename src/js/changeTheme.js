const themeRef = document.querySelector('.themetoggle')
const footerStyle = document.querySelector('.footer')
const headerBox = document.querySelector('header')

themeRef.addEventListener('click', event => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', 'dark');
    }
    addDarkClassToHTML();
  });
  
  function addDarkClassToHTML() {
    try {
      if (localStorage.getItem('theme') === 'dark') {
        document.querySelector('body').classList.add('dark-theme');
        themeRef.classList.add('themeDark')
        themeRef.textContent = 'LIGHT MODE'
        headerBox.classList.add('headerDark')
      } else {
        document.querySelector('body').classList.remove('dark-theme');
        themeRef.classList.remove('themeDark')
        themeRef.textContent = 'NIGHT MODE'
        headerBox.classList.remove('headerDark')
      }
    } catch (err) {}
  }
  
  addDarkClassToHTML();