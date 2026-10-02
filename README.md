# Questionário interativo — Clínica da Núbia

Projeto estático pronto para publicar no GitHub Pages.

## Publicação rápida

1. Crie um repositório no GitHub (ex.: `questionario-clinica-nubia`).
2. Envie os arquivos `index.html`, `styles.css` e `app.js` para a raiz do repositório.
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`.
6. Salve. O GitHub exibirá a URL pública do questionário.

## Funcionalidades

- Layout responsivo para celular e computador.
- Salvamento automático no navegador com `localStorage`.
- Perguntas condicionais: perguntas-filho somem quando a resposta-mãe torna o bloco desnecessário.
- Ficha repetível para cada serviço.
- Blocos fixos do NB.docx.
- Fichas de encaminhamento por motivo.
- Exemplos de conversa repetíveis.
- Barra de progresso.
- Geração e download de PDF com todas as perguntas e respostas.
- Alternativa de impressão / “Salvar como PDF”.

## Observação sobre envio por WhatsApp

O navegador não consegue anexar automaticamente um PDF local a uma conversa do WhatsApp sem integração específica. O fluxo previsto é: preencher → gerar PDF → baixar → enviar manualmente pelo WhatsApp.
