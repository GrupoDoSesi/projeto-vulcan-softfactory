function calcularVelocidadeFinal(velocidadeAtual, aceleracao, tempo = 2) {
    let velocidadeFinal = velocidadeAtual + (aceleracao * tempo);
let status;
    if (velocidadeFinal > 100) {
        status = "ALERTA DE SOBRECARGA";
    } else {
        status = "Sistema Seguro";
    }
return { velocidadeFinal, status };
}
module.exports = calcularVelocidadeFinal;
