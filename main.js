// cria referência ao form e ao elemento h3
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value; // obtém o nome digitado no form
    resp.innerText = `Olá, ${nome}`; // exibe a resposta do programa
    e.preventDefault(); // evita envio do form
});
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value;
    const duracao = Number(frm.inDuracao.value);
    
    const horas = Math.floor(duracao / 60);
    const minutos = duracao % 60;
    
    resp.innerText = `${titulo} - ${horas} hora(s) e ${minutos} minuto(s)`;
    e.preventDefault();
});
// cria referência ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value;    // obtém o conteúdo dos campos
    const preco = Number(frm.inPreco.value);

    const entrada = preco * 0.50;    // calcula valor da entrada
    const parcela = (preco * 0.50) / 12;    // e das parcelas

    resp1.innerText = `Promoção: ${veiculo}`;    // exibe as respostas
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;
    resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`;

    e.preventDefault();    // evita envio do form
});
