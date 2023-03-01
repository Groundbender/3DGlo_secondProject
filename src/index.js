import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import anchorsAnimate from "./modules/anchors";
import validation from "./modules/validation";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
timer("1 marth 2023");
menu();
modal();
anchorsAnimate();
validation();
tabs();
slider(
  "portfolio-content",
  "portfolio-item",
  "portfolio-item-active",
  "dot",
  "dot-active",
  "portfolio-btn"
);
