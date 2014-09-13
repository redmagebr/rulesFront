/**
 * 
 * Changelog
 * @type Array
 */
window.techChangelog = [
    {
        "version" : [3, 0],
        "description" : [
            "Door Knocker passa a ser única junto de um buff e um nerf ao mesmo tempo para fazer isso ficar melhor.",
            "Overload refeita completamente.",
            "Buracos de Último Recurso tapados.",
            "Aviso em Mountain's Stand adicionado."
        ]
    }
].sort(function (a, b) {
    if (a.version[0] > b.version[0]) return -1;
    if (a.version[0] < b.version[0]) return 1;
    if (a.version[1] > b.version[1]) return -1;
    if (a.version[1] < b.version[1]) return 1;
    return 0;
});

/**
 * Tipos de Técnicas
 * @type Array
 */
window.techTipos = [
    {
        "id" : "ataque",
        "nome" : "Formas de Ataque",
        "descricao" : [
            "Uma técnica de Ataque tem um custo de ativação, começando em 0 MP e somando a seus addons. Você paga o preço ao realizar o ataque, independente dele acertar ou não.",
            "Uma técnica de ataque pode ter seu custo reduzido a 0, mesmo com addons. Uma técnica de ataque sem addons é chamada de Ataque Básico."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : "especial",
        "nome" : "Formas Especiais",
        "descricao" : [
            "Técnicas Especiais são como um cinto de utilidades do Batman. Cada parte de uma técnica especial pode ser ativada independentemente, e o custo da ativação sempre é o custo especial do addon sendo ativado."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : "passiva",
        "nome" : "Formas Passivas",
        "descricao" : [
            "Uma técnica passiva tem um custo por Rodada, começando em 0 e somando a seus addons. Isso significa que você paga o preço dela ao ativar ela e no início de cada um dos seus próximos turnos, se for manter ela ativa.",
            "Uma técnica passiva pode ter seu custo reduzido a 0 MP por rodada, mas não menos do que isso.",
            "Um personagem pode ter mais de uma técnica passiva ativa ao mesmo tempo, mas não pode ter um mesmo addon ativo ao mesmo tempo entre uma ou mais técnicas passivas. Addons de passivas que não sejam únicos (que citem isso em sua descrição específica) podem estar ativos em mais de uma passiva ao mesmo tempo."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : "estilo",
        "nome" : "Estilos de Luta",
        "descricao" : [
            "Um estilo de luta tem um custo por Rodada, começando em 0 e somando a seus addons. Isso significa que você paga o preço dela ao ativar ela e no início de cada um dos seus próximos turnos, se for manter ela ativa.",
            "Um personagem só pode ter um único estilo de luta ativo ao mesmo tempo.",
            "Bônus concedidos por estilos de luta são SEMPRE \"Bônus de Habilidade\" e não se acumulam entre si. Redutores de estilo de luta não tem tipo e se acumulam. Alguns efeitos de outros tipos de técnicas concedem Bônus de Habilidade, então tome cuidado para não pegar dois addons que não trabalham bem juntos."
        ],
        "conceitos" : [
            
        ]
    }
];
window.tiposHash = {};
for (var i = 0; i < window.techTipos.length; i++) {
    window.tiposHash[window.techTipos[i].id] = window.techTipos[i];
}


/**
 * Conceitos!
 * @type Array
 */
window.techConceitos = [
    {
        "id" : "stacking",
        "nome" : "Bônus Nomeados",
        "descricao" : "Bonus e Redutores se acumulam quando tem nomes idferentes blablabla",
        "listado" : false,
        "impresso" : true
    }
];
window.conceitosHash = {};
for (var i = 0; i < window.techConceitos.length; i++) {
    window.conceitosHash[window.techConceitos[i].id] = window.techConceitos[i];
}




/**
 * Addons de Técnicas! Todos!
 * @type Array
 */
window.techAddons = 
[
    {
        "id": 385,
        "tipo": "ataque",
        "nome": "All I have",
        "nomeLimpo": "All I have",
        "efeitos": [
            "Aumenta o custo da técnica em 1 MP.",
            "Quando essa técnica é utilizada, pague um múltiplo de 5 como um custo extra de MP. Esse custo extra não pode ser reduzido de nenhuma maneira. Você não pode escolher custos extras que fossem te deixar com MP inferior a -10.",
            "Para cada 5 MPs pagos dessa maneira, aumente o dano do ataque em +1.",
            "O gasto extra de MP acontece junto da ação de iniciar o ataque, antes do oponente escolher uma defesa."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 241,
        "tipo": "ataque",
        "nome": "Area of Effect",
        "nomeLimpo": "Area of Effect",
        "efeitos": [
            "A técnica afeta todos os inimigos.",
            "Durante a rolagem de dano dessa técnica, corte o modificador da rolagem pela metade. Se você iria rolar 1d6 + 8 para dano, role 1d6 + 4 e etc. Arredonda para cima.",
            "Ao ativar esse efeito, o seu ataque é dividido em um ataque em cada inimigo, então você rola o dano uma vez para cada alvo.",
            "Inimigos podem se desviar dessa técnica ou contra-atacar com ataques básicos. Outras ações de defesa não são válidas contra esse ataque.",
            "Cópias e aliados criados por outros addons também são alvos do Area of Effect.",
            "Aumenta Custo da técnica em 4."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 317,
        "tipo": "ataque",
        "nome": "Ataque Assinatura",
        "nomeLimpo": "Ataque Assinatura",
        "efeitos": [
            "Diminua o custo da técnica em 3.",
            "Caso você passe um combate no qual teve pelo menos uma ação SEM utilizar a técnica com esse addon nenhuma vez, substitua esse Addon por Optimization I.",
            "Você só pode ter uma técnica com o addon Ataque Assinatura. Se colocar esse addon em uma segunda técnica, substitua o Ataque Assinatura da primeira por Optimization I.",
            "Não pode ser utilizada contra outros jogadores (se acontecer durante a narrativa, gasta 4 MP a mais)."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 255,
        "tipo": "ataque",
        "nome": "Break Armor",
        "nomeLimpo": "Break Armor",
        "efeitos": [
            "Caso ataque atinja um alvo, alvo receberá -2 Redutor de Poder de penalidade em sua RD Geral até o início do próximo turno do usuário. Esse redutor não se acumula",
            "Ao ativar esse ataque, pague mais 1 MP para cada alvo que a técnica possuir. Esse pagamento não pode ser reduzido por nenhum efeito e conta como um custo de ativação.",
            "O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque e os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "Aumenta Custo da técnica em 2."
        ],
        "conceitos": [
            "stacking"
        ],
        "nivel": 2
    },
    {
        "id": 253,
        "tipo": "ataque",
        "nome": "Break Weapon",
        "nomeLimpo": "Break Weapon",
        "efeitos": [
            "Caso ataque atinja um alvo, alvo receberá -2 Redutor de Poder em resultados de dano até o início do próximo turno do usuário. Esse redutor não se acumula.",
            "Ao ativar esse ataque, pague mais 1 MP para cada alvo que a técnica possuir. Esse pagamento não pode ser reduzido por nenhum efeito e conta como um custo de ativação.",
            "O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque e os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "Aumenta Custo da técnica em 1."
        ],
        "conceitos": [
            "stacking"
        ],
        "nivel": 1
    },
    {
        "id": 304,
        "tipo": "ataque",
        "nome": "Chain Attack",
        "nomeLimpo": "Chain Attack",
        "efeitos": [
            "Se esse ataque nocautear o alvo dele, você pode realizar uma nova ação de ataque (ataque básico, habilidade, etc) contra outro alvo como uma ação grátis (não consome turno, mas ainda consome MP) imediatamente ao fim desse ataque. Isso também vale para contra-ataques realizados com Chain Attack.",
            "Não aumenta o custo da técnica."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 237,
        "tipo": "ataque",
        "nome": "Counter Counter I",
        "nomeLimpo": "Counter Counter I",
        "efeitos": [
            "Se o oponente realizar um contra-ataque contra essa técnica, essa técnica recebe +2 na sua rolagem de dano.",
            "Aumenta Custo da técnica em 2."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 2
    },
    {
        "id": 238,
        "tipo": "ataque",
        "nome": "Counter Counter II",
        "nomeLimpo": "Counter Counter II",
        "efeitos": [
            "Se o oponente realizar um contra-ataque contra essa técnica, essa técnica recebe +4 na sua rolagem de dano.",
            "Aumenta Custo da técnica em 4."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 3
    },
    {
        "id": 335,
        "tipo": "ataque",
        "nome": "Damage over Time",
        "nomeLimpo": "Damage over Time",
        "efeitos": [
            "Caso esse ataque cause mais do que um ponto de dano, adicione um contador de Damage over Time no alvo.",
            "Caso o alvo já tivesse algum contador de damage over time nele, adicione dois ao invés de um.",
            "No início do turno de um personagem com contadores de Damage Over Time, esse personagem recebe a quantidade de contadores como dano direto no seu HP.",
            "Depois de receber o dano, o personagem pode rolar 1d6 + Nível contra 1d6 + Nível de algum (um só) dos inimigos que colocaram Damage Over Time nele. Um sucesso significa que ele perde todos os contadores de Damage Over Time.",
            " Oponentes podem escolher rolar 1d6 + (Quantidade de Contadores de Damage Over Time) ao invés de 1d6 + Nível, caso a quantidade faça essa rolagem ser maior.",
            "O personagem também pode passar seu turno para retirar todos os contadores de Damage Over Time sem a necessidade de testes.",
            "Nos dois casos, não significa que o personagem se livrou do efeito do ataque pela narrativa. Ele apenas conseguiu se livrar do Damage Over Time pelo restante do combate.",
            "Aumenta o custo da técnica em 2 MP.",
            "O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque e os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "Para cada alvo extra da técnica, gaste um extra de 3 MP por alvo. Esse custo extra não é aplicado para um único alvo. Exemplo: Se DoT estiver sendo usado contra um alvo, o custo dele se mantém em 2, mas se for usado contra dois alvos o custo extra aumenta em +6 MP.",
            "Esse addon é considerado um bônus de dano do ponto de vista de outros addons.Esse addon não pode ser adicionado em ataques com mais de um alvo."
        ],
        "conceitos": [

        ],
        "nivel": 2
    },
    {
        "id": 330,
        "tipo": "ataque",
        "nome": "Door Knocker",
        "nomeLimpo": "Door Knocker",
        "efeitos": [
            "Durante a criação dessa técnica, escolha 25%, 50%, 75% ou 100%. Ataques realizados com essa técnica ganham essa quantidade de penetração.",
            "Ataques com essa técnica também recebem -1, -2, -3, -4 em testes de acerto, de forma respectiva à porcentagem de penetração escolhida.",
            "Esse addon não pode ser usado lado-a-lado com addons que fornecem bônus em testes de acerto ou testes contra defesa. Esse addon ainda pode ser usado caso o personagem esteja recebendo o bônus de outra fonte (como uma passiva ou um buff com duração).",
            "De acordo com a penetração escolhida para essa técnica, aumente o custo dela em 3, 5, 7 ou 9 MP."
        ],
        "conceitos": [

        ],
        "nivel": 3
    },
    {
        "id": 313,
        "tipo": "ataque",
        "nome": "Efeito Narrativo",
        "nomeLimpo": "Efeito Narrativo",
        "efeitos": [
            "Adiciona um efeito apenas dentro da história ou cena acontecendo. Quando criando uma técnica, você já tem uma certa quantidade de \"Efeito Narrativo\" colocado pela descrição que você dá a ela. Sempre assuma que sua técnica NÃO precisa de Efeito Narrativo.",
            "Efeito Narrativo é necessário para efeitos que talvez não devessem ser permitidos, ou que sejam grandes demais. O mestre deve informar o jogador sobre quando Efeito Narrativo é necessário para manter a descrição escolhida."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 323,
        "tipo": "ataque",
        "nome": "Even the Odds",
        "nomeLimpo": "Even the Odds",
        "efeitos": [
            "Se o seu resultado de dano for par, aumente ele em +2.",
            "Se o seu resultado de dano for ímpar, reduza ele em 3 pontos (isso inclui o modificador também).",
            "Caso você não tenha rolado um dado para dano por qualquer motivo, seu dano não é alterado."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 295,
        "tipo": "ataque",
        "nome": "First Strike",
        "nomeLimpo": "First Strike",
        "efeitos": [
            "Adiciona +1 Bônus de Velocidade à prioridade desse ataque.",
            "Não aumenta o custo da técnica."
        ],
        "conceitos": [
            "prioridade"
        ],
        "nivel": 1
    },
    {
        "id": 246,
        "tipo": "ataque",
        "nome": "Flaw Trap",
        "nomeLimpo": "Flaw Trap",
        "efeitos": [
            "Se um oponente tentar um contra-ataque contra essa técnica, você recebe um bônus de habilidade de +2 no seu teste de esquiva caso decida tentar evitar o contra-ataque dele.",
            "O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque e os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "Aumenta custo da técnica em 2."
        ],
        "conceitos": [
            "stacking"
        ],
        "nivel": 1
    },
    {
        "id": 325,
        "tipo": "ataque",
        "nome": "High Risk High Reward",
        "nomeLimpo": "High Risk High Reward",
        "efeitos": [
            "Se o oponente tentar um contra-ataque contra essa técnica, você e ele jogam 1d6 + Ataque seguido do dano das suas técnicas. Aquele que vencer as duas rolagens causa seu dano em completo, com o ataque do outro nunca tendo sido realizado.",
            "No caso de um empate, você causa 50% do seu dano nele e ele causa 50% do dano dele em você (redução em % sempre é feita APÓS a aplicar a RD)."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 326,
        "tipo": "ataque",
        "nome": "Incontrollable Power I",
        "nomeLimpo": "Incontrollable Power I",
        "efeitos": [
            "Diminui o custo da técnica em 3.",
            "Usuário recebe -1 no teste de acerto da técnica."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 327,
        "tipo": "ataque",
        "nome": "Incontrollable Power II",
        "nomeLimpo": "Incontrollable Power II",
        "efeitos": [
            "Diminui o custo da técnica em 5.",
            "Usuário recebe -2 no teste de acerto da técnica."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 2
    },
    {
        "id": 328,
        "tipo": "ataque",
        "nome": "Incontrollable Power III",
        "nomeLimpo": "Incontrollable Power III",
        "efeitos": [
            "Diminui o custo da técnica em 10.",
            "Usuário recebe -3 no teste de acerto da técnica."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 3
    },
    {
        "id": 207,
        "tipo": "ataque",
        "nome": "Inspire",
        "nomeLimpo": "Inspire",
        "efeitos": [
            "Caso você cause um dano superior a 1 com esse ataque, um atributo (escolhido na criação da técnica) de um aliado (que não é você) recebe +1 Bônus de Poder até seu próximo turno.",
            "\"Dano\" pode ser escolhido como destino desse bônus.",
            "Aumenta o custo da técnica em 2 MP."
        ],
        "conceitos": [
            "stacking"
        ],
        "nivel": 1
    },
    {
        "id": 384,
        "tipo": "ataque",
        "nome": "Last Strike",
        "nomeLimpo": "Last Strike",
        "efeitos": [
            "Esse ataque acontece por último, independente das prioridades.",
            "No caso de um ataque com Last Strike receber um contra-ataque com Last Strike, ambos os combatentes ficam se olhando e ninguém ataca, terminando o turno imediatamente."
        ],
        "conceitos": [
            "prioridade"
        ],
        "nivel": 1
    },
    {
        "id": 356,
        "tipo": "ataque",
        "nome": "Leadership - Inspire Bravery",
        "nomeLimpo": "Leadership - Inspire Bravery",
        "efeitos": [
            "Caso você cause dano com essa técnica, escolha um aliado que obteve sucesso em pelo menos um teste da etapa 1 dos testes de morte e que ainda não tenha ido para a etapa 2. Agora ele tem 1 ponto de HP e está de volta à luta. Isso conta como se ele tivesse se curado sozinho para retornar.",
            "Você só pode usar esse efeito duas vezes por combate, independente de ter acertado a técnica que tem ele ou não.",
            "Uma técnica só pode ter um addon da família Leadership."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 379,
        "tipo": "ataque",
        "nome": "Leadership - Now you do it",
        "nomeLimpo": "Leadership - Now you do it",
        "efeitos": [
            "Aumenta o custo da técnica em 4.",
            "Essa técnica não pode receber outros addons que aumentem ou diminuam seu dano.",
            "Para decidir o dano final dessa técnica, escolha um aliado: o aliado realiza um teste de ataque contra esquiva no mesmo alvo que você estiver atacando. Se o ataque básico dele acertar, ele rola o dano dele e adiciona esse dano ao seu dano. Caso contrário, essa técnic terá como dano apenas o seu dano básico (dado de dano + bônus de arma + um atributo).",
            "Para qualquer efeito acontecendo nessa técnica, VOCÊ é o único usuário. Então efeitos como Mark of the Guardian podem ser utilizados por você e addons como Inspire terão todos os seus aliados como alvos válidos.",
            "Redutores ou Bônus de dano em porcentagem para o dano do aliado são ignorados durante esse seu ataque, mas qualquer Bônus ou Redutor adicionado no SEU ataque é considerado para o ataque final.",
            "O dano final desse ataque é a soma do seu dano com o dano do seu aliado e possui como tipos quaisquer atributos de dano que tenham sido usados por você e ele.",
            "<strong>NOTA PARA O FUTURO:<\/strong> Esse addon é uma versão bem forte de On My Command, mas que também arrisca causar menos dano (caso o aliado falhe no ataque). Isso talvezzz deixe ele balanceado por agora. Mas ficar de olho em quanto os bônus de armas e passivas estão entrando nele! Isso pode tirar ele de \"levemente mais forte\" para \"tão op que tá quebrado\". Caso vá usar esse addon, esteja preparado psicológicamente para tal."
        ],
        "conceitos": [
            "caalvos",
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 378,
        "tipo": "ataque",
        "nome": "Leadership - On My Command",
        "nomeLimpo": "Leadership - On My Command",
        "efeitos": [
            "Escolha um aliado e um inimigo. O aliado realizará um ataque básico no inimigo escolhido e essa será o dano básico da técnica (substituindo o dado de dano + atributo + bônus de arma). Adicione quaisquer outros efeitos da técnica no ataque do aliado, incluindo modificadores de dano.",
            "Efeitos que mudam de acordo com quem está executando eles não podem ser adicionados nessa técnica. Então Mark of the Guardian não pode ser adicionado (as marcas funcionam diferente dependendo de qual personagem a está colocando).",
            "Outros efeitos podem ser adicionados, como Inspire para aumentar algum atributo de outro aliado. Só que tanto o personagem que usou essa técnica quanto quem realizou o ataque contam como o \"usuário\" dela. Assim sendo, efeitos que exigem um \"aliado\" (como Inspire) só poderiam afetar um terceiro personagem.",
            "Apesar de ambos serem o Usuário do Poder, é considerado que o dano é causado pelo dono do turno (apesar do aliado realizar o ataque e rolar os dados). Assim sendo, caso o aliado possua redutores nos danos dele, esses redutores NẪO são carregados para On My Command. Mas se o personagem que usou essa técnica possuir redutores no seu dano causado, esses redutores são repassados para o ataque do aliado."
        ],
        "conceitos": [
            "caalvos",
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 357,
        "tipo": "ataque",
        "nome": "Leadership - The time is NOW",
        "nomeLimpo": "Leadership - The time is NOW",
        "efeitos": [
            "Caso você nocauteie um inimigo com esse ataque, cada um de seus aliados pode realizar um ataque básico contra um inimigo da escolha deles. Inimigos atacados pelos seus aliados dessa forma só têm a opção de esquivar.",
            "Em lutras contra outros jogadores, o dano dos ataques de seus aliados só causa 50% do dano.",
            "Uma técnica só pode ter um addon da família Leadership.",
            "Aumente o custo da técnica em 2."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 288,
        "tipo": "ataque",
        "nome": "Mark of the Guardian",
        "nomeLimpo": "Mark of the Guardian",
        "efeitos": [
            "Todos os alvos que receberam dano por essa técnica ficam marcados até o início do seu próximo turno.",
            "Esse addon não aumenta o custo da técnica."
        ],
        "conceitos": [
            "marcas",
            "basicos"
        ],
        "nivel": 1
    },
    {
        "id": 261,
        "tipo": "ataque",
        "nome": "No Flaws",
        "nomeLimpo": "No Flaws",
        "efeitos": [
            "Se o oponente tentar um contra-ataque contra a técnica que possui este addon, você reduz o dano causado pelo oponente em 2 pontos durante esse contra-ataque."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 282,
        "tipo": "ataque",
        "nome": "Nullify Magic",
        "nomeLimpo": "Nullify Magic",
        "efeitos": [
            "Caso esse ataque cause 1 ponto de dano ou mais, reduza o MP do alvo em 2.Esse addon acumula consigo mesmo.",
            "O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque e os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "Aumente o custo da técnica em 4."
        ],
        "conceitos": [

        ],
        "nivel": 2
    },
    {
        "id": 263,
        "tipo": "ataque",
        "nome": "Optimization I",
        "nomeLimpo": "Optimization I",
        "efeitos": [
            "Diminui Custo da técnica em 1."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 264,
        "tipo": "ataque",
        "nome": "Optimization II",
        "nomeLimpo": "Optimization II",
        "efeitos": [
            "Diminui Custo da técnica em 2.",
            "Diminui dano da técnica em 1."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 2
    },
    {
        "id": 265,
        "tipo": "ataque",
        "nome": "Optimization III",
        "nomeLimpo": "Optimization III",
        "efeitos": [
            "Diminui Custo da técnica em 4.",
            "Diminui dano da técnica em 3."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 3
    },
    {
        "id": 284,
        "tipo": "ataque",
        "nome": "Overwhelming Force",
        "nomeLimpo": "Overwhelming Force",
        "efeitos": [
            "Caso o oponente tente um contra-ataque, você pode fazer sua técnica engolir o ataque do oponente. Isso significa que ao invés das três opções normais, você tentará Dano VS Dano. Você joga o dano dessa técnica e o oponente joga o dano da dele. A diferença é causada como dano direto (ignora resistências) em quem tirou o resultado menor. Se você jogar 14 de dano e o oponente jogar 12 de dano na dele, você causa 2 pontos de dano diretos no HP dele."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 257,
        "tipo": "ataque",
        "nome": "Penalty",
        "nomeLimpo": "Penalty",
        "efeitos": [
            "Caso o ataque acerte, ele causa um efeito negativo no oponente, reduzindo Defesa ou Ataque em -1 Redutor de Poder até o início do próximo turno do usuário. O atributo reduzido deve ser escolhido quando esse Addon é colocado na técnica. Esse redutor não se acumula.",
            "Ao ativar esse ataque, pague mais 2 MP para cada alvo que a técnica possuir. Esse pagamento não pode ser reduzido por nenhum efeito e conta como um custo de ativação.",
            "O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque e os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "Aumenta Custo da técnica em 3."
        ],
        "conceitos": [
            "stacking"
        ],
        "nivel": 2
    },
    {
        "id": 381,
        "tipo": "ataque",
        "nome": "Price in Blood I",
        "nomeLimpo": "Price in Blood I",
        "efeitos": [
            "Aumente o dano causado por essa técnica em +1.",
            "Como um custo extra para ativar essa técnica, pague 1 de HP. Isso é uma remoção direta do seu HP e não pode ser reduzida por outros efeitos. Não conta como um dano recebido.",
            "Esse addon pode te jogar para 0 ou menos de HP, fazendo você entrar nas fases de teste de morte, normalmente",
            "Price in Blood não é única e pode ser comprada várias vezes."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 382,
        "tipo": "ataque",
        "nome": "Price in Blood II",
        "nomeLimpo": "Price in Blood II",
        "efeitos": [
            "Aumente o dano causado por essa técnica em +2.",
            "Como um custo extra para ativar essa técnica, pague 3 de HP. Isso é uma remoção direta do seu HP e não pode ser reduzida por outros efeitos. Não conta como um dano recebido.",
            "Esse addon pode te jogar para 0 ou menos de HP, fazendo você entrar nas fases de teste de morte, normalmente",
            "Price in Blood não é única e pode ser comprada várias vezes."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 2
    },
    {
        "id": 338,
        "tipo": "ataque",
        "nome": "Sadism",
        "nomeLimpo": "Sadism",
        "efeitos": [
            "Caso esse ataque cause mais do que um ponto de dano, você pode usar um de seus pontos de Stamina e se curar.",
            "Você não pode se curar mais do que o dano final causado no oponente (a quantidade de HP que ele perdeu). Você pode decidir gastar a Stamina ou não só depois de saber o dano causado (para não perder e curar pouco demais).",
            "Aumente o custo da técnica em 4"
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 247,
        "tipo": "ataque",
        "nome": "Second Chance",
        "nomeLimpo": "Second Chance",
        "efeitos": [
            "Caso o ataque erre, o teste de ataque é feito novamente com modificador -2 no ataque. Se esse segundo teste passar, o ataque acerta, e causa o dano normalmente.",
            "Aumenta Custo da técnica em 4."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 361,
        "tipo": "ataque",
        "nome": "Set Trap I",
        "nomeLimpo": "Set Trap I",
        "efeitos": [
            "Esse ataque é feito, inicialmente, sem alvos e consome seu turno como sempre. Esse ataque não é realizado de verdade agora.",
            "O ataque pode reativado num turno seguinte, sendo considerado uma ação grátis então, sem custo e sem consumir o seu turno.",
            "Quando esse ataque for realizado, o alvo só pode realizar ações de esquiva. Não é possível contra-atacar nem bloquear. Essa técnica não pode ter addons que envolvam o Teste de Acerto contra Esquiva ou Esquivas de qualquer maneira.",
            "Corte o modificador da sua rolagem de dano ao meio. Se você fosse rolar 1d6 + 6, role 1d6 + 3. Arredonda para cima.",
            "A restrição de defesas não se aplica a contra-ataques realizados com Set Trap I.",
            "Quando utilizada em um contra-ataque, você recebe +1 em testes de acerto. O oponente deve ser informado por você ou pelo mestre de que você ativou a armadilha de antes.",
            "Essa técnica só pode possuir um único Alvo e nenhum efeito pode alterar isso.",
            "Restrições de ativação exigidas por outros addons passam a valer apenas para quando a Armadilha é ativada e funcionam da mesma forma que sempre funcionaram. Nesse caso, restrições de ativação são ignoradas na hora de \"colocar\" a armadilha, mas exigidas na hora de ativar ela.",
            "Esse addon não altera o custo da técnica."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 368,
        "tipo": "ataque",
        "nome": "Set Trap II",
        "nomeLimpo": "Set Trap II",
        "efeitos": [
            "Esse ataque é feito, inicialmente, sem alvos e consome seu turno como sempre. Esse ataque não é realizado de verdade agora.",
            "O ataque pode reativado num turno seguinte, sendo considerado uma ação grátis então, sem custo e sem consumir o seu turno.",
            "Quando utilizada em um contra-ataque, você recebe +1 em testes de acerto. O oponente deve ser informado por você ou pelo mestre de que você ativou a armadilha de antes.",
            "Restrições de ativação exigidas por outros addons passam a valer apenas para quando a Armadilha é ativada e funcionam da mesma forma que sempre funcionaram. Nesse caso, restrições de ativação são ignoradas na hora de \"colocar\" a armadilha, mas exigidas na hora de ativar ela.",
            "Esse addon não altera o custo da técnica."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 350,
        "tipo": "ataque",
        "nome": "Smoke and Mirrors",
        "nomeLimpo": "Smoke and Mirrors",
        "efeitos": [
            "Sua técnica tem dois alvos: um falso e um verdadeiro. Você só precisa informar o verdadeiro ao mestre.Depois que o primeiro alvo decidir sua ação defesa, o seu ataque muda para o verdadeiro. Caso o alvo falso tenha tentado um contra-ataque, você simplesmente recebe o dano sem poder fazer ações de defesa, mas seu ataque continua em direção ao alvo verdadeiro.",
            "O alvo verdadeiro então pode decidir sua defesa (depois do contra-ataque do alvo falso, caso tenha existido). Esse alvo verdadeiro receberá um modificador de -1 Redutor de Poder em testes de esquiva  contra ataque.",
            "Caso ataque no alvo verdadeiro estejam sendo redirecionados e você tenha incluído o alvo para o qual redirecionam como alvo verdadeiro, seu ataque é capaz de atingir o alvo desejado, ignorando os efeitos de redirecionamento.",
            "Para efeitos que considerem os alvos de uma técnica, tanto o alvo falso quanto o verdadeiro são alvos do seu ataque. Então atacar alguém que te marcou e um membro do grupo dele ao mesmo tempo não te fazem ativar a marca.",
            "Se o alvo falso tentar um Bloqueio ou uma Esquiva, sua ação de defesa é ignorada e simplesmente não acontece.",
            "Aumente o custo da técnica em 6."
        ],
        "conceitos": [
            "stacking"
        ],
        "nivel": 1
    },
    {
        "id": 340,
        "tipo": "ataque",
        "nome": "Soul Strike",
        "nomeLimpo": "Soul Strike",
        "efeitos": [
            "Caso você cause mais pontos de dano com esse ataque do que a sua própria cura por Stamina, você pode cancelar o dano causado (oponente é curado desse dano) e reduzir a quantidade de Stamina do alvo em 1 ponto.",
            "O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque e os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "Aumente o custo da técnica em 2"
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 232,
        "tipo": "ataque",
        "nome": "Special Attack I",
        "nomeLimpo": "Special Attack I",
        "efeitos": [
            "Adiciona um segundo atributo de dano, diferente do primeiro, dividido por 2  (arredondado para cima) ao dano da técnica. Uma técnica só pode ter um Special Attack.",
            "Aumente o custo da técnica em 1 MP.",
            "Special Attack I pode ser adicionada a uma técnica sem ocupar slots. Nesse caso: aumente o custo da técnica em 2 ao invés de 1. Não é possível ignorar o limite de apenas uma Special Attack dessa maneira."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 233,
        "tipo": "ataque",
        "nome": "Special Attack II",
        "nomeLimpo": "Special Attack II",
        "efeitos": [
            "Adiciona um segundo atributo de dano, diferente do primeiro, ao dano da técnica. Uma técnica só pode ter um Special Attack.",
            "Aumenta Custo da técnica em 2."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 339,
        "tipo": "ataque",
        "nome": "Special Attack III",
        "nomeLimpo": "Special Attack III",
        "efeitos": [
            "O dano base dessa técnica passa a ser 1d6, perdendo a adição do atributo.",
            "Aumente o dano dessa técnica em duas vezes a sua Sabedoria de Combate.",
            "Essa técnica passa a ter como tipo todos os seus atributos que estejam acima de 0. Você deve fazer uma descrição que explique isso.",
            "Uma técnica só pode ter um Special Attack e você não pode utilizar Special Attack III caso você esteja usando menos do que 3 atributos de dano. Caso a diferença entre seus atributos acima de 0 for maior do que 2, você não pode utilizar esse addon. [3, 2, 1] pode, [4, 2, 1] não.",
            "Aumente o custo da técnica em 2."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 291,
        "tipo": "ataque",
        "nome": "Special Attack Ranged I",
        "nomeLimpo": "Special Attack Ranged I",
        "efeitos": [
            "Adiciona um segundo atributo de dano, diferente do primeiro, dividido por 2 ao dano da técnica. Uma técnica só pode ter um Special Attack.",
            "Sua técnica se torna Ranged e recebe +1 Bônus de Alcance em sua prioridade.",
            "Aumenta Custo da técnica em 1."
        ],
        "conceitos": [
            "unicidade",
            "prioridade"
        ],
        "nivel": 1
    },
    {
        "id": 292,
        "tipo": "ataque",
        "nome": "Special Attack Ranged II",
        "nomeLimpo": "Special Attack Ranged II",
        "efeitos": [
            "Adiciona um segundo atributo de dano, diferente do primeiro, ao dano da técnica. Uma técnica só pode ter um Special Attack.",
            "O ataque passa a ser ranged e recebe +1 Bônus de Alcance em sua prioridade.",
            "Aumenta Custo da técnica em 3."
        ],
        "conceitos": [
            "unicidade",
            "prioridade"
        ],
        "nivel": 1
    },
    {
        "id": 278,
        "tipo": "ataque",
        "nome": "Spirit Bomb",
        "nomeLimpo": "Spirit Bomb",
        "efeitos": [
            "A técnica inicia com zero absoluto de dano, sem nenhum atributo usado ou dado para rolar referente ao dano. O usuário precisa passar uma rodada inteira para arrecadar uma carga de Spirit Bomb.",
            "O usuário não pode se defender ou se mover de forma alguma enquanto estiver carregando. Se ele realizar outra ação, movas cargas não são adicionadas por essa rodada.",
            "O dano final da técnica é aumentado numa quantia igual ao número de cargas carregadas (Exemplo: 1 carga = +1 de dano, 2 cargas = +2 de dano, etc). Com dois desse addon em uma habilidade, a técnica aumenta 2 vezes mais, o mesmo para três e quatro Spirit Bombs. Então em uma rodada, por exemplo, alguém que tiver 2 Spirit Bomb em uma técnica, adicionaria duas cargas por rodada.",
            "A técnica não consome MP.",
            "O dano é causado direto no HP do alvo (ignorando resistências), mas é necessário um teste de acerto antes (por enquanto - isso está sujeito a mudanças no futuro).",
            "A técnica não pode possuir addons que não sejam o próprio Spirit Bomb."
        ],
        "conceitos": [

        ],
        "nivel": 3
    },
    {
        "id": 266,
        "tipo": "ataque",
        "nome": "Strong but Slow I",
        "nomeLimpo": "Strong but Slow I",
        "efeitos": [
            "Aumenta o dano da técnica em +1.",
            "Esse addon não pode ser usado em conjunto com addons que dão bônus em acerto.",
            "Usuário recebe -1 no teste de acerto da técnica."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 267,
        "tipo": "ataque",
        "nome": "Strong but Slow II",
        "nomeLimpo": "Strong but Slow II",
        "efeitos": [
            "Aumenta o dano da técnica em +2.",
            "Esse addon não pode ser usado em conjunto com addons que dão bônus em acerto.",
            "Usuário recebe -2 no teste de acerto da técnica."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 3
    },
    {
        "id": 303,
        "tipo": "ataque",
        "nome": "Strong but Slow III",
        "nomeLimpo": "Strong but Slow III",
        "efeitos": [
            "Aumenta o dano da técnica em +4.",
            "Não pode ser utilizado em conjunto com addons que dão bônus em acerto.",
            "Usuário recebe -3 no teste de Ataque."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 3
    },
    {
        "id": 383,
        "tipo": "ataque",
        "nome": "Think Fast",
        "nomeLimpo": "Think Fast",
        "efeitos": [
            "O alvo desse ataque só pode se defender esquivando. Esse efeito não se ativa em contra-ataques realizados com esse addon.Reduza o modificador da rolagem de dano dessa técnica ao meio. Se você fosse rolar 1d6 + 4, role 1d6 + 2. Arredonda para cima. Caso o ataque seja redirecionado de alguma forma, esse efeito é perdido e o novo alvo poderá se defender normalmente.",
            "Aumenta o custo da técnica em 1."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 273,
        "tipo": "ataque",
        "nome": "Último Recurso",
        "nomeLimpo": "Ultimo Recurso",
        "efeitos": [
            "Se o usuário estiver com menos de 20% do HP máximo quando utilizar a técnica, ela não erra. Se o combate não terminar nesse turno, o usuário tem seu HP reduzido a 0 e é nocauteado, independente de quaisquer outros efeitos que estejam ativos. Se o combate terminar, o HP do usuário é reduzido para 1.",
            "O uso da técnica quando esse efeito é ativado envolve uma cena que precisa deixar claro para o inimigo e todos os outros jogadores que essa técnica é um Último Recurso.",
            "Aumenta custo da técnica em 4.",
            "Último Recurso não pode ser usada em um contra-ataque.",
            "Último Recurso não pode ser usada junto de addons que lidem com testes de acerto de forma alguma. Também não pode ser usada junto de addons que impeçam o alvo de realizar ações padrão como resposta ao ataque."
        ],
        "conceitos": [

        ],
        "nivel": 3
    },
    {
        "id": 244,
        "tipo": "ataque",
        "nome": "Unblockable I",
        "nomeLimpo": "Unblockable I",
        "efeitos": [
            "Garante um bônus de +2 dano caso o oponente tente bloquear seu golpe.",
            "Aumenta Custo da técnica em 2."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 245,
        "tipo": "ataque",
        "nome": "Unblockable II",
        "nomeLimpo": "Unblockable II",
        "efeitos": [
            "Garante um bônus de +4 dano caso o oponente tente bloquear seu golpe.",
            "Aumenta Custo da técnica em 4."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 2
    },
    {
        "id": 259,
        "tipo": "ataque",
        "nome": "Vulnerability",
        "nomeLimpo": "Vulnerability",
        "efeitos": [
            "Caso o ataque acerte, o próximo ataque realizado contra o alvo antes do seu próximo turno recebe um bônus de +2 dano. Esse bônus acumula multiplicativamente com outros bônus de dano.",
            "Ao ativar esse ataque, pague mais 1 MP para cada alvo que a técnica possuir. Esse pagamento não pode ser reduzido por nenhum efeito e conta como um custo de ativação.",
            "O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque e os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "Aumenta Custo da técnica em 2."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 3
    },
    /*
     * Técnicas Especiais
     */
    {
        "id": 204,
        "tipo": "especial",
        "nome": "Avatar of Destruction",
        "nomeLimpo": "Avatar of Destruction",
        "efeitos": [
            "O usuário se transforma em um monstro praticamente invencível até o fim do combate. Ao fim da transformação, o HP do usuário é reduzido a 0. Ao ativar a transformação, o HP do usuário se torna 3 + Nível e não pode aumentar. No início do turno do usuário, o HP dele volta a ser 3 + Nível, caso tenha caído abaixo disso",
            "Enquanto a transformação durar, o MP do personagem é 30 e não desce. Além disso, toda vez que o personagem causar o dano de uma Forma de Ataque, o dano é aumentado em ½ Nível.",
            "Enquanto a transformação durar, aumente todos os seus atributos de combate em 2.",
            "Esse efeito não pode se ativar em lutas contra outros jogadores. Além disso, você deve escolher certas regras sobre quando e como esse poder se ativa e decidir isso junto ao mestre.",
            "As condições para ativar esse poder devem ser bem específicas e mestres devem vetar condições que possam acontecer na maioria dos episódios. Esse addon é uma ferramenta narrativa, não algo para ser usado com frequência. Em geral, se a condição escolhida fosse acontecer mais de 3 vezes durante a história inteira do RPG, ela acontece demais e outra, mais específica, deve ser escolhida."
        ],
        "conceitos": [

        ],
        "nivel": 3
    },
    {
        "id": 209,
        "tipo": "especial",
        "nome": "Backstabber",
        "nomeLimpo": "Backstabber",
        "efeitos": [
            "Recebe um inimigo e um aliado como alvos. Faça um teste de Esquiva contra o Ataque do inimigo escolhido. Se você vencer, o próximo ataque que o inimigo fosse fazer em você é realizado no aliado escolhido.",
            "Não consome o turno do usuário, mas só pode ser ativada uma vez por rodada.",
            "Custo da técnica em 4."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 364,
        "tipo": "especial",
        "nome": "Bless I",
        "nomeLimpo": "Bless I",
        "efeitos": [
            "Consome 2 MP para dar um bônus de poder de +1 em algum atributo de combate de um aliado (escolhido na criação desta técnica). O efeito termina no início do seu próximo turno.",
            "Essa técnica não consome o turno do usuário, mas só pode ser utilizada uma vez por rodada.",
            "\"Dano\" pode ser escolhido como destino do bônus. Caso ele seja escolhido, o bônus de poder dele é +2 ao invés de +1.\""
        ],
        "conceitos": [
            "stacking"
        ],
        "nivel": 1
    },
    {
        "id": 387,
        "tipo": "especial",
        "nome": "Bless II",
        "nomeLimpo": "Bless II",
        "efeitos": [
            "Consome 2 MP e o turno do personagem para dar um bônus de poder de +1 em algum atributo de combate de todos os aliados (escolhido na criação desta técnica). O efeito termina no início do seu próximo turno.",
            "\"Dano\" pode ser escolhido como destino do bônus. Caso ele seja escolhido, o bônus de poder dele é +2 ao invés de +1.\""
        ],
        "conceitos": [
            "stacking"
        ],
        "nivel": 1
    },
    {
        "id": 225,
        "tipo": "especial",
        "nome": "Bloqueio Agressivo I",
        "nomeLimpo": "Bloqueio Agressivo I",
        "efeitos": [
            "Técnica pode ser usada para consumir o turno do usuário. Se o personagem realizar um contra-ataque antes do seu próximo turno, recebe apenas metade do dano que o oponente causaria.",
            "Quando esse efeito é utilizado, fica completamente claro para o oponente e todos os participantes da luta que o usuário está preparando um contra-ataque.",
            "Custo da técnica em 4."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 2
    },
    {
        "id": 224,
        "tipo": "especial",
        "nome": "Bloqueio Agressivo II",
        "nomeLimpo": "Bloqueio Agressivo II",
        "efeitos": [
            "Técnica pode ser usada para consumir o turno do usuário. Se o personagem realizar um contra-ataque antes do seu próximo turno, não recebe dano pelo ataque do oponente. ",
            "Quando esse efeito é utilizado, fica completamente claro para o oponente e todos os participantes da luta que o usuário está preparando um contra-ataque.",
            "Custo da técnica em 8."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 3
    },
    {
        "id": 365,
        "tipo": "especial",
        "nome": "Controle Absoluto",
        "nomeLimpo": "Controle Absoluto",
        "efeitos": [
            "Sempre que você for rolar dados de combate (testes de Acerto, Esquiva, Dano e outros diretamente relacionados ao combate), você pode reduzir seu modificador para qualquer número que quiser, contanto que seja menor do que o modificador que você ia usar. Você não precisa avisar ninguém disso.",
            "Reduzir seus modificadores não consome MP."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 305,
        "tipo": "especial",
        "nome": "Defender's Vigil",
        "nomeLimpo": "Defender's Vigil",
        "efeitos": [
            "Escolha um aliado. Até o início do seu próximo turno, todos os ataques realizados no aliado escolhido são realizados em você ao invés disso. Ativar esse efeito consome o turno do usuário.",
            "Essa técnica não possui custo."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 210,
        "tipo": "especial",
        "nome": "Dor Compartilhada",
        "nomeLimpo": "Dor Compartilhada",
        "efeitos": [
            "Consome o turno do usuário. Até o início do próximo turno do usuário, aliados recebem apenas metade do dano que receberiam. A outra metade é causada no usuário (redução em % sempre é feita APÓS a aplicar a RD)",
            "Em termos gerais isso significa que um personagem que for atacado com um dano igual a 10, iria reduzir esse dano pela RD  apropriada dele e então dividiria o restante em 50% para distribuir entre o usuário do addon e ele mesmo. No exemplo citado anteriomente, supondo que o alvo reduziu o dano para 8 pontos, então o próximo passo seria aplicar os 50%, resultando em 4 de dano no alvo original e o usuário do addon",
            "Se você for nocauteado, o efeito termina antes da hora.",
            "Custo da técnica em 4."
        ],
        "conceitos": [

        ],
        "nivel": 2
    },
    {
        "id": 358,
        "tipo": "especial",
        "nome": "Duel",
        "nomeLimpo": "Duel",
        "efeitos": [
            "Você só pode ativar esse poder quando você tem pelo menos 2 aliados e 3 inimigos no mesmo combate.",
            "Escolha um inimigo. Você e o inimigo continuam sua luta lado-a-lado com a luta principal. Mas você só pode atacar o inimigo que isolou e o inimigo só pode atacar você. Vocês não podem escolher aliados nem outros inimigos como alvos em técnicas que permitem a escolha de um alvo. O mesmo vale para aliados ou inimigos tentando usar vocês como alvo: não dá.",
            "Você só pode desativar esse efeito no início do turno do inimigo que você isolou. Essa técnica se desativa sozinha caso você seja derrotado ou seus aliados sejam derrotados. Esse poder se desativa sozinho caso o alvo isolado for derrotado ou se os aliados do alvo forem derrados. Uma luta só pode ter um único Duel ativo ao mesmo tempo. Um personagem só pode iniciar Duel uma vez por combate.",
            "Enquanto esse efeito durar, você só pode realizar ataques do tipo básico, não pode recuperar fôlego, utilizar itens ou ativar quaisquer técnicas. Você ainda pode se defender, esquivar ou atacar, mas apenas com ações básicas. O alvo que você isolou tem acesso a todo o arsenal dele, exceto utilizar os outros participantes da luta como alvos.",
            "O inimigo pode gastar o próprio turno para tentar acabar esse efeito. O personagem que iniciou esse efeito escolhe Defesa ou Ataque e então rola um teste do atributo escolhido de si contra o atributo que restou do inimigo. Se o inimigo vencer, ele termina o efeito de Duel.",
            "Enquanto esse efeito durar, seus outros aliados recebem +1 em todos os testes de combate e causam +2 dano em todos seus ataques.",
            "Essa técnica não possui custo para ativação nem para ser mantida.",
            "Essa técnica não pode ser utilizada em batalhas contra outros jogadores.",
            "Você só pode usar Duel uma vez por combate."
        ],
        "conceitos": [

        ],
        "nivel": 2
    },
    {
        "id": 315,
        "tipo": "especial",
        "nome": "Efeito Narrativo",
        "nomeLimpo": "Efeito Narrativo",
        "efeitos": [
            "Adiciona um efeito apenas dentro da história ou cena acontecendo. Quando criando uma técnica, você já tem uma certa quantidade de \"Efeito Narrativo\" colocado pela descrição que você dá a ela. Sempre assuma que sua técnica NÃO precisa de Efeito Narrativo.",
            "Efeito Narrativo é necessário para efeitos que talvez não devessem ser permitidos, ou que sejam grandes demais. O mestre deve informar o jogador sobre quando Efeito Narrativo é necessário para manter a descrição escolhida.",
            "Para técnicas Tipo Especial é necessário que o Efeito Narrativo se aplique de uma mesma maneira todos os outros addons escolhidos. Não é possível você adicionar um Efeito Narrativo que te faz brilhar a ponto de iluminar qualquer escuridão quando você usa uma Cura de outro addon dessa técnica, enquanto outro dos poderes traz sombras. Devem afetar todos de forma similar."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 386,
        "tipo": "especial",
        "nome": "Esforço Especial",
        "nomeLimpo": "Esforco Especial",
        "efeitos": [
            "Você pode ativar esse efeito quando realizar uma ação de ataque ou defesa para receber +1 Bônus de Habilidade rolagem de teste, caso ela aconteça.",
            "Esteja atento que por ser um Bônus de Habilidade, esse bônus não se acumula com outros do mesmo tipo advindos de Estilos de Luta (que também são bônus de habilidade)",
            "Você deve decidir usar Esforço Especial antes de qualquer rolagem acontecer, junto da sua decisão do que fazer com a sua ação. Você não pode utilizar Esforço Especial só para receber o +1 que faltou para vencer.",
            "O custo de ativação desse efeito é 4."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 362,
        "tipo": "especial",
        "nome": "Expertise I",
        "nomeLimpo": "Expertise I",
        "efeitos": [
            "Escolha até três perícias durante a criação dessa técnica.",
            "Você pode gastar 4 MP para receber um +3 Bônus de Poder em um teste dessas perícias."
        ],
        "conceitos": [
            "stacking",
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 363,
        "tipo": "especial",
        "nome": "Expertise II",
        "nomeLimpo": "Expertise II",
        "efeitos": [
            "Escolha um aliado que está realizando um teste de perícia e pague 4 MP. Esse aliado recebe um +2 Bônus de Poder no seu teste."
        ],
        "conceitos": [
            "stacking",
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 374,
        "tipo": "especial",
        "nome": "Fusão - Somos um",
        "nomeLimpo": "Fusao - Somos um",
        "efeitos": [
            "Você é capaz de se fundir com outra pessoa ou ensinar outros a se fundirem! Não pode ser utilizada em Eventos PVP.",
            "Para o personagem que possui essa técnica, a ação de Fusão traz sucesso automático. Para os outros personagens ela existe um sucesso em um teste de Agilidade, Força de Vontade ou Inteligência (atributo é escolhido durante a criação dessa técnica). A dificuldade é sempre 8, mas o personagem recebe um +1, acumulativo, toda vez que realiza a fusão (com sucesso e quando falha).",
            "Uma ficha de fusão é algo bem complexo, então há uma certa necessidade de se planejar isso com antecedência. Caso uma fusão aconteça do nada no meio do episódio, cabe aos jogadores e ao mestre decidirem o que fazer: esperar a ficha ser feita antes de continuar ou ir inventando conforme a coisa vai (e transformar a cena em algo cinemático). Recomenda-se que as fichas sejam preparadas para CASO possam vir, estando ali prontas para uso quando necessário.",
            "----",
            "A duração da fusão deve ser definida durante a criação da técnica, algo como 30 minutos, 3 rodadas ou eterna, se aplicável. Uma fusão não pode ser feita sem compreensão completa do outro jogador.",
            "Os dois personagens se unem em um só! A ficha resultante tem como HP Atual e Máximo o valor de 150% do maior HP atual dos dois personagens que se fundem. A ficha também possui todos os maiores atributos de combate, de testes e de perícias de cada personagem.",
            "A ficha resultante pode utilizar qualquer técnica das outras duas fichas, mas ela também possui quatro técnicas com quantidade de slots apropriada ao seu nível que só podem ser usadas por ela mesma. São duas técnicas para cada jogador dos personagens pré-fusão.",
            "Essa fusão age apenas uma vez por rodada como se fosse um único personagem. Recomenda-se que seja uma vez de cada jogador, mas isso não é obrigatório. A fusão também não pode ter comportamentos ou realizar ações que sejam incompatíveis com qualquer um dos personagens originais, então há de se tomar cuidado para não fazer algo que o personagem do outro jogador não fosse fazer.",
            "-----",
            "Caso o segundo personagem FALHE no teste de fusão, é usada uma ficha com HP infinito, todos os menores atributos de combate, atributos teste e perícias dos dois persoangens até o fim da duração da fusão. Esse personagem não é capaz de participar de combates que não sejam cinemáticos e recebe falha automática em qualquer teste.",
            "Essa ficha também ganha duas técnicas com quantidade de slots apropriada ao seu nível, uma para cada jogador."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 375,
        "tipo": "especial",
        "nome": "Fusão - Use meus poderes",
        "nomeLimpo": "Fusao - Use meus poderes",
        "efeitos": [
            "Você pode se unir a outro personagem e aumentar seus poderes de alguma forma (como sendo absorvido no processo ou algo do tipo).",
            "Isso instantaneamente cura o outro personagem até seu HP máximo e retira você do combate.",
            "O outro personagem passa a receber +2 em qualquer teste de combate e +4 em qualquer rolagem de dano até o fim da fusão.",
            "A duração da fusão deve ser especificada na criação da técnica, como 30 minutos ou algo assim. A duração mínima da fusão é \"até o fim do combate atual\". A fusão pode ser eterna, se apropriado. Uma fusão não pode acontecer sem consentimento de ambos os jogadores.",
            "Essa fusão não pode ser realizada durante eventos PVP."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 319,
        "tipo": "especial",
        "nome": "Got your tail",
        "nomeLimpo": "Got your tail",
        "efeitos": [
            "Faça um teste de Ataque contra a Defesa do alvo. Esse teste conta como um teste de ataque contra esquiva.",
            "Se obtiver sucesso, você passará a estar prendendo o alvo. O alvo não poderá agir nos turnos dele.",
            "No início dos turnos do alvo, ele pode rolar 1d4 e te causar o resultado como dano direto. Se você for derrotado de qualquer forma, esse efeito seacaba.",
            "Você e o alvo compartilham qualquer dano recebido - ataque em um é o mesmo que ataque no outro. Além disso, nenhum de vocês pode realizar defesas.",
            "Durante o seu turno, sua única ação possível é soltar o oponente. Se você soltar o oponente, esse efeito acaba e você não perde o seu turno.",
            "Ativar essa habilidade não consome MP, mas consome o turno do usuário."
        ],
        "conceitos": [

        ],
        "nivel": 2
    },
    {
        "id": 200,
        "tipo": "especial",
        "nome": "Habilidade Especial",
        "nomeLimpo": "Habilidade Especial",
        "efeitos": [
            "Você é capaz de realizar alguma coisa bem específica que, em geral, não te dá vantagem nenhuma, mas que em situações bem específicas pode se mostrar vital.",
            "Esse addon deve ser o único tipo de addon em uma técnica. Para cada slot que a técnica com esse Addon tiver, ganhe 1 habilidade especial. Além disso, no primeiro e quarto ponto, ganhe 2 habilidades extras. Então o número máximo de habilidades é 8 (4 + 2 + 2) e o inicial é 3."
        ],
        "conceitos": [
            "habesp1",
            "habesp2",
            "habesp3"
        ],
        "nivel": 1
    },
    {
        "id": 302,
        "tipo": "especial",
        "nome": "Hide",
        "nomeLimpo": "Hide",
        "efeitos": [
            "Escolha um aliado. Até o início do seu próximo turno, qualquer ataque realizado contra você é redirecionado para o seu aliado. Se seu aliado se recusar a te dar suporte, esse efeito não se ativa.",
            "Independente do aliado permitir ou não, ativar essa técnica consome o turno do personagem.",
            "Custo da técnica em 4."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 293,
        "tipo": "especial",
        "nome": "Look",
        "nomeLimpo": "Look",
        "efeitos": [
            "Você consegue visualizar o que um alvo está portando (Equipamentos, dinheiro e itens)",
            "A habilidade não gasta o turno do usuário",
            "Aumente o custo da técnica em 2."
        ],
        "conceitos": [

        ],
        "nivel": 2
    },
    {
        "id": 205,
        "tipo": "especial",
        "nome": "Mirror Image",
        "nomeLimpo": "Mirror Image",
        "efeitos": [
            "Cria uma cópia ilusória de você mesmo. Caso a cópia receba um ataque, ela é destruída. Se você receber dano, a cópia desaparece. Se um inimigo incapaz de diferenciar você da cópia tentar te atacar, ele tem 50% de chance (1d100 <= 50) de acertar a cópia.",
            "Se o usuário for atacado, ele ainda pode escolher reagir normalmente, e se não receber dano (como indicado acima), a cópia criada não é destruída.",
            "Um dano de de 0 ainda destrói a cópia criada.",
            "Esse addon gasta o turno do usuário quando usado.",
            "Aumente o custo da técnica em 10 MP."
        ],
        "conceitos": [

        ],
        "nivel": 3
    },
    {
        "id": 372,
        "tipo": "especial",
        "nome": "Overload",
        "nomeLimpo": "Overload",
        "efeitos": [
            "Você pode ativar essa técnica ao realizar alguma ação de combate. Escolha um número de 1 a 3 para X ao ativar esse efeito. X não pode ser igual ou maior ao seu nível.",
            "Como um custo para ativar esse efeito, você paga (4 + X) MP e recebe um dano direto de (Nível + X) HP. O dano conta como um dano para outros efeitos e não pode ser reduzido.",
            "Você recebe um Bônus de +X em testes de combate e um Bônus de +(2 * X) dano até o término daquela ação, que não pode durar mais do que um turno.",
            "Após ativar Overload em alguma ação, o personagem entra no estado 'Overloaded'.",
            "- Overloaded: Você está explodindo poder. O personagem não pode ser curado de maneira alguma. Realizar qualquer ação de combate sem ativar Overload cancela esse efeito e faz o personagem entrar no estado 'Exausto'.",
            "- Exausto: Você usou todas as suas forças. Receba -1 em qualquer Teste e -2 Dano. Esse efeito dura até o personagem poder descansar, não podendo ser removido antes do final do combate."
        ],
        "conceitos": [

        ],
        "nivel": 2
    },
    {
        "id": 370,
        "tipo": "especial",
        "nome": "Poder Reserva",
        "nomeLimpo": "Poder Reserva",
        "efeitos": [
            "Esse deve ser o único addon na técnica e ele pode ser adicionado várias vezes. Você não pode possuir mais de uma técnica com Poder Reserva.",
            "Quando um personagem compra Poder Reserva, ele passa a ter -X em todos seus atributos de combate acima de 0, onde X é igual à quantidade de Poder Reserva nessa técnica.",
            "O personagem pode gastar um turno em combate para reduzir o redutor em atributos de Poder Reserva em 1. Isso não consome MP.",
            "O personagem pode retirar os redutores como uma ação extra ao custo de 15 MP. Isso retira apenas um redutor (mas o personagem pode retirar todos os redutores no mesmo turno, se quiser, pagando o custo várias vezes).",
            "Aumente o MP máximo do personagem em 10 MP para cada Poder Reserva nessa técnica."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 221,
        "tipo": "especial",
        "nome": "Purify",
        "nomeLimpo": "Purify",
        "efeitos": [
            "Escolha um aliado e uma aflição ou debuff que ele esteja sofrendo. Ele não está mais sob esse efeito.",
            "Esse addon gasta o turno do usuário quando usado.",
            "Aumente o custo em 4 MP."
        ],
        "conceitos": [

        ],
        "nivel": 2
    },
    {
        "id": 309,
        "tipo": "especial",
        "nome": "Reflect I",
        "nomeLimpo": "Reflect I",
        "efeitos": [
            "Ativar esse efeito consome o turno do usuário.",
            "O próximo ataque realizado contra você é redirecionado a um dos aliados do atacante, mas o teste de acerto é feito com um modificador de -2. Esse efeito não se ativa se só existir um inimigo.",
            "Quando você está tentando refletir um ataque, isso é algo que fica muito claro para os inimigos. No caso de um NPC, o mestre deve assumir que o NPC sabe muito bem o que o personagem está fazendo. No caso de um Jogador, ele deve ser avisado caso não saiba.",
            "Consome 6 MP."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 2
    },
    {
        "id": 310,
        "tipo": "especial",
        "nome": "Reflect II",
        "nomeLimpo": "Reflect II",
        "efeitos": [
            "Ativar esse efeito consome o turno do usuário.",
            "Faça um teste de esquiva contra o próximo ataque realizado contra você. Se você esquivar com sucesso, o dano do ataque é causado no atacante, mas reduzido em 50%.",
            "Quando você está tentando refletir um ataque, isso é algo que fica muito claro para os inimigos. No caso de um NPC, o mestre deve assumir que o NPC sabe muito bem o que o personagem está fazendo. No caso de um Jogador, ele deve ser avisado caso não saiba.",
            "Consome 6 MP."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 3
    },
    {
        "id": 344,
        "tipo": "especial",
        "nome": "Restauração - Absorb Pain",
        "nomeLimpo": "Restauracao - Absorb Pain",
        "efeitos": [
            "Escolha um aliado. Ele pode gastar um ponto de stamina e se curar a quantidade normal com um bônus igual à cura de stamina do usuário desse poder.",
            "Ativar esse efeito não consome MP e não gasta o turno do personagem. ",
            "Como um custo extra para ativar esse efeito, pague 1 Stamina."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 343,
        "tipo": "especial",
        "nome": "Restauração - Heal Other",
        "nomeLimpo": "Restauracao - Heal Other",
        "efeitos": [
            "Custo de ativação de 3 MP.",
            "Escolha um aliado. Esse aliado pode gastar um ponto de Stamina e se curar a quantidade normal com um bônus de 1d6.",
            "Ativar esse efeito não consome o turno do personagem, mas só pode ser utilizado uma vez por rodada.",
            "Caso esse addon seja utilizado em itens, o personagem pode usar o item em si mesmo.",
            " Nesse caso, substitua o bônus de 1d6 por \"quantidade de Restauração I no item\". Um ítem com Restauração I duas vezes iria curar a quantidade normal + 2."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 342,
        "tipo": "especial",
        "nome": "Restauração - Healing Aura",
        "nomeLimpo": "Restauracao - Healing Aura",
        "efeitos": [
            "Todos os seus aliados (você não) podem gastar um ponto de Stamina e se curar a quantidade normal. Um personagem só pode ser afetado por Healing Aura uma vez por combate.",
            "Utilizar essa habilidade consome o turno do usuário.",
            "Custo de ativação em 2 MP."
        ],
        "conceitos": [

        ],
        "nivel": 2
    },
    {
        "id": 369,
        "tipo": "especial",
        "nome": "Restauração - Mountain's Stand",
        "nomeLimpo": "Restauracao - Mountain's Stand",
        "efeitos": [
            "Você gasta um ponto de stamina e se cura na quantidade normal + 1d4. Isso consome o turno do personagem.",
            "Restauração - Mountain's Stand só pode ser utilizada quando o personagem possui alguma passiva com addons da família Protection ativa. Caso contrário, mesmo que uma técnica com Mountain's Stand seja criada, ela não poderá ser utilizada.",
            "Custo de ativação desse efeito é 2 MP."
        ],
        "conceitos": [
            "coragem"
        ],
        "nivel": 1
    },
    {
        "id": 345,
        "tipo": "especial",
        "nome": "Restauração - Patch up",
        "nomeLimpo": "Restauracao - Patch up",
        "efeitos": [
            "Durante a criação dessa técnica, escolha um atributo de dano.",
            "Ative esse efeito em um aliado. O aliado se cura em 1d4 ou no seu atributo de dano escolhido, o que for maior. O personagem pode gastar uma Bandagem ou algum item equivalente para aumentar a cura final em +2.",
            "Custo de ativação em 1 MP. Ativar esse efeito consome o turno do personagem."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 353,
        "tipo": "especial",
        "nome": "Rewind",
        "nomeLimpo": "Rewind",
        "efeitos": [
            "Escolha um aliado. Até o início do seu próximo turno, o primeiro ataque que fosse nocautear ele tem 50% de chance (1d100 <= 50) de deixá-lo com apenas 1 de HP ao invés disso.",
            "Proteções de Rewind não acumulam em um mesmo personagem. Um personagem só pode ser salvo por Rewind uma vez por combate.",
            "Não consome o turno do usuário, mas só pode ser usada uma vez por rodada.",
            "Custo de ativação em 2."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 289,
        "tipo": "especial",
        "nome": "Stare Master",
        "nomeLimpo": "Stare Master",
        "efeitos": [
            "Escolha um oponente e realize um teste de ataque contra ele. Se você passar, o inimigo ficará marcado até o início do seu próximo turno.",
            "O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque e os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "Aumente o usto da técnica em 2 MP. Essa habilidade só pode ser usada uma vez por turno do usuário."
        ],
        "conceitos": [
            "marcas",
            "basicos"
        ],
        "nivel": 1
    },
    {
        "id": 201,
        "tipo": "especial",
        "nome": "Summon Ally",
        "nomeLimpo": "Summon Ally",
        "efeitos": [
            "Invoca um aliado que lutará ao seu lado. O aliado é representado por uma Arma de Duas Mãos que sempre possui o addon \"Autômato sem alma\".",
            "O aliado possui dois slots de addons.",
            " Autômato sem alma não ocupa slots.",
            "Summon Ally pode ser ativada uma vez durante a fase de preparação. Caso ativada durante o combate, Summon Ally consome o turno do personagem. O consumo do turno pode ser ignorado mediante um pagamento extra de 9 MP durante a ativação.",
            "Custo reduzido para 1.Você conjura um aliado que lutará junto de você até o fim da batalha ou até receber um ataque. O aliado pode ser utilizado em técnicas que usem um Atributo decidido na criação da técnica como dano puro. Enquanto ele estiver disponível, você pode gastar o seu turno para ordenar um ataque com dano 1d6 + O Atributo Escolhido.  Você pode considerar a criatura como um aliado para alguns efeitos relevantes (como o efeito de redirecionar um ataque a um aliado).",
            "O nível da criatura invocada é igual ao seu, e ela é um equipamento que obrigatóriamente tem Autômato sem Alma (arma de duas mãos). A \"arma\" não pode receber técnicas por addons.",
            "Custo da técnica em 6 por conjuração."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 202,
        "tipo": "especial",
        "nome": "Sword of the Holy Titans",
        "nomeLimpo": "Sword of the Holy Titans",
        "efeitos": [
            "Você conjura uma peça de equipamento de nível 2, com dois slots de addon.",
            "A técnica com esse addon só pode conjurar um único tipo de equipamento e ele deve ser decidido na criação da técnica.",
            "Colocar cópias desse addon permite conjurar outros equipamentos.",
            "Custo da técnica em 1 por conjuração.",
            "Este addon gasta o turno do usuário ao ser usado.",
            "O equipamento conjurado deve ser uma Arma de Duas Mãos, Arma de uma Mão, Arma Defensiva ou Armadura. Ele não pode ser um item consumível nem um acessório.",
            "Além disso, itens criados por essa técnica nunca podem possuir uma técnica dentro deles."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 320,
        "tipo": "especial",
        "nome": "Ultimate Sacrifice",
        "nomeLimpo": "Ultimate Sacrifice",
        "efeitos": [
            "Você pode ativar esse efeito quando um aliado iria receber dano. Ao invés disso, você recebe o dano no lugar do seu aliado, porém o dano final é aumentado em 3. Se você fosse receber 1 de dano, você recebe 4.",
            " O aumento no dano é adicionado após o calculo de RD.",
            "Seu aliado não recebe dano algum.",
            "Esse efeito não tem custo."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    /*
     * Técnicas Passivas
     */
    {
        "id": 360,
        "tipo": "passiva",
        "nome": "A true leader shows no weakness",
        "nomeLimpo": "A true leader shows no weakness",
        "efeitos": [
            "Enquanto essa passiva estiver ligada você não entra em estado de Morrendo nem pode ficar Inconsciente. Você pode continuar lutando até seu HP ficar 10 pontos negativos ou pior, momento no qual você simplesmente cai morto imediatamente.",
            "Se a luta acabar com seu HP em negativo ou zerado, aí sim você entra em estado de Morrendo e faz os testes de morte.",
            "Esse efeito não pode ser utilizado em lutas contra outros jogadores.",
            "Esse efeito não aumenta o custo por rodada da técnica, mas ele só pode ser adicionado em uma técnica passiva que tenha \"The End is Near\"."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 299,
        "tipo": "passiva",
        "nome": "Aura",
        "nomeLimpo": "Aura",
        "efeitos": [
            "Extenda todos os bônus brutos dos seus estilos de luta para todos os seus aliados. Esses bônus se tornam Bônus de Poder quando repassados a seus aliados.",
            "Você não recebe mais os Bônus brutos do seu estilo de luta. Você ainda é afetado pelos redutores de seu estilo de luta.",
            "Redutores não são repassados: \"Golpes Rápidos e Fracos\" (+1 Ataque | -1 Dano) se tornaria +1 Bônus de Poder em Ataque para aliados.",
            "Efeitos de estilos de luta que não sejam bônus brutos não são repassados. Adepto de Batalha, um bônus condicional, não se passa para aliados de forma alguma.",
            "Não altera o custo do estilo de luta.",
            "Não aumenta o custo da passiva."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 341,
        "tipo": "passiva",
        "nome": "Berserking",
        "nomeLimpo": "Berserking",
        "efeitos": [
            "Caso você receba um dano final que exceda sua cura por Stamina, você pode gastar um ponto de Stamina se curar.",
            "Quando você realiza um ataque dentro do seu turno e você recebeu algum dano desde o seu último turno, aumente seu dano em +2, esse bônus só é ganho no seu turno atual desde que a condição seja obedecida. No fim do seu turno, esse efeito é resetado.",
            "Enquanto esse efeito estiver ativo, reduza todas as suas RDs em 2 pontos.",
            "Aumente custo total da técnica em 2 (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 346,
        "tipo": "passiva",
        "nome": "Boon of the Pacifist",
        "nomeLimpo": "Boon of the Pacifist",
        "efeitos": [
            "Aumente qualquer cura que você entregaria aos aliados em +2.",
            "Caso algum inimigo receba dano por um ataque iniciado por você (independente de você ser o personagem rolando o dano ou não), você recebe a mesma quantidade de dano como dano direto.",
            "Aumente custo total da técnica em 1 (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa.",
            "Desativar essa técnica consome o turno do personagem."
        ],
        "conceitos": [

        ],
        "nivel": 2
    },
    {
        "id": 306,
        "tipo": "passiva",
        "nome": "Boon of the Protector",
        "nomeLimpo": "Boon of the Protector",
        "efeitos": [
            "Inimigos marcados por você causam 1 ponto de dano a menos contra você, redução aplicada após o cálculo de danos e podendo reduzir o dano tomado a 0.",
            "Ataques realizados com técnicas dentro do seu turno tem o modificador de sua rolagem de dano reduzido ao meio. Ataques básicos não são afetados.",
            "Aumente custo total da técnica em 1 (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa."
        ],
        "conceitos": [
            "marcas",
            "basicos"
        ],
        "nivel": 1
    },
    {
        "id": 347,
        "tipo": "passiva",
        "nome": "Change Form",
        "nomeLimpo": "Change Form",
        "efeitos": [
            "Escolha dois atributos de dano durante a criação dessa técnica. Enquanto ela estiver ativa, troque esses atributos de lugar.",
            "Ataques utilizando os atributos escolhidos sempre incluem o outro atributo como tipo de dano. Um personagem que troca seus valores de Arma e Magia e realiza ataques com qualquer um dos dois estará causando um dano do tipo (Arma, Magia).",
            "Aumente custo total da técnica em 2 (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa.",
            "Ativar ou desativar essa técnica passa a consumir o turno do personagem.",
            "Esse addon consome dois slots e deve ser o único addon na técnica.",
            "ESSE ADDON ENVOLVE TROCA DE ATRIBUTOS E ISSO É <strong>ALTAMENTE<\/strong> EXPERIMENTAL. ESSE ADDON SERÁ, POSSIVELMENTE, REMOVIDO OU RETRABALHADO DE FORMA SIGNIFICATIVA. NÃO UTILIZE ESSE ADDON SEM ESTAR PREPARADO PSICOLOGICAMENTE PARA LIDAR COM ISSO."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 314,
        "tipo": "passiva",
        "nome": "Efeito Narrativo",
        "nomeLimpo": "Efeito Narrativo",
        "efeitos": [
            "Adiciona um efeito apenas dentro da história ou cena acontecendo. Quando criando uma técnica, você já tem uma certa quantidade de \"Efeito Narrativo\" colocado pela descrição que você dá a ela. Sempre assuma que sua técnica NÃO precisa de Efeito Narrativo.",
            "Efeito Narrativo é necessário para efeitos que talvez não devessem ser permitidos, ou que sejam grandes demais. O mestre deve informar o jogador sobre quando Efeito Narrativo é necessário para manter a descrição escolhida.",
            "As regras de unicidade entre técnicas passivas diferentes não se aplicam a Efeito Narrativo."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 351,
        "tipo": "passiva",
        "nome": "High Spell Voltage Zone",
        "nomeLimpo": "High Spell Voltage Zone",
        "efeitos": [
            "Ações realizadas por aliados e inimigos recebem custos extras de MP.",
            "Defesas: 1 MP",
            "Ataques: 2 MP",
            "O personagem com essa passiva ativa recebe os custos extras duas vezes.",
            "Defesas: 2 MP",
            "Ataques: 4 MP",
            "Ativar esse efeito não é opcional para aliados nem inimigos.",
            ""
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 348,
        "tipo": "passiva",
        "nome": "Immovable Object",
        "nomeLimpo": "Immovable Object",
        "efeitos": [
            "Aumente cada uma de suas RDs específicas num valor igual ao menor entre os valores de RESISTÊNCIA e O ATRIBUTO RELEVANTE do personagem.  Isso significa que um guerreiro com Arma 3 e Resistência 1 teria sua RD em Arma aumentada em 1 (1 < 3). Caso o mesmo guerreiro tenha uma Liderança de 0, sua RD de Liderança seria aumentada por 0 (0 < 1)",
            "Aumente custo total da técnica em 2 (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa."
        ],
        "conceitos": [

        ],
        "nivel": 2
    },
    {
        "id": 352,
        "tipo": "passiva",
        "nome": "Lifelink",
        "nomeLimpo": "Lifelink",
        "efeitos": [
            "Escolha um inimigo.",
            "Sempre que o inimigo escolhido receber dano de alguém que não é você, você recebe a mesma quantia de dano (pós-reduções) como dano direto.",
            "Sempre que você receber dano de alguém que não é o inimigo escolhido, o inimigo escolhido recebe a mesma quantia de dano (pós-reduções) como dano direto.",
            "O inimigo pode sacrificar o turno dele para interromper essa técnica. Se ele fizer isso, você não pode usar essa técnica nele novamente até o fim da batalha.",
            "Sua descrição para essa técnica deve levar como esse addom funciona em conta, incluindo a forma pela qual o inimigo cancela o efeito.",
            "Os efeitos deste addon acabam quando o usuário ou vítima chegam a 0 de HP.",
            "Aumente custo total da técnica em 1 (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 195,
        "tipo": "passiva",
        "nome": "Magical Flux",
        "nomeLimpo": "Magical Flux",
        "efeitos": [
            "Enquanto esta passiva estiver ativa, toda vez que VOCÊ for pagar 4 ou mais de MP de uma vez só (como em uma técnica de Ataque ou poder ativado), você paga 4 MP a mais.",
            "Magical Flux não pode ser incluída em Passivas criadas por Armaduras.",
            "Diminua o custo dessa passiva em 2 MP por rodada.",
            "Exemplo: Realizar um ataque de custo 6 MP com Magical Flux ativa aumenta o custo para 10 MP.",
            "Exemplo 2: Se você tiver uma passiva com custo de 4 MP por rodada e estiver com ela ativa enquanto Magical Flux está ligada, o custo dela por rodada passa a ser 8 MP."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 321,
        "tipo": "passiva",
        "nome": "Master of Illusions",
        "nomeLimpo": "Master of Illusions",
        "efeitos": [
            "Enquanto essa habilidade estiver ativa, toda vez que um oponente conseguir um resultado de 1 no seu teste de ataque e não acertar o seu alvo original, ele deve refazer o teste com um modificador de -2 contra um aliado aleatório, que só pode tentar se esquivar.",
            "Se ele obtiver sucesso nesse teste, o ataque dele é feito normalmente contra o novo alvo.",
            "Se esse for o único addon em uma técnica, ele não aumenta seu custo, mantendo os 0 MP originais de passivas. Caso contrário, ele aumente custo total da técnica em 1 (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa."
        ],
        "conceitos": [

        ],
        "nivel": 2
    },
    {
        "id": 354,
        "tipo": "passiva",
        "nome": "Master of One",
        "nomeLimpo": "Master of One",
        "efeitos": [
            "Escolha seu maior atributo de dano durante a criação da técnica com esse addon. Sempre que você fosse utilizar ele para causar dano, substitua ele pela sua Sabedoria de Combate.",
            "Se o atributo escolhido deixar de ser o maior atributo ele se torna inválido e, portanto, a técnica com Master of one não pode ser ativada.",
            "Sua sabedoria de combate passa a ser tratada como um outro atributo de dano e pode ser utilizada tanto em ataques comuns quanto em técnicas. Técnicas que utilizem Sabedoria de Combate no seu dano não podem ser utilizadas sem Master of One estar ativa.",
            "Para quaisquer efeitos que exijam dois atributos de dano com o mesmo nível base, sua sabedoria de combate e seu maior atributo de dano contam como tendo o mesmo nível base.",
            "Quando sabedoria de combate é envolvida em um ataque, ela é tratada como o seu maior atributo de dano comum. Um personagem que utilizou master of one em Arma iria causar ataques do tipo Arma quando atacando com sabedoria de combate.",
            "Aumente custo total da técnica em 2 (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa.",
            "Caso esse addon seja o único addon na técnica, você pode fazer ela estar sempre ativa e não gastar MP.",
            "Explicação: Essa técnica resulta em seu um atributo passar a funcionar exatamente como se fosse 2. Isso significa que você perde as vantagens conferidas por se ter apenas um atributo (ataques básicos muito fortes) mas recebe as vantagens de dois atributos (ataques especiais muito fortes). Esse addon possui utilidade questionável para personagens com mais de um atributo de dano."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 349,
        "tipo": "passiva",
        "nome": "Natural",
        "nomeLimpo": "Natural",
        "efeitos": [
            "Essa técnica é ativada na primeira oportunidade e não pode ser desativada em hipótese alguma, mas não consome MP fora de combate. Ela passa a ser uma vantagem inata do personagem.",
            "Reduza custo total da técnica em 1 (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 367,
        "tipo": "passiva",
        "nome": "Protection - Defend the Weak",
        "nomeLimpo": "Protection - Defend the Weak",
        "efeitos": [
            "No fim de cada um de seus turnos, marque até um oponente.",
            "Divida os modificadores das suas rolagens de dano por 2. Se você fosse rolar 1d6 + 10, role 1d6 +5 ao invés disso. Se sua rolagem de dano já ia ser reduzida por um efeito similar, o efeito não se acumula.",
            "Ataques Básicos não tem seus modificadores reduzidos.",
            "Enquanto essa passiva estiver ativa, você não pode ativar suas Marcas para realizar ataques básicos. Ao invés disso, você pode redirecionar ataques de inimigos marcados por você para você mesmo. Quando você faz isso, você só pode Bloquear o ataque, não esquivar.",
            "Se esse addon for o único addon em uma técnica, o personagem pode decidir fazer essa técnica ser o estado natural dele. Nesse caso, a técnica não possui mais custo e está SEMPRE ativa.",
            "Enquanto essa passiva estiver ativa, você pode realizar a ação \"Buscar Coragem\".",
            "Ativar essa passiva consome o turno do personagem. Desativar essa passiva consome o turno do personagem.",
            "Caso contrário, aumente custo total da técnica em 2 (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa."
        ],
        "conceitos": [
            "unicidade",
            "coragem",
            "basicos",
            "marcas"
        ],
        "nivel": 1
    },
    {
        "id": 336,
        "tipo": "passiva",
        "nome": "Protection - Protector Wall",
        "nomeLimpo": "Protection - Protector Wall",
        "efeitos": [
            "No fim de cada um de seus turnos, marque até dois oponentes.",
            "Divida os modificadores das suas rolagens de dano por 2. Se você fosse rolar 1d6 + 10, role 1d6 +5 ao invés disso. Se sua rolagem de dano já ia ser reduzida por um efeito similar, o efeito não se acumula.",
            "Ataques Básicos não tem seus modificadores reduzidos.",
            "Enquanto essa passiva estiver ativa, seus ataques por ativação de Marca passam a acontecer antes dos ataques do alvo.",
            "Se você atingir um ataque causado pela ativação de Marca, o inimigo não pode mais atacar o seu aliado. Ele pode decidir entre redirecionar o ataque dele para você ou cancelar o ataque. Se ele cancelar o ataque, ele ainda perde o turno dele. Se ele redirecionar o ataque para você, você pode realizar a defesa normalmente.",
            "Enquanto essa técnica estiver ativa, você pode realizar a ação \"Buscar Coragem\".",
            "Ativar essa técnica consome o turno do personagem. Desativar essa técnica consome o turno do personagem.",
            "Aumente custo total da técnica em 2 (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa."
        ],
        "conceitos": [
            "marcas",
            "basicos",
            "coragem"
        ],
        "nivel": 1
    },
    {
        "id": 337,
        "tipo": "passiva",
        "nome": "Protection - Stalwart Protector",
        "nomeLimpo": "Protection - Stalwart Protector",
        "efeitos": [
            "No fim de cada um de seus turnos, marque até dois oponentes.",
            "Divida os modificadores das suas rolagens de dano por 2. Se você fosse rolar 1d6 + 10, role 1d6 +5 ao invés disso. Se sua rolagem de dano já ia ser reduzida por um efeito similar, o efeito não se acumula.",
            "Ataques Básicos não tem seus modificadores reduzidos.",
            "Se esse addon for o único addon em uma técnica, o personagem pode decidir fazer essa técnica ser o estado natural dele. Nesse caso, a técnica não possui mais custo e está SEMPRE ativa.",
            "Enquanto essa passiva estiver ativa, você pode realizar a ação \"Buscar Coragem\".",
            "Ativar essa passiva consome o turno do personagem. Desativar essa passiva consome o turno do personagem.",
            "Caso contrário, aumenta o custo da técnica em 2 por rodada."
        ],
        "conceitos": [
            "marcas",
            "basicos",
            "coragem"
        ],
        "nivel": 1
    },
    {
        "id": 359,
        "tipo": "passiva",
        "nome": "The End is Near",
        "nomeLimpo": "The End is Near",
        "efeitos": [
            "Se você atingir um inimigo e causar dano com um ataque, até o início do seu próximo turno, o primeiro uso de Stamina por um aliado cura 1d4 pontos extras, independente de qual efeito está permitindo o uso (item, técnica dele, técnica de outro, tudo conta). The End is Near não se acumula.",
            "Aumente custo total da técnica em 2 (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 197,
        "tipo": "passiva",
        "nome": "Troca Perigosa I",
        "nomeLimpo": "Troca Perigosa I",
        "efeitos": [
            "Enquanto essa técnica estiver ativa, o personagem causa -2 pontos de dano.",
            "Diminua custo total da técnica em 2  (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa.",
            "Troca Perigosa só é afetada pelas regras de unicidade quando afetando o mesmo atributo. Você pode ter várias Troca Perigosa na mesma passiva, contanto que elas não repitam atributo. Você pode ter Troca Perigosa em mais de uma passiva ativa ao mesmo tempo, contanto que essas Troca Perigosa não afetem o mesmo atributo."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 2
    },
    {
        "id": 196,
        "tipo": "passiva",
        "nome": "Troca Perigosa II",
        "nomeLimpo": "Troca Perigosa II",
        "efeitos": [
            "Enquanto essa técnica estiver ativa, o usuário recebe um redutor de -1 em testes que utilizam Defesa ou Ataque (escolha um na criação da técnica).",
            "Diminua custo total da técnica em 2  (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa.",
            "Troca Perigosa só é afetada pelas regras de unicidade quando afetando o mesmo atributo. Você pode ter várias Troca Perigosa na mesma passiva, contanto que elas não repitam atributo. Você pode ter Troca Perigosa em mais de uma passiva ativa ao mesmo tempo, contanto que essas Troca Perigosa não afetem o mesmo atributo."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 2
    },
    /*
     * Estilos de Luta
     * ID Range: 5000~5999
     */
    {
        "id" : 5000,
        "nivel" : 1,
        "tipo" : "estilo",
        "nome" : "Golpes Rápidos e Fracos",
        "nomeLimpo" : "Golpes Rapidos e Fracos",
        "efeitos" : [
            "+1 Ataque e -1 Dano",
            "Aumenta o custo em 2 MP por rodada."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : 5001,
        "nivel" : 1,
        "tipo" : "estilo",
        "nome" : "Evasão de Combate",
        "nomeLimpo" : "Evasao de Combate",
        "efeitos" : [
            "+1 Defesa",
            "Aumenta o custo em 3 MP por rodada."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : 5002,
        "nivel" : 1,
        "tipo" : "estilo",
        "nome" : "Potência de Combate",
        "nomeLimpo" : "Potencia de Combate",
        "efeitos" : [
            "+1 Dano",
            "Aumenta o custo em 2 MP por rodada."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : 5003,
        "nivel" : 1,
        "tipo" : "estilo",
        "nome" : "Precisão de Combate",
        "nomeLimpo" : "Precisao de Combate",
        "efeitos" : [
            "+1 Ataque",
            "Aumenta o custo em 3 MP por rodada."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : 5004,
        "nivel" : 1,
        "tipo" : "estilo",
        "nome" : "Golpes Fortes e Lentos",
        "nomeLimpo" : "Golpes Fortes e Lentos",
        "efeitos" : [
            "+1 Dano, -1 Ataque",
            "Aumenta o custo em 1 MP por rodada."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : 5005,
        "nivel" : 1,
        "tipo" : "estilo",
        "nome" : "Força Descontrolada",
        "nomeLimpo" : "Forca Descontrolada",
        "efeitos" : [
            "+2 Dano, -1 Ataque",
            "Aumenta o custo em 4 MP por rodada."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : 5006,
        "nivel" : 1,
        "tipo" : "estilo",
        "nome" : "Cuidado Excessivo",
        "nomeLimpo" : "Cuidado Excessivo",
        "efeitos" : [
            "+1 Defesa, -2 Dano",
            "Aumenta o custo em 1 MP por rodada."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : 5007,
        "nivel" : 1,
        "tipo" : "estilo",
        "nome" : "Excesso de Poder",
        "nomeLimpo" : "Excesso de Poder",
        "efeitos" : [
            "+2 Dano ",
            "Aumenta o custo em 6 MP por rodada."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : 5008,
        "nivel" : 1,
        "tipo" : "estilo",
        "nome" : "Correr Riscos",
        "nomeLimpo" : "Correr Riscos",
        "efeitos" : [
            "-2 RD Geral ",
            "Diminui o custo em 3 MP por rodada."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : 5009,
        "nivel" : 1,
        "tipo" : "estilo",
        "nome" : "Guarda Aberta",
        "nomeLimpo" : "Guarda Aberta",
        "efeitos" : [
            "-4 RD Geral ",
            "Diminui o custo em 4 MP por rodada."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : 5010,
        "nivel" : 1,
        "tipo" : "estilo",
        "nome" : "Segurando Força",
        "nomeLimpo" : "Segurando Forca",
        "efeitos" : [
            "-2 Dano ",
            "Diminui o custo em 3 MP por rodada."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : 5011,
        "nivel" : 1,
        "tipo" : "estilo",
        "nome" : "Movimentação Dificultada",
        "nomeLimpo" : "Movimentacao Dificultada",
        "efeitos" : [
            "-1 Defesa",
            "Diminui o custo em 3 MP por rodada."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : 5012,
        "nivel" : 1,
        "tipo" : "estilo",
        "nome" : "Adepto de Batalha",
        "nomeLimpo" : "Adepto de Batalha",
        "efeitos" : [
            "Receba +1 em testes de Ataque e Defesa, contanto que o nível base (sem bônus) do atributo sendo rolado não seja maior do que sua Sabedoria de Combate.",
            "Aumenta o custo em 2 MP por rodada."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : 5013,
        "nivel" : 1,
        "tipo" : "estilo",
        "nome" : "Maestria de Combate",
        "nomeLimpo" : "Maestria de Combate",
        "efeitos" : [
            "Se seus dois maiores atributos de dano possuirem o mesmo nível, receba +1 em rolagens de dano que envolvam qualquer um deles. Se uma rolagem de dano envolver os dois atributos juntos, receba +2 Dano ao invés disso.",
            "Aumenta o custo em 2 MP por rodada."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : 5014,
        "nivel" : 1,
        "tipo" : "estilo",
        "nome" : "Posição Fortificada",
        "nomeLimpo" : "Posicao Fortificada",
        "efeitos" : [
            "Ao ativar esse estilo de luta, seu HP Atual e Máximo aumentam em 2. Isso não conta como uma cura.",
            "Ao desativar esse estilo de luta, seu HP Atul e Máximo diminuem em 2. Isso não conta como um dano, mas se seu HP ficar inferior a 1, isso deverá ser tratado normalmente.",
            "Aumenta o custo em 2 MP por rodada."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : 5015,
        "nivel" : 1,
        "tipo" : "estilo",
        "nome" : "Fragilidade",
        "nomeLimpo" : "Fragilidade",
        "efeitos" : [
            "Quando esse estilo for ativado, reduza seu HP máximo e atual em 3, isso não conta como um dano, mas pode reduzir seu HP para baixo de 1 e isso deve ser tratado normalmente se acontecer.",
            "Quando esse estilo for desativado, aumente seu HP máximo em 3, seu HP atual não é modificado.",
            "Aumenta o custo em 3 MP por rodada."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : 5016,
        "nivel" : 1,
        "tipo" : "estilo",
        "nome" : "Domínio Absoluto",
        "nomeLimpo" : "Dominio Absoluto",
        "efeitos" : [
            "Enquanto esse estilo estiver ativo, você pode reduzir qualquer custo de MP sendo pago durante o seu turno em 1, uma vez.",
            "Esse addon pode ser adicionado duas vezes no mesmo estilo de luta, passando a permitir que a redução aconteça duas vezes.",
            "De uma maneira simplificada: Domínio Absoluto permite que você economize 1 MP por rodada."
        ],
        "conceitos" : [
            
        ]
    }
];