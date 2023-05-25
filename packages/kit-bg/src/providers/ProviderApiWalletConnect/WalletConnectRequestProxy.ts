import type { WallasaWalletConnector } from '@mywallet/kit/src/components/WalletConnect/WallasaWalletConnector';

import type ProviderApiWalletConnect from './ProviderApiWalletConnect';
import type { IInjectedProviderNames } from '@onekeyfe/cross-inpage-provider-types';

export abstract class WalletConnectRequestProxy {
  constructor({ client }: { client: ProviderApiWalletConnect }) {
    this.client = client;
  }

  client: ProviderApiWalletConnect;

  abstract providerName: IInjectedProviderNames;

  /*
   if (networkImpl === IMPL_APTOS) {
      request = this.aptosRequest(connector, payload);
    } else if (networkImpl === IMPL_ALGO) {
      request = this.algoRequest(connector, payload);
    } else {
      // IMPL_EVM
      request = this.ethereumRequest(connector, payload);
    }
   */
  async request<T>(connector: WallasaWalletConnector, data: any): Promise<T> {
    const resp = await this.client.backgroundApi.handleProviderMethods<T>({
      scope: this.providerName,
      origin: this.client.getConnectorOrigin(connector),
      data,
    });
    return Promise.resolve(resp.result as T);
  }

  abstract connect(connector: WallasaWalletConnector): Promise<string[]>;

  abstract getAccounts(connector: WallasaWalletConnector): Promise<string[]>;

  abstract getChainId(
    connector: WallasaWalletConnector,
  ): Promise<number | undefined>;
}
