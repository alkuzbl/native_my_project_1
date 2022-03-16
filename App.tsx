import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import {Navigation} from './navigation/Navigation';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {persistor, RootState, store} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {ScreenAuth} from './screens/ScreenAuth';
import {getAuthMe} from './redux/middleware/getAuthMe';

const App = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector<RootState, boolean>(state => state.auth.isAuth);
  const isInitialized = useSelector<RootState, boolean>(
    state => state.app.isInitialized,
  );

  useEffect(() => {
    dispatch(getAuthMe());
  }, []);

  if (!isInitialized) {
    return (
      <ImageBackground
        style={[styles.container, styles.activityIndicator]}
        source={require('./assets/images/background.jpg')}>
        <ActivityIndicator size="large" />
      </ImageBackground>
    );
  }

  return (
    <View style={styles.container}>
      {isAuth ? <Navigation /> : <ScreenAuth />}
    </View>
  );
};

const RootApp = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default RootApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
