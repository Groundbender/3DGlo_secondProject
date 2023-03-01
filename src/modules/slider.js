const slider = (
  blockSlider,
  slide,
  activeSLide = "slide-active",
  dotCLass,
  activeDot = "dot-active",
  buttonClass
) => {
  const sliderBlock = document.querySelector(`.${blockSlider}`);

  if (!sliderBlock) {
    return;
  }

  const slides = document.querySelectorAll(`.${slide}`);

  if (slides.length === 0) {
    return;
  }

  const timeInterval = 2000;
  let currentSlide = 0;
  let interval;

  const ul = document.createElement("ul");
  ul.classList.add("portfolio-dots");

  slides.forEach((slide, index) => {
    let li;
    if (index < slides.length) {
      li = document.createElement("li");
    }
    li.classList.add("dot");
    if (index === 0) {
      li.classList.add("dot-active");
    }
    ul.append(li);
  });
  sliderBlock.append(ul);

  const dots = document.querySelectorAll(`.${dotCLass}`);

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) =>
    elems[index].classList.add(strClass);
  {
  }

  const autoSlide = () => {
    prevSlide(slides, currentSlide, activeSLide);
    prevSlide(dots, currentSlide, activeDot);
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, activeSLide);
    nextSlide(dots, currentSlide, activeDot);
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();

    if (!e.target.matches(`.${dotCLass}, .${buttonClass}`)) {
      return;
    }
    prevSlide(slides, currentSlide, activeSLide);
    prevSlide(dots, currentSlide, activeDot);
    if (e.target.matches("#arrow-right")) {
      currentSlide++;
    } else if (e.target.matches("#arrow-left")) {
      currentSlide--;
    } else if (e.target.classList.contains(dotCLass)) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    nextSlide(slides, currentSlide, activeSLide);
    nextSlide(dots, currentSlide, activeDot);
  });

  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(`.${dotCLass}, .${buttonClass}`)) {
        stopSlide();
      }
    },
    true
  );
  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(`.${dotCLass}, .${buttonClass}`)) {
        startSlide(timeInterval);
      }
    },
    true
  );

  startSlide(timeInterval);
};

export default slider;
