import React, { useState } from 'react';
import { activeFilters } from '../../State/action-creators';
import { useAppDispatch, useAppSelector } from '../../State/store';
import { IService } from '../../Types/serviceInterface';
import { Select } from '../uiComponents/select';

const FilterSelects = () => {
  const cat = useAppSelector((state) => state.filters.category);
  const subcat = useAppSelector((state) => state.filters.subcategory);
  const initialData: IService[] = useAppSelector(
    (state) => state.services.services
  );
  const [{ category, subcategory }, setData] = useState({
    category: cat,
    subcategory: cat ? subcat : '',
  });
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
    dispatch(activeFilters(category, event.target.value));
  }
  return (
    <>
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
    </>
  );
};

export default FilterSelects;
