const sendForm = ({ formID, someElem = [] }) => {
  const form = document.getElementById(formID);
  const statusBLock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с вами свяжется ";

  const validate = (list) => {
    let success = true;
    list.forEach((input) => {
      if (input.classList.contains("form-name")) {
        if (/[^а-яА-ЯёЁ\s]/g.test(input.value)) {
          success = false;
        }
      } else if (input.classList.contains("form-email")) {
        if (/[^a-zA-Z\d\@\-\_\.\!\~\*\']/g.test(input.value)) {
          success = false;
        }
      } else if (input.classList.contains("form-phone")) {
        if (/[^\d\(\)\-\+]/g.test(input.value)) {
          success = false;
        }
      } else if (input.classList.contains("mess")) {
        if (/[^а-яА-Я-\s0-9\(\)\.\,\:\"\!\?]/g.test(input.value)) {
          success = false;
        }
      }
    });

    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBLock.textContent = loadText;
    form.append(statusBLock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBLock.textContent = successText;
          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBLock.textContent = errorText;
        });
    } else {
      alert("Данные не валидны");
    }
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место, пожалуйста))");
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
