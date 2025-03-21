
var peso;
var altura;
var IMC;
var resultado;


function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    IMC = peso / (altura * altura);

    if(IMC < 17){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + IMC.toFixed(2) + '<br/> Cuidado você está muito abaixo do peso!'
    }else if(IMC > 17 && IMC <= 18.49){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + IMC.toFixed(2) + '<br/> Você abaixo do peso!';
    }else if(IMC > 18.5 && IMC <= 24.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + IMC.toFixed(2) + '<br/> Você está no seu peso ideal!';
    }else if(IMC > 25 && IMC <= 29.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + IMC.toFixed(2) + '<br/> Você está acima do peso!';
    }else if(IMC >= 30){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + IMC.toFixed(2) + '<br/> Cuidado, obesidade!';
    }

}