import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import {Navigation} from './navigation/Navigation';

const App = () => {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
