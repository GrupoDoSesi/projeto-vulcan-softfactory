function monitorarTemperatura(leituras) {
    let soma = 0;
     for (let i = 0; i < leituras.length; i++) {
        soma += leituras[i];
    }
    let media = soma / leituras.length;
