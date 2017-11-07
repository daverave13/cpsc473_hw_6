import $ from 'jquery';

class FormHandler {
  constructor(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  addSubmitHandler(fn) { //instead of formHandler.prototype.addSubmitHandler
    console.log('Setting submit handler for form.');
    this.$formElement.on('submit', (event) => {
      event.preventDefault();
      console.log('test1');
      let data = {};
      $(this).serializeArray().forEach((item) => {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);
      fn(data);
    });
  }
}

export default FormHandler;
