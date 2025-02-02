//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();  // Corrigido aqui!

    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }

    if (listaDeAmigos.includes(nome)) {
        alert("Que puxa! Esse nome já foi adicionado.");
        return;
    }

    listaDeAmigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const ul = document.getElementById("listaAmigos"); // Corrigido aqui!
    ul.innerHTML = "";

    listaDeAmigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sorteio.");
        return;
    }

    let sorteio = [...listaDeAmigos];
    let resultado = [];

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let indiceSorteado;
        do {
            indiceSorteado = Math.floor(Math.random() * sorteio.length);
        } while (sorteio[indiceSorteado] === listaDeAmigos[i]);

        resultado.push(`${listaDeAmigos[i]} → ${sorteio[indiceSorteado]}`);
        sorteio.splice(indiceSorteado, 1);
    }

    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = "";

    resultado.forEach(par => {
        const li = document.createElement("li");
        li.textContent = par;
        ulResultado.appendChild(li);
    });
}
