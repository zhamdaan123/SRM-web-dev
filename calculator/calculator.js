
const inputbox1 = document.querySelector('#n1') ;
const inputbox2 = document.querySelector('#n2') ; 
let a ;
let b ; 
const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', function(){ 
    a = Number(inputbox1.value);
    b = Number(inputbox2.value);
  });


const addButton = document.querySelector('.plus');
const subtButton = document.querySelector('.minus'); 
const mulButton = document.querySelector('.multiply');
const diviButton = document.querySelector('.divide'); 
const clearButton = document.querySelector('.clear');


addButton.addEventListener('click',function () { 
    alert(a+b);
}); 
subtButton.addEventListener('click',function () {  
    alert(a-b);
});
mulButton.addEventListener('click',function () {  
    alert(a*b);
});
diviButton.addEventListener('click',function () {  
    alert(a/b);
});
clearButton.addEventListener('click',function () {  
    if(a!==null || b!==null){ 
        inputbox1.value=""; 
        inputbox2.value=""; 
        
    }
});
