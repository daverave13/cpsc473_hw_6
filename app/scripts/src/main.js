import FormHandler from './formhandler';
let FORM_SELECTOR = '[data-coffee-order="form"]';
let fh = new FormHandler(FORM_SELECTOR);
fh.addSubmitHandler((fn) => {});
