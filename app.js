const STORAGE_KEY = 'noria_questionario_clinica_nubia_v1';

const normalSections = [
  {
    title: '1. Nome e apresentação da clínica',
    subsections: [
      ['1.1 Identidade', [
        ['1.1.1','Qual é o nome comercial que a IA deve usar?'],
        ['1.1.2','A expressão “Clínica da Núbia” pode ser utilizada?'],
        ['1.1.3','A expressão “NB Bronze” pode ser utilizada?'],
        ['1.1.4','A atendente virtual terá um nome próprio?'],
        ['1.1.5','Qual será esse nome?'],
        ['1.1.6','A IA deve falar no feminino?'],
        ['1.1.7','A IA pode dizer que faz parte da equipe da clínica?'],
        ['1.1.8','A IA pode falar em nome da Núbia pessoalmente?'],
      ]],
      ['1.2 Primeira mensagem', [
        ['1.2.1','Qual deve ser o texto exato da primeira mensagem?'],
        ['1.2.2','Essa mensagem deve ser enviada mesmo quando a cliente começar fazendo uma pergunta específica?'],
        ['1.2.3','Quando a cliente começar com uma pergunta específica, a IA deve respondê-la na mesma mensagem de apresentação?'],
        ['1.2.4','A apresentação deve ser repetida quando a mesma cliente iniciar um novo atendimento?'],
        ['1.2.5','Qual deve ser a resposta exata quando perguntarem se o atendimento é feito por IA?'],
      ]]
    ]
  },
  {
    title: '2. Localização e estrutura',
    subsections: [
      ['2.1 Unidade', [
        ['2.1.1','A clínica atende somente em Angra dos Reis?'],['2.1.2','Existe algum atendimento ativo no Rio de Janeiro?'],['2.1.3','Qual deve ser a resposta exata quando alguém perguntar sobre atendimento no Rio?'],['2.1.4','Qual é o endereço completo da unidade ativa?'],['2.1.5','Qual ponto de referência deve ser informado?'],['2.1.6','Qual link de localização deve ser enviado?'],['2.1.7','Existe alguma instrução específica para encontrar a entrada?'],['2.1.8','Qual deve ser a mensagem completa de endereço?']
      ]],
      ['2.2 Comodidades e acesso', [
        ['2.2.1','A clínica possui estacionamento próprio?'],['2.2.2','Existe alguma orientação aprovada sobre onde estacionar?'],['2.2.3','O acesso ao atendimento exige subir escadas?'],['2.2.4','Existe acesso para cadeira de rodas?'],['2.2.5','Há banheiro disponível para clientes?'],['2.2.6','Há local para tomar banho?'],['2.2.7','Há local reservado para trocar de roupa?'],['2.2.8','A clínica oferece toalha?'],['2.2.9','A clínica oferece sabonete?'],['2.2.10','Existe algum item obrigatório que possa ser comprado no local?'],['2.2.11','Qual é o preço de cada item vendido no local?']
      ]]
    ]
  },
  {
    title: '3. Funcionamento e equipe',
    subsections: [
      ['3.1 Horários', [
        ['3.1.1','Qual é o horário de funcionamento de segunda-feira à sexta-feira?'],['3.1.6','Qual é o horário de funcionamento no sábado?'],['3.1.7','Qual é o horário de funcionamento no domingo?'],['3.1.8','Existe intervalo sem atendimento durante o dia?'],['3.1.9','A clínica abre em feriados?'],['3.1.10','Quem informa quais feriados terão atendimento?'],['3.1.11','A clínica realiza procedimentos após as 18h?'],['3.1.12','Existem fechamentos ou férias já programados?'],['3.1.13','Quais são as datas desses fechamentos?']
      ]],
      ['3.2 Atendimento humano', [
        ['3.2.1','Em quais dias a equipe responde pelo WhatsApp?'],['3.2.2','Qual é o horário de atendimento humano pelo WhatsApp?'],['3.2.3','Quem recebe as conversas encaminhadas pela IA?'],['3.2.4','Qual prazo de resposta humana pode ser informado à cliente?'],['3.2.5','Qual mensagem deve ser enviada quando a equipe estiver fora do horário?'],['3.2.6','Quem pode autorizar exceções às regras da clínica?'],['3.2.7','Quem confirma pagamentos?'],['3.2.8','Quem pode alterar reservas?'],['3.2.9','Quais profissionais realizam cada procedimento?'],['3.2.10','A cliente pode escolher a profissional?'],['3.2.11','A escolha da profissional altera o preço?'],['3.2.12','A escolha da profissional altera a disponibilidade?']
      ]]
    ]
  },
  {
    title: '4. Relação oficial de serviços',
    subsections: [
      ['4.1 Serviços existentes', [
        ['4.1.1','Quais serviços estão disponíveis atualmente?'],['4.1.2','Quais serviços antigos não são mais oferecidos?'],['4.1.3','Quais serviços estão temporariamente suspensos?'],['4.1.4','Quais serviços são feitos somente mediante avaliação da equipe?'],['4.1.5','Quais serviços são realizados a domicílio?'],['4.1.6','Quais serviços possuem mais de uma versão?'],['4.1.7','Quais nomes ou apelidos as clientes usam para cada serviço?'],['4.1.8','Quais serviços a IA pode agendar automaticamente?'],['4.1.9','Quais serviços precisam de agendamento humano?']
      ]],
      ['4.2 Ficha obrigatória de cada serviço', []]
    ]
  },
  {
    title: '5. Confirmações específicas das modalidades',
    subsections: [
      ['5.1 Bronze Clássico', [
        ['5.1.1','O preço correto é R$99,99?'],['5.1.2','O procedimento atende o corpo todo?'],['5.1.3','A aplicação é feita primeiro na frente e depois nas costas?'],['5.1.4','A sala é compartilhada?'],['5.1.5','Qual é a capacidade física da sala?'],['5.1.6','A agenda deve aceitar quatro ou seis clientes simultaneamente?'],['5.1.7','O procedimento dura 60 minutos?'],['5.1.8','O bloco reservado deve continuar sendo de 90 minutos?']
      ]],
      ['5.2 Bronze Premium', [
        ['5.2.1','O preço correto é R$149,99?'],['5.2.2','Frente e costas são atendidas ao mesmo tempo?'],['5.2.3','O que significa “máquina dupla” neste serviço?'],['5.2.4','A sala é individual?'],['5.2.5','A sala é exclusiva durante todo o atendimento?'],['5.2.6','O procedimento dura 90 minutos?'],['5.2.7','O bloco reservado deve continuar sendo de 90 minutos?']
      ]],
      ['5.3 Bronze Comfort', [
        ['5.3.1','O preço correto é R$179,99?'],['5.3.2','O procedimento é realizado deitada?'],['5.3.3','A sala é individual e exclusiva?'],['5.3.4','O procedimento dura 90 minutos?'],['5.3.5','O bloco reservado deve continuar sendo de 90 minutos?'],['5.3.6','Quais características justificam a diferença de preço em relação ao Premium?'],['5.3.7','A expressão “mais conforto e relaxamento” está aprovada?']
      ]],
      ['5.4 Bronze Solar', [
        ['5.4.1','Qual é o preço do Bronze Solar?'],['5.4.2','Em qual local ele é realizado?'],['5.4.3','Quais horários de início são permitidos?'],['5.4.4','Qual é a duração do procedimento?'],['5.4.5','Quantos minutos ele ocupa na agenda?'],['5.4.6','Quantas clientes podem ser atendidas simultaneamente?'],['5.4.7','O atendimento depende das condições do tempo?'],['5.4.8','Quem decide se o clima permite realizar o atendimento?'],['5.4.9','O que deve acontecer com a reserva quando o clima impedir o procedimento?'],['5.4.10','O que deve acontecer com o sinal quando o clima impedir o procedimento?'],['5.4.11','A cliente pode trocar o Solar por outra modalidade nessa situação?'],['5.4.12','Como será calculada eventual diferença de preço nessa troca?']
      ]],
      ['5.5 Bronze a Jato', [
        ['5.5.1','O preço correto é R$150 ou R$149,99?'],['5.5.2','A limpeza corporal está incluída nesse preço?'],['5.5.3','O atendimento é realizado na clínica?'],['5.5.4','O atendimento é realizado a domicílio?'],['5.5.5','Qual duração do resultado deve ser divulgada: até 15 dias ou de 5 a 14 dias?'],['5.5.6','A cliente deve ficar oito horas ou de oito a doze horas sem molhar a pele?'],['5.5.7','Qual orientação deve ser enviada sobre suor após o procedimento?'],['5.5.8','Qual orientação deve ser enviada sobre banho após o procedimento?'],['5.5.9','Qual orientação deve ser enviada sobre roupas?'],['5.5.10','Qual orientação deve ser enviada sobre hidratação da pele?'],['5.5.11','Qual é a duração da aplicação?'],['5.5.12','Quantos minutos devem ser reservados na agenda?'],['5.5.13','Existe Jato no Bojo como serviço separado?'],['5.5.14','O preço do Jato no Bojo é R$49,99?'],['5.5.15','Quais regiões do corpo estão incluídas no Jato no Bojo?'],['5.5.16','Existem outras aplicações parciais de Jato?'],['5.5.17','Quais são os nomes dessas aplicações parciais?']
      ]],
      ['5.6 Atendimento a domicílio', [
        ['5.6.1','Quais bairros são atendidos?'],['5.6.2','Quais cidades são atendidas?'],['5.6.3','Existe taxa de deslocamento?'],['5.6.4','Como a taxa de deslocamento é calculada?'],['5.6.5','Existe valor mínimo para atendimento a domicílio?'],['5.6.6','O que a cliente precisa disponibilizar no local?'],['5.6.7','Quanto tempo de deslocamento precisa ser bloqueado na agenda?'],['5.6.8','Quais dados de endereço precisam ser coletados?'],['5.6.9','A IA pode concluir essa reserva sozinha?']
      ]],
      ['5.7 Banho de Lua', [
        ['5.7.1','Atualmente existe um único Banho de Lua ou três versões?'],['5.7.2','Se for único, o preço correto é R$60?'],['5.7.3','Se forem três versões, o Clássico custa R$19,99?'],['5.7.4','Se forem três versões, o Premium custa R$34,99?'],['5.7.5','Se forem três versões, o Comfort custa R$69,99?'],['5.7.6','Quais etapas estão incluídas em cada versão válida?'],['5.7.7','Qual versão inclui hidratação?'],['5.7.8','Qual versão inclui esfoliação?'],['5.7.9','Qual versão pode ser realizada deitada?'],['5.7.10','Qual é a duração de cada versão válida?'],['5.7.11','Qual bloco de agenda deve ser usado para cada versão válida?'],['5.7.12','A expressão “produto antialérgico” está aprovada pelo responsável técnico?'],['5.7.13','Qual resposta deve ser enviada quando a cliente relatar alergia?']
      ]],
      ['5.8 Detox Corporal e Mousse Clareador', [
        ['5.8.1','Detox Corporal e Mousse Clareador são o mesmo serviço?'],['5.8.2','O preço correto é R$49,99?'],['5.8.3','O procedimento pode ser contratado sem bronzeamento?'],['5.8.4','Quais etapas estão incluídas?'],['5.8.5','Qual é a duração do procedimento?'],['5.8.6','Quantos minutos devem ser reservados na agenda?'],['5.8.7','Qual é a diferença entre esse serviço e o Banho de Lua?'],['5.8.8','Qual descrição de resultado está aprovada?']
      ]],
      ['5.9 Combinações e Potência Bronze', [
        ['5.9.1','Potência Bronze e Bronze Duplo são o mesmo produto?'],['5.9.2','Se forem diferentes, qual é a diferença entre eles?'],['5.9.3','Qual é o preço de Clássico + Jato?'],['5.9.4','Qual é o preço de Solar + Jato?'],['5.9.5','Qual é o preço de Premium + Jato?'],['5.9.6','Qual é o preço de Comfort + Jato?'],['5.9.7','A regra “valor do bronze escolhido + R$99,99” ainda está válida?'],['5.9.8','A quais combinações essa regra se aplica?'],['5.9.9','A tabela de R$179,99, R$229,99 e R$259,99 ainda está válida?'],['5.9.10','Qual é a ordem dos procedimentos em cada combinação?'],['5.9.11','Qual é a duração total de cada combinação?'],['5.9.12','Qual bloco de agenda deve ser reservado para cada combinação?'],['5.9.13','Quais equipamentos devem ficar reservados durante cada combinação?'],['5.9.14','A IA pode agendar essas combinações automaticamente?']
      ]],
      ['5.10 Pacotes, promoções e adicionais', [
        ['5.10.1','Existem pacotes de sessões?'],['5.10.2','Quais são os nomes dos pacotes?'],['5.10.3','Quantas sessões cada pacote inclui?'],['5.10.4','Qual é o preço de cada pacote?'],['5.10.5','Qual é a validade de cada pacote?'],['5.10.6','O pacote pode ser compartilhado entre pessoas?'],['5.10.7','O pacote pode ser transferido para outra pessoa?'],['5.10.8','Como uma falta afeta o saldo do pacote?'],['5.10.9','Existem promoções ativas?'],['5.10.10','Qual é a data de término de cada promoção?'],['5.10.11','Existem benefícios de indicação?'],['5.10.12','Quais descontos a IA está autorizada a oferecer?'],['5.10.13','Descontos podem ser acumulados?'],['5.10.14','Quem deve confirmar condições não previstas?']
      ]]
    ]
  },
  {
    title: '6. Regras de agenda',
    subsections: [
      ['6.1 Grade semanal', [
        ['6.1.1','Os horários de domingo continuam sendo 08h e 09h30?'],['6.1.2','Os horários de segunda continuam sendo 16h e 17h30?'],['6.1.3','Os horários de terça continuam sendo 10h, 11h30 e 13h?'],['6.1.4','Os horários de quarta continuam sendo 15h e 16h30?'],['6.1.5','Os horários de quinta continuam sendo 10h, 11h30 e 13h?'],['6.1.6','Os horários de sexta continuam sendo 14h, 15h30 e 17h?'],['6.1.7','Os horários de sábado continuam sendo 10h, 11h30 e 13h?'],['6.1.8','Se algum desses dias estiver diferente, qual é a grade correta desse dia?'],['6.1.9','Essa grade vale para quais serviços?'],['6.1.10','Quem pode abrir horários fora dessa grade?']
      ]],
      ['6.2 Disponibilidade e recursos', [
        ['6.2.1','Qual é a antecedência máxima para reservar?'],['6.2.2','Qual é a antecedência mínima para reservar?'],['6.2.3','É permitido agendar para o mesmo dia?'],['6.2.4','Existe atendimento sem reserva?'],['6.2.5','Existe possibilidade de encaixe?'],['6.2.6','Quem autoriza encaixes?'],['6.2.7','Existe lista de espera?'],['6.2.8','Quem entra em contato quando uma vaga da lista de espera é liberada?'],['6.2.9','Quando não houver vaga, a IA deve oferecer outros horários do mesmo dia?'],['6.2.10','Quando não houver vaga no dia, a IA deve oferecer outras datas?'],['6.2.11','A IA pode oferecer outra modalidade quando a desejada estiver sem vaga?'],['6.2.12','Quais equipamentos são compartilhados entre modalidades?'],['6.2.13','Quais profissionais atendem mais de uma modalidade na mesma agenda?'],['6.2.14','Quem registra bloqueios por manutenção de equipamento?'],['6.2.15','Quem registra bloqueios por ausência de profissional?']
      ]],
      ['6.3 Dados e confirmação da reserva', [
        ['6.3.1','Quais dados são obrigatórios para criar uma reserva?'],['6.3.2','O nome precisa ser completo?'],['6.3.3','É necessário coletar outro telefone além do WhatsApp utilizado?'],['6.3.4','Qual deve ser a ordem de coleta dos dados?'],['6.3.5','A IA deve enviar um resumo antes de registrar a reserva?'],['6.3.6','A cliente precisa aprovar esse resumo antes do registro?'],['6.3.7','Qual deve ser o texto de pré-agendamento registrado?'],['6.3.8','Qual deve ser o texto de confirmação definitiva?'],['6.3.9','Um contato pode reservar para outra pessoa?'],['6.3.10','Quais dados devem ser solicitados quando a reserva for para outra pessoa?'],['6.3.11','Um contato pode reservar para duas amigas no mesmo horário?'],['6.3.12','O sinal dessas duas pessoas deve ser tratado separadamente?'],['6.3.13','Uma cliente pode manter mais de uma reserva futura?'],['6.3.14','Como a IA deve confirmar se o pedido é uma nova reserva ou uma alteração da anterior?']
      ]],
      ['6.4 Pré-agendamento e vencimento', [
        ['6.4.1','O pré-agendamento segura a vaga antes do pagamento?'],['6.4.2','Por quanto tempo a vaga fica segurada?'],['6.4.3','A cliente deve receber aviso antes de esse prazo vencer?'],['6.4.4','Qual deve ser o texto desse aviso?'],['6.4.5','A vaga deve ser liberada automaticamente quando o prazo vencer?'],['6.4.6','Quem pode estender o prazo de pagamento?'],['6.4.7','Qual deve ser a conduta quando o pagamento chegar depois do prazo?'],['6.4.8','Qual deve ser a conduta quando o pagamento chegar depois de a vaga ser ocupada por outra cliente?']
      ]]
    ]
  },
  {
    title: '7. Pagamento e sinal',
    subsections: [
      ['7.1 Dados oficiais', [
        ['7.1.1','Qual é a chave Pix correta?'],['7.1.2','Qual é o tipo dessa chave Pix?'],['7.1.3','Qual nome exato aparece como favorecido?'],['7.1.4','O favorecido atual é Silvana Marques ou Yhago Gonçalves?'],['7.1.5','Qual é a instituição financeira?'],['7.1.6','Qual deve ser o texto completo enviado ao pedir Pix?'],['7.1.7','Qual deve ser a resposta quando a cliente questionar o nome do favorecido?']
      ]],
      ['7.2 Valor e meios de pagamento', [
        ['7.2.1','O sinal é sempre de 50%?'],['7.2.2','Quais serviços possuem sinal diferente de 50%?'],['7.2.3','Os adicionais entram no cálculo do sinal?'],['7.2.4','O deslocamento entra no cálculo do sinal?'],['7.2.5','Como deve ser arredondado um sinal que resulte em fração de centavo?'],['7.2.6','Em qual momento o restante deve ser pago?'],['7.2.7','O sinal pode ser pago em dinheiro no local?'],['7.2.8','O sinal pode ser pago por link de cartão?'],['7.2.9','Quem envia o link de cartão?'],['7.2.10','Quais meios de pagamento são aceitos para o restante?'],['7.2.11','Existe parcelamento?'],['7.2.12','Qual é o número máximo de parcelas?'],['7.2.13','Existe valor mínimo para parcelamento?'],['7.2.14','Existem juros ou taxas?'],['7.2.15','Quem informa o valor dessas taxas?'],['7.2.16','É permitido dividir um pagamento entre meios diferentes?'],['7.2.17','Há desconto para pagamento à vista?'],['7.2.18','Qual deve ser a resposta quando a cliente quiser pagar tudo somente no dia?']
      ]],
      ['7.3 Adicional de horário e data', [
        ['7.3.1','O adicional permanece em R$10?'],['7.3.2','Ele é cobrado somente em horários de início após as 17h?'],['7.3.3','Um atendimento iniciado exatamente às 17h fica sem adicional?'],['7.3.4','O adicional depende do horário de início ou do horário de término?'],['7.3.5','Todos os atendimentos aos domingos têm adicional?'],['7.3.6','Todos os atendimentos em feriados têm adicional?'],['7.3.7','Domingo após as 17h gera um ou dois adicionais?'],['7.3.8','Feriado que caia no domingo gera um ou dois adicionais?'],['7.3.9','O adicional é cobrado por pessoa?'],['7.3.10','Dois procedimentos na mesma visita geram um ou dois adicionais?'],['7.3.11','Quem define o calendário de feriados aplicável?']
      ]],
      ['7.4 Conferência de pagamento', [
        ['7.4.1','A cliente precisa escrever exatamente “SINAL PAGO”?'],['7.4.2','Mensagens como “já paguei” devem iniciar a conferência?'],['7.4.3','O envio de comprovante sozinho deve iniciar a conferência?'],['7.4.4','Qual deve ser a mensagem exata de recebimento do aviso de pagamento?'],['7.4.5','Em qual etapa do Kanban a conversa deve ficar durante a conferência?'],['7.4.6','A IA deve ficar totalmente em silêncio enquanto aguarda a conferência?'],['7.4.7','Quem pode confirmar o pagamento no sistema?'],['7.4.8','Qual deve ser a mensagem após a confirmação humana?'],['7.4.9','Qual deve ser a conduta quando o valor pago for menor que o sinal?'],['7.4.10','Qual deve ser a conduta quando o valor pago for maior que o sinal?'],['7.4.11','Qual deve ser a conduta quando não for possível identificar a reserva relacionada ao pagamento?'],['7.4.12','Qual deve ser a conduta quando a cliente enviar comprovante de outra pessoa?']
      ]]
    ]
  },
  {
    title: '8. Cancelamento, remarcação e atraso',
    subsections: [
      ['8.1 Cancelamento', [
        ['8.1.1','A IA pode cancelar uma reserva sem participação humana?'],['8.1.2','Qual deve ser a mensagem quando a cliente pedir cancelamento?'],['8.1.3','Qual é a regra geral sobre devolução do sinal?'],['8.1.4','Quais exceções à regra de devolução precisam de avaliação humana?'],['8.1.5','Quem decide sobre essas exceções?'],['8.1.6','Qual deve ser a resposta quando a cliente pedir reembolso?'],['8.1.7','A vaga deve ser liberada antes ou depois da análise humana do cancelamento?']
      ]],
      ['8.2 Remarcação', [
        ['8.2.1','A antecedência mínima normal é de 24 horas?'],['8.2.2','Em quais situações a exceção de oito horas pode ser aplicada?'],['8.2.3','Quem autoriza essa exceção?'],['8.2.4','Existe limite de remarcações para o mesmo sinal?'],['8.2.5','Existe prazo máximo para usar o sinal em uma nova data?'],['8.2.6','A cliente pode trocar de serviço durante a remarcação?'],['8.2.7','Como será tratada a diferença de preço nessa troca?'],['8.2.8','A IA pode concluir remarcações sozinha?'],['8.2.9','Qual deve ser a mensagem ao receber um pedido de remarcação?']
      ]],
      ['8.3 Atraso e ausência', [
        ['8.3.1','A tolerância de atraso é de cinco minutos?'],['8.3.2','A contagem começa no horário reservado ou no horário de chegada antecipada solicitado?'],['8.3.3','O cancelamento após a tolerância é automático?'],['8.3.4','Quem pode autorizar atendimento após a tolerância?'],['8.3.5','Qual deve ser a resposta para “vou chegar dez minutos atrasada”?'],['8.3.6','Qual é a regra para quem não comparece?'],['8.3.7','Qual deve ser a resposta para quem faltou e quer reservar novamente?']
      ]],
      ['8.4 Impedimentos da clínica', [
        ['8.4.1','O que deve acontecer com o sinal quando a clínica cancelar?'],['8.4.2','Qual deve ser a mensagem quando a profissional atrasar?'],['8.4.3','Qual deve ser a conduta quando o equipamento apresentar problema?'],['8.4.4','Quem comunica o cancelamento causado pela clínica?']
      ]]
    ]
  },
  {
    title: '9. Preparo, restrições e segurança',
    subsections: [
      ['9.1 Regras gerais', [
        ['9.1.1','A chegada com 15 minutos de antecedência vale para todos os serviços?'],['9.1.2','Quais serviços possuem outra antecedência de chegada?'],['9.1.3','É proibido levar crianças?'],['9.1.4','É proibido levar acompanhantes?'],['9.1.5','É proibido levar bicicletas?'],['9.1.6','Há exceção de acompanhante por necessidade de assistência?'],['9.1.7','Quem autoriza exceções de acompanhante?'],['9.1.8','Qual deve ser a resposta quando a cliente chegar sem um item obrigatório?'],['9.1.9','Qual deve ser a resposta quando a cliente não tiver seguido o preparo?'],['9.1.10','Qual deve ser a resposta quando a cliente reclamar que a fita descolou?']
      ]],
      ['9.2 Públicos atendidos', [
        ['9.2.1','A clínica atende homens em procedimentos próprios?'],['9.2.2','Homens podem agendar para outra pessoa?'],['9.2.3','A clínica atende menores de idade?'],['9.2.4','Qual é a idade mínima para cada serviço?'],['9.2.5','É obrigatória a presença de responsável quando houver atendimento de menor?'],['9.2.6','Quais documentos são exigidos nessa situação?'],['9.2.7','Qual deve ser a resposta quando uma gestante perguntar se pode realizar o serviço?'],['9.2.8','Qual deve ser a resposta quando uma lactante perguntar se pode realizar o serviço?'],['9.2.9','Quem é o responsável técnico que aprova essas orientações?']
      ]],
      ['9.3 Dúvidas individuais de saúde', [
        ['9.3.1','Qual deve ser a resposta quando a cliente relatar alergia?'],['9.3.2','Qual deve ser a resposta quando a cliente relatar pele sensível?'],['9.3.3','Qual deve ser a resposta quando a cliente informar que usa medicamento?'],['9.3.4','Qual deve ser a resposta quando a cliente relatar procedimento recente na pele?'],['9.3.5','Qual deve ser a resposta quando a cliente disser que se depilou no mesmo dia?'],['9.3.6','A IA pode solicitar foto da pele?'],['9.3.7','Quem deve avaliar uma foto da pele recebida?'],['9.3.8','Quais informações a IA pode coletar antes de encaminhar uma dúvida de segurança?'],['9.3.9','Quais assuntos de saúde a IA não deve tentar responder?']
      ]],
      ['9.4 Queixa após procedimento', [
        ['9.4.1','Qual deve ser a mensagem ao receber relato de dor?'],['9.4.2','Qual deve ser a mensagem ao receber relato de queimadura?'],['9.4.3','Qual deve ser a mensagem ao receber relato de irritação ou reação?'],['9.4.4','Quem recebe esses relatos com prioridade?'],['9.4.5','Qual é o procedimento de encaminhamento fora do horário da equipe?'],['9.4.6','Existe um texto de segurança aprovado pelo responsável técnico para essas situações?'],['9.4.7','Qual é esse texto exato?']
      ]]
    ]
  },
  {
    title: '10. Resultados e expectativas',
    subsections: [
      ['10.1 Explicações autorizadas', [
        ['10.1.1','Qual deve ser a resposta para “vou sair marcada na primeira sessão”?'],['10.1.2','Qual deve ser a resposta para “quantas sessões eu preciso fazer”?'],['10.1.3','Qual deve ser a resposta para “quanto tempo a marquinha dura”?'],['10.1.4','Qual deve ser a resposta para “qual bronze fica mais forte”?'],['10.1.5','Qual deve ser a resposta para “qual bronze dura mais”?'],['10.1.6','Qual deve ser a resposta para “o bronze pode manchar”?'],['10.1.7','Qual deve ser a resposta para “não gostei do resultado”?'],['10.1.8','Qual deve ser a resposta para “meu bronze saiu rápido”?'],['10.1.9','A clínica oferece retorno para avaliação do resultado?'],['10.1.10','Quem decide se haverá retoque?'],['10.1.11','Existe cobrança de retoque?'],['10.1.12','Quais afirmações sobre resultados são proibidas nas respostas?']
      ]]
    ]
  },
  {
    title: '11. Textos padrão e estilo',
    subsections: [
      ['11.1 Linguagem', [
        ['11.1.1','Quais palavras descrevem o tom desejado da atendente?'],['11.1.2','A IA pode chamar a cliente de “querida”?'],['11.1.3','A IA pode chamar a cliente de “amiga” ou “miga”?'],['11.1.4','Quais formas de tratamento são proibidas?'],['11.1.5','A IA pode usar emojis?'],['11.1.6','Quais emojis estão aprovados?'],['11.1.7','Em quais situações não deve usar emojis?'],['11.1.8','As respostas fora dos textos padrão devem ser curtas?'],['11.1.9','Existe limite desejado de perguntas por mensagem?']
      ]],
      ['11.2 Uso do NB.docx', []],
      ['11.3 Apresentação geral', [
        ['11.3.1','Qual texto deve ser enviado quando a cliente perguntar “quais serviços vocês têm”?'],['11.3.2','Qual texto deve ser enviado quando a cliente pedir “todos os preços”?'],['11.3.3','Qual texto deve ser enviado quando a cliente perguntar “qual a diferença entre eles”?'],['11.3.4','Qual texto deve ser enviado quando a cliente disser “só quero saber o valor”?'],['11.3.5','Qual texto deve ser enviado quando a cliente disser “é minha primeira vez”?'],['11.3.6','Qual deve ser a resposta quando a cliente pedir uma recomendação de serviço?']
      ]]
    ]
  },
  {
    title: '12. Respostas para situações frequentes',
    subsections: [
      ['12.1 Preço e negociação', [
        ['12.1.1','Como responder a “está caro”?'],['12.1.2','Como responder a “faz um desconto”?'],['12.1.3','Como responder a “a outra clínica cobra menos”?'],['12.1.4','Como responder a “vou levar uma amiga, tem desconto”?'],['12.1.5','Como responder a “não quero pagar sinal”?'],['12.1.6','Como responder a “posso pagar depois”?'],['12.1.7','Como responder a “quero meu dinheiro de volta”?']
      ]],
      ['12.2 Agendamento e continuidade', [
        ['12.2.1','Qual deve ser a resposta quando a cliente escolher “15h” entre horários oferecidos?'],['12.2.2','Qual deve ser a resposta quando ela disser “já falei o horário”?'],['12.2.3','Como confirmar uma data quando a cliente disser apenas “sexta”, sem deixar claro qual semana?'],['12.2.4','Como responder a “tem algum horário depois das 18h”?'],['12.2.5','Como responder a “quero marcar para minha amiga”?'],['12.2.6','Como responder a “já tenho uma reserva, quero fazer outra”?'],['12.2.7','Como responder a “quero trocar só o serviço, no mesmo horário”?'],['12.2.8','Como responder a “vou pensar e depois volto”?'],['12.2.9','Como retomar a coleta depois de responder a uma dúvida no meio do agendamento?']
      ]],
      ['12.3 Áudios e falhas de entendimento', [
        ['12.3.1','A IA deve interpretar áudios enviados pela cliente?'],['12.3.2','Qual deve ser a mensagem quando o áudio não puder ser entendido?'],['12.3.3','Quantas tentativas de esclarecimento são permitidas antes de chamar humano?'],['12.3.4','Qual deve ser a mensagem quando uma imagem não puder ser interpretada?'],['12.3.5','Qual deve ser a mensagem quando a cliente disser “você não entendeu”?'],['12.3.6','Qual deve ser a mensagem quando a cliente demonstrar irritação persistente?'],['12.3.7','Qual deve ser a mensagem quando o sistema não conseguir consultar a agenda?'],['12.3.8','Qual deve ser a mensagem quando faltar uma informação oficial para responder?']
      ]]
    ]
  },
  {
    title: '13. Encaminhamento humano e Kanban',
    subsections: [
      ['13.1 Regras gerais', [
        ['13.1.1','Quais situações exigem atendimento humano obrigatório?'],['13.1.2','Qual deve ser a mensagem ao receber um pedido explícito de atendente?'],['13.1.3','A IA deve parar de responder imediatamente após encaminhar?'],['13.1.4','Deve enviar outro aviso se a cliente escrever enquanto aguarda?'],['13.1.5','Se houver outro aviso, qual deve ser seu texto?'],['13.1.6','Existe prazo mínimo entre esses avisos?'],['13.1.7','Quem pode devolver uma conversa do humano para a IA?'],['13.1.8','Qual deve ser a primeira mensagem após essa devolução?']
      ]],
      ['13.2 Ficha de cada tipo de encaminhamento', []]
    ]
  },
  {
    title: '14. Encerramento e novas conversas',
    subsections: [
      ['14.1 Encerramento', [
        ['14.1.1','Quem pode encerrar um atendimento?'],['14.1.2','Quais situações permitem encerramento automático?'],['14.1.3','Existe prazo de inatividade para encerrar automaticamente?'],['14.1.4','Qual é esse prazo?'],['14.1.5','Deve ser enviada uma mensagem antes do encerramento?'],['14.1.6','Qual deve ser essa mensagem?'],['14.1.7','Encerrar a conversa deve preservar todas as reservas existentes?'],['14.1.8','Uma mensagem nova após o encerramento deve iniciar uma conversa sem reutilizar preferências antigas?']
      ]],
      ['14.2 Referência a atendimento anterior', [
        ['14.2.1','Quais dados anteriores podem ser recuperados quando a cliente pedir explicitamente?'],['14.2.2','Qual deve ser a resposta quando não houver registro suficiente para identificar o atendimento anterior?'],['14.2.3','Qual deve ser a resposta quando forem encontradas várias reservas possíveis?'],['14.2.4','Qual deve ser a resposta quando a cliente mencionar atendimento feito por outro número?'],['14.2.5','Qual deve ser a resposta quando alguém pedir informações sobre a reserva de outra pessoa?'],['14.2.6','Quem pode verificar a identidade nesses casos?']
      ]]
    ]
  },
  {
    title: '15. Contatos, lembretes e privacidade',
    subsections: [
      ['15.1 Quem pode receber atendimento automático', [
        ['15.1.1','A IA deve atender todos os números que entrarem em contato?'],['15.1.2','Existem números que devem ser atendidos somente por humanos?'],['15.1.3','Quem fornecerá essa lista de números?'],['15.1.4','Quem atualizará essa lista?'],['15.1.5','Clientes antigas devem receber o mesmo fluxo de clientes novas?'],['15.1.6','Funcionários e fornecedores devem ficar fora do atendimento automático?']
      ]],
      ['15.2 Mensagens de acompanhamento', [
        ['15.2.1','A clínica deseja enviar lembretes de agendamento?'],['15.2.2','Com qual antecedência cada lembrete deve ser enviado?'],['15.2.3','Qual deve ser o texto de cada lembrete?'],['15.2.4','A clínica deseja retomar conversas abandonadas?'],['15.2.5','Quanto tempo deve esperar antes da primeira retomada?'],['15.2.6','Qual é o número máximo de retomadas por atendimento?'],['15.2.7','Em quais horários essas mensagens podem ser enviadas?'],['15.2.8','Como será registrada a autorização para receber essas mensagens?'],['15.2.9','Qual deve ser a resposta quando a cliente pedir para não receber mais mensagens?'],['15.2.10','Quem registra esse pedido de interrupção?']
      ]],
      ['15.3 Dados pessoais', [
        ['15.3.1','Quais dados a IA está autorizada a solicitar?'],['15.3.2','Quais dados a IA não deve solicitar?'],['15.3.3','Quem pode acessar os dados das clientes?'],['15.3.4','Qual é a regra definida pela clínica para guardar comprovantes?'],['15.3.5','Qual é a regra definida pela clínica para guardar fotos enviadas pelas clientes?'],['15.3.6','Qual é a regra definida pela clínica para guardar relatos sobre saúde?'],['15.3.7','Qual texto de privacidade deve ser disponibilizado às clientes?'],['15.3.8','Quem recebe pedidos de correção de dados?'],['15.3.9','Quem recebe pedidos de exclusão de dados?']
      ]]
    ]
  },
  {
    title: '16. Exemplos reais e aprovação final',
    subsections: [
      ['16.1 Ficha de revisão de conversa', []],
      ['16.2 Controle das informações', [
        ['16.2.1','Quem aprovará os textos finais?'],['16.2.2','Quem aprovará os preços finais?'],['16.2.3','Quem aprovará as regras de agenda?'],['16.2.4','Quem aprovará as orientações de preparo e segurança?'],['16.2.5','Quem comunicará futuras alterações do negócio?'],['16.2.6','Por qual canal essas alterações serão comunicadas?'],['16.2.7','Qual documento deve prevalecer quando houver informações divergentes?'],['16.2.8','Quem informará a data em que cada mudança entra em vigor?']
      ]],
      ['16.3 Validação antes da ativação', [
        ['16.3.1','Quem fará os testes no WhatsApp antes da ativação?'],['16.3.2','A apresentação de cada serviço foi aprovada?'],['16.3.3','A interpretação de áudio foi aprovada?'],['16.3.4','O fluxo de reserva completa foi aprovado?'],['16.3.5','O comportamento quando não houver vaga foi aprovado?'],['16.3.6','O fluxo de sinal e conferência humana foi aprovado?'],['16.3.7','O fluxo de cancelamento foi aprovado?'],['16.3.8','O fluxo de reclamação foi aprovado?'],['16.3.9','O silêncio da IA durante atendimento humano foi aprovado?'],['16.3.10','O início de uma nova conversa após encerramento foi aprovado?'],['16.3.11','Quem dará a autorização final para ativação?']
      ]]
    ]
  },
];

const serviceTemplate = [
  ['4.2.1','Qual é o nome oficial deste serviço?'],['4.2.2','Qual é a descrição aprovada deste serviço?'],['4.2.3','Quais etapas fazem parte do procedimento?'],['4.2.4','Quais produtos estão incluídos?'],['4.2.5','Quais itens são cobrados separadamente?'],['4.2.6','Qual é o preço normal?'],['4.2.7','Qual é a duração do procedimento em minutos?'],['4.2.8','Quanto tempo a cliente deve reservar para permanecer no local?'],['4.2.9','Quantos minutos este serviço deve ocupar na agenda?'],['4.2.10','Quantos minutos de preparo precisam ocorrer antes do procedimento?'],['4.2.11','Quantos minutos de limpeza ou organização são necessários depois do procedimento?'],['4.2.12','O bloco de agenda informado já inclui esse preparo?'],['4.2.13','O bloco de agenda informado já inclui essa limpeza?'],['4.2.14','Qual equipamento é necessário?'],['4.2.15','Qual sala é necessária?'],['4.2.16','Quantos profissionais são necessários durante o atendimento?'],['4.2.17','Quantas clientes podem realizar este serviço ao mesmo tempo?'],['4.2.18','Quais outros serviços ficam impedidos enquanto este atendimento ocorre?'],['4.2.19','Quais profissionais podem executar este serviço?'],['4.2.20','Em quais dias este serviço está disponível?'],['4.2.21','Quais horários de início são permitidos para este serviço?'],['4.2.22','Qual é a antecedência de chegada exigida?'],['4.2.23','Qual preparo deve ser feito antes de sair de casa?'],['4.2.24','Quais itens a cliente deve levar?'],['4.2.25','Quais cuidados devem ser seguidos depois do procedimento?'],['4.2.26','Por quanto tempo cada cuidado deve ser seguido?'],['4.2.27','Quais dúvidas sobre este serviço exigem avaliação humana?'],['4.2.28','Qual resultado pode ser descrito pela IA?'],['4.2.29','Quais promessas a IA não pode fazer sobre este serviço?'],['4.2.30','Qual é o texto padrão completo de apresentação deste serviço?'],['4.2.31','Qual é o texto padrão completo de preparo deste serviço?'],['4.2.32','Qual é o texto padrão completo de cuidados posteriores deste serviço?']
];

const nbTemplate = [
  ['11.2.1','Qual é o nome do bloco que está sendo aprovado?'],['11.2.2','O texto desse bloco está correto integralmente?'],['11.2.3','Quais trechos precisam ser substituídos?'],['11.2.4','Qual é o texto final aprovado desse bloco?'],['11.2.5','Quais perguntas da cliente devem acionar esse bloco?'],['11.2.6','Em quais situações esse bloco não deve ser enviado?'],['11.2.7','O bloco pode ser resumido?'],['11.2.8','Os emojis devem ser preservados exatamente?'],['11.2.9','As quebras de linha devem ser preservadas exatamente?'],['11.2.10','O bloco pode ser reenviado na mesma conversa?'],['11.2.11','Depois do bloco, a IA deve fazer alguma pergunta?'],['11.2.12','Qual deve ser essa pergunta?']
];
const nbBlocks = ['Banhos de Lua/Detox','Informações Importantes','Potência Bronze','Processo Gradativo','Bronzes','Jato','Informações de Agendamento'];

const routingTemplate = [
  ['13.2.1','Qual é o motivo deste encaminhamento?'],['13.2.2','Qual mensagem exata deve ser enviada à cliente?'],['13.2.3','Qual pessoa ou equipe deve receber o caso?'],['13.2.4','Em qual coluna do Kanban o cartão deve ficar?'],['13.2.5','Qual é a prioridade do caso?'],['13.2.6','Qual prazo de resposta pode ser divulgado?'],['13.2.7','Quais dados devem acompanhar o encaminhamento?'],['13.2.8','A IA deve permanecer totalmente em silêncio nessa etapa?']
];
const routingMotives = ['Pagamento','Alteração','Cancelamento','Reclamação','Segurança','Negociação','Informação ausente','Pedido de atendente'];

const reviewTemplate = [
  ['16.1.1','Qual foi a mensagem da cliente?'],['16.1.2','Qual contexto anterior era necessário para entendê-la?'],['16.1.3','Qual foi a resposta enviada pela IA?'],['16.1.4','O que estava correto nessa resposta?'],['16.1.5','O que estava incorreto nessa resposta?'],['16.1.6','Qual seria a resposta exata desejada?'],['16.1.7','A IA deveria continuar atendendo ou encaminhar para humano?'],['16.1.8','Qual ação deveria acontecer na agenda ou no Kanban?']
];

const dependencyRules = {
  '1.1.5': { parent:'1.1.4', show:'sim' },
  '3.1.10': { parent:'3.1.9', show:'sim' },
  '3.1.13': { parent:'3.1.12', show:'sim' },
  '3.2.11': { parent:'3.2.10', show:'sim' },
  '3.2.12': { parent:'3.2.10', show:'sim' },
  '5.4.8': { parent:'5.4.7', show:'sim' },
  '5.4.9': { parent:'5.4.7', show:'sim' },
  '5.4.10': { parent:'5.4.7', show:'sim' },
  '5.4.11': { parent:'5.4.7', show:'sim' },
  '5.4.12': { parent:'5.4.7', show:'sim' },
  '5.5.14': { parent:'5.5.13', show:'sim' },
  '5.5.15': { parent:'5.5.13', show:'sim' },
  '5.5.17': { parent:'5.5.16', show:'sim' },
  '5.6.4': { parent:'5.6.3', show:'sim' },
  '5.7.2': { parent:'5.7.1', show:'um único' },
  '5.7.3': { parent:'5.7.1', show:'três versões' },
  '5.7.4': { parent:'5.7.1', show:'três versões' },
  '5.7.5': { parent:'5.7.1', show:'três versões' },
  '5.9.2': { parent:'5.9.1', show:'não' },
  '5.10.2': { parent:'5.10.1', show:'sim' },
  '5.10.3': { parent:'5.10.1', show:'sim' },
  '5.10.4': { parent:'5.10.1', show:'sim' },
  '5.10.5': { parent:'5.10.1', show:'sim' },
  '5.10.6': { parent:'5.10.1', show:'sim' },
  '5.10.7': { parent:'5.10.1', show:'sim' },
  '5.10.8': { parent:'5.10.1', show:'sim' },
  '5.10.10': { parent:'5.10.9', show:'sim' },
  '6.2.6': { parent:'6.2.5', show:'sim' },
  '6.2.8': { parent:'6.2.7', show:'sim' },
  '6.3.10': { parent:'6.3.9', show:'sim' },
  '6.3.12': { parent:'6.3.11', show:'sim' },
  '6.4.2': { parent:'6.4.1', show:'sim' },
  '6.4.3': { parent:'6.4.1', show:'sim' },
  '6.4.4': { parent:'6.4.3', show:'sim' },
  '6.4.5': { parent:'6.4.1', show:'sim' },
  '6.4.6': { parent:'6.4.1', show:'sim' },
  '6.4.7': { parent:'6.4.1', show:'sim' },
  '6.4.8': { parent:'6.4.1', show:'sim' },
  '7.2.2': { parent:'7.2.1', show:'não' },
  '7.2.9': { parent:'7.2.8', show:'sim' },
  '7.2.12': { parent:'7.2.11', show:'sim' },
  '7.2.13': { parent:'7.2.11', show:'sim' },
  '7.2.14': { parent:'7.2.11', show:'sim' },
  '7.2.15': { parent:'7.2.14', show:'sim' },
  '9.1.7': { parent:'9.1.6', show:'sim' },
  '9.2.4': { parent:'9.2.3', show:'sim' },
  '9.2.5': { parent:'9.2.3', show:'sim' },
  '9.2.6': { parent:'9.2.3', show:'sim' },
  '9.3.7': { parent:'9.3.6', show:'sim' },
  '9.4.7': { parent:'9.4.6', show:'sim' },
  '10.1.10': { parent:'10.1.9', show:'sim' },
  '10.1.11': { parent:'10.1.9', show:'sim' },
  '11.1.6': { parent:'11.1.5', show:'sim' },
  '11.1.7': { parent:'11.1.5', show:'sim' },
  '13.1.5': { parent:'13.1.4', show:'sim' },
  '14.1.4': { parent:'14.1.3', show:'sim' },
  '14.1.6': { parent:'14.1.5', show:'sim' },
  '15.1.3': { parent:'15.1.2', show:'sim' },
  '15.1.4': { parent:'15.1.2', show:'sim' },
  '15.2.2': { parent:'15.2.1', show:'sim' },
  '15.2.3': { parent:'15.2.1', show:'sim' },
  '15.2.5': { parent:'15.2.4', show:'sim' },
  '15.2.6': { parent:'15.2.4', show:'sim' },
  '15.2.7': { parent:'15.2.4', show:'sim' },
  '15.2.8': { parent:'15.2.4', show:'sim' },
};

const forcedSelects = new Set(Object.values(dependencyRules).map(x=>x.parent));
const customOptions = {
  '5.7.1': ['','Um único','Três versões','Ainda não definido']
};
forcedSelects.add('5.7.1');

const binaryStarts = [
  'A clínica ','A IA ','A cliente ','A atendente ','A apresentação ','A expressão ','A escolha ','O atendimento ','O procedimento ','O preço correto ','O bloco ','O sinal ','O adicional ','O envio ','O cancelamento ','O favorecido ','O nome precisa ','Os horários ','Essa grade ','Existe ','Existem ','Há ','É ','São ','Todos ','Todas ','Ele é ','Um contato ','Uma cliente ','Homens podem ','Detox Corporal ','Potência Bronze ','A regra ','A tabela ','O pacote ','Descontos ','A agenda ','A sala ','A aplicação ','Frente e costas ','A limpeza corporal ','A chegada ','Clientes antigas ','Funcionários e fornecedores ','Deve ser enviada ','Encerrar a conversa '
];
function isBinary(text, number){
  if(forcedSelects.has(number)) return true;
  return binaryStarts.some(p=>text.startsWith(p));
}

const longAnswerHints = ['texto','mensagem','descrição','orientação','resposta','conduta','regra','etapas','cuidados','informações','dados','situações','diferença','quais serviços','quais profissionais','quais assuntos','quais afirmações','o que deve','como responder','como confirmar','como retomar'];
function isLong(text){ return longAnswerHints.some(x=>text.toLowerCase().includes(x)); }

const state = loadState();
function loadState(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {answers:{},repeaters:{services:[],reviews:[]},meta:{},final:{}}; }
  catch { return {answers:{},repeaters:{services:[],reviews:[]},meta:{},final:{}}; }
}
function saveState(show=false){
  collectFixedFields();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if(show) setStatus('Respostas salvas neste navegador.');
  updateProgress();
}
function normalize(v=''){ return v.toString().trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,''); }
function matchesDependency(rule){
  const val = state.answers[rule.parent] || '';
  return normalize(val) === normalize(rule.show);
}

function createAnswerControl(number,text,value=''){
  let el;
  if(customOptions[number]){
    el=document.createElement('select');
    customOptions[number].forEach(opt=>{ const o=document.createElement('option'); o.value=opt; o.textContent=opt||'Selecione'; el.appendChild(o); });
  } else if(isBinary(text,number)){
    el=document.createElement('select');
    ['', 'Sim','Não','Ainda não definido','Não se aplica','Encaminhar para a equipe'].forEach(opt=>{ const o=document.createElement('option'); o.value=opt; o.textContent=opt||'Selecione'; el.appendChild(o); });
  } else if(isLong(text)){
    el=document.createElement('textarea'); el.rows=3;
  } else {
    el=document.createElement('input'); el.type='text';
  }
  el.value=value||'';
  el.dataset.qid=number;
  el.addEventListener('input',()=>{ state.answers[number]=el.value; saveState(); applyDependencies(); });
  el.addEventListener('change',()=>{ state.answers[number]=el.value; saveState(); applyDependencies(); });
  return el;
}

function render(){
  const root=document.getElementById('questionnaire');
  const nav=document.getElementById('sectionNav');
  root.innerHTML=''; nav.innerHTML='';
  normalSections.forEach((section, idx)=>{
    const sec=document.createElement('section'); sec.className='section-card'; sec.id=`sec-${idx+1}`;
    const h2=document.createElement('h2'); h2.textContent=section.title; sec.appendChild(h2);
    const a=document.createElement('a'); a.href=`#${sec.id}`; a.textContent=section.title.replace(/^\d+\.\s*/, ''); nav.appendChild(a);
    section.subsections.forEach(([subTitle, questions])=>{
      const sub=document.createElement('div'); sub.className='subsection';
      const h3=document.createElement('h3'); h3.textContent=subTitle; sub.appendChild(h3);
      if(subTitle.startsWith('4.2')) renderServiceRepeater(sub);
      else if(subTitle.startsWith('11.2')) renderNbBlocks(sub);
      else if(subTitle.startsWith('13.2')) renderRoutingBlocks(sub);
      else if(subTitle.startsWith('16.1')) renderReviewRepeater(sub);
      else questions.forEach(q=>sub.appendChild(renderQuestion(q[0],q[1])));
      sec.appendChild(sub);
    });
    root.appendChild(sec);
  });
  hydrateFixedFields();
  applyDependencies();
  updateProgress();
}

function renderQuestion(number,text){
  const tpl=document.getElementById('questionTemplate').content.cloneNode(true);
  const card=tpl.querySelector('.question-card'); card.dataset.number=number;
  const label=tpl.querySelector('.question-label');
  const n=document.createElement('span'); n.className='question-number'; n.textContent=number;
  label.appendChild(n); label.appendChild(document.createTextNode(text));
  tpl.querySelector('.answer-slot').appendChild(createAnswerControl(number,text,state.answers[number]||''));
  if(dependencyRules[number]){ const note=document.createElement('p'); note.className='dependency-note'; note.textContent='Esta pergunta aparece somente quando a resposta anterior aplicável exigir.'; card.appendChild(note); }
  return tpl;
}

function renderServiceRepeater(container){
  const desc=document.createElement('p'); desc.className='desc'; desc.textContent='Adicione uma ficha para cada serviço, versão, combinação ou adicional. Não agrupe modalidades com preços ou durações diferentes.'; container.appendChild(desc);
  const wrap=document.createElement('div'); wrap.className='repeater'; wrap.id='servicesRepeater'; container.appendChild(wrap);
  if(!state.repeaters.services) state.repeaters.services=[];
  if(state.repeaters.services.length===0) state.repeaters.services.push({});
  const draw=()=>{
    wrap.innerHTML='';
    state.repeaters.services.forEach((item,i)=>wrap.appendChild(renderRepeatItem('Serviço',serviceTemplate,item,i,'services',draw)));
    const add=document.createElement('button'); add.type='button'; add.className='add-btn'; add.textContent='+ Adicionar outro serviço'; add.onclick=()=>{state.repeaters.services.push({}); saveState(); draw();}; wrap.appendChild(add);
  }; draw();
}

function renderNbBlocks(container){
  const desc=document.createElement('p'); desc.className='desc'; desc.textContent='Preencha a ficha abaixo para cada bloco do NB.docx.'; container.appendChild(desc);
  if(!state.repeaters.nb) state.repeaters.nb={};
  nbBlocks.forEach((block,i)=>{
    if(!state.repeaters.nb[block]) state.repeaters.nb[block]={ '11.2.1': block };
    const item=renderRepeatItem(block,nbTemplate,state.repeaters.nb[block],i,'nbFixed',null,false,block);
    container.appendChild(item);
  });
}

function renderRoutingBlocks(container){
  const desc=document.createElement('p'); desc.className='desc'; desc.textContent='Uma ficha para cada motivo de encaminhamento obrigatório.'; container.appendChild(desc);
  if(!state.repeaters.routing) state.repeaters.routing={};
  routingMotives.forEach((m,i)=>{
    if(!state.repeaters.routing[m]) state.repeaters.routing[m]={ '13.2.1': m };
    container.appendChild(renderRepeatItem(m,routingTemplate,state.repeaters.routing[m],i,'routingFixed',null,false,m));
  });
}

function renderReviewRepeater(container){
  const desc=document.createElement('p'); desc.className='desc'; desc.textContent='Adicione exemplos de acerto, erro ou situações difíceis. Evite dados pessoais desnecessários.'; container.appendChild(desc);
  const wrap=document.createElement('div'); wrap.className='repeater';
  if(!state.repeaters.reviews) state.repeaters.reviews=[];
  if(state.repeaters.reviews.length===0) state.repeaters.reviews.push({});
  const draw=()=>{
    wrap.innerHTML='';
    state.repeaters.reviews.forEach((item,i)=>wrap.appendChild(renderRepeatItem('Exemplo',reviewTemplate,item,i,'reviews',draw)));
    const add=document.createElement('button'); add.type='button'; add.className='add-btn'; add.textContent='+ Adicionar outro exemplo'; add.onclick=()=>{state.repeaters.reviews.push({}); saveState(); draw();}; wrap.appendChild(add);
  }; draw(); container.appendChild(wrap);
}

function renderRepeatItem(title,template,item,index,kind,redraw,removable=true,fixedKey=null){
  const box=document.createElement('div'); box.className='repeat-item';
  const head=document.createElement('div'); head.className='repeat-head';
  const strong=document.createElement('strong'); strong.textContent=fixedKey?title:`${title} ${index+1}`; head.appendChild(strong);
  if(removable){
    const rm=document.createElement('button'); rm.type='button'; rm.className='mini-btn remove-btn'; rm.textContent='Remover';
    rm.onclick=()=>{ state.repeaters[kind].splice(index,1); saveState(); redraw(); }; head.appendChild(rm);
  }
  box.appendChild(head);
  template.forEach(([num,text])=>{
    const row=document.createElement('div'); row.className='question-card';
    const label=document.createElement('label'); label.className='question-label';
    const n=document.createElement('span'); n.className='question-number'; n.textContent=num;
    label.appendChild(n); label.appendChild(document.createTextNode(text)); row.appendChild(label);
    let control;
    const localId=`${kind}:${fixedKey||index}:${num}`;
    if(isBinary(text,num)){
      control=document.createElement('select');
      ['', 'Sim','Não','Ainda não definido','Não se aplica','Encaminhar para a equipe'].forEach(opt=>{const o=document.createElement('option');o.value=opt;o.textContent=opt||'Selecione';control.appendChild(o);});
    } else if(isLong(text)){ control=document.createElement('textarea'); control.rows=3; }
    else { control=document.createElement('input'); control.type='text'; }
    control.value=item[num]||'';
    if((kind==='nbFixed'&&num==='11.2.1')||(kind==='routingFixed'&&num==='13.2.1')){control.value=fixedKey; control.readOnly=true; control.disabled=true;}
    control.dataset.repeatId=localId;
    control.addEventListener('input',()=>{item[num]=control.value; saveState();});
    control.addEventListener('change',()=>{item[num]=control.value; saveState();});
    row.appendChild(control); box.appendChild(row);
  });
  return box;
}

function applyDependencies(){
  document.querySelectorAll('.question-card[data-number]').forEach(card=>{
    const num=card.dataset.number;
    const rule=dependencyRules[num];
    if(!rule){card.classList.remove('hidden-question'); return;}
    const visible=matchesDependency(rule);
    card.classList.toggle('hidden-question',!visible);
    if(!visible && !state.answers[num]){
      // Mantém sem resposta no estado; o PDF marcará como não aplicável por regra condicional.
    }
  });
}

function collectFixedFields(){
  state.meta={
    nome: document.getElementById('meta_nome')?.value||'',
    funcao: document.getElementById('meta_funcao')?.value||'',
    data: document.getElementById('meta_data')?.value||'',
    aprovador: document.getElementById('meta_aprovador')?.value||''
  };
  state.final={
    pendencias: document.getElementById('final_pendencias')?.value||'',
    responsavel: document.getElementById('final_responsavel')?.value||'',
    data: document.getElementById('final_data')?.value||''
  };
}
function hydrateFixedFields(){
  document.getElementById('meta_nome').value=state.meta?.nome||'';
  document.getElementById('meta_funcao').value=state.meta?.funcao||'';
  document.getElementById('meta_data').value=state.meta?.data||new Date().toISOString().slice(0,10);
  document.getElementById('meta_aprovador').value=state.meta?.aprovador||'';
  document.getElementById('final_pendencias').value=state.final?.pendencias||'';
  document.getElementById('final_responsavel').value=state.final?.responsavel||'';
  document.getElementById('final_data').value=state.final?.data||'';
  ['meta_nome','meta_funcao','meta_data','meta_aprovador','final_pendencias','final_responsavel','final_data'].forEach(id=>document.getElementById(id).addEventListener('input',()=>saveState()));
}
function setStatus(msg){ const s=document.getElementById('status'); s.textContent=msg; clearTimeout(setStatus.t); setStatus.t=setTimeout(()=>s.textContent='',3500); }

function updateProgress(){
  const cards=[...document.querySelectorAll('.question-card[data-number]:not(.hidden-question)')];
  const answered=cards.filter(c=>{const el=c.querySelector('[data-qid]');return el&&el.value.trim();}).length;
  const repeatControls=[...document.querySelectorAll('[data-repeat-id]')].filter(e=>!e.disabled);
  const repeatAnswered=repeatControls.filter(e=>e.value.trim()).length;
  const total=cards.length+repeatControls.length;
  const count=answered+repeatAnswered;
  const pct=total?Math.round((count/total)*100):0;
  document.getElementById('progressBar').style.width=pct+'%';
  document.getElementById('progressText').textContent=`${pct}% respondido`;
}

function visibleAnswer(number){
  const rule=dependencyRules[number];
  if(rule && !matchesDependency(rule)) return 'Não se aplica — pergunta ocultada por resposta anterior.';
  return state.answers[number]?.trim() || 'Sem resposta';
}

function addPdfLine(doc,text,yRef,opts={}){
  const margin=15, width=180;
  const fontSize=opts.size||10;
  doc.setFont('helvetica',opts.bold?'bold':'normal');
  doc.setFontSize(fontSize);
  const lines=doc.splitTextToSize(text,width);
  const lineHeight=fontSize*0.45;
  const needed=lines.length*lineHeight+2;
  if(yRef.y+needed>282){doc.addPage(); yRef.y=16;}
  doc.text(lines,margin,yRef.y);
  yRef.y+=needed;
}
function addPdfQA(doc,yRef,num,text,answer){
  addPdfLine(doc,`${num} ${text}`,yRef,{bold:true,size:9.5});
  addPdfLine(doc,`Resposta: ${answer||'Sem resposta'}`,yRef,{size:9.5});
  yRef.y+=1.5;
}

function generatePdf(){
  saveState();
  if(!window.jspdf?.jsPDF){ setStatus('Não foi possível carregar o gerador de PDF. Use “Imprimir / salvar como PDF”.'); return; }
  const { jsPDF }=window.jspdf;
  const doc=new jsPDF({unit:'mm',format:'a4'});
  const y={y:18};
  addPdfLine(doc,'Questionário de Atendimento — Clínica da Núbia',y,{bold:true,size:16});
  addPdfLine(doc,'Levantamento de regras para configuração do atendimento automatizado',y,{size:10}); y.y+=3;
  addPdfLine(doc,`Nome de quem respondeu: ${state.meta?.nome||'Sem resposta'}`,y,{size:9.5});
  addPdfLine(doc,`Função na clínica: ${state.meta?.funcao||'Sem resposta'}`,y,{size:9.5});
  addPdfLine(doc,`Data das respostas: ${state.meta?.data||'Sem resposta'}`,y,{size:9.5});
  addPdfLine(doc,`Aprovador das regras finais: ${state.meta?.aprovador||'Sem resposta'}`,y,{size:9.5}); y.y+=4;

  normalSections.forEach(section=>{
    addPdfLine(doc,section.title,y,{bold:true,size:13}); y.y+=1;
    section.subsections.forEach(([subTitle,questions])=>{
      addPdfLine(doc,subTitle,y,{bold:true,size:11});
      if(subTitle.startsWith('4.2')){
        (state.repeaters.services||[]).forEach((item,i)=>{
          addPdfLine(doc,`Serviço ${i+1}`,y,{bold:true,size:10});
          serviceTemplate.forEach(([n,t])=>addPdfQA(doc,y,n,t,item[n]||'Sem resposta'));
        });
      } else if(subTitle.startsWith('11.2')){
        nbBlocks.forEach(block=>{
          const item=state.repeaters.nb?.[block]||{}; addPdfLine(doc,`Bloco: ${block}`,y,{bold:true,size:10});
          nbTemplate.forEach(([n,t])=>addPdfQA(doc,y,n,t,item[n]||'Sem resposta'));
        });
      } else if(subTitle.startsWith('13.2')){
        routingMotives.forEach(m=>{
          const item=state.repeaters.routing?.[m]||{}; addPdfLine(doc,`Motivo: ${m}`,y,{bold:true,size:10});
          routingTemplate.forEach(([n,t])=>addPdfQA(doc,y,n,t,item[n]||'Sem resposta'));
        });
      } else if(subTitle.startsWith('16.1')){
        (state.repeaters.reviews||[]).forEach((item,i)=>{
          addPdfLine(doc,`Exemplo ${i+1}`,y,{bold:true,size:10});
          reviewTemplate.forEach(([n,t])=>addPdfQA(doc,y,n,t,item[n]||'Sem resposta'));
        });
      } else {
        questions.forEach(([n,t])=>addPdfQA(doc,y,n,t,visibleAnswer(n)));
      }
      y.y+=2;
    });
    y.y+=2;
  });
  addPdfLine(doc,'Pendências que precisam ser resolvidas antes da ativação',y,{bold:true,size:11});
  addPdfLine(doc,state.final?.pendencias||'Sem resposta',y,{size:9.5});
  addPdfLine(doc,`Nome do responsável pela aprovação final: ${state.final?.responsavel||'Sem resposta'}`,y,{size:9.5});
  addPdfLine(doc,`Data da aprovação final: ${state.final?.data||'Sem resposta'}`,y,{size:9.5});

  const clean=(state.meta?.nome||'cliente').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9_-]+/g,'-').replace(/^-|-$/g,'').toLowerCase();
  const date=state.meta?.data||new Date().toISOString().slice(0,10);
  doc.save(`questionario-clinica-nubia-${clean||'cliente'}-${date}.pdf`);
  setStatus('PDF gerado. Agora é só enviar o arquivo manualmente pelo WhatsApp.');
}

document.getElementById('saveBtn').addEventListener('click',()=>saveState(true));
document.getElementById('printBtn').addEventListener('click',()=>{saveState(); window.print();});
document.getElementById('pdfBtn').addEventListener('click',generatePdf);
window.addEventListener('beforeunload',()=>saveState());

render();
