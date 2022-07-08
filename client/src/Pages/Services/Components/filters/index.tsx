import React, { useState } from 'react';
import {
  FiltersContainer,
  FiltersOptions,
  FiltersSearch,
} from './styles/filters';
import { BsFilterLeft } from 'react-icons/bs';
import ModalSmall from '../../../../Components/modalSmall/index';
import {
  ModalFixButton,
  ModalForm,
} from '../../../../Components/modal/styles/modal';
import FilterSelects from '../../../../Components/filterSelects';

const Filters = () => {
  const [show, setShow] = useState(false);

  // закрытие модального окна
  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const pcView = window.innerWidth > 916;

  return (
    <>
      <FiltersContainer>
        <FiltersSearch placeholder='Найти услугу' />
        {!pcView && (
          <FiltersOptions onClick={handleShow}>
            <BsFilterLeft />
          </FiltersOptions>
        )}
        {pcView && <FilterSelects />}
      </FiltersContainer>
      <ModalSmall show={show} setShow={setShow}>
        <ModalForm>
          <FilterSelects />
          <ModalFixButton type='button' onClick={() => setShow(false)}>
            Применить
          </ModalFixButton>
        </ModalForm>
      </ModalSmall>
    </>
  );
};

export default Filters;
