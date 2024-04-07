const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');






botaoMostrarProjetos.addEventListener('click', () => {
    
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

VanillaTilt.init(document.querySelector(".container-tosa"), {
    max: 25,
    speed: 400
  });

  VanillaTilt.init(document.querySelector(".container-banho"), {
    max: 25,
    speed: 400
  });
