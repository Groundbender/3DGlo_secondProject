import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");

  const modalDialog = document.querySelector(".popup-content");

  // let start = -500;
  // let finish = 0;
  // let position = -500;
  // let count = 5;
  // let idPopup;

  // const showAnimation = () => {
  //   if (start < finish) {
  //     position += count;
  //   } else if (start > finish) {
  //     position -= count;
  //   }
  //   modalDialog.style.transform = `translateY(${position}px) translateX(-50px)`;
  //   let condition;
  //   if (start > finish) {
  //     condition = position > finish;
  //   } else {
  //     condition = position < finish;
  //   }
  //   if (condition) {
  //     idPopup = requestAnimationFrame(showAnimation);
  //   }
  // };
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
      modalDialog.style.transform = "translateY(-100px) translateX(-50px)";
      if (screen.width > 768) {
        animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modalDialog.style.opacity = progress;
            modalDialog.style.transform = `translateY(${
              progress * 100
            }px) translateX(-50px)`;
          },
        });
      }
    });
  });

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });

  document.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });
};

export default modal;
