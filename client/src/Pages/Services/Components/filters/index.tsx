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
import { RiSearchLine } from 'react-icons/ri';
import { Text } from '../../../../Components/uiComponents/text';
import SearchModal from '../../../../Components/searchModal/index';
import { pcView } from '../../../../Utils/helperConst';

const Filters = () => {
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // закрытие модального окна
  const handleShow = () => {
    setShow((prev) => !prev);
  };


  return (
    <>
      <FiltersContainer>
        <FiltersSearch onClick={() => setShowSearch((prev) => !prev)}>
          <RiSearchLine />
          <Text color='textSecond'>Найти услугу</Text>
        </FiltersSearch>
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
      <SearchModal show={showSearch} setShow={setShowSearch} />
    </>
  );
};

export default Filters;
