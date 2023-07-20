const pesoUsuario = document.querySelector('#peso');
const alturaUsuario =  document.querySelector('#altura');
const botaoCalcular = document.querySelector('.btn--primario');
const imcResultado = document.querySelector('.resultado');

console.log(pesoUsuario, alturaUsuario, botaoCalcular, imcResultado)

botaoCalcular.addEventListener('click', calcularImc);

function calcularImc() {
    // peso / altura ** 2
    let pesoConvertido =  Number(pesoUsuario.value)
    let alturaConvertido = Number(alturaUsuario.value)
    let calculoImc = Math.trunc(pesoConvertido / alturaConvertido ** 2);
    // imcResultado.textContent = Math.trunc(calculoImc);
    if (pesoConvertido <= 0) {
        imcResultado.textContent = `Digite um peso válido 🙄`
    } else if (alturaConvertido <= 0) {
        imcResultado.textContent = `Digite uma altura válida 🙄`
    } else if (calculoImc <= 18.5) {
        imcResultado.textContent = `O seu imc é de ${calculoImc} e você está magro/a`
    } else if (calculoImc > 18.5 && calculoImc <=  24.9 ){
        imcResultado.textContent = `O seu imc é de ${calculoImc} e você está normal`
    } else if (calculoImc > 24.9 && calculoImc <= 29.9) {
        imcResultado.textContent = `O seu imc é de ${calculoImc} e você está com sobrepeso`
    } else if (calculoImc > 29.9 && calculoImc <= 39.9) {
        imcResultado.textContent = `O seu imc é de ${calculoImc} e você está com obesidade`
    } else {
        imcResultado.textContent = `O seu imc é de ${calculoImc} e você está com obesidade GRAVE 😶`
    }
}