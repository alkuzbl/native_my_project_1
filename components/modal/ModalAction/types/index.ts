import {ModalDataTodoListType} from '../../../../redux/types';

export type ModalActionPropsType = {
  isVisible: boolean;
  closeModal: () => void;
  deleteItem: (id: string) => void;
  updateItem: (value: string, id: string) => void;
  modalData: ModalDataTodoListType;
};
