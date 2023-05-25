import { Box, useThemeValue } from '@mywallet/components';

import PriceChart from '../../PriceChart/PriceChart';

const PriceChartGallery = () => {
  const bg = useThemeValue('background-default');
  return (
    <Box w="full" h="full" bg={bg} p="10">
      <PriceChart networkId="evm--1" />
    </Box>
  );
};

export default PriceChartGallery;
