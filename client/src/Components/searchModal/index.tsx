import React, { FC, useEffect, useRef, useState } from 'react';
import {
  SearchClearButton,
  SearchContent,
  SearchInput,
  SearchInputContainer,
  SearchModalContainer,
} from './styles/searchModal';
import { createPortal } from 'react-dom';
import { useAppSelector } from '../../State/store';
import { IService } from '../../Types/serviceInterface';
import CardsGrid from '../cardsGrid';
import { animated, useTransition } from 'react-spring';

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchModal: FC<Props> = ({ show, setShow }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [services, setServices] = useState<IService[]>([]);
  const servicesData: IService[] = useAppSelector(
    (state) => state.services.services
  );

  // Поиск услуг
  useEffect(() => {
    const delayDebounceFn = () => {
      if (searchTerm) {
        const data = servicesData.filter((e) =>
          e.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
        setServices(data);
      } else {
        setServices([]);
      }
    };

    delayDebounceFn();
  }, [searchTerm]);

  // Анимация модального окна
  const transitions = useTransition(show, {
    expires: 0,
    from: { transform: `translateY(11%)`, opacity: 0 },
    enter: { transform: `translateY(0%)`, opacity: 1 },
    leave: { transform: `translateY(11%)`, opacity: 0 },
  });


  const AnimateContainer = animated(SearchModalContainer);

  return createPortal(
    <>
      {transitions(
        (style, item) =>
          item && (
            <AnimateContainer style={style}>
              <SearchInputContainer>
                <SearchInput
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                  placeholder='Поиск'
                />
                <SearchClearButton onClick={() => setShow(false)}>
                  Отмена
                </SearchClearButton>
              </SearchInputContainer>
              <SearchContent>
                {services && <CardsGrid data={services} />}
              </SearchContent>
            </AnimateContainer>
          )
      )}
    </>,
    document.body
  );
};

export default SearchModal;
