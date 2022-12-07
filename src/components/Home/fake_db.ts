import transfers from '../../assets/home-icons/transfers-green.svg';

interface Movement {
  amount: string;
  date: string;
  detail: string;
  img: string;
}
export const movements: Movement[] = [
  {
    amount: '$2000',
    date: '12/01',
    detail: 'Te transfirieron dinero',
    img: transfers,
  },
  {
    amount: '$650',
    date: '15/03',
    detail: 'Transferiste dinero',
    img: transfers,
  },
  {
    amount: '$2000',
    date: '17/05',
    detail: 'Pago AFIP',
    img: transfers,
  },
  {
    amount: '$2000',
    date: '11/06',
    detail: 'Te transfirieron dinero',
    img: transfers,
  },
  {
    amount: '$2000',
    date: '19/06',
    detail: 'Te transfirieron dinero',
    img: transfers,
  },
];
