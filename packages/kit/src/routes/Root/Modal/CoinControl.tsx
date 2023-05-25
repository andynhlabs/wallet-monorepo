import { useIsVerticalLayout } from '@mywallet/components';
import type { IEncodedTxBtc } from '@mywallet/engine/src/vaults/utils/btcForkChain/types';
import CoinControl from '@mywallet/kit/src/views/CoinControl';

import { CoinControlModalRoutes } from '../../routesEnum';

import { buildModalStackNavigatorOptions } from './buildModalStackNavigatorOptions';
import createStackNavigator from './createStackNavigator';

export type CoinControlRoutesParams = {
  [CoinControlModalRoutes.CoinControlModal]: {
    networkId: string;
    accountId: string;
    isSelectMode: boolean;
    encodedTx?: IEncodedTxBtc;
    onConfirm?: (selectedUtxos: string[]) => void;
  };
};

const CoinControlNavigator = createStackNavigator<CoinControlRoutesParams>();

const modalRoutes = [
  {
    name: CoinControlModalRoutes.CoinControlModal,
    component: CoinControl,
  },
];

const CoinControlModalStack = () => {
  const isVerticalLayout = useIsVerticalLayout();
  return (
    <CoinControlNavigator.Navigator
      screenOptions={(navInfo) => ({
        headerShown: false,
        ...buildModalStackNavigatorOptions({ isVerticalLayout, navInfo }),
      })}
    >
      {modalRoutes.map((route) => (
        <CoinControlNavigator.Screen
          key={route.name}
          name={route.name}
          component={route.component}
        />
      ))}
    </CoinControlNavigator.Navigator>
  );
};

export default CoinControlModalStack;
