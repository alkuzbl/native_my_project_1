import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

export const ScreenModal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator}>
        <Text>ddddd</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 30,
    width: '80%',
    backgroundColor: 'black',
  },
});
