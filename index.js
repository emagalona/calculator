function add(num1, num2){
    return num1 + num2;
}

function subtrac(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1 + num2;
}


document.addEventListener('DOMContentLoaded', function(){
    let btn = document.querySelectorAll('button');
    let outputField = document.getElementById('result');
    

    btn.forEach((element) => {
        element.addEventListener('click', function(){
            let btnValue = element.textContent;
            let outputFieldInitialContent = outputField.textContent;
            
            outputField.innerHTML = outputFieldInitialContent + btnValue;
            
        });
    });
});
