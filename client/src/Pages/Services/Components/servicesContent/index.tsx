import { useEffect, useState } from 'react';
import ServicesCards from '../servicesCards';
import { ServicesContentContainer } from './styles/servicesContent';
import { db } from '../../../../Firebase/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useAppDispatch, useAppSelector } from '../../../../State/store';

export const ServicesContent = () => {
  const servicesData = useAppSelector((state) => state.services.services);
  const [services, setServices] = useState<any[]>(servicesData);
  const servicesCollectionRef = collection(db, 'services');

  const dispatch = useAppDispatch();

  // Получение подкатегорий из массива
  const servicesSubcategories = [
    ...new Set(services?.map((e) => e.subcategory)),
  ];

  // получение массива с услугами
  useEffect(() => {
    const fetchData = async () => {
      const servicesCollectionRef = collection(db, 'services');
      const data = await getDocs(servicesCollectionRef);
      const filteredData = data?.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setServices(filteredData);
    };

    fetchData();
  }, []);

  return (
    <ServicesContentContainer>
      {servicesSubcategories?.map((e) => (
        <ServicesCards title={e} key={e} data={services!} />
      ))}
    </ServicesContentContainer>
  );
};
