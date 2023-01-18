import cards from '../../assets/home-icons/cards.svg';
import contacts from '../../assets/home-icons/contacts.svg';
import help from '../../assets/home-icons/help.svg';
import perfil from '../../assets/home-icons/perfil.svg';
import receipts from '../../assets/home-icons/receipts.svg';
import transfers from '../../assets/home-icons/transfers.svg';

interface CardProps {
  name: string;
  to: string;
  img: string;
}

export const options: CardProps[] = [
  {
    name: 'Hacer transferencia',
    to: '/transfers',
    img: transfers,
  },
  {
    name: 'Ver comprobantes',
    to: '/receipts',
    img: receipts,
  },
  {
    name: 'Agregar tarjeta',
    to: '/cards',
    img: cards,
  },
  {
    name: 'Agregar contacto',
    to: '/contacts',
    img: contacts,
  },
  {
    name: 'Modificar perfil',
    to: '/',
    img: perfil,
  },
  {
    name: 'Necesito ayuda',
    to: '/',
    img: help,
  },
];
