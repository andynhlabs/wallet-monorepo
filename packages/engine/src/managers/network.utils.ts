// getNetworkImplFromNetworkId
// getImplFromNetworkId
import { SEPERATOR } from '@mywallet/shared/src/engine/engineConsts';

export function getNetworkImpl(networkId: string) {
  const [impl] = networkId.split(SEPERATOR);
  return impl;
}
