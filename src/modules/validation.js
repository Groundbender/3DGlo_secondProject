const validation = () => {
  const inputWrapper = document.querySelector(".calc-block");
  const calcInputs = inputWrapper.querySelectorAll("input");
  const forms = document.querySelectorAll("form");

  const mainForm = document.querySelectorAll("form")[0];
  const footerForm = document.querySelectorAll("form")[1];
  const modalForm = document.querySelectorAll("form")[2];

  calcInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/, "");
    });
  });

  let inputNameMain = mainForm.querySelector("input[type='text']");
  let inputMailMain = mainForm.querySelector("input[type='email']");
  let inputTelMain = mainForm.querySelector("input[type='tel']");

  mainForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isError = false;
    if (
      !/[^а-яА-Я\s\-]/g.test(inputNameMain.value) &&
      inputNameMain.value !== ""
    ) {
      console.log("Имя валидино");
    } else {
      isError = true;
    }
    if (
      !/[^a-zA-Z\d\@\-\_\.\!\~\*\']/g.test(inputMailMain.value) &&
      inputMailMain.value !== ""
    ) {
      console.log("email валиден");
    } else {
      isError = true;
    }
    if (!/[^\d\(\)\-]/g.test(inputTelMain.value) && inputTelMain.value !== "") {
      console.log("tel валиден");
    } else {
      isError = true;
    }

    if (!isError) {
      console.log("Данные отправлены");
    }
  });
  let inputNameFooter = footerForm.querySelector("input[type='text']");
  let inputMailFooter = footerForm.querySelector("input[type='email']");
  let inputTelFooter = footerForm.querySelector("input[type='tel']");
  let messageArea = footerForm.querySelector("input.mess");

  footerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isError = false;
    if (
      !/[^а-яА-Я\s\-]/g.test(inputNameFooter.value) &&
      inputNameFooter.value !== ""
    ) {
      console.log("Имя валидино");
    } else {
      isError = true;
    }
    if (
      !/[^a-zA-Z\d\@\-\_\.\!\~\*\']/g.test(inputMailFooter.value) &&
      inputMailFooter.value !== ""
    ) {
      console.log("email валиден");
    } else {
      isError = true;
    }
    if (
      !/[^\d\(\)\-]/g.test(inputTelFooter.value) &&
      inputTelFooter.value !== ""
    ) {
      console.log("tel валиден");
    } else {
      isError = true;
    }
    if (!/[^а-яА-Я\s\-]/g.test(messageArea.value) && messageArea.value !== "") {
      console.log("текст валиден");
    } else {
      isError = true;
    }

    if (!isError) {
      console.log("Данные отправлены");
    }
  });

  let inputNameModal = modalForm.querySelector("input[type='text']");
  let inputMailModal = modalForm.querySelector("input[type='email']");
  let inputTelModal = modalForm.querySelector("input[type='tel']");
  modalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isError = false;
    if (
      !/[^а-яА-Я\s\-]/g.test(inputNameModal.value) &&
      inputNameModal.value !== ""
    ) {
      console.log("Имя валидино");
    } else {
      isError = true;
    }
    if (
      !/[^a-zA-Z\d\@\-\_\.\!\~\*\']/g.test(inputMailModal.value) &&
      inputMailModal.value !== ""
    ) {
      console.log("email валиден");
    } else {
      isError = true;
    }
    if (
      !/[^\d\(\)\-]/g.test(inputTelModal.value) &&
      inputTelModal.value !== ""
    ) {
      console.log("tel валиден");
    } else {
      isError = true;
    }

    if (!isError) {
      console.log("Данные отправлены");
    }
  });
};

export default validation;
