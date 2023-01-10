import { useEffect, useState } from 'react';
import ServicesCards from '../services-cards';
import styled from 'styled-components/macro';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../Firebase/firebase-config';
import CardsSkeleton from '../../../../Components/skeletons/cards-skeleton';
import { useAppSelector } from '../../../../Hooks/useAppSelector';
import { useAppDispatch } from '../../../../Hooks/useAppDispatch';
import {
  filteringServices,
  getServices,
} from '../../../../Store/slices/services-slice';

export const ServicesContent = () => {
  const [isPending, setIsPending] = useState(true);
  const subcategory = useAppSelector((state) => state.filter.subcategory);
  const category = useAppSelector((state) => state.filter.category);
  const filteredServices = useAppSelector(
    (state) => state.services.filteredData
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
          : filteredData.filter((e: any) => e.category.includes(category));
      filteredData =
        subcategory === ''
          ? filteredData
          : filteredData.filter((e: any) => e.subcategory === subcategory);

      dispatch(getServices(initialData));
      dispatch(filteringServices(filteredData));
      setIsPending(false);
    };

    fetchData(category, subcategory);
  }, [category, subcategory]);

  return (
    <ServicesContentContainer>
      {isPending && <CardsSkeleton />}
      {!isPending &&
        servicesSubcategories.map((e: any) => (
          <ServicesCards title={e} key={e} data={filteredServices} />
        ))}
    </ServicesContentContainer>
  );
};

const ServicesContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  min-height: 80vh;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    min-height: 70vh;
  }
`;
