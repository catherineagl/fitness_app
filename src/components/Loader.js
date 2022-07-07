import React from 'react'
import {Stack} from '@mui/material';
import {Bars} from 'react-loader-spinner';

const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center" alingItems="center" width="100%">
      	<Bars color="#00BFFF" height={80} width={80} />
    </Stack>
  )
}

export default Loader