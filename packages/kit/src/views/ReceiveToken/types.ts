import type { Account } from '@mywallet/engine/src/types/account';
import type { Network } from '@mywallet/engine/src/types/network';
import type { Wallet } from '@mywallet/engine/src/types/wallet';

import { ReceiveTokenModalRoutes } from '../../routes/routesEnum';

export { ReceiveTokenModalRoutes };

export type ReceiveTokenRoutesParams = {
  [ReceiveTokenModalRoutes.ReceiveToken]: {
    address?: string;
    displayAddress?: string;
    name?: string;

    wallet?: Wallet | null;
    network?: Network | null;
    account?: Account | null;
    customPath?: string;
    template?: string;
  };
};
