import { AppRegistry } from 'react-native';
import TrackPlayer from 'react-native-track-player';

import { App } from './source';
import { name as appName } from './app.json';
import { PlaybackService } from '~/services/PlaybackService';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => PlaybackService);
