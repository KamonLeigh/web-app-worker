console.log("Hello World")
import { form, result  } from "./elements";
import { handleForm } from "./handlers";
import { myWorker } from "./utils";



myWorker.onmessage = function(e) {
    console.log('Message received from worker');
    result.textContent = e.data;
}
form.addEventListener("submit", handleForm)