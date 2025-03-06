const alvo = document.querySelector(".alvo");
const pontosel = document.getElementById("pontos");
let pontos = 0;

function randomNumber(max){
    return Math.floor(Math.random()*max);
}

function movetarget(){
    const campo = document.querySelector(".campo-jogo")
    const larguracampo = campo.clientWidth;
    const alturacampo = campo.clientHeight;
    const larguraDoAlvo = alvo.clientWidth;
    const alturaDoAlvo = alvo.clientHeight;
    const posx = randomNumber(larguracampo - larguraDoAlvo);
    const posy = randomNumber(alturacampo - alturaDoAlvo);
    alvo.style.left = `${posx}px`;
    alvo.style.top = `${posy}px`;
}

function acertarAlvo() {
    pontos++;
    pontosel.textContent = pontos;
    movetarget()
}

movetarget()
