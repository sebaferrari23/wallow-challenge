/** @format */

import React, { useCallback, useEffect, useState } from 'react';
import { Text, Image, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import TrackPlayer, { useProgress, State, usePlaybackState } from 'react-native-track-player';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { useDispatch } from 'redux-react-hook';

import { saveState } from '~/store/modules';
import { AnimatedRings } from '~/components';
import { checkIsCompleted, secondsToTime } from '~/utils';

import { styles } from './styles';

export const Player = ({ meditation }) => {
  const dispatch = useDispatch();
  const playerState = usePlaybackState();
  const progress = useProgress();

  const [player, setPlayer] = useState(false);
  const [isAccelerated, setIsAccelerated] = useState(false);

  const [duration, setDuration] = useState('00:00');

  const isPlaying = playerState === State.Playing;
  const isConnecting = playerState === State.Connecting;
  const isBuffering = playerState === State.Buffering;

  const setup = useCallback(async () => {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.add({ url: meditation.sound });
    setPlayer(true);
  }, [meditation.sound]);

  useEffect(() => {
    if (!player) {
      setup();
    }
  }, [player, setup]);

  useEffect(() => {
    if (isPlaying) {
      setDuration(secondsToTime(progress.position));
    }
  }, [isPlaying, progress]);

  useEffect(() => {
    const state = {
      id: meditation.id,
      ms: progress.position * 1000,
      completed: checkIsCompleted(progress.position, progress.duration),
    };
    dispatch(saveState(state));
  }, [dispatch, progress, meditation.id]);

  const handlePlay = useCallback(async () => {
    await TrackPlayer.play();
  }, []);

  const handlePause = useCallback(async () => {
    await TrackPlayer.pause();
  }, []);

  const handleBackward = useCallback(async () => {
    await TrackPlayer.seekTo(progress.position - 10);
  }, [progress]);

  const handleForward = useCallback(async () => {
    await TrackPlayer.seekTo(progress.position + 10);
  }, [progress]);

  const handleToggleRate = useCallback(async () => {
    await TrackPlayer.setRate(isAccelerated ? 1 : 1.5);
    setIsAccelerated(!isAccelerated);
  }, [isAccelerated]);

  return (
    <>
      <View style={styles.player}>
        <TouchableOpacity onPress={() => handleBackward()}>
          <Image style={styles.backward} source={{ uri: 'backward' }} resizeMode={'contain'} />
        </TouchableOpacity>

        <AnimatedRings visibility={isPlaying} />

        <View style={styles.progressBar}>
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={progress.duration || 1}
            strokeWidth={5}
            size={160}
            trailColor={'rgba(255,255,255,.3)'}
            colors={'white'}
          />
          <View style={styles.controls}>
            {isConnecting || isBuffering ? (
              <ActivityIndicator size="large" color={'white'} />
            ) : isPlaying ? (
              <>
                <TouchableOpacity onPress={() => handlePause()}>
                  <Image style={styles.pause} source={{ uri: 'pause' }} resizeMode={'contain'} />
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity onPress={() => handlePlay()}>
                <Image style={styles.play} source={{ uri: 'play' }} resizeMode={'contain'} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <TouchableOpacity onPress={() => handleForward()}>
          <Image style={styles.forward} source={{ uri: 'forward' }} resizeMode={'contain'} />
        </TouchableOpacity>
      </View>

      <Text style={styles.duration}>{duration}</Text>
      <TouchableOpacity onPress={() => handleToggleRate()}>
        <Text style={styles.rate}>{isAccelerated ? '1.5' : '1.0'}x</Text>
      </TouchableOpacity>
    </>
  );
};
