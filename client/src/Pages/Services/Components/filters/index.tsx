import React, { useEffect, useState } from 'react';
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
import { filtersData } from './utils/filterData';
import { Select } from '../../../../Components/uiComponents/select';
import { useAppDispatch, useAppSelector } from '../../../../State/store';
import { activeFilters } from '../../../../State/action-creators';





const Filters = () => {
  const initialData = useAppSelector((state) => state.services.services);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const [{ category, subcategory }, setData] = useState({
    category: 'Автосервис',
    subcategory: 'Ходовая часть',
  });

  //  получение категорий
  const categories = filtersData.map((cat) => (
    <option key={cat.name} value={cat.name}>
      {cat.name}
    </option>
  ));

  //  получение подкатегории
  const subcategories = filtersData
    .find((item) => item.name === category)
    ?.subcategories.map((state) => (
      <option key={state} value={state}>
        {state}
      </option>
    ));

  // получение категорий с селекта
  function handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setData((data) => ({ subcategory: '', category: event.target.value }));
  }

  // получение подкатегорий с селекта
  function handleSubcategoryChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    setData((data) => ({ ...data, subcategory: event.target.value }));
  }

  // закрытие модального окна
  const handleShow = () => {
    setShow((prev) => !prev);
  };

  // отправка выбранных фильтров в store
  useEffect(() => {
    dispatch(activeFilters(category, subcategory));
  }, [category, subcategory]);

  return (
    <>
      <FiltersContainer>
        <FiltersSearch placeholder='Найти услугу' />
        <FiltersOptions onClick={handleShow}>
          <BsFilterLeft />
        </FiltersOptions>
      </FiltersContainer>
      <ModalSmall show={show} setShow={setShow}>
        <ModalForm onSubmit={() => console.log('Submitted')}>
          <Select onChange={handleCategoryChange}>{categories}</Select>
          <Select onChange={handleSubcategoryChange}>{subcategories}</Select>
          <ModalFixButton type='submit'>Применить</ModalFixButton>
        </ModalForm>
      </ModalSmall>
    </>
  );
};

export default Filters;
