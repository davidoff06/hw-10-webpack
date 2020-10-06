//export v2
// module.exports = {
//   initListeners,
//   initTheme,
// };

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  themeSwitch: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

export function initThemeSwitcher() {
  refs.themeSwitch.addEventListener('change', e => {
    toggleTheme(refs.themeSwitch.checked);
    saveThemeToStorage(refs.themeSwitch.checked);
  });
}

export function initTheme() {
  const themeValue = localStorage.getItem('theme');
  if (themeValue) {
    refs.body.classList.add(themeValue);
    refs.themeSwitch.checked = themeValue === Theme.DARK;
  }
}

function toggleTheme(isDarkTheme) {
  if (isDarkTheme) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
}

function saveThemeToStorage(isDarkTheme) {
  localStorage.setItem('theme', isDarkTheme ? Theme.DARK : Theme.LIGHT);
}
