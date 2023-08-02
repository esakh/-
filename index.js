let button = document.querySelectorAll("[type='button']") 
let display = document.querySelector('#display') 
let result ; 
for(let btn  of button){
    btn.addEventListener('click',()=>{
        if(btn.value != "=" && btn.value != "c" ){ 
            display.value += btn.value                  
        }else if(btn.value == "c"){
            display.value="" 
        }
        else{
            result = eval(display.value)   
            display.value = result  
        }
    })
}


