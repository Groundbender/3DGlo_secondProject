(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds");let l;const r=()=>{let e=(()=>{let e=(new Date("25 february 2023").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();const r=e=>1===String(e).length?"0"+e:String(e);t.textContent=r(e.hours),o.textContent=r(e.minutes),n.textContent=r(e.seconds),e.timeRemaining<0&&(clearInterval(l),t.textContent=r(0),o.textContent=r(0),n.textContent=r(0))};l=setInterval(r,1e3),r()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=t.querySelector(".close-btn"),n=t.querySelectorAll("ul>li>a"),l=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",l),o.addEventListener("click",l),n.forEach((e=>e.addEventListener("click",l)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=e.querySelector(".popup-close"),n=document.querySelector(".popup-content");let l,r=-500;const c=()=>{let e;r+=5,n.style.transform=`translateY(${r}px) translateX(-50px)`,e=r<0,e&&(l=requestAnimationFrame(c))};t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",screen.width>768&&(r=-500,l=requestAnimationFrame(c)),console.log(-500),console.log(0),console.log(r),console.log(5)}))})),o.addEventListener("click",(()=>{e.style.display="none"}))})(),(()=>{let e=document.querySelector("menu").querySelectorAll('ul>li>a[href*="#"]');const t=document.querySelector("a[href='#service-block']");console.log(t),e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();let o=e.getAttribute("href");console.log(o),document.querySelector(""+o).scrollIntoView({block:"start",behavior:"smooth"})}))})),t.addEventListener("click",(e=>{e.preventDefault(),document.getElementById("service-block").scrollIntoView({block:"start",behavior:"smooth"})}))})()})();