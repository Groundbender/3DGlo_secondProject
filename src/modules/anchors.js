const anchorsAnimate = () => {
  const menu = document.querySelector("menu");
  let menuItems = menu.querySelectorAll('ul>li>a[href*="#"]');
  const skipBtn = document.querySelector("a[href='#service-block']");
  // console.log(skipBtn);
  menuItems.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let blockID = link.getAttribute("href");
      // console.log(blockID);
      document.querySelector("" + blockID).scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    });
  });
  skipBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("service-block").scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  });
};

export default anchorsAnimate;
