let titulo = document.querySelector(`h1`);
titulo.innerHTML = `Hora do Desafio`;

function exibirMensagemConsole() {
    console.log('O botão foi clicado')
}
function exibirMensagemAlerta() {
    alert('Eu amo JS!')
}
function exibirMensagemPrompt() {
    let cidade = prompt('Informe o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`)
}
function exibirSoma() {
    let num1 = prompt('Informe um numero inteiro');
    let num2 = prompt('Informe outro numero inteiro');
    let soma = parseInt(num1) + parseInt(num2);
    alert(`A soma dos dois numeros é ${soma}`)
}
