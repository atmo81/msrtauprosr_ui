import * as actionType from './Modal.actions';

const defaultState = {
  show: false,
  modalType: null,
  title: '',
  message: '',
};

export const modal = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.SHOW_MODAL:
      return {
        ...state,
        modalType: action.modalType,
        title: action.title,
        message: action.message,
        show: true,
        size: action.size,
      };

    case actionType.HIDE_MODAL:
      return {
        ...state,
        modalType: null,
        title: '',
        message: '',
        show: false,
      };

    default:
      return state;
  }
};

export default modal;
