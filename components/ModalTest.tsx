import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

// export type ModalTestPropsType = {
//   callBack: (visible: boolean) => void;
// };

export const ModalTest = () => {
  //const {callBack} = props;

  const [modalVisible, setModalVisible] = useState(true);

  const handlePress = () => {
    //callBack && callBack(false);
    setModalVisible(false);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalContent}>
        <View style={styles.mmm}>
          <TouchableOpacity style={styles.modalView} onPress={handlePress}>
            <Text style={styles.modalText}>Редактировать</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalView} onPress={handlePress}>
            <Text style={styles.modalText}>Удалить</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalView} onPress={handlePress}>
            <Text style={styles.modalText}>Удалить</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mmm: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
  },
  modalView: {
    alignItems: 'center',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
