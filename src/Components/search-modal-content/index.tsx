import React, { useState, useEffect } from "react";
import CardsGrid from "../cards-grid";
import SearchNotFound from "../search-not-found";
import styled from "styled-components/macro";
import CardsSkeleton from "../skeletons/cards-skeleton";
import { IService } from "../../Types/serviceInterface";
import { useDebounce } from "../../Hooks/useDebouce";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebase-config";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { switchSearchModalView } from "../../Store/slices/modal-slice";
import { useLockBodyScroll } from "../../Hooks/useLockBodyScroll";

type Props = {};

const SearchModalContent = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [services, setServices] = useState<IService[]>([]);
  const [findStatus, setfindStatus] = useState(true);
  const [isSearching, setIsSearching] = useState(true);
  const dispatch = useAppDispatch();

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Получение услуг
  useEffect(() => {
    if (debouncedSearchTerm) {
      try {
        const fetchData = async () => {
          setIsSearching(true);
          const servicesCollectionRef = collection(db, "services");
          const data = await getDocs(servicesCollectionRef);
          const initialData: any = data?.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          // фильтрация данных
          let filteredData: IService[] = initialData.filter((e: IService) =>
            e.name
              .toLowerCase()
              .includes(debouncedSearchTerm.toLocaleLowerCase())
          );
          // если не нашло ни одной услуги, то появится форма записи на косультацию
          if (!filteredData.length && debouncedSearchTerm.length > 1) {
            setfindStatus(false);
          } else {
            setfindStatus(true);
          }

          setServices(filteredData);
          setIsSearching(false);
        };

        fetchData();
      } catch (error) {
        console.log(error);
      }
    } else {
      setfindStatus(true);
      setServices([]);
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);

  // Закрытие модального окна и сброс состояния
  const handleClose = () => {
    dispatch(switchSearchModalView());
    setSearchTerm("");
    setServices([]);
  };

  // Блокировка скрола 
  useLockBodyScroll()

  return (
    <>
      <SearchInputContainer>
        <SearchInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoFocus
          placeholder="Поиск"
          data-cy="search-input"
        />
        <SearchClearButton onClick={handleClose}>Отмена</SearchClearButton>
      </SearchInputContainer>
      <SearchContent data-cy="search-content">
        {isSearching && <CardsSkeleton />}
        {!isSearching && services && <CardsGrid data={services} />}
        {!findStatus && <SearchNotFound />}
      </SearchContent>
    </>
  );
};

export default SearchModalContent;


const SearchInputContainer = styled.div`
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 7fr 1fr;
  grid-auto-rows: 50px;
  gap: 10px;
  width: 100%;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  z-index: 20;
  background: ${({ theme: { background } }) => background.body};
  padding: 0 40px;

  @media screen and (max-width: 480px) {
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: 7fr 2fr;
    grid-auto-rows: 50px;
    gap: 10px;
    width: 100%;
    padding: 5px 15px;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: ${({ theme: { size } }) => size.text.normal};
  background: ${({ theme: { background } }) => background.body};
  color: ${({ theme: { colors } }) => colors.textMain};
`;

const SearchClearButton = styled.button`
  border: none;
  text-align: end;
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: ${({ theme: { size } }) => size.text.normal};
  background: none;

  @media screen and (max-width: 480px) {
    border: none;
    text-align: end;
    color: ${({ theme: { colors } }) => colors.primary};
    font-size: ${({ theme: { size } }) => size.text.normal};
    background: none;
  }
`;

const SearchContent = styled.div`
  max-width: 1140px;
  padding: 0px;
  margin: 0px auto;
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (max-width: 480px) {
    max-width: auto;
    padding: 15px;
    margin: 0px;
    margin-top: 0px;
    height: 100%;
  }
`;
