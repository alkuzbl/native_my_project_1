import React, {memo, useState} from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {ModalActionPropsType} from './types';
import {TextArea} from '../../TextArea/TextArea';

export const ModalAction: React.NamedExoticComponent<ModalActionPropsType> =
  memo(props => {
    const {isVisible, closeModal, deleteItem, updateItem, itemTitle, itemId} =
      props;

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

    const handlePressDelete = () => deleteItem(itemId);

    const updateValue = (value: string) => {
      updateItem(value, itemId);
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
          <TextArea defaultValue={itemTitle} setEditedValue={updateValue} />
        ) : (
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={handlePressEditItem}>
              <Text style={styles.buttonTitle}>Редактировать</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handlePressDelete}>
              <Text style={styles.buttonTitle}>Удалить</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity
          style={styles.buttonCancel}
          onPress={handlePressCancel}>
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
    color: '#5e4131',
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
