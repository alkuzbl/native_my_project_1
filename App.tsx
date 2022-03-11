import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import {Navigation} from './navigation/Navigation';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
