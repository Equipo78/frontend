import balances from '../../assets/nav-icons/balances.svg';
import cards from '../../assets/nav-icons/cards.svg';
import contact from '../../assets/nav-icons/contact.svg';
import home from '../../assets/nav-icons/home.svg';
import movements from '../../assets/nav-icons/movements.svg';
import receipt from '../../assets/nav-icons/receipt.svg';
import transfers from '../../assets/nav-icons/transfers.svg';

interface NavRoutes {
  name: string;
  to: string;
  img: string;
}
export const navRoutes: NavRoutes[] = [
  {
    name: 'Inicio',
    to: '/',
    img: home,
  },
  {
    name: 'Saldos',
    to: '/balances',
    img: balances,
  },
  {
    name: 'Last movements',
    to: '/movements',
    img: movements,
  },
  {
    name: 'Transferencias',
    to: '/transfers',
    img: transfers,
  },
  {
    name: 'Cards',
    to: '/cards',
    img: cards,
  },
  {
    name: 'Comprobantes',
    to: '/receipts',
    img: receipt,
  },
  {
    name: 'Contactos',
    to: '/contacts',
    img: contact,
  },
];