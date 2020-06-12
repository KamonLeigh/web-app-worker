
import { form, result, clearBtn } from "./elements";
import { handleForm, clearText } from "./handlers";
import { noWorker } from "./lib";
import { myWorker } from "./utils";




if (window.Worker) {

    myWorker.onmessage = function(e) {
        console.log('Message received from worker');
        result.textContent = e.data;
    }
    form.addEventListener("submit", handleForm);
    clearBtn.addEventListener("click", clearText);

} else {
    noWorker();

}