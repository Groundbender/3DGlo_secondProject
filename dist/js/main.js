(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),r=document.getElementById("timer-minutes"),a=document.getElementById("timer-seconds");let l;const c=()=>{let e=(()=>{let e=(new Date("1 marth 2023").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();const c=e=>1===String(e).length?"0"+e:String(e);t.textContent=c(e.hours),r.textContent=c(e.minutes),a.textContent=c(e.seconds),e.timeRemaining<0&&(clearInterval(l),t.textContent=c(0),r.textContent=c(0),a.textContent=c(0))};l=setInterval(c,1e3),c()})(),(()=>{document.querySelector(".menu");const e=document.querySelector("menu"),t=(e.querySelector(".close-btn"),e.querySelectorAll("ul>li>a"),()=>{e.classList.toggle("active-menu")});document.addEventListener("click",(r=>{r.target.closest(".menu")?t():!r.target.closest("menu")||r.target.classList.contains("close-btn")?e.classList.remove("active-menu"):r.target.matches("ul>li>a")&&r.target.closest("menu")&&t()}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),r=document.querySelector(".popup-content");let a,l=-500;const c=()=>{let e;l+=5,r.style.transform=`translateY(${l}px) translateX(-50px)`,e=l<0,e&&(a=requestAnimationFrame(c))};t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",document.body.style.overflow="hidden",screen.width>768&&(l=-500,a=requestAnimationFrame(c))}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none",document.body.style.overflow="")}))})(),(()=>{let e=document.querySelector("menu").querySelectorAll('ul>li>a[href*="#"]');const t=document.querySelector("a[href='#service-block']");e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();let r=e.getAttribute("href");document.querySelector(""+r).scrollIntoView({block:"start",behavior:"smooth"})}))})),t.addEventListener("click",(e=>{e.preventDefault(),document.getElementById("service-block").scrollIntoView({block:"start",behavior:"smooth"})}))})(),(()=>{const e=document.querySelector(".calc-block").querySelectorAll("input"),t=document.querySelectorAll("form"),r=(document.querySelectorAll("form")[0],document.querySelectorAll("form")[1]);document.querySelectorAll("form")[2];let a=r.querySelector("input.mess");e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})),t.forEach((e=>{let t=e.querySelector("input[type='text']"),r=e.querySelector("input[type='email']"),a=e.querySelector("input[type='tel']");t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-ЯёЁ\s\-]/g,"")})),t.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/^[\s\-]+/g,""),e.target.value=e.target.value.replace(/[\s\-]+$/g,""),e.target.value=e.target.value.replace(/\s{2,}/g," "),e.target.value=e.target.value.replace(/\-{2,}/g,"-"),e.target.value&&(e.target.value=e.target.value[0].toUpperCase()+e.target.value.slice(1).toLowerCase())})),r.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-zA-Z\d\@\-\_\.\!\~\*\']/g,"")})),r.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/^[\-]+/g,""),e.target.value=e.target.value.replace(/[\-]+$/g,""),e.target.value=e.target.value.replace(/\s{2,}/g," "),e.target.value=e.target.value.replace(/\-{2,}/g,"-")})),a.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d\(\)\-]/g,"")})),a.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/^[\-]+/g,""),e.target.value=e.target.value.replace(/[\-]+$/g,""),e.target.value=e.target.value.replace(/\s{2,}/g," "),e.target.value=e.target.value.replace(/\-{2,}/g,"-")}))})),a.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-ЯёЁ\s\-]/g,"")})),a.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/^[\s\-]+/g,""),e.target.value=e.target.value.replace(/[\s\-]+$/g,""),e.target.value=e.target.value.replace(/\s{2,}/g," "),e.target.value=e.target.value.replace(/\-{2,}/g,"-")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),r=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const a=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===a?(e.classList.add("active"),r[t].classList.remove("d-none")):(e.classList.remove("active"),r[t].classList.add("d-none"))}))}}))})(),((e,t,r="slide-active",a,l="dot-active",c)=>{const n=document.querySelector(`.${e}`);if(!n)return;const o=document.querySelectorAll(`.${t}`);if(0===o.length)return;let s,u=0;const i=document.createElement("ul");i.classList.add("portfolio-dots"),o.forEach(((e,t)=>{let r;t<o.length&&(r=document.createElement("li")),r.classList.add("dot"),0===t&&r.classList.add("dot-active"),i.append(r)})),n.append(i);const d=document.querySelectorAll(`.${a}`),g=(e,t,r)=>{e[t].classList.remove(r)},v=(e,t,r)=>e[t].classList.add(r),m=()=>{g(o,u,r),g(d,u,l),u++,u>=o.length&&(u=0),v(o,u,r),v(d,u,l)},p=(e=1500)=>{s=setInterval(m,e)};n.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(`.${a}, .${c}`)&&(g(o,u,r),g(d,u,l),e.target.matches("#arrow-right")?u++:e.target.matches("#arrow-left")?u--:e.target.classList.contains(a)&&d.forEach(((t,r)=>{e.target===t&&(u=r)})),u>=o.length&&(u=0),u<0&&(u=o.length-1),v(o,u,r),v(d,u,l))})),n.addEventListener("mouseenter",(e=>{e.target.matches(`.${a}, .${c}`)&&clearInterval(s)}),!0),n.addEventListener("mouseleave",(e=>{e.target.matches(`.${a}, .${c}`)&&p(2e3)}),!0),p(2e3)})("portfolio-content","portfolio-item","portfolio-item-active","dot","dot-active","portfolio-btn")})();