/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { AMapSdk } from 'react-native-amap3d';
import App from './App';
import {name as appName} from './app.json';

AMapSdk.init('5131350db8ad49230fd4c7f3cab4f1d8');
AppRegistry.registerComponent(appName, () => App);
