// sorteio dos dados d06 e d20
//var d20 = Math.floor(Math.random()*20 + 1);
//var d06 = Math.floor(Math.random()*6 + 1);
let imgdodo = document.getElementById('face')
let num = document.getElementById('txtd');
let res = document.getElementById('res');



// ____________________//______________________

//testando se a destresa foi digitada e pedindo para colocala

function calcular() {
    let res = document.getElementById('res');
    des = Number(num.value)
    if (num.value.length == 0) {
        window.alert('Por favor informe a sua destreza')
//caso aqeui ele coloca o valor digitado
    }else{
        imgdodo.setAttribute('src', 'd20/d20rodando.gif')
        
        //declarando cada caso e mostrando o lado de acorco com o numero sorteado
        setTimeout(function mostrar(){
            var d20 = Math.floor(Math.random()*20 + 1);
            switch (d20) {
                case 1:
                    imgdodo.setAttribute('src', 'd20/d20lado01.png')
                    break;
                case 2:
                    imgdodo.setAttribute('src', 'd20/d20lado02.png')
                     break;  
                case 3:
                     imgdodo.setAttribute('src', 'd20/d20lado03.png')
                     break;
                case 4:
                     imgdodo.setAttribute('src', 'd20/d20lado04.png')
                     break;
                case 5:
                    imgdodo.setAttribute('src', 'd20/d20lado05.png')
                    break;
                case 6:
                    imgdodo.setAttribute('src', 'd20/d20lado06.png')
                    break;
                case 7:
                     imgdodo.setAttribute('src', 'd20/d20lado07.png')
                     break;
                case 8:
                     imgdodo.setAttribute('src', 'd20/d20lado08.png')
                      break;
                case 9:
                    imgdodo.setAttribute('src', 'd20/d20lado09.png')
                     break 
                case 10:
                    imgdodo.setAttribute('src', 'd20/d20lado10.png')
                     break;
                case 11:
                    imgdodo.setAttribute('src', 'd20/d20lado11.png')
                    break;    
                case 12:
                    imgdodo.setAttribute('src', 'd20/d20lado12.png')
                    break;      
                case 13:
                    imgdodo.setAttribute('src', 'd20/d20lado13.png')
                    break;      
                case 14:
                    imgdodo.setAttribute('src', 'd20/d20lado14.png')
                    break;  
                case 15:
                    imgdodo.setAttribute('src', 'd20/d20lado15.png')
                    break;   
                case 16:
                    imgdodo.setAttribute('src', 'd20/d20lado16.png')
                    break;
                case 17:
                    imgdodo.setAttribute('src', 'd20/d20lado17.png')
                    break;  
                case 18:
                    imgdodo.setAttribute('src', 'd20/d20lado18.png')
                    break; 
                case 19:
                    imgdodo.setAttribute('src', 'd20/d20lado19.png')
                    break;       
                case 20:
                    imgdodo.setAttribute('src', 'd20/d20lado20.png')
                    break;  
                default:
                    break;   
                                        
            }   
             atq = des+d20 // essa variavel foi posta aqui  dentro da funçao pois é nesesaria que funcione aqui dentro  [mais foi colocada sem var ou let tornando-a global pois sera nescessario usala depois]
            res.innerHTML = ` Sua destreza é ${des} e voce tirou ${d20} no dado seu ataque é ${atq}` 
            
        }, 1000);   
         
    } 
    
    
}

function dano(){
    // pegando as variaveis poder executar o codigo
    let num = document.getElementById('txtd');
    // fazendo o botão de dano informar que nada doi digitado na destreza
    if(num.value.length == 0){
        window.alert('Não é possivel Calcular o DANO')
        
    }else {
        if(atq <= 15){
            res.innerHTML = ' voce erro tente novamente'
        }else{
            imgdodo.setAttribute('src', 'd06/d6rodando.gif')
                
            setTimeout(function mostrar2(){
                var d06 = Math.floor(Math.random()*6 + 1);
                switch (d06) {
                    case 1:
                        imgdodo.setAttribute('src', 'd06/dado-1.png')
                        break;
                    case 2:
                        imgdodo.setAttribute('src', 'd06/dado-2.png')
                        break;
                    case 3:
                        imgdodo.setAttribute('src', 'd06/dado-3.png')
                        break;        
                    case 4:
                        imgdodo.setAttribute('src', 'd06/dado-4.png')
                        break;
                    case 5:
                        imgdodo.setAttribute('src', 'd06/dado-5.png')
                        break;
                    case 6:
                        imgdodo.setAttribute('src', 'd06/dado-6.png')
                        break;        
                    default:
                        break;
                }
                
                var dano = des + d06
                res.innerHTML =`Você deu ${dano} Dano`

            },1000);
        }
    } 
        
    
}    