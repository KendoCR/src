// Mapeando os botões e armazenando em variaveis
const btnBurguer = document.querySelector('.burguer');
console.log(btnBurguer);
const btnFechar = document.querySelector('.fechar');
console.log(btnFechar);
const barraNav = document.querySelector('nav');


btnBurguer.addEventListener('click', abrirMenu);
btnFechar.addEventListener('click', fecharMenu);

function abrirMenu() {
    barraNav.style.display = 'flex';
    btnFechar.style.display = 'block'
}

function fecharMenu() {
    barraNav.style.display = 'none';
    btnFechar.style.display = 'none';

}