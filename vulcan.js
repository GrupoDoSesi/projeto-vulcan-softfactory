function validarDadosRobo(velocidade, aceleracao) {
    let dadosValidos = true;


    if (velocidade < 0 || aceleracao < 0) {
        dadosValidos = false;
    }
   let mensagemValidacao = dadosValidos ? "Dados validados com sucesso." : "Erro: Valores negativos detectados!";
return { dadosValidos, mensagemValidacao };
}

module.exports = validarDadosRobo;
