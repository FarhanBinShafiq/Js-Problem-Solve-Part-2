let usdInputField = document.getElementById('usd-input-field');
let bdtInputField =document.getElementById('bdt-input-field');
let oneUsd = 102.50;



 usdInputField.addEventListener('keyup', () => {
    
     let usdConvert = document.getElementById('usd-convert')
  
     let usdInput = Number(parseFloat(oneUsd * usdInputField.value).toFixed(2));
     console.log(usdInput);
     usdConvert.innerText=usdInput;
     console.log(typeof(usdConvert.innerText=usdInput));

 })


bdtInputField.addEventListener('keyup',()=>{
    let bdtConvert = document.getElementById('bdt-convert')
    let bdtInput = Number(parseFloat( bdtInputField.value/oneUsd).toFixed(2));
    console.log(bdtInput);
    bdtConvert.innerText=bdtInput;
    console.log(typeof(bdtConvert.innerText=bdtInput));
})
