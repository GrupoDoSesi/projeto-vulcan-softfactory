const calcularVelocidadeFinal = require('./motor');
const monitorarTemperatura = require('./sensores');
const emitirAvisoPainel = require('./alertas');      
const validarDadosRobo = require('./validacoes');    

const velInicial = 30;
const aceleracao = 40;
const temperaturas = [42, 44, 46, 43, 49]; 

const checagem = validarDadosRobo(velInicial, aceleracao);

if (!checagem.dadosValidos) {
    console.log(checagem.mensagemValidacao);
} else {
    const dadosMotor = calcularVelocidadeFinal(velInicial, aceleracao, 2);
    const dadosSensores = monitorarTemperatura(temperaturas);

    const avisosSistema = emitirAvisoPainel(dadosMotor.status, dadosSensores.precisaResfriamento);

    console.log("=========================================");
    console.log("       PAINEL DE TELEMETRIA VULCAN       ");
    console.log("=========================================");
    console.log(`VELOCIDADE FINAL:    ${dadosMotor.velocidadeFinal} m/s`);
    console.log(`MÉDIA TÉRMICA:       ${dadosSensores.media}°C`);
    console.log("-----------------------------------------");
    console.log("STATUS E ALERTAS DO SISTEMA:");
    console.log(avisosSistema);
    console.log("=========================================");
}
