import { List } from '@mui/material';
import NavMenuItem from './NavMenuItem';

const Navigation = () => {
  const navigation = [
    { href: '/', title: 'Додати подію' },
    { href: '/events/:slug', title: 'Редагувати події' },
    { href: '/contacts', title: 'Контакти' },
    { href: '/settings', title: 'Налаштування ' },
  ];
  return (
    <nav>
      <List sx={{p:0}}>
        {navigation.map(({ title, href }) => (
          <NavMenuItem href={href} title={title} />
        ))}
      </List>
    </nav>
  );
};

export default Navigation;
