import { IJsonRpcRequest } from '@onekeyfe/cross-inpage-provider-types';
import cloneDeep from 'lodash/cloneDeep';

import store from '../store';

import BackgroundApiBase from './BackgroundApiBase';
import { backgroundMethod } from './decorators';
import { IBackgroundApi } from './IBackgroundApi';
import {
  PromiseContainerCallbackCreate,
  PromiseContainerReject,
  PromiseContainerResolve,
} from './PromiseContainer';
import ProviderApiBase from './ProviderApiBase';
import DappService from './service/DappService';

class BackgroundApi extends BackgroundApiBase implements IBackgroundApi {
  dappService = new DappService({
    backgroundApi: this,
  });

  createPromiseCallback(params: PromiseContainerCallbackCreate): number {
    return this.promiseContainer.createCallback(params);
  }

  resolvePromiseCallback(params: PromiseContainerResolve): void {
    return this.promiseContainer.resolveCallback(params);
  }

  rejectPromiseCallback(params: PromiseContainerReject): void {
    return this.promiseContainer.rejectCallback(params);
  }

  @backgroundMethod()
  dispatchAction(action: any) {
    // * update background store
    // TODO init store from constructor
    store.dispatch(action);
    // * broadcast action
    this.bridgeExtBg?.requestToAllUi({
      // TODO use consts
      method: 'dispatchActionBroadcast',
      params: action,
    } as IJsonRpcRequest);
    // * TODO async action
    // * TODO auto sync full state to UI when ui mount
  }

  @backgroundMethod()
  getStoreState(): Promise<any> {
    const state = cloneDeep(store.getState());
    return Promise.resolve(state);
  }

  // TODO remove
  @backgroundMethod()
  changeAccounts(address: string) {
    console.log('changeAccounts', address);
    this.notifyAccountsChanged();
  }

  // TODO remove
  @backgroundMethod()
  changeChain(chainId: string, networkVersion?: string) {
    console.log('changeChain', { chainId, networkVersion });
    this.notifyChainChanged();
  }

  @backgroundMethod()
  notifyAccountsChanged(): void {
    Object.values(this.providers).forEach((provider: ProviderApiBase) => {
      provider.notifyDappAccountsChanged({
        send: this.sendForProvider(provider.providerName),
      });
    });
  }

  @backgroundMethod()
  notifyChainChanged(): void {
    Object.values(this.providers).forEach((provider: ProviderApiBase) => {
      provider.notifyDappChainChanged({
        send: this.sendForProvider(provider.providerName),
      });
    });
  }
}
export default BackgroundApi;
