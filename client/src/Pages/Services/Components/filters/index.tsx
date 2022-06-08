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
  ModalSelect,
} from '../../../../Components/modal/styles/modal';
import { filtersData } from './utils/filterData';
import { Select } from '../../../../Components/uiComponents/select';
import { IService } from '../../../../Types/serviceInterface';
import { useAppSelector } from '../../../../State/store';
import { useDispatch } from 'react-redux';
import { getfilteringServices } from '../../../../State/action-creators';

type Props = {};

const Filters = (props: Props) => {
  const initialData = useAppSelector((state) => state.services.services);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [{ category, subcategory }, setData] = useState({
    category: 'Автосервис',
    subcategory: '',
  });

  // фильтрация по категориям
  const handleCategoriesFilter = (array: any) => {
    return array.filter((item: any) => item.category === category);
  };

  // фильтрация по подкатегории
  const handleSubcatFilter = (array: any) => {
    return array.filter((item: any) => item.subcategory === subcategory);
  };

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

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    let result =  initialData;
    result = handleCategoriesFilter(result);
    result = handleSubcatFilter(result);

    dispatch(getfilteringServices(result));
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
