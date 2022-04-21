import { Box } from '../../../Components/StyledComponents/Box';
import { FilterBox } from './StyledComponents/FilterBox';
import { StyledFilters } from './StyledComponents/StyledFilters';
import { SearchInput } from './StyledComponents/SearchInput';
import { VscFilter } from 'react-icons/vsc';

type Props = {};

const Filters = (props: Props) => {
  return (
    <StyledFilters>
      <Box display='flex' gap='10px'>
        <SearchInput placeholder='Нажмите  для поиска' />
        <FilterBox>
          <VscFilter />
        </FilterBox>
      </Box>
    </StyledFilters>
  );
};

export default Filters;
