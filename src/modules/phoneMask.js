import Inputmask from "inputmask";

export const phoneMask = () => {
  // let phone = document.querySelectorAll(".form-phone");
  let im = new Inputmask({
    mask: "(+7|8) (999) 999-99-99",
    showMaskOnHover: false,
    showMaskOnFocus: false,
    jitMasking: true,
    inputmode: "tel",
  });

  document.querySelectorAll(".form-phone").forEach((phone) => {
    im.mask(phone);
  });
};
