/** @format */

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  ring: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60,
    borderColor: '#7B66FF',
    backgroundColor: '#7B66FF',
    borderWidth: 10,
    opacity: 0.5,
  },
  ringContent: {
    position: 'absolute',
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#7B66FF',
    borderColor: '#7B66FF',
    borderWidth: 10,
    opacity: 0.5,
  },
  content: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    opacity: 0,
  },
  contentVisible: {
    opacity: 1,
  },
});
