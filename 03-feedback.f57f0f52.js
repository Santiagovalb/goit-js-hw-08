const e=document.querySelector(".feedback-form"),a=e.querySelector('input[name="email"]'),t=e.querySelector('textarea[name="message"]'),l=JSON.parse(localStorage.getItem("feedback-form-state"));l&&(a.value=l.email,t.value=l.message),e.addEventListener("input",(()=>{const e={email:a.value,message:t.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))})),e.addEventListener("submit",(e=>{e.preventDefault();const l={email:a.value,message:t.value};localStorage.removeItem("feedback-form-state"),a.value="",t.value="",console.log(l)}));
//# sourceMappingURL=03-feedback.f57f0f52.js.map
