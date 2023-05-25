import { NativeModules } from 'react-native';

import type { MinimizerInterface } from '@mywallet/app/src/types/NativeModules';

const { Minimizer } = NativeModules;

// eslint-disable-next-line import/no-mutable-exports
let minimizer: MinimizerInterface = {
  addListener: () => {},
  removeListeners: () => {},
  exit: () => {},
  goBack: () => {},
  minimize: () => {},
};
if (Minimizer) {
  minimizer = Minimizer;
}
export default minimizer;
