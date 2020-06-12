onmessage = function(e) {

    const { number, name, method } = e.data;

     if (isNaN(parseInt(number))) {
         postMessage("Could not process input");
     }

    switch (method) {
        case 'a':
                let message = ""

                for (let i = 0; i < number; i++) {
                    const key = Math.floor(Math.random() * name.length);
                    message += name[key];
                }
                postMessage(message);
            break;
        case 'b':
                let sum = 0;
                for (let i = 0; i < number; i++) {
                    const key = Math.floor(Math.random() * name.length)
                    sum += key * i;
                }
                postMessage(sum);
        
            break;
        default:
            postMessage("Could not process form");
            break;
    }
    

};