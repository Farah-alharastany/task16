
const langButtons = document.querySelectorAll('.lang-btn');
  const themeButtons = document.querySelectorAll('.theme-btn');
  const variablesLink = document.getElementById('variables-css');

  let currentLang = 'arabic';
  let currentTheme = 'light';

  function updateVariables() {
    variablesLink.href = `css/variables-${currentLang}-${currentTheme}.css`;
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.getAttribute('data-lang');
      langButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateVariables();
    });
  });

  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentTheme = btn.getAttribute('data-theme');
      themeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateVariables();
    });
  });
