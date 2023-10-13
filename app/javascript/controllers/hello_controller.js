import { Controller } from "@hotwired/stimulus"
import { Modal } from "bootstrap"

export default class extends Controller {
  static targets = ['modal'];
  connect() {
  }

  sayHi() {
    new Modal(this.modalTarget, {
      backdrop: 'static'
    }).show();
  }

}
