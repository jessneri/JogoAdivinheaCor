function gerarNumeroInteiroAleatorio(min, max) {
    // número fracionário aleatório maior ou igual a 0 e menor que 1
    const aleatorioDeBase = Math.random();
    // número fracionário aleatório maior ou igual a 0 e menor que (max - min + 1)
    const aleatorioFracionario = Math.random() * (max - min + 1);
    // número inteiro aleatório maior ou igual a 0 e menor ou igual a (max - min)
    // Math.trunc tira a parte fracionária de um número: 0,5 vira 0, 1,25 vira 1, etc
    const aleatorioInteiro = Math.trunc(aleatorioFracionario);
    // número inteiro aleatório maior ou igual a min e menor ou igual a max
    return min + aleatorioInteiro;
}

function gerarCorAleatoria() {
    const vermelho = gerarNumeroInteiroAleatorio(0, 255);
    const verde = gerarNumeroInteiroAleatorio(0, 255);
    const azul = gerarNumeroInteiroAleatorio(0, 255);

    return "rgb(" + vermelho + ", " + verde + ", " + azul + ")";
}

function escolherElementoAleatorio(array) {
    return array[gerarNumeroInteiroAleatorio(0, array.length - 1)]
} // final do código fornecido pelo curso

// inicio do código

const retangulo = document.querySelector(".retangulo");
const botao1 = document.querySelector(".primeiro");
const botao2 = document.querySelector(".segundo");
const botao3 = document.querySelector(".terceiro");
let sorteado = null;
let contador = 0;
const textoAcertos = document.querySelector(".acertos");

const corSorteada = () => {
    let corEscolhida = gerarCorAleatoria();
    retangulo.style["background-color"] = corEscolhida;
    botaoSorteado(corEscolhida);
};

const botaoSorteado = (corEscolhida) => {
    botao = [botao1, botao2, botao3];
    sorteado = escolherElementoAleatorio(botao);
    if (sorteado === botao1) {
        botao1.innerText = corEscolhida;
        botao2.innerText = gerarCorAleatoria();
        botao3.innerText = gerarCorAleatoria();
    } else if (sorteado === botao2) {
        botao2.innerText = corEscolhida;
        botao1.innerText = gerarCorAleatoria();
        botao3.innerText = gerarCorAleatoria();
    } else if (sorteado === botao3) {
        botao3.innerText = corEscolhida;
        botao2.innerText = gerarCorAleatoria();
        botao1.innerText = gerarCorAleatoria();
    }

}

botao1.addEventListener("click", () => {
    if (botao1 === sorteado) {
        alert("Acertou!");
        contador++;
        textoAcertos.innerText = "Acertos: " + contador;
        corSorteada();
    } else {
        alert("Errou!")
        corSorteada();
    }
    vencedor(contador);
});

botao2.addEventListener("click", () => {
    if (botao2 === sorteado) {
        alert("Acertou!");
        contador++;
        textoAcertos.innerText = "Acertos: " + contador;
        corSorteada();
    } else {
        alert("Errou!")
        corSorteada();
    }
    vencedor(contador);

});

botao3.addEventListener("click", () => {
    if (botao3 === sorteado) {
        alert("Acertou!");
        contador++;
        textoAcertos.innerText = "Acertos: " + contador;
        corSorteada();
    } else {
        alert("Errou!")
        corSorteada();
    }
    vencedor(contador);
});

const vencedor = (contador) => {
    if (contador === 10) {
        alert("Parabens, você venceu!");
        textoAcertos.innerText = "";
        corSorteada();
    }
};



corSorteada();