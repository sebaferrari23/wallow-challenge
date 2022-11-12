/** @format */

import React, { useEffect, memo } from 'react';
import { View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
  interpolate,
} from 'react-native-reanimated';

import { styles } from './styles';

const Ring = ({ delay }) => {
  const ring = useSharedValue(0);

  const ringStyle = useAnimatedStyle(() => {
    return {
      opacity: 0.8 - ring.value,
      transform: [
        {
          scale: interpolate(ring.value, [0, 1], [1, 4]),
        },
      ],
    };
  });

  useEffect(() => {
    ring.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration: 6000,
        }),
        -1,
        false,
      ),
    );
  }, [delay, ring]);

  return <Animated.View style={[styles.ring, ringStyle]} />;
};

export const AnimatedRings = memo(({ visibility }) => {
  return (
    <Animated.View style={[styles.content, visibility && styles.contentVisible]} pointerEvents="none">
      <View style={styles.ringContent} />
      <Ring delay={0} />
      <Ring delay={1000} />
      <Ring delay={2000} />
      <Ring delay={3000} />
    </Animated.View>
  );
});
