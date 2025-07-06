function calculateBMI(){
    let weight=document.getElementById('weight').value;
    let height=document.getElementById('height').value;

    let bmi=weight/(height/100) **2;
    let resultMsg='your BMI is '+bmi.toFixed(2);

    if(bmi<18.5){
        resultMsg=resultMsg+" (under weight)";
    }else if(bmi>=18.5 && bmi<25){
        resultMsg=resultMsg+" (normal)";
    }else if(bmi>=25 && bmi<30){
        resultMsg=resultMsg+" (over weight)";
    }else if(bmi>30){
        resultMsg=resultMsg+" (obese)";
    }else{
        resultMsg="enter valid height and weight!";
    }
    document.getElementById('result').innerHTML=resultMsg;
}