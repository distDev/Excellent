import { useEffect, useState } from 'react';
import ServicesCards from '../servicesCards';
import { ServicesContentContainer } from './styles/servicesContent';
import { db } from '../../../../Firebase/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useAppDispatch, useAppSelector } from '../../../../State/store';
import { getServicesData } from '../../../../State/action-creators';
import { useDispatch } from 'react-redux';

export const ServicesContent = () => {
  const servicesData = useAppSelector((state) => state.services.services);
  const servicesCollectionRef = collection(db, 'services');
  const dispatch = useDispatch();

  // Получение подкатегорий из массива
  const servicesSubcategories = [
    ...new Set(servicesData?.map((e: any) => e.subcategory)),
  ];

  // получение массива с услугами
  useEffect(() => {
    // переписать на thunk
    const fetchData = async () => {
      const servicesCollectionRef = collection(db, 'services');
      const data = await getDocs(servicesCollectionRef);
      const filteredData = data?.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(getServicesData(filteredData));
    };

    fetchData();
  }, []);

  return (
    <ServicesContentContainer>
      {servicesSubcategories.map((e: any) => (
        <ServicesCards title={e} key={e} data={servicesData} />
      ))}
    </ServicesContentContainer>
  );
};
