const calcularVelocidadeFinal = require('./motor');
const monitorarTemperatura = require('./sensores');

const velInicial = 30;
const aceleracao = 40;
const temperaturas = [42, 44, 46, 43, 49]; 

const dadosMotor = calcularVelocidadeFinal(velInicial, aceleracao, 2);
const dadosSensores = monitorarTemperatura(temperaturas);

console.log("=========================================");
console.log("       PAINEL DE TELEMETRIA VULCAN       ");
console.log("=========================================");
console.log(`STATUS DO MOTOR:     [ ${dadosMotor.status} ]`);
console.log(`VELOCIDADE FINAL:    ${dadosMotor.velocidadeFinal} m/s`);
console.log("-----------------------------------------");
console.log(`MÉDIA TÉRMICA:       ${dadosSensores.media}°C`);
console.log(`LIGAR RESFRIAMENTO?  [ ${dadosSensores.precisaResfriamento ? "SIM" : "NÃO"} ]`);
console.log("=========================================");
