var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequire94c2;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequire94c2=a);var o=a("TwlT3");const n=document.querySelector(".feedback-form");n.addEventListener("submit",(function(e){e.preventDefault();const t=e.target.elements,r=t.email.value,a=t.message.value,o={email:r,message:a};e.target.reset(),localStorage.removeItem("feedback-form-state"),console.log(o)})),n.addEventListener("input",(0,o.throttle)((function(e){let t=localStorage.getItem("feedback-form-state");t=t?JSON.parse(t):{},t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),function(){let e=localStorage.getItem("feedback-form-state");e&&(e=JSON.parse(e),Object.entries(e).forEach((([e,t])=>{n.elements[e].value=t})))}();
//# sourceMappingURL=03-feedback.86a25e13.js.map
