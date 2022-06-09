import { useEffect } from 'react';
import ServicesCards from '../servicesCards';
import { ServicesContentContainer } from './styles/servicesContent';
import { useAppDispatch, useAppSelector } from '../../../../State/store';
import {
  fetchServices,
  getfilteringServices,
} from '../../../../State/action-creators';

export const ServicesContent = () => {
  const subcategory = useAppSelector((state) => state.filters.subcategory);
  const category = useAppSelector((state) => state.filters.category);
  const servicesData = useAppSelector((state) => state.services.services);
  const filteredServicesData = useAppSelector(
    (state) => state.services.filteredServices
  );

  const dispatch = useAppDispatch();

  // Получение подкатегорий из массива
  const servicesSubcategories = [
    ...new Set(filteredServicesData?.map((e: any) => e.subcategory)),
  ];

  // получение массива с услугами
  useEffect(() => {
    dispatch(fetchServices());
  }, []);

  // фильтрация массива с услугами
  useEffect(() => {
    dispatch(getfilteringServices(category, subcategory));
  }, [servicesData, category, subcategory]);

  return (
    <ServicesContentContainer>
      {servicesSubcategories.map((e: any) => (
        <ServicesCards title={e} key={e} data={filteredServicesData} />
      ))}
    </ServicesContentContainer>
  );
};
