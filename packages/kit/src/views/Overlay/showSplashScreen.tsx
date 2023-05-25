import { Image, Keyboard, View } from 'react-native';

import splashImage from '@mywallet/kit/assets/splash.png';
import platformEnv from '@mywallet/shared/src/platformEnv';

import { showOverlay } from '../../utils/overlayUtils';

export const showSplashScreen = () => {
  Keyboard.dismiss();
  showOverlay(() => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={{
          height: '100%',
          width: '100%',
          resizeMode: platformEnv.isWeb ? 'center' : 'contain',
        }}
        source={splashImage}
      />
    </View>
  ));
};
