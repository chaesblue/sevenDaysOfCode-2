const botão = document.querySelector('.voltarAoCadastro')

botão.onclick =function() {

 let nome = prompt ("Digite seu nome:");
 let idade = prompt ("Digite sua idade em numero:");
 let curso = prompt ("Digite qual linguagem de programação deseja aprender:");
let msgnBoasvindas = `olá ${nome}! bem vindo ao curso de ${curso} 

vimos que vc tem ${idade} anos, é uma otima  idade para começar, vamos la?!`;

let msgnBoasvindas2 = `olá ${nome}! bem vindo ao curso de ${curso} 
vimos que vc tem ${idade} anos, é uma otima  idade para inovar, vamos la?!`;


if (idade<30){

alert (msgnBoasvindas)

}else{

    alert(msgnBoasvindas2)
}
}
