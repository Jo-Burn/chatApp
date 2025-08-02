console.log('Hello app')
let send = document.getElementById('send')
let input = document.getElementById('input')
let enter = document.getElementById("chat-box");
let term = document.getElementById('terminal')
let x = [];
class message {
    constructor(mes) {
     this.mes = mes
    }
}

enter.addEventListener('keypress', 
    function(event) {
        if(event.key === "Enter") {
           // console.log('work')
            event.preventDefault();
            enter.click(makeObject())
        }
    }
)
function makeObject() {
    x = new message(input.value)

    return sendMessage()
}

function sendMessage() {
    console.log(input.value)
    //let d = new message(input.value);
    term.innerHTML = x.mes
}