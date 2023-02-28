const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");

  const handleMenu = () => {
    // if (!menu.style.transform) {
    //   menu.style.transform = "translateX(0)";
    // } else {
    //   menu.style.transform = "";
    // }
    menu.classList.toggle("active-menu");
  };

  document.addEventListener("click", (e) => {
    if (e.target.closest(".menu")) {
      handleMenu();
    } else if (
      !e.target.closest("menu") ||
      e.target.classList.contains("close-btn")
    ) {
      menu.classList.remove("active-menu");
    } else if (e.target.matches("ul>li>a") && e.target.closest("menu")) {
      handleMenu();
    }
  });

  // menu.addEventListener("click", (e) => {});
  // closeBtn.addEventListener("click", handleMenu);

  // menuItems.forEach((menuItem) =>
  //   menuItem.addEventListener("click", handleMenu)
  // );
};

export default menu;
