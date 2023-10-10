import logo from '@/assets/images/fullLogo.svg';
import logoShort from '@/assets/images/smallLogo.svg';
import { navigation } from '../parts/data';
export const makeConstantsVie = (isShort: boolean, isLaptop: boolean) => {
  let rotate = '';
  let title = 'Вийти';
  let navItems = [...navigation];
  let insertLogo = logo;
  let width = isLaptop ? '164px' : '336px';
  if (isShort) {
    rotate = 'rotate(180deg)';
    navItems = navigation.map((item) => ({ ...item, title: '' }));
    insertLogo = logoShort;
    width = '164px';
    title = '';
  }
  return { rotate, title, navItems, insertLogo, width };
};
