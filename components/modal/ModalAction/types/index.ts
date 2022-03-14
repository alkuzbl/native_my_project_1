export type ModalActionPropsType = {
  isVisible: boolean;
  closeModal: () => void;
  deleteItem: (id: string) => void;
  updateItem: (value: string, id: string) => void;
  itemId: string;
  itemTitle: string;
};
