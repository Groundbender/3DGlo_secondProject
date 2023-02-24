const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  const modalDialog = document.querySelector(".popup-content");

  let start = -500;
  let finish = 0;
  let position = -500;
  let count = 5;
  let idPopup;

  const showAnimation = () => {
    if (start < finish) {
      position += count;
    } else if (start > finish) {
      position -= count;
    }
    modalDialog.style.transform = `translateY(${position}px) translateX(-50px)`;
    let condition;
    if (start > finish) {
      condition = position > finish;
    } else {
      condition = position < finish;
    }
    if (condition) {
      idPopup = requestAnimationFrame(showAnimation);
    }
  };
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      if (screen.width > 768) {
        position = start;
        idPopup = requestAnimationFrame(showAnimation);
      }
      // console.log(start);
      // console.log(finish);
      // console.log(position);
      // console.log(count);
    });
  });
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
};

export default modal;
