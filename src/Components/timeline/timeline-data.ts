import { nanoid } from 'nanoid';

export const timelineData = [
  {
    id: nanoid(),
    position: 1,
    title: 'Заявка',
    subtitle: 'Выбираете нужные услуги и записываетесь на удобное время',
    color: '#F7F7F7',
  },
  {
    id: nanoid(),
    position: 2,
    title: 'Подтверждение ',
    subtitle:
      'На сайте указаны примерные цены на услуги, поэтому наш менеджер свяжется с вами, чтобы сообщить актуальныю сумму и завершить запись на обслуживание',
    color: '#FFF7DC',
  },
  {
    id: nanoid(),
    position: 3,
    title: 'Процесс работы',
    subtitle:
      'Вы можете следить за процессом работы из личного кабинета, нужно всего лишь авторизаваться по номеру, который вы указали при записи',
    color: '#F1E8FF',
  },
  {
    id: nanoid(),
    position: 4,
    title: 'Проверка и оплата',
    subtitle:
      'Вы получаете уведомление о завершении ремонта, проверяете автомбиль и производите оплату, если вас все устраивает!',
    color: '#E0FFF4',
  },
];