
import { Box } from '../../../Components/StyledComponents/Box'
import { Input } from '../../../Components/StyledComponents/Input'
import { FilterBox } from './StyledComponents/FilterBox'
import { StyledFilters } from './StyledComponents/StyledFilters'
import { VscFilter } from 'react-icons/vsc';

type Props = {}

const Filters = (props: Props) => {
  return (
    <StyledFilters>
      <Box display='flex' gap='10px'>
        <Input flex='5' placeholder='Нажмите  для поиска' />
        <FilterBox>
          <VscFilter />
        </FilterBox>
      </Box>
    </StyledFilters>
  );
}

export default Filters