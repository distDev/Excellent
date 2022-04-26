import { Box } from '../../../Components/StyledComponents/Box';
import { FilterBox } from './StyledComponents/FilterBox';
import { StyledFilters } from './StyledComponents/StyledFilters';
import { SearchInput } from './StyledComponents/SearchInput';
import { VscFilter } from 'react-icons/vsc';
import Modal from '../../../Components/modal';
import { useState } from 'react';

type Props = {};

const Filters = (props: Props) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <StyledFilters>
        <Box display='flex' gap='10px'>
          <SearchInput placeholder='Нажмите  для поиска' />
          <FilterBox onClick={handleShow}>
            <VscFilter />
          </FilterBox>
        </Box>
      </StyledFilters>
      <Modal show={show} setShow={setShow} />
    </>
  );
};

export default Filters;
