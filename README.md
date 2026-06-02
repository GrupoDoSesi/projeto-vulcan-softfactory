# ProjetoVulcan
##  Elementos do Grupo
* **Integrante A (Líder Técnico):** Ryan Rocha Cardoso - Criou o motor.js
* **Integrante B:** Lucas Rodrigues Silva, Geovanna Monteiro - Criou o sensores.js
* **Integrante C:** Samders Queiroz - Criou o app.js

---

## 🏭 1. O Problema da Fábrica
Na linha de montagem automatizada da SoftFactory Camaçari, os robôs industriais trabalham sob muito esforço. Se os braços mecânicos acelerarem demais, podem colidir e partir-se. Além disso, se as articulações aquecerem muito, o robô pode estragar-se. 

O objetivo deste projeto foi criar um sistema de telemetria para monitorizar a velocidade do robô e a temperatura dos seus componentes em tempo real para evitar acidentes.

---

## 🛠️ 2. Como Organizamos e Fizemos o Código
Para que o sistema ficasse organizado, dividimos o projeto em 3 partes:
* **Módulo do Motor (`motor.js`):** Feito para calcular a velocidade final do braço do robô. Ele usa uma estrutura de decisão `if/else` que valida a velocidade: se passar de 100 m/s, ativa um aviso de sobrecarga na hora.
* **Módulo dos Sensores (`sensores.js`):** Feito para analisar a temperatura. Ele recebe um histórico com 5 temperaturas guardadas numa lista (Array). Usando um laço de repetição `for`, ele soma todas elas e calcula a média aritmética. Se a média passar de 45°C, ele dá ordem para ativar o resfriamento automático.
* **Ficheiro Principal (`app.js`):** É o cérebro que une tudo. Ele importa os outros dois ficheiros usando a função `require`, define dados de teste para simular o robô a funcionar e desenha no ecrã um painel com todas as informações usando o `console.log()`.

---

## 🚀 3. Tecnologias Usadas
* **Linguagem de Programação:** JavaScript (Node.js)
* **Controlo de Versão e Envio:** Git e GitHub (Autenticação segura via chaves SSH)

---

## 💻 4. Como Correr o Projeto no Computador

1. Faz o clone (download) do repositório usando o terminal:
```bash
git clone git@github.com:teu-usuario-lider/projeto-vulcan-softfactory.git
