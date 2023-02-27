const validation = () => {
  const inputWrapper = document.querySelector(".calc-block");
  const calcInputs = inputWrapper.querySelectorAll("input");
  const forms = document.querySelectorAll("form");

  const mainForm = document.querySelectorAll("form")[0];
  const footerForm = document.querySelectorAll("form")[1];
  const modalForm = document.querySelectorAll("form")[2];
  let messageArea = footerForm.querySelector("input.mess");

  calcInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/, "");
    });
  });

  forms.forEach((form) => {
    let inputName = form.querySelector("input[type='text']");
    let inputMail = form.querySelector("input[type='email']");
    let inputTel = form.querySelector("input[type='tel']");

    inputName.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\s\-]/g, "");
    });
    inputName.addEventListener("blur", (e) => {
      e.target.value = e.target.value.replace(/^[\s\-]+/g, "");
      e.target.value = e.target.value.replace(/[\s\-]+$/g, "");
      e.target.value = e.target.value.replace(/\s{2,}/g, " ");
      e.target.value = e.target.value.replace(/\-{2,}/g, "-");
      if (e.target.value) {
        e.target.value =
          e.target.value[0].toUpperCase() +
          e.target.value.slice(1).toLowerCase();
      }
    });

    inputMail.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(
        /[^a-zA-Z\d\@\-\_\.\!\~\*\']/g,
        ""
      );
    });
    inputMail.addEventListener("blur", (e) => {
      e.target.value = e.target.value.replace(/^[\-]+/g, "");
      e.target.value = e.target.value.replace(/[\-]+$/g, "");
      e.target.value = e.target.value.replace(/\s{2,}/g, " ");
      e.target.value = e.target.value.replace(/\-{2,}/g, "-");
    });
    inputTel.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\d\(\)\-]/g, "");
    });
    inputTel.addEventListener("blur", (e) => {
      e.target.value = e.target.value.replace(/^[\-]+/g, "");
      e.target.value = e.target.value.replace(/[\-]+$/g, "");
      e.target.value = e.target.value.replace(/\s{2,}/g, " ");
      e.target.value = e.target.value.replace(/\-{2,}/g, "-");
    });
  });

  messageArea.addEventListener("input", (event) => {
    event.target.value = event.target.value.replace(/[^а-яА-ЯёЁ\s\-]/g, "");
  });
  messageArea.addEventListener("blur", (e) => {
    e.target.value = e.target.value.replace(/^[\s\-]+/g, "");
    e.target.value = e.target.value.replace(/[\s\-]+$/g, "");
    e.target.value = e.target.value.replace(/\s{2,}/g, " ");
    e.target.value = e.target.value.replace(/\-{2,}/g, "-");
  });
};

export default validation;
