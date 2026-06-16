// alertas
function emitirAvisoPainel(statusMotor, precisaResfriamento) {
    let mensagemFinal = "";

    if (statusMotor === "ALERTA DE SOBRECARGA") {
        mensagemFinal += "[PERIGO] O motor atingiu velocidade crítica!\n";
    }
 if (precisaResfriamento) {
        mensagemFinal += "[CRÍTICO] Resfriamento de emergência ativado!";
    } else {
        mensagemFinal += "[ESTÁVEL] Temperatura dentro do limite operacional.";
    }
 return { dadosValidos, mensagemValidacao };
}

module.exports = validarDadosRobo;
