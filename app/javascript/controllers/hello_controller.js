import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['modal'];
  connect() {
  }

  sayHi() {
    new bootstrap.Modal(this.modalTarget, {
      backdrop: 'static'
    }).show();
  }

}
