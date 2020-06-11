import { myWorker } from "./utils";
import { result } from "./elements";

export function handleClick(e) {
    console.log(e.currentTarget);
    
}

export function handleForm(e) {
    e.preventDefault();
   const number =  e.currentTarget.num.value;
   const name = e.currentTarget.fname.value;
   const method = e.currentTarget.pets.value;

   if(!number || !name || !method) return;
  // only accepts one argument
  myWorker.postMessage({number, name, method});
   e.target.reset()
}

export function clearText() {
    result.textContent = ""
}