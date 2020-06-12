
import { form, result, clearBtn  } from "./elements";
import { handleForm, clearText } from "./handlers";
import { myWorker } from "./utils";



myWorker.onmessage = function(e) {
    console.log('Message received from worker');
    result.textContent = e.data;
}
form.addEventListener("submit", handleForm);
clearBtn.addEventListener("click", clearText);