let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/nyc.jpg') {
      minhaImagem.setAttribute ('src','imagens/nyc2.jpg');
    } else {
      minhaImagem.setAttribute ('src','imagens/nyc.jpg');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
  localStorage.setItem('nome', meuNome);
  meuCabecalho.textContent = 'New York é Fantástica, ' + meuNome;
}

if(!localStorage.getItem('nome')) {
  defineNomeUsuario();
} else {
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.textContent = 'New York é Fantástica, ' + nomeGuardado;
}

meuBotao.onclick = function() { defineNomeUsuario();
}

function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
  if(!meuNome || meuNome === null) {
    defineNomeUsuario();
  } else {
    localStorage.setItem('nome', meuNome);
    meuCabecalho.innerHTML = 'New York é Fantástica, ' + meuNome;
  }
}