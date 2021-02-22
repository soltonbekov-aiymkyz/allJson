/*fetch("./js.json")
.then(res => res.js.json())
.then(data => console.log(data))*/

let button = document.querySelector('button');
let inputName = document.querySelector('#name');
let inputMessage = document.querySelector('#message');
let inputColor = document.querySelector('#color');

button.addEventListener('click', function () {
    let div = document.createElement('div');
    let spanName = document.createElement('span');
    let spanMessage = document.createElement('span');

    spanName.innerText = inputName.value + ": ";
    spanMessage.innerText = inputMessage.value;
    spanName.style.color = inputColor.value;
    spanName.style.fontWeight = 'bold';

    div.append(spanName, spanMessage);
    document.body.append(div);

    fetch("./https://live-chat-d7603-default-rtdb.firebaseio.com/chat.json" , {
        method: "POST",
        body: JSON.stringify({
            name: inputName.value,
            message: inputMessage.value,
            color: inputColor.value,
        })
    })
})




