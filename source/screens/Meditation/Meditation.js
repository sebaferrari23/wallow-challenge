/** @format */

import React, { memo, useCallback } from 'react';
import { Text, Image, View, TouchableOpacity, StatusBar, Share } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMappedState } from 'redux-react-hook';

import { Player } from '~/components';
import { meditationsSelector } from '~/store/modules';

import { styles } from './styles';

export const Meditation = memo(() => {
  const { params } = useRoute();
  const { meditation } = useMappedState(meditationsSelector);
  const navigation = useNavigation();
  const { name, background, description } = params;

  const handleShare = useCallback(async (title) => {
    try {
      await Share.share({ message: `Share: ${title}` });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const handleGoBack = useCallback(() => {
    console.table(meditation);
    navigation.goBack();
  }, [meditation, navigation]);

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <Image style={styles.background} source={{ uri: background }} resizeMode={'cover'} />
        <SafeAreaView style={styles.content}>
          <View style={styles.toolBar}>
            <TouchableOpacity onPress={() => handleGoBack()}>
              <Image source={{ uri: 'back' }} style={styles.iconBack} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleShare(name)}>
              <Image source={{ uri: 'share' }} style={styles.iconShare} />
            </TouchableOpacity>
          </View>
          <View style={styles.main}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Player meditation={params} logData={handleGoBack} />
          </View>
        </SafeAreaView>
      </View>
    </>
  );
});
