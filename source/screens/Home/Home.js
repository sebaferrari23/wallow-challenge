/** @format */

import { useNavigation } from '@react-navigation/native';
import React, { memo, useCallback } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { useMappedState } from 'redux-react-hook';

import { meditationsSelector } from '~/store/modules';

import { styles } from './styles';

export const Home = memo(() => {
  const { meditations } = useMappedState(meditationsSelector);
  const navigation = useNavigation();

  const handleMeditation = useCallback(
    (item) => {
      navigation.navigate('Meditation', { ...item });
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({ item }) => {
      return (
        <View style={styles.card}>
          <TouchableOpacity onPress={() => handleMeditation(item)}>
            <Text style={styles.title}>{item?.name} ></Text>
          </TouchableOpacity>
        </View>
      );
    },
    [handleMeditation],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList style={styles.content} data={meditations} keyExtractor={(item) => item.id} renderItem={renderItem} />
    </SafeAreaView>
  );
});
