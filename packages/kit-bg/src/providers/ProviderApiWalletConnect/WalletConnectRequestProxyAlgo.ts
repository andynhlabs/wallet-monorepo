import { IInjectedProviderNames } from '@onekeyfe/cross-inpage-provider-types';

import type { WallasaWalletConnector } from '@mywallet/kit/src/components/WalletConnect/WallasaWalletConnector';

import { WalletConnectRequestProxy } from './WalletConnectRequestProxy';

export class WalletConnectRequestProxyAlgo extends WalletConnectRequestProxy {
  override providerName = IInjectedProviderNames.algo;

  /*
  if (networkImpl === IMPL_ALGO) {
      result = await this.algoRequest<string[]>(connector, {
        method: 'connect',
      });
    }
   */
  override async connect(connector: WallasaWalletConnector) {
    const accounts = await this.request<string[] | undefined>(connector, {
      method: 'connect',
    });
    return accounts || [];
  }

  /*
  if (connector.session.networkImpl === IMPL_ALGO) {
        accounts = await this.algoRequest<string[]>(connector, {
          method: 'accounts',
        });
      }
   */
  override async getAccounts(connector: WallasaWalletConnector) {
    const accounts = await this.request<string[] | undefined>(connector, {
      method: 'accounts',
    });
    return accounts || [];
  }

  /*
  if (networkImpl === IMPL_ALGO) {
      const res: { chainId: number } | undefined = await this.algoRequest(
        connector,
        { method: 'getChainId' },
      );
      chainId = res?.chainId;
    }
   */
  override async getChainId(connector: WallasaWalletConnector) {
    const res = await this.request<{ chainId: number } | undefined>(connector, {
      method: 'getChainId',
    });
    return res?.chainId;
  }
}
