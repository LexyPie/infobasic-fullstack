//let itWorks = alert("Ciao il Js è collegato");
/*
let getTheInput = document.getElementById('input_fill');

let btnSend = document.getElementById("input_send");
    
btnSend.onclick = function() {
        let createSpan = document.createElement('span');
        createSpan.innerHTML = getTheInput.value;
        document.getElementById("to_fill").append(createSpan);
        getTheInput.value = "";     
    }
*/

        
document.getElementById("input_send").onclick = function() {
            let createSpan = document.createElement('span');
            createSpan.innerHTML = document.getElementById('input_fill').value;
            //si può anche fare con .innerText oppure .textContent che si comporta proprio come area testo
            document.getElementById("to_fill").append(createSpan);
            document.getElementById('input_fill').value = "";     
        }
    
