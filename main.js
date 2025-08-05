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
