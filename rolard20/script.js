// sorteio dos dados d06 e d20
var d20 = Math.floor(Math.random()*20 + 1);
var d06 = Math.floor(Math.random()*6 + 1);
let imgdodo = document.getElementById('face')
//let num = document.getElementById('txtd');
//let res = document.getElementById('res');

console.log(d20)
console.log(d06)

// ____________________//______________________

//testando se a destresa foi digitada e pedindo para colocala

function calcular() {
    let num = document.getElementById('txtd');
    let res = document.getElementById('res');
    var des = Number(num.value)
    if (num.value.length == 0) {
        window.alert('Por favor informe a sua destreza')
//caso aqeui ele coloca o valor digitado
    }else{
        //res.innerHTML = ` Sua destreza é ${des}`
        
    }   
}

girar()
function girar(){
    res.innerHtml = 
}