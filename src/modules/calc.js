import { animate } from "./helpers";

const calc = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const total = document.querySelector("#total");

  // const time = 100;
  // const render = (number) => {
  //   const step = Number(String(number).slice(0, -2));

  //   let num = 0;
  //   let frequency = Math.round(time / (num / step));
  //   let interval = setInterval(() => {
  //     if (calcType.value && calcSquare.value) {
  //       num += step;
  //       total.textContent = num;
  //       if (num === number) {
  //         clearInterval(interval);
  //       }
  //     }
  //   }, frequency);
  // };
  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += calcCount.value / 10;
    }
    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }
    if (calcType.value && calcSquare.value) {
      totalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }

    return totalValue;
  };
  const animationCheck = () => {
    let prevValue = +total.textContent;
    let totalValue = countCalc();
    animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        if (prevValue > 0) {
          total.textContent =
            prevValue + Math.round((totalValue - prevValue) * progress);
        } else {
          total.textContent = Math.round(totalValue * progress);
        }
      },
    });
  };

  calcBlock.addEventListener("input", (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay
    ) {
      // countCalc();
      animationCheck();
    }
  });
};

export default calc;
