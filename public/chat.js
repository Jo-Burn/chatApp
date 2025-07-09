console.log('Hello app')
let send = document.getElementById('send')
let input = document.getElementById('input')
let enter = document.getElementById("chat-box");

enter.addEventListener('keypress', 
    function(event) {
        if(event.key === "Enter") {
           // console.log('work')
            event.preventDefault();
            enter.click(sendMessage())
        }
    }
)
//send.addEventListener("click", sendMessage())

function sendMessage() {
    console.log('message sent')
}