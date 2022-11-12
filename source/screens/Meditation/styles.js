/** @format */

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1020',
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1,
    opacity: 0.2,
  },
  content: {
    flex: 1,
    zIndex: 5,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  description: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
  toolBar: {
    zIndex: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconBack: {
    width: 7,
    height: 19,
  },
  iconShare: {
    width: 28,
    height: 30,
  },
});
