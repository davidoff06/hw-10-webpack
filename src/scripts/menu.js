import '../styles.css';
import menuItems from './menu.json';
import itemsTemplate from '../templates/menu-items.hbs';

export default function renderMenu() {
  const markup = itemsTemplate(menuItems);
  const menuRef = document.querySelector('.js-menu');
  menuRef.innerHTML = markup;
}
