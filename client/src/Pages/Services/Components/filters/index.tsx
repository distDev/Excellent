import React, {useState } from 'react';
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
import { Select } from '../../../../Components/uiComponents/select';
import { useAppDispatch, useAppSelector } from '../../../../State/store';
import { activeFilters } from '../../../../State/action-creators';
import { IService } from '../../../../Types/serviceInterface';

const Filters = () => {
  const [show, setShow] = useState(false);
  const [{ category, subcategory }, setData] = useState({
    category: '',
    subcategory: '',
  });
  const initialData: IService[] = useAppSelector(
    (state) => state.services.services
  );
  const dispatch = useAppDispatch();

  // фильтрация категорий
  const categoriesData = [...new Set(initialData?.map((e) => e.category))];
  // фильтрация подкатегорий
  const subcategoriesData = [
    ...new Set(
      initialData
        ?.filter((e) => e.category === category)
        .map((e) => e.subcategory)
    ),
  ];

  // рендер категорий
  const categories = categoriesData.map((e) => (
    <option key={e} value={e}>
      {e}
    </option>
  ));

  // рендер подкатегорий
  const subcategories = subcategoriesData.map((e) => (
    <option key={e} value={e}>
      {e}
    </option>
  ));

  // получение значение с селекта для категории
  function handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setData(() => ({ subcategory: '', category: event.target.value }));
  }

  //получение значение с селекта для подкатегории
  function handleSubcategoryChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    setData((data) => ({ ...data, subcategory: event.target.value }));
    dispatch(activeFilters('Автосервис', event.target.value));
  }

  // закрытие модального окна
  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <FiltersContainer>
        <FiltersSearch placeholder='Найти услугу' />
        <FiltersOptions onClick={handleShow}>
          <BsFilterLeft />
        </FiltersOptions>
      </FiltersContainer>
      <ModalSmall show={show} setShow={setShow}>
        <ModalForm>
          <Select
            variant={category ? 'complited' : null}
            value={category}
            onChange={handleCategoryChange}
          >
            <option value=''>Все категории</option>
            {categories}
          </Select>
          <Select
            value={subcategory}
            disabled={category ? false : true}
            onChange={handleSubcategoryChange}
            variant={subcategory ? 'complited' : null}
          >
            <option value=''>Все подкатегории</option>
            {subcategories}
          </Select>
          <ModalFixButton type='button' onClick={() => setShow(false)}>
            Применить
          </ModalFixButton>
        </ModalForm>
      </ModalSmall>
    </>
  );
};

export default Filters;
