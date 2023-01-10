import React, { useState } from 'react';
import { useAppDispatch } from '../../Hooks/useAppDispatch';
import { useAppSelector } from '../../Hooks/useAppSelector';
import { changeFilters } from '../../Store/slices/filter-slice';
import { IService } from '../../Types/serviceInterface';
import { Select } from '../ui-components/select';

const FilterSelects = () => {
  const dispatch = useAppDispatch();
  const cat = useAppSelector((state) => state.filter.category);
  const subcat = useAppSelector((state) => state.filter.subcategory);
  const initialData: IService[] = useAppSelector(
    (state) => state.services.data
  );

  const [{ category, subcategory }, setData] = useState({
    category: cat,
    subcategory: cat ? subcat : '',
  });

  // фильтрация категорий
  const categoriesData = [
    ...new Set(initialData?.map((e) => e.category).flat()),
  ];

  // фильтрация подкатегорий
  const subcategoriesData = [
    ...new Set(
      initialData
        ?.filter((e) => e.category?.includes(category))
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
    dispatch(changeFilters({ category: event.target.value, subcategory: '' }));
  }

  //получение значение с селекта для подкатегории
  function handleSubcategoryChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    setData((data) => ({ ...data, subcategory: event.target.value }));
    dispatch(changeFilters({ category, subcategory: event.target.value }));
  }
  return (
    <>
      <Select
        variant={category ? 'complited' : null}
        value={category}
        onChange={handleCategoryChange}
        data-cy='category-select'
      >
        <option value='' disabled={true}>
          Все категории
        </option>
        {categories}
      </Select>
      <Select
        value={subcategory}
        disabled={category ? false : true}
        onChange={handleSubcategoryChange}
        variant={subcategory ? 'complited' : null}
        data-cy='subcategory-select'
      >
        <option value=''>Все подкатегории</option>
        {subcategories}
      </Select>
    </>
  );
};

export default FilterSelects;
