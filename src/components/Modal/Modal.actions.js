import { devlog } from 'utils/global';

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

const DEFAULT_MODAL_SIZE = 'medium';

export const showModal = (modalType, title, message, size = DEFAULT_MODAL_SIZE) => ({
  type: SHOW_MODAL,
  modalType,
  title,
  message,
  size,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});

export const showErrorModal = (message, error = '') => dispatch => {
  devlog(error);
  dispatch(showModal('error', 'Oops, we did not expect this.', message, 450));
};
