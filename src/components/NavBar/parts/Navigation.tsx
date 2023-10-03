import { List } from '@mui/material';
import { FC } from 'react';
import NavMenuItem from './NavMenuItem';
type NavigationProps = {
  navigation: { title: string; href: string; icon: string }[];
};

const Navigation: FC<NavigationProps> = ({ navigation }) => {
  return (
    <>
      <nav>
        <List sx={{ w: '250px', p: 0 }}>
          {navigation.map(({ title, href, icon }) => (
            <NavMenuItem href={href} title={title} icon={icon} />
          ))}
        </List>
      </nav>
    </>
  );
};
export default Navigation;
