import { actionBtn, clearBtn, result, title } from "./elements"


export function noWorker() {
    actionBtn.disabled = true;
    clearBtn.disabled = true;

    result.innerHTML  = '&#128517;'
    result.classList.add("emoji");

    title.textContent = "Worker is not enabled on browser!!";
    title.classList.add("error");

}