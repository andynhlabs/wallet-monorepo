import { createLazyKitProvider } from '@mywallet/kit/src/provider/createLazyKitProvider';
import '@mywallet/shared/src/web/index.css';

const KitProviderExt = createLazyKitProvider({
  displayName: 'KitProviderExt',
});
export default KitProviderExt;
