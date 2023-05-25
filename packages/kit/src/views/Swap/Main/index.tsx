import { Box } from '@mywallet/components';

import { useAppSelector } from '../../../hooks';

import { LimitOrderMain } from './LimitOrder';
import { SwapMain } from './Swap';

export function Main() {
  const mode = useAppSelector((s) => s.swap.mode);
  return <Box>{mode === 'limit' ? <LimitOrderMain /> : <SwapMain />}</Box>;
}
