// alertas
function emitirAvisoPainel(statusMotor, precisaResfriamento) {
    let mensagemFinal = "";

    if (statusMotor === "ALERTA DE SOBRECARGA") {
        mensagemFinal += "[PERIGO] O motor atingiu velocidade crítica!\n";
    }
