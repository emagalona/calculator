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

function isOperator(btnVal){
    
}


document.addEventListener('DOMContentLoaded', function(){
    let btn = document.querySelectorAll('button');
    let outputField = document.getElementById('result');
    

    btn.forEach((element) => {
        element.addEventListener('click', function(){
            let btnValue = element.textContent;
            let outputFieldInitialContent = outputField.textContent;
            
            if(btnValue != "-" && btnValue != "+" && btnValue != "/" && btnValue !="x" && btnValue != "AC" && btnValue != "+/-" && btnValue != "%" && btnValue != "="){
                if(outputFieldInitialContent.length < 10){
                    outputField.textContent = outputFieldInitialContent + btnValue;
                }
            }

            if(btnValue.includes("AC")){
                outputField.textContent = '';
            }
            
        });
    });
});
