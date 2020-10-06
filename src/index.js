import './styles.css';

import renderMenu from './scripts/menu';
renderMenu();

import { initThemeSwitcher, initTheme } from './scripts/themeSwitcher';
initTheme();
initThemeSwitcher();

//import v2
// const themeSwitcher = require('./scripts/themeSwitcher');
// themeSwitcher.initTheme();
// themeSwitcher.initListeners();
