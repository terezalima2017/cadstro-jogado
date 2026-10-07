
let nome = prompt("informe seu nome?");
let idade = Number( prompt("informe sua iadade?"));
let nick = prompt("informe  seu apelido ");
let jogoFavorito=prompt("informe seu jogo favorito")
let horasporsemana=prompt("informe a quatidadede horas jogadas por semana")

console.log("CADASTRO DO JOGADOR");
console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Nick: " + nick);
console.log("Jogo favorito: " + jogoFavorito);
console.log("Horas por semana: " +  horasporsemana);


if (idade<12){
    alert (nome +" tem clasificação infantil");
}else if (idade>=12 && idade<=17){
alert(nome+" tem casificação adolecente")
}else{
    alert(nome +"clasificação adulta")

}


if (horasSemana <= 5) {
    alert("Jogador casual.");
} else if (horasSemana >= 6 && horasSemana <= 15) {
    alert("Jogador frequente.");
} else {
    alert("Jogador muito ativo.");
}
function apresentarJogador() {
    alert(nick + " joga principalmente " + jogoFavorito + ".");
}

apresentarJogador();

let pontuacao = horasSemana * 20;


console.log("Pontuação semanal: " + pontuacao + " pontos.");