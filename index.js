import "./styles.css";
// example https://getbootstrap.com/docs/4.5/components/forms/#validation

class Validation {
  constructor(form, parametrs) {
    this.form = form;
    this.parametrs = parametrs;
  }
  init() {
    this.name = this.form.name;
    this.submit = document.querySelector('[type="submit"]');
    this.email = document.querySelector('[type="email"]');
    this.phone = document.querySelector('[type="tel"]');
    this.password = document.querySelector('[type="password"]');
  }

  validName() {
    this.init();
    function validationName(name) {
      const reg = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']{1,16}$/;
      return reg.test(String(name));
    }
    this.submit.addEventListener("click", () => {
      event.preventDefault();
      if (validationName(this.name.value)) {
        this.name.classList.remove("is-invalid");
        this.name.classList.add("is-valid");
      } else {
        this.name.classList.remove("is-valid");
        this.name.classList.add("is-invalid");
      }
    });
  }

  validPhone() {
    this.init();
    function validationPhone(phone) {
      const reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
      return reg.test(String(phone));
    }
    this.submit.addEventListener("click", () => {
      event.preventDefault();
      if (validationPhone(this.phone.value)) {
        this.phone.classList.remove("is-invalid");
        this.phone.classList.add("is-valid");
      } else {
        this.phone.classList.remove("is-valid");
        this.phone.classList.add("is-invalid");
      }
    });
  }

  validPassword() {
    this.init();
    function validationPassword(password) {
      const reg = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g;
      return reg.test(String(password));
    }
    this.submit.addEventListener("click", () => {
      event.preventDefault();
      if (validationPassword(this.password.value)) {
        this.password.classList.remove("is-invalid");
        this.password.classList.add("is-valid");
      } else {
        this.password.classList.remove("is-valid");
        this.password.classList.add("is-invalid");
      }
    });
  }

  validEmail() {
    this.init();
    function validationEmail(email) {
      const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return reg.test(String(email));
    }
    this.submit.addEventListener("click", () => {
      event.preventDefault();
      if (validationEmail(this.email.value)) {
        this.email.classList.remove("is-invalid");
        this.email.classList.add("is-valid");
      } else {
        this.email.classList.remove("is-valid");
        this.email.classList.add("is-invalid");
      }
    });
  }
}

const validation = new Validation(
  document.querySelector(".needs-validation"),
  {}
);

// validation.validEmail()
validation.validName();
validation.validPhone();
validation.validPassword();
// validation.validEmail()
// ^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$
