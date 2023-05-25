import { OnekeyNetwork } from '@mywallet/shared/src/config/networkIds';

export const isSupportStakedAssets = (
  networkId: string,
  tokenIdOnNetwork: string,
) =>
  !tokenIdOnNetwork &&
  (networkId === OnekeyNetwork.eth || networkId === OnekeyNetwork.goerli);
