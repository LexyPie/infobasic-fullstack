document.getElementById('btn_send').onclick = function() {
    let createSentence = document.createElement('span');

    covertToExclamation = function() {
        let inputNumValue = parseInt(document.getElementById('input_number').value);
        
        let excla = "";

        for(let i=0; i<inputNumValue; i++) {
            excla = excla + "!";
        }
        
        return excla;
    }

    createSentence.innerHTML = document.getElementById('input_text').value + " " + covertToExclamation();
    document.getElementById('to_fill').append(createSentence);
    document.getElementById('input_text').value = "";
    document.getElementById('input_number').value = "";

}

