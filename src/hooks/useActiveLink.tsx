import { useLocation } from 'react-router-dom';

const useActiveLink = (href: string) => {
  const location = useLocation();

  return href === '/' ? location.pathname === href : location.pathname.includes(href);
};

export default useActiveLink;
