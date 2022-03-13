import React, {FC, memo, useState} from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {ModalActionPropsType} from './ModalAction/types';
import {TextArea} from '../TextArea/TextArea';

export const ModalAction: FC<ModalActionPropsType> = memo(props => {
  const {isVisible, closeModal, deleteItem, updateItem, modalData} = props;

  const [isEdited, setIsEdited] = useState<boolean>(false);

  const handlePressCancel = () => {
    if (isEdited) {
      setIsEdited(false);
    } else {
      closeModal();
      setIsEdited(false);
    }
  };

  const handlePressEditItem = () => setIsEdited(true);

  const handlePressDelete = () => deleteItem(modalData.todoListId);

  const updateValue = (value: string) => {
    updateItem(value, modalData.todoListId);
    setIsEdited(false);
  };

  return (
    <Modal
      isVisible={isVisible}
      backdropColor="black"
      backdropOpacity={0.7}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={500}
      animationOutTiming={500}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={500}>
      {isEdited ? (
        <TextArea
          defaultValue={modalData.title || ''}
          setEditedValue={updateValue}
        />
      ) : (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={handlePressEditItem}>
            <Text style={styles.buttonTitle}>Редактировать</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handlePressDelete}>
            <Text style={styles.buttonTitle}>Удалить</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.buttonCancel} onPress={handlePressCancel}>
        <Text style={styles.titleButton}>Отмена</Text>
      </TouchableOpacity>
    </Modal>
  );
});

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 10,
    backgroundColor: '#e1b764',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 20,
  },
  buttonCancel: {
    backgroundColor: '#917005',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  titleButton: {
    fontSize: 24,
    textAlign: 'center',
  },
});
