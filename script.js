const display = document.getElementById('display')

function appendToDisplay(input){
    display.value+=input;
}
function clearDisplay(){
    display.value=''
}
function calculate(){
try {
    display.value=eval(display.value)
} catch (error) {
    display.value='Error'   
}
}


let Darkmode = document.getElementById('Darkmode')
let calc=document.querySelector('.calc')

Darkmode.addEventListener(('click'),()=>{

    calc.classList.toggle('dark-mode')
   document.body.classList.toggle('dark')
     if (Darkmode.textContent === '🌙') {
        Darkmode.textContent = '☀️';
    } else {
        Darkmode.textContent = '🌙';
    }
})
