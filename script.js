function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var button1 = document.getElementById('rem');

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;

    function deleteMes(evt) {
        socket.emit("uzum em jnjem");
    }
    button1.onclick = deleteMes;

    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    function jnjel(msg) {
        var k = document.getElementsByClassName('p');
        k.remove();
        input.value = "";
    }

    socket.on('display message', handleMessage);
    socket.on("jnjeq", jnjel);
} // main closing bracket

window.onload = main;