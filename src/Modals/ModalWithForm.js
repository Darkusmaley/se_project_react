import Modal from "./Modal";

export default class ModalWithForm extends Modal{
  constructor({popupSelector}) {
    super(popupSelector)
    this.popupSelector = popupSelector;
  }
}
