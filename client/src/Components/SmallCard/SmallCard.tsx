import React from 'react'
import { Box } from '../StyledComponents/Box'
import { ImageBox } from '../StyledComponents/ImageBox'

type Props = {}

const SmallCard = (props: Props) => {
  return (
    <Box display='flex' justifyContent='space-between'>
      <Box display='flex' gap='12px'>
        <ImageBox>
          <img
            src='https://www.figma.com/file/A3Q3QWSACYacvHwW0nT8Yk/Untitled?node-id=431%3A289'
            alt='img'
          />
        </ImageBox>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default SmallCard