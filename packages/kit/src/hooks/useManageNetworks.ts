import type { INetwork } from '@mywallet/engine/src/types';
import { CHAINS_DISPLAYED_IN_DEV } from '@mywallet/shared/src/engine/engineConsts';
import platformEnv from '@mywallet/shared/src/platformEnv';

import { makeSelector } from './redux';

export type IManageNetworks = {
  allNetworks: INetwork[];
  enabledNetworks: INetwork[];
};

const emptyArray = Object.freeze([]);

export const { use: useManageNetworks, get: getManageNetworks } =
  makeSelector<IManageNetworks>((selector, { useMemo }) => {
    const devModeEnable = selector((s) => s.settings.devMode)?.enable;
    const networks = selector((s) => s.runtime.networks) ?? emptyArray;

    const [allNetworks, enabledNetworks] = useMemo(() => {
      const chainsToHide = devModeEnable ? [] : CHAINS_DISPLAYED_IN_DEV;

      const all = networks.filter(
        (network) =>
          !chainsToHide.includes(network.impl) &&
          (platformEnv.isExtension
            ? !network.settings.disabledInExtension
            : true),
      );
      const enabled = all.filter((network) => network.enabled);
      return [all, enabled];
    }, [devModeEnable, networks]);

    return {
      allNetworks,
      enabledNetworks,
    };
  });
