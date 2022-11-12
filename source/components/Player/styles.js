/** @format */

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  player: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controls: {
    position: 'absolute',
  },
  play: {
    width: 34,
    height: 45,
    marginLeft: 12,
  },
  pause: {
    width: 34,
    height: 40,
  },
  backward: {
    width: 40,
    height: 40,
  },
  forward: {
    width: 40,
    height: 40,
  },
  progressBar: {
    width: 160,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
    borderRadius: 80,
  },
  duration: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  rate: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});
