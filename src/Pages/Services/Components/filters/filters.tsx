import { useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import ModalSmall from "../../../../Components/modal-small/index";
import {
  ModalFixButton,
  ModalForm,
} from "../../../../Components/modal/styles/modal";
import { RiSearchLine } from "react-icons/ri";
import { Text } from "../../../../Components/ui-components/text";
import { pcView } from "../../../../Utils/helperConst";
import styled from "styled-components/macro";
import SearchModal from "../../../../Components/search-modal/index";
import FilterSelects from "../../../../Components/filter-selects";
import FilterSceleton from "../../../../Components/skeletons/filter-skeleton";
import { useAppSelector } from "../../../../Hooks/useAppSelector";
import { useAppDispatch } from "../../../../Hooks/useAppDispatch";
import { switchSearchModalView } from "../../../../Store/slices/modal-slice";

const Filters = () => {
  const [show, setShow] = useState(false);
  const isPending = useAppSelector((state) => state.services.isPending);
  const dispatch = useAppDispatch();

  // закрытие модального окна
  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      {isPending && <FilterSceleton />}
      {!isPending && (
        <FiltersContainer>
          <FiltersSearch
            onClick={() => dispatch(switchSearchModalView())}
            data-cy="sevices-search-input"
          >
            <RiSearchLine />
            <Text color="textSecond">Найти услугу</Text>
          </FiltersSearch>
          {!pcView && (
            <FiltersOptions onClick={handleShow}>
              <BsFilterLeft />
            </FiltersOptions>
          )}
          {pcView && <FilterSelects />}
        </FiltersContainer>
      )}
      <ModalSmall show={show} setShow={setShow}>
        <ModalForm>
          <FilterSelects />
          <ModalFixButton type="button" onClick={() => setShow(false)}>
            Применить
          </ModalFixButton>
        </ModalForm>
      </ModalSmall>
      <SearchModal />
    </>
  );
};

export default Filters;

const FiltersContainer = styled.div`
  display: grid;
  grid-template-columns: 6fr 2fr 2fr;
  grid-auto-rows: 60px;
  margin-top: 10px;
  gap: 10px;

  @media screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: 5fr 1fr;
    grid-auto-rows: 50px;
    margin-top: 10px;
    gap: 10px;
  }
`;

const FiltersSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  border-radius: 10px;
  background: ${({ theme: { background } }) => background.secondBg};
  color: ${({ theme: { colors } }) => colors.textSecond};
  padding: 0px 15px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  svg {
    height: 23px;
    width: 23px;
    margin-right: 15px;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: none;
    border-radius: 16px;
    background: ${({ theme: { background } }) => background.button};
    padding: 0px 15px;
    box-sizing: border-box;

    svg {
      height: 23px;
      width: 23px;
    }
  }

  @media (min-width: 320px) and (max-width: 380px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: none;
    border-radius: 13px;
    background: ${({ theme: { background } }) => background.button};
    padding: 0px 15px;
    box-sizing: border-box;
    height: 48px;

    svg {
      height: 20px;
      width: 20px;
    }
  }
`;

const FiltersOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 51px;
  width: auto;
  border-radius: 16px;
  background: ${({ theme: { background } }) => background.button};

  svg {
    color: ${({ theme: { colors } }) => colors.textMain};
    height: 20px;
    width: 20px;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 51px;
    width: auto;
    border-radius: 16px;
    background: ${({ theme: { background } }) => background.button};

    svg {
      color: ${({ theme: { colors } }) => colors.textMain};
      height: 20px;
      width: 20px;
    }
  }

  @media (min-width: 320px) and (max-width: 380px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: auto;
    border-radius: 13px;
    background: ${({ theme: { background } }) => background.button};

    svg {
      color: ${({ theme: { colors } }) => colors.textMain};
      height: 20px;
      width: 20px;
    }
  }
`;
