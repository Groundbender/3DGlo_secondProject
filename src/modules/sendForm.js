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

  const showStatus = (status) => {
    if (status === "error") {
      statusBLock.style.color = "red";
      statusBLock.innerHTML = errorText;
    } else if (status === "success") {
      statusBLock.innerHTML = "&#128077; " + successText;
    } else if (status === "load") {
      statusBLock.innerHTML = `<div class='preloader'>
    <svg width = '25px' height='25px' class='preloader__image' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
      <path fill='currentColor'
        d='M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z'>
      </path>
    </svg>
  </div>`;
    }

    statusBLock.style.marginTop = "5px";
    statusBLock.style.color = "white";
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

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          // statusBLock.innerHTML = "&#128077; " + successText;
          showStatus("success");
          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          // statusBLock.style.color = "red";
          // statusBLock.innerHTML = errorText;
          showStatus("error");
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
