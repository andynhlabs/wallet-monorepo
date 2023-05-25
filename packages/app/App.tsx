/* eslint-disable @typescript-eslint/no-unused-vars, import/first, import/order */
import '@mywallet/shared/src/polyfills';

import * as SplashScreen from 'expo-splash-screen';
import { LogBox } from 'react-native';

import { KitProvider } from '@mywallet/kit';
import { startTrace } from '@mywallet/shared/src/perf/perfTrace';

startTrace('js_render');

SplashScreen.preventAutoHideAsync();
LogBox.ignoreAllLogs();

export default KitProvider;
