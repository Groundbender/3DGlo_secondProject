import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import anchorsAnimate from "./modules/anchors";
import validation from "./modules/validation";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import { swiperFunc } from "./modules/swiper";
import sendForm from "./modules/sendForm";

timer("3 marth 2023");
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

calc(100);
swiperFunc();

sendForm({ formID: "form1", someElem: [{ type: "block", id: "total" }] });

sendForm({ formID: "form2", someElem: [{ type: "block", id: "total" }] });

sendForm({ formID: "form3", someElem: [{ type: "block", id: "total" }] });
