const calcularVelocidadeFinal = require('./motor');
const monitorarTemperatura = require('./sensores');

const velInicial = 30;
const aceleracao = 40;
const temperaturas = [42, 44, 46, 43, 49]; 

const dadosMotor = calcularVelocidadeFinal(velInicial, aceleracao, 2);
const dadosSensores = monitorarTemperatura(temperaturas);
