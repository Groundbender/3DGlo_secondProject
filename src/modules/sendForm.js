const sendForm = ({ formID, someElem = [] }) => {
  const form = document.getElementById(formID);
  const statusBLock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Упс, что-то пошло не так...";
  const successText = "Спасибо! Наш менеджер с вами свяжется ";

  const isInvalid = (elem, status) => {
    if (!status) {
      elem.style.outline = "1px solid red";
      elem.style.border = "1px solid red";
    }
    setTimeout(() => {
      elem.style.outline = "none";
      elem.style.border = "none";
    }, 5000);
    elem.addEventListener("focus", (e) => {
      elem.style.outline = "none";
      elem.style.border = "none";
    });

    return elem;
  };
  const validate = (list) => {
    let success = true;
    list.forEach((input) => {
      if (input.name === "user_name") {
        if (!/[а-яА-ЯёЁ\s]{2,}/g.test(input.value)) {
          success = false;
          isInvalid(input, success);
        }
      } else if (input.classList.contains("form-email")) {
        if (
          !/[a-zA-Z\d\-\_\.\!\~\*\'\@]+\.{1,2}[-A-Za-z]{2,}/g.test(input.value)
        ) {
          success = false;
          isInvalid(input, success);
        }
      } else if (input.name === "user_phone") {
        if (!/[\d\(\)\-\+]{9,}/g.test(input.value)) {
          success = false;
          isInvalid(input, success);
        }
      } else if (input.name === "user_message") {
        if (/[^а-яА-Я-\s0-9\(\)\.\,\:\"\!\?]/g.test(input.value)) {
          success = false;

          isInvalid(input, success);
        }
      }
    });

    return success;
  };

  const showStatus = (status) => {
    if (status === "error") {
      statusBLock.style.color = "red";
      statusBLock.innerHTML = errorText;
    } else if (status === "success") {
      statusBLock.innerHTML = "&#128077; " + successText;
      statusBLock.style.color = "white";
    } else if (status === "load") {
      statusBLock.innerHTML = `<div class='preloader'>
    <svg width = '25px' height='25px' class='preloader__image' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
      <path fill='currentColor'
        d='M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z'>
      </path>
    </svg>
  </div>`;
      statusBLock.style.color = "white";
    }

    statusBLock.style.marginTop = "5px";

    form.append(statusBLock);

    setTimeout(() => {
      statusBLock.remove();
    }, 5000);
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

    showStatus("load");

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

    if (formBody.total == "0") {
      delete formBody.total;
    }
    if (!document.querySelector("#form2-message").value.trim()) {
      delete formBody.user_message;
    }

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          // statusBLock.innerHTML = "&#128077; " + successText;
          showStatus("success");
          formElements.forEach((input) => {
            input.value = "";
            input.style.outline = "none";
            input.style.border = "none";
            document.querySelector("#total").textContent = "0";
            document.querySelector(".calc-type").value = "";
            document.querySelector(".calc-square").value = "";
          });
        })
        .catch((error) => {
          // statusBLock.style.color = "red";
          // statusBLock.innerHTML = errorText;
          showStatus("error");
        });
    } else {
      showStatus("error");
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
