
nowValue = parseInt(document.getElementById('input_number').value);

// AGGIUNGERE +1
document.getElementById('add_value').onclick = function() {
    //var nowValue = parseInt(document.getElementById('input_number').value);
    nowValue++;
    document.getElementById('input_number').value = nowValue;
}

//SOTTRARRE -1
document.getElementById('sub_value').onclick = function() {
    //var nowValue = parseInt(document.getElementById('input_number').value);
    nowValue--;
    document.getElementById('input_number').value = nowValue;
}

//RESETTARE
document.getElementById('reset_value').onclick = function() {
    
    nowValue = 0;
    document.getElementById('input_number').value = nowValue;

}

