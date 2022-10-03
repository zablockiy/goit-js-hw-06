const form = document.querySelector(".login-form");
const formObj = {};
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  if (!formElements.email.value || !formElements.password.value) {
    alert("Заполните все поля");
  }

  formObj.email = formElements.email.value;
  formObj.password = formElements.password.value;
    console.log(formObj);
    event.currentTarget.reset();
}
