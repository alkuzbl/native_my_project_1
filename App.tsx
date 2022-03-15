import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import {Navigation} from './navigation/Navigation';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <Navigation />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
