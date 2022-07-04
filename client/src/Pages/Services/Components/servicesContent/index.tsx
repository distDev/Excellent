import { useEffect } from 'react';
import ServicesCards from '../servicesCards';
import { ServicesContentContainer } from './styles/servicesContent';
import { useAppDispatch, useAppSelector } from '../../../../State/store';
import {
  filteredServicesData,
  getServicesData,
} from '../../../../State/action-creators';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../Firebase/firebase-config';

export const ServicesContent = () => {
  const subcategory = useAppSelector((state) => state.filters.subcategory);
  const category = useAppSelector((state) => state.filters.category);
  const filteredServices = useAppSelector(
    (state) => state.services.filteredServices
  );
  const dispatch = useAppDispatch();

  // Получение подкатегорий из массива
  const servicesSubcategories = [
    ...new Set(filteredServices?.map((e: any) => e.subcategory)),
  ];

  useEffect(() => {
    // получение услуг из firebase
    const fetchData = async (category: string, subcategory: string) => {
      const servicesCollectionRef = collection(db, 'services');
      const data = await getDocs(servicesCollectionRef);
      const initialData: any = data?.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      // фильтрация данных
      let filteredData = initialData;
      filteredData =
        category === ''
          ? filteredData
          : filteredData.filter((e: any) => e.category === category);
      filteredData =
        subcategory === ''
          ? filteredData
          : filteredData.filter((e: any) => e.subcategory === subcategory);

      dispatch(getServicesData(initialData));
      dispatch(filteredServicesData(filteredData));
    };

    fetchData(category, subcategory);
  }, [category, subcategory]);

  return (
    <ServicesContentContainer>
      {servicesSubcategories.map((e: any) => (
        <ServicesCards title={e} key={e} data={filteredServices} />
      ))}
    </ServicesContentContainer>
  );
};
