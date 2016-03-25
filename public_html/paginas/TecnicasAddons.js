 /**
 * 
 * Changelog
 * @type Array
 */
window.techChangelog = [  
{	 
        version : [5,1],
        description : [
			"O addon \"Poção\" agora clarifica que não consome o turno, mas itens com esse addon só podem ser usados 1x por rodada. Isso impede um bug não-intencional de personagens poderem bebe N poções num único turno.",
			"Clarificado que \"Esforço Agressivo\" agora só pode ser usado uma vez por rodada, impedindo um loophole de usar o addon junto de técnicas de cura infinitamente.",
			"Clarificado que em \"Stare Master\" em casos de empate, ambas as partes devem re-jogar os dados.",
			"Clarificado no texto de \"Mocking Strike\" e \"Gaze of the Guardian\" que contra-ataques ainda são permitidos sem trancar a vítima em quem deu este efeito nela.",
			"Clarificado que em \"On My Command\" esquivas críticas não ocorrem quando tratando do ATK (do aliado) vs DEF (do inimigo).",
			"O addon \"Punishing Volt\" teve seu nível requerido reduzido para 2 (antigo: 3).",
			"O addon \"Sharing is Caring\" agora permite que o usuário do addon se cure em mais de 1 HP, removendo a restrição prévia. Além disso, não gasta SP na self-heal. Entretanto, teve seu custo de SP aumentado para 3 (antigo 2) e impedido de ter o custo deste addon reduzido por qualquer outro addon.",
			"Clarificado o texto em \"Divine Trap\" sobre seus custos.",
			"O addon \"Area of No Effect\" ganhou algumas clarificações e adições frente ao seu uso e duração.",
			"Clarificado em \"Shroud of Peace\" que seu efeito ocorre independente de zonas, diferenciando-se assim do Area of No Effect.",
			"O addon \"Supress\" agora não gasta mais o turno do personagem, mas só pode ocorrer uma vez por rodada.",
			"Clarificado que \"Ultimate Sacrifice\" agora precisa estar na mesma zona do alvo para protegê-lo. Adicionada uma opção de pagar SP para proteger alvos de zonas adjacentes.",
			"Novo addon: \"Raging Strikes\".",
			"HOTFIX [20/03]: Clarificada a duração básica de marcas.",
			"HOTFIX [20/03]: Clarificado que Controle Absoluto não funciona junto de Area of Effect.",
			"HOTFIX [20/03]: Clarificado o que ocorre em empates pelo addon Backstabber."
			]			
 },
{	 
        version : [4,7],
        description : [
			"Clarificado que o bônus de Bloodlust duram até o início da próxima rodada do usuário, tapando buracos dessa forma.",
			"Readicionada a condição pra Estilos de Luta: Quando estiver lutando invisível...",
			"Punishing Volt clarificado que não se ativa com danos passivos e/ou de DoT.",
			"Area Of Effect: Clarificado que o dano é normalizado.",
			"Praying Shield: Escrita a duração do efeito que estava faltando.",
			"Novos addons especiais: Restauração - Dispel to Heal e Restauração - Chain Heal.",
			"Novo addon para armaduras que não havia sido documentado: Último Suspiro.",
			"Novo addon para itens consumíveis: Reator de Mana.",
			"Novos addons para armas: Atordoante, Obliterante e Vorpal.",
			]			
 },
 {	 
        version : [4,6],
        description : [
			"Novos addons de técnicas: Restauração - Lifebloom, Disruption, Collateral Damage, Multiple Crush, Killing Intent, Frenzy Eater",
			"Novos addons de armas: Brutal e Rápida",
			"Novo addon para armas defensivas: Blindado", 
			"Novo addon para armaduras: Impenetrável, Energizada e Último Suspiro",
			"Novo addon para acessórios: Zephyr e Vigor",
			"Nova opção para Pontos de Habilidade: Quebrar addons em técnicas menores (2 PH).",
			"Mage Killer agora remove metade do dano causado (pós-RDs) de SP do atacante (antigo: 1 SP). Custo aumentado também.",
			"Clarificado que causar dano em si mesmo por lifelink não repassa o dano para o inimigo.",
			"Punishing volt remove a restrição de não poder acertar o atacante, incluindo agora todos os inimigos de combate. Também pode ser usado em combates 1x1, porém seu custo agora não pode ser reduzido por nenhum outro addon.",
			"Haymaker tem seu custo reduzido para 3 SP (antigo: 6).",
			"Soul Strike modificado - Agora você pode cancelar 50% do dano causado e ainda reduzir um ponto de stamina do alvo, enquanto ainda causa a outra metade do dano.",
			"Strong But Slow I e II tem seus custos restaurados aos seus valores originais de fábrica (0 e 1, respectivamente).",
			"Último Recurso - clarificado a relação das reações de um alvo atingido por este addon.",
			"Praying Shield teve seu bônus renomeado para a versão 4.1 do sistema.",
			"Look teve seu segundo efeito escrito de uma forma mais clara para entender que o usuário do addon escolhe um dos efeitos, não os dois.",
			"Spellthief teve seu custo de SP reduzido para 4 (old: 6).",
			"Incontrollable Power tem seu nome corrigido para a gramática correta: Uncontrollable Power",
			"Ícone de Immovable Object alterado para não ser o mesmo de Supress",
			"Wooden Skin teve seu custo de SP reduzido para 2 e 4 (old: 3 e 6). O nível necessário para pegar esse addon agora é 2 (old: 3).",
			"Esforço Agressivo teve seu custo de SP reduzido para 6 (old: 10).",
			"Overwhelming Force teve seu custo de SP reduzido para 1 (old: 3).",
			"No Flaws teve seu custo de SP reduzido para 1 (old: 2).",
			"Bloodlust teve seu nível mínimo requerido para 3, ao invés de 4.",
			"Knight e Crusader Training foram removidos.",
			"Bloqueio Agressivo teve uma linha clarificada quanto ao seu funcionamento e sobre esquivas em contra-ataques.",
			"Crusader e Knight Training levemente refeitos pra tornarem-se mais atrativos. Agora fazem parte de uma mesma família também.",
			"Corrigido um bug onde \"Buscar Coragem\" requeria 5% do SP. Esta é uma versão antiga, então agora foi migrado para o correto (2 SP).",
			"HOTFIX: Impenetrável e Blindado agora reduzem qualquer tipo de dano em 5% respectivamente, ficando matematicamente mais apropriado para neutralizar alguém que use o addo \"Buscar Coragem\"",
			]
 },
	 
 {	 
        version : [4,5],
        description : [
            "Embrace the shadows pode ser ativada no turno 0.",
            "Special Attack I e Special Attack Ranged I: Arredondamento do bônus de dano passa a ser feito para BAIXO. Custo de ambas reduzido a 1 para refletir essa mudança.",
            "'Protegido' para atributos de combate alterado para Bônus de Proteção para seguir o padrão do resto do sistema e diminuir dores de cabeça.",
            "Boon of the Opressor/Agressor renomeados para Boon of the Oppressor/Aggressor.",
            "Boon of the Aggressor reescrita para ficar mais clara.",
			"Estilos de Luta refeitos novamente.",
			"Special Attack III e Ranged III tem sua descrição alterada para algo mais fácil de entender. O efeito permanece o mesmo.",
			"Todas as Special Attack tem seu nível exigido reduzido a 1.",
			"Door Poker: Custo reduzido.",
			"First Strike: Custo removido.",
			"Haymaker: Haymaker é afetado por unicidade, então não ser comprado múltiplas vezes faz parte das regras padrões.",
			"Expertise III: Alterado para ficar comparável a Experise I e II.",
			"Vários addons de nível 2 passam para nível 1. Vários addons de nível 3 passam para nível 2.",
			"Capacidade destrutiva foi refeita para uma forma melhor de funcionamento",
			"Area of No Effect: Custo de SP reduzido para 6 (antigo: 10)",
		
        ]
 },
 {
     version : [4,4],
     description : [
			"O seguinte addon foi refeito para evitar abusos: Forma",
			"Corrigido um typo na parte de Pontos de Habilidade que ainda fazia referência à slots para estilos de luta.",
			"Novo addon: Tudo ou nada.",
			"O addon \"Look\" passa a requerir nível 1 ao invés de 2.",
			"Os seguintes addons foram corrigidos para evitar combos desbalanceados: Windwall Shield e Spike Shield.",
			"Clarificado que \"Tudo ou Nada\" não pode ser usado em combo com \"Bull Rush\""
     ]
 },
 {
        version : [4,3],
        description : [
			"Os addons: Glyph of the Punisher, Seal of Disruption, Symbol of the Saint e seus respectivos conceitos foram totalmente retrabalhados para ficar mais fácil e com menos conceitos para serem aprendidos. Selos e símbolos agora são habilidades passivas.",
			"Novos addons passivos: Symbol of Protection, Symbol of Pain, Symbol of Recovery, Symbol of Peace e Symbol of Destruction.",
			"Novo addon especial: Bull Rush."
        ]
    },  
 {
        version : [4,2],
        description : [
			"Damage Over Time foi refeito para melhor se adaptar a nova versão.",
			"Novo conceito: Damage Over Time.",
			"Purify ganha um novo efeito em relação ao novo DoT, com suas próprias regras de uso."
        ]
    },  
 {
        version : [4,1],
        description : [
           "Strong But Slow II teve seu nível ajustado para 2 e custo alterado para 2 como deveria, e não 21.",
			"Removido o texto de Area of Effect que fazia menção ao custo extra de múltiplos alvos, uma vez que ele já tem um texto dizendo que não pode ser usado em múltiplos alvos.",
			"A parte dos equipamentos foi inteiramente atualizada, com a adição dos novos addons, correção de antigos e remoção de outros, como dito no changelog do manual versão 4.0",
			"Nullify magic agora tem o seu custo de SP base corretamente colocado.",
			"Corrigidos diversos typos da versão 4.0",
			"HOTFIX: Artefato agora respeita o nível do item em termos de addons a serem adicionados nele"
        ]
    },  
	 {
		version : [4,0],
        description : [
            "ATENÇÃO: Todas as mudanças aqui feitas estarão passando por um intenso período de testes e observação. Como sempre, os addons novos e antigos que foram alterados poderão ser revertidos, excluídos ou alterados conforme o balanceamento pedir. É extremamente importante que o feedback dos addons novos seja dado bem como as alterações dos antigos. Em breve contaremos com um novo funcionamento nessa página que vai favorecer dar feedback e testá-los, aguardem.",
			"--------------------------------------------",
			"All I have II passa a requerir nível 3",
			"Area of Effect: Permanece como está, com a adição de trechos que esclarecem não funcionar em contra-ataques e explicando o que acontece se estiver sendo usada com efeitos que cortam o dano pela metade",
			"Ataque Assinatura: Mudado uma explicação e palavreado que dá maior liberdade para mestres e jogadores sobre o seu uso. Agora o uso desse addon não deve ser tão forçado e punitivo, também.",
			"Break Armor e Break Weapon: Clarificado que o custo extra só é pago se existir um segundo alvo. O custo extra não é mais pago em alvos únicos. Esses dois addons agora podem ser usados em contra-ataques.",
			"Counter Counter I: SP necessário aumentado para 3.",
			"Damage Over Time foi sutilmente refeito para refletir novas dinâmicas apresentadas no manual na parte de combate e também para se tornar mais útil, ao mesmo tempo em que mantém coisas que aprendemos com ela até agora.",
			"First Strike agora tem o gasto de 1 SP.",
			"High Risk High Reward agora tem o gasto de 2 SP.",
			"Incontrollable Power I, II e III tiveram a redução de custo de SP mexidos para 2,3 e 5 respectivamente (old: 3, 5 e 8).",
			"Leadership - Inspire Bravery: Custo de SP se torna 2 e passa a requerir nível 2.",
			"Leadership - Now you do it: clarificado o texto que agora diz que o usuário também joga o teste de ATK.",
			"Leadership - On My Command: Custo de SP se torna 2.",
			"Leadership - The time is NOW: Custo da técnica se torna 3 (old: 2).",
			"Mark of the Guardian: Custo de SP se torna 1.",
			"No flaws: custo de SP se torna 2.",
			"Nullify Magic: a quantidade de SP reduzida se acertar passa a ser 4 (old: 2), continua acumulando consigo mesmo. Custo de ativação se torna 2 SP (old: 3). Pode ser usado em contra-ataques. Custo base aumentado para 2 SP.",
			"Overwhelming Force: Custo de SP se torna 3 e passa a requerir nível 2",
			"Penalty: Custo extra só é gasto em mais de dois alvos, não mais em um alvo único.",
			"Set Trap I e II: Custo de SP se tora 2 para ambos.",
			"Smoke and Mirrors: Custo de SP se torna 3 (old: 6).",
			"Soul Strike teve o trecho de custo extra removido, não era para estar lá em primeiro lugar.",
			"Special Attack I: Custo da técnica se torna 2 SP (old: 1), situacional dele poder ser usado sem ocupar slot aumenta seu custo pra 3 SP.",
			"Special Attack II: Custo da técnica se torna 4 SP (old: 2) e passa a requerir nível 2.",
			"Special Attack III: Custo da técnica se torna 4 SP (old: 2) e passa a requerir nível 3",
			"Special Attack Ranged I: Custo da técnica se torna 2 SP (old: 1). Special Attack ranged I agora pode ser adicionado sem gastar slot, mas tendo seu custo aumentado para 3 SP.",
			"Special Attack Ranged II: Custo da técnica passa a ser 4 SP (old: 3) e passa a requerir nível 2",
			"Special Attack Ranged III: Custo da técnica se torna 4 SP (old: 3) e passa a requerir nível 3",
			"Spirit Bomb: Addon removido até ser trabalhado melhor",
			"Strong But Slow I: Custo de SP se torna 1 (old: 0)",
			"Strong But Slow II: Custo de SP se torna 2 (old: 1)",
			"Think Fast: Custo de SP se torna 3 SP (old: 1)",
			"Vulnerability: Clarificado que o custo extra só é pago caso exista um segundo alvo ou mais. O custo extra não se ativa em single-target.",
			"Novos addons de Ataque: Door Poker, Special Attack - Basic Master, Special Attack Ranged - Basic Master, Break Shield, Haymaker, Negate Attack, Negate Special, Negate Passive, Forbid, Cripple, Slimetouch, Void Attack, Seal of Disruption, Glyph of the Punisher e Symbol of the Saint",
			"--------------------------------------------",
			"Backstabber: Custo de SP se torna 2 (old: 4)",
			"Expertise I, bônus concedido é reduzido para +2 (old: +3)",
			"Fusão - Somos Um: Passa a requerir nível 3",
			"Fusão - Use meus poderes: Passa a requerir nível 2",
			"Hide: Custo de SP se torna 2 (old: 4)",
			"Look: Permite adicionalmente um teste de percepção+sab VS uma dif da tabela de dificuldades pra perceber uma fraqueza, potencial ou detalhe narrativo ou mecânica do alvo. O que vai ser analisado é determinado na hora da ação.",
			"Mirror Image: Custo de SP se torna 4 SP (old: 10)",
			"Stare master pemanece como está, com a remoção do texto que diz que os efeitos dele são ignorados se usado em contra-ataque. É um copypasta que não deveria estar aí",
			"Novos addons Especiais: Expertise III, Spellthief, Supress, Bloodlust, Blackward, Mirage, Wooden Skin, Windwall Shield, Spike Shield, Praying Shield, Embrace the Shadows, Break the Shadows, Area of No Effect, Consume Rage e Divine Trap",
			"--------------------------------------------",
			"A true leader shows no weakness permanece como está, mas seu nível minimo é aumentado para 2",
			"Aura foi completamente reformulado",
			"Berserking agora tem a penalidade de 1 RD, devido as mudanças em equips. Além disso tem a adição de uma clarificação que a cura em questão acontece sempre depois do dano recebido",
			"Boon of the Pacifist tem seu custo de SP aumentado para 2 (old: 1)",
			"Boon of the protector tem seu custo de SP aumentado para 2 (old: 1)",
			"Change Form foi completamente reformulado",
			"Troca Perigosa I teve uma pequena mudança:  ao invés de ser apenas -2 de dano agora é: “-2 dano ou -2 RD, escolhido durante a criação da técnica.",
			"Novos Addons Passivos: Punishing Volt, Mage Killer, Delay Pain, Sharing is Caring, Spellcaster, Energy Coat, Crusader Training, Knight Training, Aegis Domini, Boon of the Opressor, Boon of the Agressor e Domínio Absoluto",
			"--------------------------------------------",
			"Estilos de luta foram reformulados de acordo com o novo funcionamento explicado no manual",
			"Novos addons e alterações nos equipamentos e vantagens ainda estão por vir, mas todas elas já se encontram no manual básico",
			"Novos conceitos: Superioridade, Inferioridade, Glifo, Símbolo e Selo"
        ]
    },
    {
        version : [3,7],
        description : [
            "Maestria de Combate é renomeada para Maestria de Batalha e é alterada de forma profunda.",
            "Novo addon para estilos de luta: Poderes Complementares.",
            "Special Attack Ranged III adicionada.",
            "Master of One alterada de uma forma que deve ficar mais fácil de entender. Alguns de seus buracos foram tapados.",
            "Immovable Object passa a implicar na normalização de dano.",
            "--------------------------------",
            "IMPORTANTE: Personagens passam a só poder ativar Marcas uma vez por rodada. Addons de Protection foram alterados para levar isso em consideração.",
            "Novos addons: Mocking Strike, Gaze of the Guardian, Esforço Agressivo"
        ]
    },
    {
        version : [3,6],
        description : [
            "Protection - Protector Wall não permite mais contra-ataques.",
            "Summon Ally e Sword of the Holy Titans passam a compartilhar a família \"Summon\".",
            "Summon - Ally tem seu custo mínimo aumentado levemente e seu custo máximo reduzido significativamente. Summon Ally passa a restringir a quantidade de aliados que se pode ter (entre todos os Summon - Ally).",
            "Summon - Sword of the Holy Titans passa a permitir invocação instantânea e também invocação durante a Fase de Preparação."
        ]
    },
    {
        version : [3,5],
        description : [
            "Vários addons estavam de um jeito que suas versões maiores eram simplesmente multiplicações das anteriores. Isso é errado. As versões menores devem ter custos e efeitos menores, as versões maiores devem ter custos maiores. \"Ocupar um Slot\" é um custo que acaba sendo cobrado várias vezes nas pequenas, então deve haver uma diferença entre elas por esse ângulo.",
            "Addons alterados para isso: Incontrollable Power III, Strong But Slow II e III, Unblockable II.",
            "Caso alguma versão mais alta de algum addon esteja \"Simplesmente Melhor\" que as anteriores, ela será alterada no futuro, quando encontrada.",
            "----------------------------",
            "Bloqueio Agressivo I removida numa continuação do esforço anterior para remover porcentagens de dano o máximo possível. Bloqueio Agressivo II se torna Bloqueio Agressivo e recebe um buff considerável.",
            "----------------------------",
            "Posição Fortificada em Estilos de Luta tinha um efeito que não encaixava com estilo de luta. Talvez com passivas, mas muito mais provavelmente com Vantagens. Então foi removida. Fragilidade teve o mesmo destino.",
            "Custos de vários addons de estilos de luta reajustados para tentar fazer eles ficarem viáveis. Addons afetados: Força Descontrolada, Excesso de Poder.",
            "Nota para ajudar iniciantes adicionada em Adepto de Batalha e Maestria de Combate",
            "----------------------------",
            "Novos addons para armas: Capacidade Destrutiva",
            "Nota adicionada em Confiável.",
            "Melee Option passa a ocupar dois slots.",
            "Utiliza Munição fica mais legal junto de vantagens."
        ]
    },
    {
        version : [3,4],
        description : [
            "Berserking fica mais clara em relação ao seu redutor de RD.",
            "Aparentemente isso se perdeu em algum momento, mas reintroduzindo o conceito de \"Ataque Normalizado\".",
            "Stalwart Protector deveria ser uma versão +Dano das outras Protections, então foi alterada para voltar a isso, ainda sem deixar de ser um addon para Guardiões."
        ]
    },
    {
        version : [3,3],
        description : [
            "All I have passa a ser All I have I. All I have II criada. Ambas não funcionam em eventos PVP e coisas do tipo.",
            "Novas Avatar of Destruction I e II.",
            "Armas: Ranged e Melee nunca deveriam acumular em duas armas. Agora isso está escrito lá.",
            "Armas e Munições: Addons foram adicionados para padronizar as funcionalidades de Munição e Munição Especial. Armas passam a precisar do addon \"Capacidade Especial\" antes de poderem utilizar Munições Especiais."
        ]
    },
    {
        version : [3, 2],
        description : [
            "Addons de itens adicionados.",
            "Filtros de Tipos organizados."
        ]
    },
    {
        version : [3, 1],
        description : [
            "Novas formas de busca para addons. Os filtros agora são compatíveis uns com os outros.",
            "Special Attack III consertada.",
            "Palavreado de Magical Flux alterado para permitir mais interação entre addons.",
            "Summon Ally consertada.",
            "Clarificação adicionada ao addon High Spell Voltage Zone.",
            "Overload não acumula com Overload.",
            "Department of Redundancy Department, DRD, fez algumas alterações nos Pontos de Habilidade.",
            "Um detalhe havia faltado no 'Exausto' da Overload. Ele foi readicionado.",
            "Change Form e Leadership - Now you do it tem suas notas de manutenção alteradas para algo menos assustador.",
            "Vulnerability deixou de dar bônus de dano em porcentagem em alguma atualização passada, mas sua descrição não foi atualizada completamente. 'Acumula multiplicativamente' é a forma como bônus de dano em porcentagem se acumulam, não bônus brutos. Essa mensagem foi retirada.",
            "Purify alterada para ficar mais viável. Consumir o turno era muito pesado em cima do custo de SP.",
            "Nullify Magic tinha um parágrafo que não encaixava com a sua descrição atual, certamente algo que perdeu um valor em alguma atualização passada. Nullify Magic foi refeita para encaixar melhor com o estilo de novos addons Controller em relação a muitos alvos.",
            "Clarificação adicionada em Bloqueio Agressivo.",
            "Door Knocker havia sido alterada para algo que só precisava de um Slot, mas não havia sido rebalanceada para tal, ainda carregando custos e penalidades mais baixas, como se cada degrau do seu efeito também estivesse consumindo um Slot. Ela foi alterada para dois degraus.",
            "Avatar of Destruction existia para preencher a função de um Power Up custoso para algum personagem, principalmente útil na narrativa. Mas agora já temos tanto arquétipos quanto outros addons que fazem exatamente isso de uma forma mais controlada. Avatar of Destruction é removida.",
            "Requerimento de Nível em muitos addons foi reduzido.",
            "Misplaced Elses são amigos dos Ifs denovo."
        ]
    },
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
            "Uma técnica de Ataque tem um custo de ativação, começando em 0 SP e somando a seus addons. Você paga o preço ao realizar o ataque, independente dele acertar ou não.",
            "Uma técnica de ataque pode ter seu custo reduzido a 0, mesmo com addons. Uma técnica de ataque sem addons é chamada de Ataque Básico.",
			"Técnicas de Ataque normalmente utilizam as armas equipadas e obtém os traços de Melee/Ranged através delas.",
			"Técnicas que não utilizam armas normalmente são consideradas Melees a não ser que algum addon diga o contrário."
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
            "Uma técnica passiva pode ter seu custo reduzido a 0 SP por rodada, mas não menos do que isso.",
            "Um personagem pode ter mais de uma técnica passiva ativa ao mesmo tempo, mas não pode ter um mesmo addon ativo ao mesmo tempo entre uma ou mais técnicas passivas. Addons de passivas que não sejam únicos (que citem isso em sua descrição específica) podem estar ativos em mais de uma passiva ao mesmo tempo."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : "arma",
        "nome" : "Armas",
        "descricao" : [
            "Uma arma tem uma quantidade de Slots iguais ao seu nível. Addons em uma arma estão sempre ativos, mas tendem a só terem utilidade quando elas estão equipadas e sendo utilizadas em algum ataque.",
            "Todas as armas operam junto de um Atributo de Dano. Armas começam funcionando para um único atributo, como uma Espada para Arma ou Luvas para Artes Marciais.",
            "Armas de uma mão concedem um bônus de +1 Bônus de Item em Dano quando estão em uso. Armas de duas mão (ou duas armas de uma mão) concedem um bônus de +2 Bônus de Item em Dano quando estão em uso.",
            "Uma arma é considerada 'Em uso' quando está equipada e o personagem está realizando um ataque que inclui algum dos atributos para os quais a arma funciona no dano desse ataque. Caso a descrição da técnica não inclua a arma de forma alguma, o mestre pode decidir que a arma não está em uso.",
            "Armas não equipadas possuem um peso no inventário e tem um peso inicial de 2.",
			"Um personagem só pode equipar uma arma de mesmo nível que ele."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : "escudo",
        "nome" : "Armas Defensivas",
        "descricao" : [
            "Armas Defensivas são itens de defesa e possuem um número de slots igual ao nível delas.",
            "Estar equipado com uma Arma Defensiva garante um bônus de +1 RD Geral. Armas Defensivas também dão um bônus de +1 Bônus de Item RD Específica para algum atributo de dano, especificado na sua criação.",
            "Armas defensivas não equipadas possuem um peso no inventário e tem um peso inicial de 2.",
			"Um personagem só pode equipar uma arma defensiva de mesmo nível que ele."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : "armadura",
        "nome" : "Armaduras",
        "descricao" : [
            "Armaduras protegem o personagem de ataques inimigos.",
            "Armaduras têm seus bônus naturais definidos pelos addons Armadura Leve, Armadura Média e Armadura Pesada, que não preenchem slots e devem ser adicionados à todas as peças de armaduras.",
            "Roupas comuns e corpo nú contam como Armadura Leve, sem nenhum outro Addon.",
            "Armaduras não equipadas possuem peso para inventário e um peso inicial de 2.",
			"Um personagem só pode equipar uma armadura de mesmo nível que ele."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : "acessorio",
        "nome" : "Acessórios",
        "descricao" : [
            "Acessórios são objetos que auxiliam o personagem a fazer alguma outra coisa, podendo serem reusados muitas vezes.",
            "Eles ficam no inventário do personagem e tem peso inicial em 1. Acessórios não possuem efeito algum inicialmente, realizando apenas o que seus Addons fazem.",
			"Um personagem só pode equipar um acessório de mesmo nível que ele."
        ],
        "conceitos" : [
            
        ]
    },
    {
        "id" : "consumivel",
        "nome" : "Itens Consumíveis",
        "descricao" : [
            "Itens consumíveis são como acessórios, mas mais poderosos e que só podem ser utilizados uma única vez.",
			"Um personagem só pode usar itens consumíveis de mesmo nível que ele.",
            ""
        ],
        "conceitos" : [
            
        ]
    }
];
window.tiposHash = {};
for (var i = 0; i < window.techTipos.length; i++) {
    window.tiposHash[window.techTipos[i].id] = window.techTipos[i];
}


window.techConceitosExplain = [
    "Existem algumas regras por fora das técnicas em si que fazem parte do sistema e ajudam a definir melhor seu funcionamento. Essas regras estão sempre ativas e aqui são chamadas de conceitos. À direita, você verá conceitos BEM gerais que são considerados importantes. Addons com conceitos mais pessoais terão eles listados junto delas.",
    "Alguns conceitos são clarificações sobre alguma parte específica do sistema, mas outros conceitos são novas regras. Todos os conceitos valem de uma forma geral por cima do sistema inteiro. Um conceito só pode ser ignorado por efeitos que digam que os ignorem.",
    "Se algum addon não menciona algum conceito, assuma que o conceito vale para ele também."
];

/**
 * Conceitos!
 * @type Array
 */
window.techConceitos = [
    {
        id : 'normalizado',
        nome : 'Ataques Normalizados',
        listado : true,
        impresso : false,
        descricao : [
            "Um ataque normalizado é nada mais nada menos do que um ataque reduzido à um ataque básico. Um ataque tende a ser normalizado por algum efeito que tenha sido feito para ataques mais fracos (ataques básicos).",
            "A normalização de um ataque é realizada por cortar o seu modificador de dano ao meio. Então um dano de 1d6 + 6 viraria 1d6 + 3.",
            "Exceção: Ataques Básicos não são afetados por normalização.",
            "Exceção: Um ataque só é normalizado uma única vez. Normalizações seguintes não surtem efeito."
        ]
    },
	{
        id : 'meleevsranged',
        nome : 'Relação Melee VS Ranged e Zonas',
        listado : true,
        impresso : false,
        descricao : [
			"Personagens são considerados \"Melee\" ou \"Ranged\" dependendo da arma ou técnica usada.",
			"Personagens Melee só podem atacar alvos na mesma zona que eles. Ganham Superioridade em testes de dano versus alguém que esteja com uma arma ranged equipada ou contra-atacando eles com uma arma ranged, desde que estejam na mesma zona.",
			"Personagens Melee não podem contra-atacar alvos de zonas diferentes.",
			"Personagens Ranged podem atacar alvos em até duas zonas de distância. Ganham +1 Bônus de Prioridade em golpes feitos contra alvos de zonas diferentes",
			"Personagens Ranged ganham Inferioridade em seus testes de Ataque e Dano se atacarem alvos na mesma zona que eles. Isso não se aplica se o alvo usar uma técnica ou arma ranged como resposta.",
			"Em contra-ataques, os bônus/penalidades da relação entre Melee e Ranged só começam a valer depois que as reações e equipamentos usados foram definidos.",
			"Por exemplo, Personagem A é Melee e Personagem B é Ranged. Ambos estão na mesma zona. A ataca B, que decide contra-atacar com sua arma. Então ele ganha as penalidades, enquanto o personagem Melee ganha os bônus. ",
			"No caso de um personagem que use duas armas de uma mão, sendo uma ranged e uma melee, ele deve decidir qual arma está usando pra reação. Se ele for atacado com um golpe melee e reagir com a arma ranged, ele é tratado como ranged. Se ele reage com a arma melee, ele é tratado como melee e assim por diante.",
			"O mesmo vale para técnicas. Geralmente as técnicas são classificadas como Ranged ou Melee dependendo dos addons que a compõem. Se a técnica não tem nada que a defina como ranged, ela é geralmente tratada como Melee."
        ]
    },
	{
        id : 'superioridade',
        nome : 'Superioridade',
        listado : true,
        impresso : false,
        descricao : [
            "Ter superioridade em um teste significa estar numa situação onde o personagem está em vantagem em relação ao inimigo ou o desafio.",
            "Superioridade faz com que o personagem role o dado do teste em questão duas vezes e pegue o maior resultado como válido.",
			"Caso múltiplas situações concedam superioridade em uma mesma rolagem, você não rola mais do que um d6 ou d10 em questão. Exemplo: se duas situações favoráveis garantam superioridade para o mesmo personagem, ele só rola o dado duas vezes para o teste, não múltiplas vezes.",
            "Se uma situação te der superioridade e inferioridade ao mesmo tempo, considere que você não tem nenhuma e role normalmente o teste.",
			"Se o personagem tiver algo que permita ele rolar o dado novamente e ele tiver superioridade nessa situação, ele deve apenas rolar um dos dados em questão e não os dois.",
        ]
    },
		{
        id : 'inferioridade',
        nome : 'Inferioridade',
        listado : true,
        impresso : false,
        descricao : [
            "Ter inferioridade em um teste significa estar numa situação onde o personagem está em desvantagem em relação ao inimigo ou o desafio.",
            "Inferioridade faz com que o personagem role o dado do teste em questão duas vezes e pegue o pior resultado como válido.",
			"Caso múltiplas situações concedam inferioridade em uma mesma rolagem, você não rola mais do que um d6 ou d10 em questão. Exemplo: se duas situações favoráveis garantam inferioridade para o mesmo personagem, ele só rola o dado duas vezes para o teste, não múltiplas vezes.",
            "Se uma situação te der superioridade e inferioridade ao mesmo tempo, considere que você não tem nenhuma e role normalmente o teste.",
			"Se o personagem tiver algo que permita ele rolar o dado novamente e ele tiver inferioridade nessa situação, ele deve apenas rolar um dos dados em questão e não os dois.",
        ]
    },
		{
        id : 'damageovertime',
        nome : 'Damage Over Time',
        listado : true,
        impresso : false,
        descricao : [
            "Quando um personagem recebe Damage Over Time, esse dano é adicionado ao seu DoT Counter e aplicado nele durante as próximas 3 rodadas.",
            "Toda vez que um personagem recebe Damage Over Time, seus counters são divididos em 3 partes (arredondado para cima) e ele irá receber essa quantidade de dano no início de todos os seus turnos. Cada vez que ele recebe o dano, seu DoT Counter é reduzido na mesma quantidade. Caso a quantidade atual de dano por rodada vá ultrapassar o número atual do DoT Counter, ele recebe apenas o número atual do DoT Counter como dano e seu DoT Counter se torna 0.",
			"A quantidade de dano recebida por turno é atualizada apenas quando o personagem recebe uma nova quantidade de Damage Over Time.",
			"Ao receber dano de Damage Over Time, um personagem pode sacrificar seu turno - antes de fazer qualquer outra ação - para purificar o seu DoT Counter imediatamente.",
        ]
    },	
    {
        "id": "slots",
        "nome": "Addons, Slots e Custo",
        "listado": false,
        "impresso": false,
        "descricao": [
            "O template para addons é: Ocupa 1 Slot, requer Nível 1 para ser Pego e não aumenta o custo da técnica.",
            "Assim sendo, Addons que não fogem dessas regras não repetirão elas. Mas addons que as alteram irão avisar isso.",
            "Como um exemplo: se um addon não menciona aumentos no custo da técnica, ele não altera o custo da técnica. Se um addon não menciona que ocupa um slot, ele ocupa um slot. Se ele não mencionar requerimento de nível de personagem, ele requer nível 1. E por aí vai.",
            "Dê uma olhada em Regras Específicas X Regras Gerais."
        ]
    },
    {
        "id": "basicos",
        "nome": "Ataques Básicos",
        "listado": true,
        "impresso": false,
        "descricao": [
            "Um ataque é considerado básico quando ele é uma técnica Forma de Ataque que não possui quaisquer addons.",
            "Algumas ações especiais também contam como ataques básicos: \"Brigar\" e \"Usar Arma\"."
        ]
    },
    {
        "id": "stacking",
        "nome": "Bônus Nomeados",
        "listado": true,
        "impresso": false,
        "descricao": [
            "Existem vários efeitos que garantem Bônus (ou Redutor) para certas rolagens de dados. Alguns desses efeitos colocam um nome no efeito (Bônus de Poder, Bônus de Habilidade, Bônus de Item...).",
            "Sempre que mais de um Bônus (ou redutor) com o mesmo nome estiverem envolvidos em uma rolagem, apenas o maior é utilizado e eles não se acumulam.",
            "Exemplo: se o personagem recebe +1 Bônus de Poder em Agilidade e +2 Bônus de Poder em Acrobacia, quando ele rolar o teste ele vai ganhar um bônus final de +2 (o maior), mesmo os dois bônus indo em lugares diferentes.",
            "Então o bônus continua segurando seu tipo, mesmo enquanto adicionado em algum lugar, e isso é contabilizado na hora da rolagem."
        ]
    },
    {
        "id": "caalvos",
        "nome": "Contra Ataque e Alvos",
        "listado": true,
        "impresso": false,
        "descricao": [
            "Durante um contra-ataque, o único alvo válido para seu contra-ataque é o oponente. E o seu contra-ataque só pode incluir você e o oponente em seus efeitos.",
            "Assim sendo, é impossível utilizar um contra-ataque com \"Inspire\" e dar bônus para um aliado: ele não era um alvo válido para o contra-ataque. Também é impossível utilizar ataques como Leadership - On My Command ou Leadership - Now you do it: ambos exigem um aliado para te ajudar, e um aliado não faz parte dos alvos válidos durante um contra-ataque."
        ]
    },
    {
        "id": "habesp1",
        "nome": "Entendendo Habilidades Especiais",
        "listado": false,
        "impresso": false,
        "descricao": [
            "Uma habilidade especial é algo simples que seu personagem é capaz de fazer que, por mais que não o dê grandes vantagens, ajuda a defini-lo melhor dentro do universo do RPG.",
            "Uma habilidade especial não deve ser algo que o dê vantagens consideráveis e constantes, mas é aceitável que em situações bem específicas uma habilidade especial faça uma diferença de valor inestimável.",
            "Para tal, não se pode criar Habilidades Especiais que repitam o efeito de uma Vantagem."
        ]
    },
    {
        "id": "habesp2",
        "nome": "Exemplos de Habilidades Especiais",
        "listado": false,
        "impresso": false,
        "descricao": [
            "Voar, Teleporte, Telepatia, Telecinésia, Pequenas Ilusões..."
        ]
    },
    {
        "id": "fusaoha",
        "nome": "Fusão de Técnicas",
        "listado": true,
        "impresso": false,
        "descricao": [
            "Unir duas técnicas do mesmo tipo (Ataque-Ataque, Especial-Especial, Passiva-Passiva) custa apenas 1 Ponto de Habilidade.",
            "Depois de fundir as duas técnicas, é como se as duas deixassem de existir e sobrasse apenas uma com os addons das duas.",
            "Teoricamente, essa nova técnica deveria realmente ser as duas outras ao mesmo tempo em questão de descrição, mas isso não é tão obrigatório.",
            "Se a fusão ficaria com mais de 4 slots, você deve escolher quais Addons você vai retirar, pois não poderão ser mantidos."
        ]
    },
    {
        "id": "porcentagem",
        "nome": "Lidando com Porcentagens",
        "listado": true,
        "impresso": false, 
        "descricao": [
            "Quando muitas porcentagens são envolvidas ao mesmo tempo, acaba ficando complicado de lidar com elas. Para facilitar isso, usaremos as seguintes regras:",
            "Bônus de Porcentagens são SOMADOS.",
            "Redutores de Porcentagens são MULTIPLICADOS.",
            "Assim sendo, um bônus de +50% dano resulta 150% dano. Se o dano já fosse 125% por algum outro motivo, ao invés de multiplicar esses 125% simplesmente aumentamos para 175% (125% + 50%).",
            "Para redutores, não temos escolha a não ser multiplicar: então se o dano fosse ser 125% e existe um redutor de 50%, o dano final fica 62.5%! (125% * 50%).",
            "Quando resolvendo contas com porcentagens, sempre somamos primeiro e multiplicamos apenas no final. Ou seja: adicionam-se todos os bônus e só então se multiplica pelos redutores, como:",
            "((100% + 25%) * (50%)) = (125%) * (50%) = 62.5%"
        ]
    },
    {
        "id": "marcas",
        "nome": "Marcas",
        "listado": true,
        "impresso": false,
        "descricao": [
            "Alguns addons possuem efeitos que criam Marcas no alvo. Uma marca é o equivalente a você ficar de guarda e pronto para atrapalhar esse alvo.",
            "Se um inimigo marcado por você tentar realizar um ataque que não inclui você como alvo, você pode realizar um Ataque Normalizado contra ele, mesmo fora do seu turno. Esse efeito não se ativa se o ataque for realizado dentro de um contra-ataque, apenas para ataques realizados no turno do alvo marcado. Quando você realizar o seu ataque, o inimigo pode decidir se ele vai receber seu dano sem se defender ou se tentará esquivar - ele não tem tempo suficiente para realizar outras ações de defesa.",
            "O ataque proporcionado pela marca só pode ser feito se aquele que estiver fazendo-o, puder de alguma forma executar o golpe. Ou seja, alvos marcados em zonas distantes quando o personagem não pode puní-los com o golpe por não ter uma arma ranged equipada no momento ou uma técnica com alcance apropriado, não são possíveis.",
			"Um alvo pode estar marcado por vários personagens, mas apenas um pode ativar sua marca quando ele faz um ataque.",
            "IMPORTANTE: Um personagem só pode ativar uma de suas marcas uma vez por rodada.",
			"Se nada contradizer essa regra, marcas duram até o início do próximo turno do personagem que as colocou.",
            "Nota: Ver regras de Ataques Normalizados"
        ]
    },
    {
        "id": "nomes",
        "nome": "Nomenclatura de Addons",
        "listado": true,
        "impresso": false,
        "descricao": [
            "Quando se considerando a Unicidade em Addons é necessário pensar um pouco sobre quando um addon é considerado igual a outro, mesmo quando são dois addons diferentes. Existem algumas formas de nomear addons:",
            "[Nome]: Um nome simples. Não existe outro addon equivalente a esse. Exemplos: Smoke and Mirrors, Sadism.",
            "[Nome] - [Versão]: O addon possui várias versões diferentes para serem usadas em casos diferentes. O número romano não é a única marca de uma versão, podendo ser qualquer coisa. Exemplos: Leadership - The time is NOW, Leadership - Now you do it. Para facilitar, alguns addons que possuem versões bem claras não vão possuir o traço (\" - \") separando ela do nome, mas ainda é o mesmo addon. Exemplos: Special Attack I, Special Attack Ranged I."
        ]
    },
    {
        "id": "prioridade",
        "nome": "Prioridade",
        "listado": true,
        "impresso": false,
        "descricao": [
            "Na maior parte do tempo, as ações dentro de um combate só se realizam ou não se realizam, sem necessidade de complicações. Mas no caso de um Ataque X Contra-Ataque, com ambos acertando, acaba sendo importante saber qual acertou primeiro e quais foram seus resultados.",
            "Isso é chamado de Prioridade e todos os ataques possuem uma prioridade base de 0, podendo ser aumentada por efeitos ou addons (Ranged oferece um bônus de alcance +1 em prioridade, First Strike oferece um bônus de velocidade +1 em prioridade). No caso de um conflito Ataque X Contra-Ataque, os ataques são realizados do com maior prioridade para o com menor prioridade.",
            "Quaisquer efeitos do primeiro ataque são efetivados para o segundo. Então um ataque que coloque um redutor de dano no oponente já reduziria seu dano se fosse realizado antes dele.",
            "Ataques com prioridades iguais ocorrem ao mesmo tempo, aplicando dano, e seus efeitos só são aplicados no final. Quaisquer efeitos do ataque do dono do turno devem ser aplicados primeiro caso a ordem fosse criar alguma diferença (Exemplo: dono do turno usou um ataque que permite à ele gastar 4 SP e se curar, o oponente contra-atacou com um ataque que reduz o SP do alvo em 4, mas o dono do turno só tem esses 4 de SP. Como a ordem muda o que acontece, o dono do turno tem seu efeito aplicado antes para resolver o impasse)."
        ]
    },
    {
        "id": "rawriw",
        "nome": "Read as Intended X Read as Written",
        "listado": true,
        "impresso": false,
        "descricao": [
            "Existem duas formas de se ler qualquer regra no jogo: Ler como está escrito e ler como deveria ser.",
            "Se for para resolver um problema na mesa, em geral lê-se como está escrito (pois todos podem concordar assim). Esse é um sistema em testes: caso Read as Written não bata com Read as Intended, o sistema será alterado.",
            "Assim sendo, jogadores são incentivados a interpretarem texto exatamente como ele está ali. Se algo parecer um abuso que não foi previsto, é recomendável falar com o mestre antes.",
            "Temos um número realmente grande de Addons e as vezes certas combinações não foram planejadas e acabam conseguindo um efeito muito grande. Nesses casos mudanças terão de ser feitas. Combinações fortes demais acabariam tomando controle do jogo inteiro, e isso não é legal...",
            "Caso não se consiga decidir entre RaW ou RaI durante a sessão, o mestre deve resolver da forma que quiser (até criando regras temporárias para resolver o problema) e o sistema precisa ser alterado para que essa ambiguidade desapareça."
        ]
    },
    {
        "id": "especificade",
        "nome": "Regras Específicas X Regras Gerais",
        "listado": true,
        "impresso": false,
        "descricao": [
            "Grande parte do sistema se baseia em Regras Gerais que definem o funcionamento das coisas.",
            "Um exemplo de uma regra geral é \"Um Addon de Técnica preenche um Slot de Addon\".",
            "Porém regras específicas ganham prioridade contra isso. Uma regra do tipo \"monstros azuis não são afetados por poderes amarelos\" não valeria para um poder amarelo com o efeito \"ESSE poder amarelo em específico funciona em monstros azuis\". O específico sempre ganha quando ocorre um conflito.",
            "Outros exemplos: a regra geral diz que seu ataque causa 1d6 + um atributo de dano, porém algumas armas dizem que alguns ataques causam +2 dano. Regra Específica > Regra Geral, então esses ataques recebem o bônus adequado."
        ]
    },
    {
        "id": "habesp3",
        "nome": "Regras para Habilidades Especiais",
        "listado": false,
        "impresso": false,
        "descricao": [
            "O maior efeito de uma Habilidade Especial é permitir algo que não seria possível de outras maneiras, como Vôo ou criar ilusões que podem alterar completamente o desfecho de testes sociais.",
            "Quando for necessário decidir o quanto uma Habilidade Especial pode alterar o fluxo das coisas, considerar o seguinte:",
            "- Uma habilidade especial pode permitir, em situações bem específicas, a realização de testes de certa perícia com outra ou de um atributo-tste com outro. Exemplo: Telecinésia poderia permitir o uso de Inteligência ou Força de Vontade no lugar de Força.",
            "- Uma habilidade especial não garante quaisquer bônus no teste sendo realizado. Então se você utiliza uma habilidade especial de controle mental como Blefar, a dificuldade pode muito bem ser a mesma, só que feita com seu nível de Arcanismo ou outra perícia mais relevante.",
            "- Caso uma Habilidade Especial possa fazer muitas coisas ao mesmo tempo (como algo que funciona como Diplomacia, Blefe e Intimidação ao mesmo tempo) é recomendável que o mestre exija que essa habilidade especial conte como três. Durante a criação, deve-se fazer um esforço para pensar no maior número possível de situações em que uma habilidade especial acabaria funcionando. Deve-se evitar sair desse planejamento durante a sessão.",
            "- Algo deve ser lembrado: as variáveis mudaram. Talvez fosse realmente difícil convencer o guarda a te deixar passar sem o cartão, mesmo para alguém bom em Blefe, mas convencer ele a ir no banheiro com controle mental pode ser uma tarefa menos complicada, a depender do nível de força de vontade dele. Então usso de habilidades especiais devem ser levadas caso a caso.",
            "E por fim, uma habilidade especial é uma habilidade especial. Você não deve fazer nada grande o suficiente para ser digno de pontos de Vantagem. Para esses, você deve comprar a vantagem como os outros fariam.",
            "Por final: algumas coisas são fortes demais para habilidade especial, por mais que não exista uma Vantagem para isso. Mestres devem vetar habilidades especiais que saiam muito da norma. Dependendo do mestre e da história que ele está planejando, ele pode vetar habilidades que seriam perfeitamente aceitáveis em outros casos.",
            "Um mestre que planeja narrar uma história que acontece dentro de um labirinto de plantas, por exemplo, pode vetar Vôo, pois um personagem capaz de voar poderia simplesmente subir, encontrar o fim do labirinto e ir embora, tirando a graça da aventura toda. Então uma Habilidade Especial sempre vai envolver um acordo entre o jogador as criando e o mestre aprovando."
        ]
    },
    {
        "id": "coragem",
        "nome": "Técnica: Buscar Coragem",
        "listado": false,
        "impresso": false,
        "descricao": [
            "Gaste 4 SP e cure seu HP numa quantidade igual à sua Sabedoria de Combate + 2. Essa ação consome seu turno.",
            "Todo personagem possui essa técnica, mas ela não pode ser utilizada a não ser que um addon permita.",
            "Algumas habilidades Passivas liberam o uso de \"Buscar Coragem\" e algumas habilidades Especiais substituem \"Buscar Coragem\".",
            "Mesmo que \"Buscar Coragem\" seja substituida por uma versão melhor, ela mantém as restrições de não poder ser utilizada sem a Passiva adequada ativa."
        ]
    },
    {
        "id": "unicidade",
        "nome": "Unicidade em Addons",
        "listado": true,
        "impresso": false,
        "descricao": [
            "Cada addon de técnica é considerado Único. Isso significa que addons de técnicas não podem ser repetidos.",
            "A regra de Unicidade também se extende a famílias de addons. Então se você escolher algum addon como Leadership - X, você não poderá adicionar Leadership - Y na mesma técnica.",
            "Addons de forma passivas também possuem unicidade enquanto ativos, então um personagem não pode ativar duas passivas que possuam 'Immovable Object' ao mesmo tempo. Ele ainda pode ter mais de uma técnica passiva com 'Immovable Object', ele só não pode ativar ambas ao mesmo tempo.",
            "Como sempre, uma regra específica derruba uma regra geral: se algum addon disser claramente que pode ser adicionado mais de uma vez, então ele pode ser adicionado mais de uma vez. Caso contrário: apenas um."
        ]
    }
].sort(function (a, b) {
    var na = a.nome.toUpperCase().latinize();
    var nb = b.nome.toUpperCase().latinize();
    if (na < nb) return -1;
    if (na > nb) return 1;
    return 0;
});
window.conceitosHash = {};
for (var i = 0; i < window.techConceitos.length; i++) {
    window.conceitosHash[window.techConceitos[i].id] = window.techConceitos[i];
}


/**
 * Custos e técnicas
 */
window.techCustos = {
    "descricaoNiveis" : [
        "Ao passar de nível, todos os personagens ganham uma quantidade de Pontos de Habilidade (5, no sistema padrão) e uma nova Técnica em branco. A técnica virá com um número de slots apropriado ao nível do personagem (como na tabela abaixo).",
        "A técnica ganha pode ser feita como qualquer tipo de técnica."
    ],
    "niveis" : [
        ["1-2", "1 Slot"],
        ["3-4", "2 Slots"],
        ["5-6", "3 Slots"],
        ["7+", "4 Slots"]
    ],
    "descricaoPontos" : [
        "Pontos de Habilidade ganhos podem ser gastos para alterar técnicas existentes ou criar novas técnicas. Os custos podem ser encontrados na tabela abaixo."
    ],
    "pontos" : [
        [0, "Divide uma técnica de Forma Especial em mais de uma. Cada técnica especial resultante deve ter pelo menos 1 Slot. Você não pode dividir em técnicas especiais caso isso não fosse ser possível de outra maneira (Exemplo: se a divisão resultasse na quebra de alguma regra, como a regra de unicidade, ela não pode ser feita)"],
        [1, "Funde duas técnicas do mesmo tipo em uma só. Ver regras de Fusão de Técnicas."],
        [1, "Recria a técnica da forma que quiser (não abuse!). Caso a mudança na técnica tenha sido forçada por alterações nos addons, o custo é 0. O jeito esperado de se usar isso é para consertar técnicas cujos addons você entendeu errado e não está funcionando como você quer ou apagar uma técnica que você fez tão errado que não tem conserto. O objetivo dessas alterações não é fazer uma técnica temporária e se livrar dela quando não for mais útil."],
		[2, "Quebra uma técnica de Forma de Ataque ou Passiva, removendo um (e somente um) addon da mesma e realocando ela numa nova técnica com 1 slot que é preenchido por este addon removido. Um jogador pode quebrar uma mesma técnica mais de uma vez ) "],
		[3, "Aumenta a quantidade de slots de uma técnica, que não seja Forma Especial, em 1. Técnicas de Forma Especial custam 4 pontos para aumentar em 1 Slot."],
		[4, "Nova técnica de 1 Slot. Número máximo de slots é 4."]
    ]
};


/**
 * Addons de Técnicas! Todos!
 * @type Array
 */
window.techAddons = 
[
{
        "tipo": "ataque",
        "nome": "Frenzy Eater",
        "nomeLimpo": "Frenzy Eater",
        "efeitos": [
            "Caso a técnica com este addon cause 1 de dano ou mais, a primeira cura que fosse aplicada no alvo até o início do seu próximo turno, é negada (cura 0, ainda gastando o SP da vítima). O efeito é consumido quando a cura é usada. ", 
			"Aumenta o custo da técnica em 4 SP."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 2
    },
	{
        "tipo": "ataque",
        "nome": "Killing Intent",
        "nomeLimpo": "Killing Intent",
        "efeitos": [
            "Aumente o dano da técnica com este addon em +1 Bônus de Poder para o número de passivas que o alvo tem ativas.", 
			"Esse bônus de dano se aplica somente ao alvo que origina as passivas, ou seja, aliados que recebam bônus passivos de um outro aliado não são elegíveis para receber esse dano extra.",
			"Aumenta o custo da técnica em 5 SP."
        ],
        "conceitos": [
            "unicidade",
			"stacking"
        ],
        "nivel": 2
    },
	{
        "tipo": "ataque",
        "nome": "Multiple Crush",
        "nomeLimpo": "Multiple Crush",
        "efeitos": [
            "Caso esse técnica seja contra-atacada por uma técnica que use mais de um atributo de dano, aumente o dano dessa técnica em +2 Bônus de Poder, esse efeito também se aplica quando essa ténica é usada em contra-ataques de técnicas com mais de um atributo.",
			"Aumenta o custo da técnica em 4 SP."
        ],
        "conceitos": [
            "unicidade",
			"stacking"
        ],
        "nivel": 2
    },
	{
        "tipo": "ataque",
        "nome": "Collateral Damage",
        "nomeLimpo": "Collateral Damage",
        "efeitos": [
            "Caso o ataque com este addon erre um alvo, o usuário pode escolher pagar o custo desta técnica novamente e causar 1 de dano mínimo mesmo assim.", 
            "O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque ou contra um alvo único.  Os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "A técnica com este addon não pode conter outros addons que causem qualquer condição negativa (debuff), caso contrário, Collateral Damage não funciona.",
			"Aumenta o custo da técnica em 2 SP."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
	{
        "tipo": "ataque",
        "nome": "Disruption",
        "nomeLimpo": "Disruption",
        "efeitos": [
            "Ao acertar o ataque com este addon, escolha um efeito negativo (debuff) que o alvo esteja sofrendo e prolongue o tempo que este efeito poderia ser consumido. Você só pode mexer na duração do efeito e não no poder do efeito.", 
			"Isso é valido para efeitos que funcionem em conjunto com este addon, portanto, é possível já aplicar uma condição negativa com uma duração de duas rodadas diretamente num alvo.",
			"Uma condição negativa não pode ser estendida mais de uma vez, mas caso a mesma termine e seja recolocada tempos depois, então volta a ser um alvo válido.",
            "Ao ativar esse ataque, pague mais 2 SP para cada alvo que a técnica possuir. Esse pagamento não pode ser reduzido por nenhum efeito e conta como um custo de ativação.",
            "O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque ou contra um alvo único.  Os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "Aumenta o custo da técnica em 2 SP."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 2
    },
	{
        "tipo": "ataque",
        "nome": "All I have I",
        "nomeLimpo": "All I have I",
        "efeitos": [
            "Aumenta o custo da técnica em 1 SP.",
            "Quando essa técnica é utilizada, pague um múltiplo de 5 como um custo extra de SP. Esse custo extra não pode ser reduzido de nenhuma maneira. Você não pode escolher custos extras que fossem te deixar com SP inferior a -10.",
            "Para cada 5 SPs pagos dessa maneira, ganhe +1 Bônus de Poder no dano do ataque.",
            "O gasto extra de SP acontece junto da ação de iniciar o ataque, antes do oponente escolher uma defesa.",
            "Esse addon é ignorado em eventos onde a morte do personagem não signifique nada para a narrativa, como eventos PVP."
        ],
        "conceitos": [
            'unicidade',
			"stacking"
        ],
        "nivel": 1
    },
    {
        "tipo": "ataque",
        "nome": "All I have II",
        "nomeLimpo": "All I have II",
        "efeitos": [
            "Essa técnica recebe um bônus de dano igual ao seu SP restante dividido por 5, arredondando para baixo, somado ao seu HP restante.",
            "Exemplo: Um personagem com 10 SP e 4 HP usando essa técnica receberia +6 Bônus de Poder em dano.",
            "Esse ataque passa a ser em área e acertará todos os participantes da luta com 100% dano. Recomenda-se deixar aliados saírem do combate antes de usá-lo.",
            "Após o final do ataque, independente de ele ter acertado ou não, o personagem que o utilizou morre. Essa morte irá acontecer independente de quais vantagens ou efeitos o personagem tenha. A morte é inevitável.",
            "Esse addon é ignorado em eventos onde a morte do personagem não signifique nada para a narrativa, como eventos PVP."
        ],
        "conceitos": [
            'unicidade',
			"stacking"
        ],
        "nivel": 3
    },
    {
        "tipo": "ataque",
        "nome": "Mocking Strike",
        "nomeLimpo": "Mocking Strike",
        "efeitos": [
            "Caso essa técnica cause algum dano e o alvo dela esteja marcado por você, até o início do seu próximo turno, você é o único alvo válido para ataques realizados por ele. Isso não é válido para contra-ataques, apenas ataques diretos feitos pelo alvo.",
            "Caso um personagem esteja afetado por mais de um mocking strike ou efeitos similares ao mesmo tempo, ele pode realizar ataques contra qualquer um dos personagens que aplicaram esses efeitos nele.",
            "Mocking Strike é sempre processada no final, então é possível aplicar uma marca e aplicar mocking strike com um único ataque.",
            "Aumente o custo da técnica em 2 SP."
        ],
        "conceitos": [
            'unicidade'
        ],
        "nivel": 1
    },
    {
        "tipo": "ataque",
        "nome": "Area of Effect - Burst",
        "nomeLimpo": "Area of Effect I",
        "efeitos": [
            "A técnica passa a afetar todos os inimigos e aliados na mesma zona em que o usuário.",
			"A técnica é executada instantaneamente.",
			"Este addon pode ser emparelhado com os addons \"Técnica à Distância\" ou \"Special Attack\" com a opção de golpe ranged, para atingirem outras zonas da escolha do usuário. Nesses casos, usuário escolhe uma zona desejada na hora de executar o golpe contra todas as vítimas que ali estão.",
			"O dano causado é normalizado.",
			"Vítimas podem desviar dessa técnica, bloquear ou contra-atacar com ataques básicos. Outras ações de defesa não são válidas.",
            "Cópias e aliados criados por outros addons também são alvos do Area of Effect.",
			"Role individualmente testes de Ataque para cada alvo que decidir esquivar.",
			"Não funciona em contra-ataques, uma vez que o único alvo válido em um contra-ataque é aquele que está te golpeando, não todos os outros.",
			"Caso Area of Effect seja adicionado junto de outros efeitos que cortem o dano pela metade, o dano só é cortado uma única vez pela metade.",
            "Aumenta o custo da técnica em 4 SP."
        ],
        "conceitos": [
            "unicidade",
			"normalizado"
        ],
        "nivel": 1
    },
    {
        "tipo": "ataque",
        "nome": "Raging Strikes",
        "nomeLimpo": "Raging Strikes",
        "efeitos": [
			"A técnica com esse addon causa -4 pontos de dano.",
			"Toda vez que o usuário dessa técnica realizá-la e errar o golpe com este addon, ele ganha +1 Bônus não-nomeado de Ataque. Esse bônus aumenta até o usuário acertar um ataque, não tendo uma duração prévia, assim.",
			"Esse bônus é perdido quando o usuário troca o alvo deste golpe.",
			"Este addon não aumenta o custo de SP da técnica."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 241,
        "tipo": "ataque",
        "nome": "Area of Effect - Blast",
        "nomeLimpo": "Area of Effect II",
        "efeitos": [
            "A técnica passa a afetar todos os inimigos e aliados na mesma zona em que o usuário.",
			"Ao usar a técnica, o seu turno termina imediatamente. Sua habilidade só será usada no início do seu próximo turno, isso representa uma espécie de concentração.",
			"Enquanto estiver concentrando, o personagem usuário desta técnica não pode reagir à nenhum golpe.",
			"Este addon pode ser emparelhado com os addons \"Técnica à Distância\" ou \"Special Attack\" com a opção de golpe ranged, para atingirem outras zonas da escolha do usuário. Nesses casos, quando o momento de executar a técnica chega, o usuário escolhe uma zona desejada na hora e executa o golpe contra todas as vítimas que ali estão.",
			"O dano causado é inteiro.",
			"Vítimas podem desviar dessa técnica, bloquear ou contra-atacar com ataques básicos. Outras ações de defesa não são válidas.",
			"Role individualmente testes de Ataque para cada alvo que decidir esquivar.",
            "Cópias e aliados criados por outros addons também são alvos do Area of Effect.",
			"Não funciona em contra-ataques, uma vez que o único alvo válido em um contra-ataque é aquele que está te golpeando, não todos os outros.",
            "Aumenta o custo da técnica em 6 SP."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 241,
        "tipo": "ataque",
        "nome": "Area of Effect - Homing Missiles",
        "nomeLimpo": "Area of Effect",
        "efeitos": [
            "A técnica passa a afetar todos os inimigos na mesma zona em que o usuário. Aliados não são mais afetados.",
			"Esse addon é como uma alteração de propriedade de um dos Area of Effect (Blast ou Burst), sendo a única exceção que pode ser comprada junto deles apesar de ser da mesma família.",
           	"Role individualmente testes de Ataque para cada alvo que decidir esquivar.",
			"Aumenta o custo da técnica em 6 SP."			
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
            "Caso o personagem passe um combate no qual teve pelo menos uma ação SEM utilizar a técnica com esse addon nenhuma vez, substitua esse Addon por Optimization I. Esse critério pode ser substituído por: sessão (ao invés de combate), dia (dentro do jogo) ou algum outro intervalo de tempo que for mais apropriado. O critério deve ser conversado entre Mestre e Jogador",
            "Você só pode ter uma técnica com o addon Ataque Assinatura. Se colocar esse addon em uma segunda técnica, substitua o Ataque Assinatura da primeira por Optimization I.",
            "Não pode ser utilizada contra outros jogadores (se acontecer durante a narrativa, gasta 4 SP a mais)."
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
            "Ao ativar esse ataque, pague mais 1 SP para cada alvo que a técnica possuir. Esse pagamento não pode ser reduzido por nenhum efeito e conta como um custo de ativação.",
           "O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque ou contra um único alvo. Os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "Aumenta o custo da técnica em 2 SP."
        ],
        "conceitos": [
            "stacking"
        ],
        "nivel": 1
    },
    {
        "id": 253,
        "tipo": "ataque",
        "nome": "Break Weapon",
        "nomeLimpo": "Break Weapon",
        "efeitos": [
            "Caso ataque atinja um alvo, alvo receberá -2 Redutor de Poder em resultados de dano até o início do próximo turno do usuário. Esse redutor não se acumula.",
            "Ao ativar esse ataque, pague mais 1 SP para cada alvo que a técnica possuir. Esse pagamento não pode ser reduzido por nenhum efeito e conta como um custo de ativação.",
            "O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque ou contra um único alvo. Os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "Aumenta o custo da técnica em 1 SP."
        ],
        "conceitos": [
            "stacking"
        ],
        "nivel": 1
    },
	 {
        "tipo": "ataque",
        "nome": "Break Shield",
        "nomeLimpo": "Break Shield",
        "efeitos": [
            "Caso o golpe cause 1 de dano ou mais, o ataque aplica um redutor de poder igual à -2 nos testes de Bloqueio do alvo até o início do próximo turno do usuário.",
			"O redutor pode reduzir o valor do resultado no d6 da ação Bloquear da vítima para 0, se acontecer.  Esse redutor não se acumula.",
            "Ao ativar esse ataque, pague mais 1 SP para cada alvo que a técnica possuir. Esse pagamento não pode ser reduzido por nenhum efeito e conta como um custo de ativação.",
            "O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque ou contra um único alvo. Os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "Aumenta o custo da técnica em 2 SP."
        ],
        "conceitos": [
            "stacking"
        ],
        "nivel": 1
    },
			 {
        "tipo": "ataque",
        "nome": "Negate - Attack",
        "nomeLimpo": "Negate Attack",
        "efeitos": [
            "Se a técnica causar 1 de dano ou mais, o alvo afetado fica incapaz de usar habilidades de ataque até o início do próximo turno do usuário.",
			"Esse efeito acontece somente 1x por combate e um mesmo alvo não pode ser atingido múltiplas vezes por ele.",
            "Ao ativar esse ataque, pague mais 1 SP para cada alvo que a técnica possuir. O custo extra não é ativado em alvos únicos. Esse pagamento não pode ser reduzido por nenhum efeito e conta como um custo de ativação.",
			"O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque ou contra um único alvo. Os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "Aumenta o custo da técnica em 4 SP."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 3
    },
				 {
        "tipo": "ataque",
        "nome": "Negate - Special",
        "nomeLimpo": "Negate Special",
        "efeitos": [
            "Se a técnica causar 1 de dano ou mais, o alvo afetado fica incapaz de usar habilidades do tipo especial até o início do próximo turno do usuário. ",
			"Esse efeito acontece somente 1x por combate e um mesmo alvo não pode ser atingido múltiplas vezes por ele.",
            "Ao ativar esse ataque, pague mais 1 SP para cada alvo que a técnica possuir. O custo extra não é ativado em alvos únicos. Esse pagamento não pode ser reduzido por nenhum efeito e conta como um custo de ativação.",
			"O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque ou contra um único alvo. Os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "Aumenta o custo da técnica em 4 SP."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
					 {
        "tipo": "ataque",
        "nome": "Negate - Passive",
        "nomeLimpo": "Negate Passive",
        "efeitos": [
            "Se a técnica causar 1 de dano ou mais, o alvo afetado fica incapaz de ativar ou desativar habilidades do tipo passiva até o início do próximo turno do usuário (com a exceção de não ter mais SP para mantê-las ativas).",
			"Esse efeito acontece somente 1x por combate e um mesmo alvo não pode ser atingido múltiplas vezes por ele.",
            "Ao ativar esse ataque, pague mais 1 SP para cada alvo que a técnica possuir. O custo extra não é ativado em alvos únicos. Esse pagamento não pode ser reduzido por nenhum efeito e conta como um custo de ativação.",
			"O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque ou contra um único alvo. Os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "Aumenta o custo da técnica em 4 SP."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 3
    },
						 {
        "tipo": "ataque",
        "nome": "Forbid",
        "nomeLimpo": "Forbid",
        "efeitos": [
            "Caso a habilidade cause 1 ou mais pontos de dano, a vítima não pode executar ataques básicos até o início do seu próximo turno.",
			"Esse addon não pode ser usado em conjunto com outros addons que concedam bônus de acerto.",
            "Ao ativar esse ataque, pague mais 1 SP para cada alvo que a técnica possuir. O custo extra não é ativado em alvos únicos. Esse pagamento não pode ser reduzido por nenhum efeito e conta como um custo de ativação.",
			"O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque ou contra um único alvo. Os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "Aumenta o custo da técnica em 5 SP."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
							 {
        "tipo": "ataque",
        "nome": "Cripple",
        "nomeLimpo": "Cripple",
        "efeitos": [
            "Caso a habilidade cause 1 ou mais pontos de dano, reduza a iniciativa da vítima em 2 pontos. Isso obriga ela a cair na ordem de iniciativas caso tenha alguém com um valor atual maior do que o resultado que ela ficou.",
			"Se a vítima já agiu na rodada e por ventura seu turno chegar novamente por conta desse efeito, ela não age novamente. Um alvo só pode ser afetado 1x por combate por este efeito.",
            "Ao ativar esse ataque, pague mais 1 SP para cada alvo que a técnica possuir. O custo extra não é ativado em alvos únicos. Esse pagamento não pode ser reduzido por nenhum efeito e conta como um custo de ativação.",
            "Aumenta o custo da técnica em 4 SP."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
	 {
        "tipo": "ataque",
        "nome": "Slimetouch",
        "nomeLimpo": "Slimetouch",
        "efeitos": [
            "Se esse ataque causar mais de 1 de dano, impossibilite seu alvo de usar uma de suas armas equipadas (à sua escolha) até o início do seu próximo turno.",
			"Alvos que forem afetados por esse addon são considerados Melee até recuperarem suas armas após a duração do debuff.",
			"Esse efeito não pode acontecer novamente no mesmo alvo até o fim do combate. Caso o alvo não use armas, esse addon não possui efeito.",
            "Ao ativar esse ataque, pague mais 1 SP para cada alvo que a técnica possuir. O custo extra não é ativado em alvos únicos. Esse pagamento não pode ser reduzido por nenhum efeito e conta como um custo de ativação.",
            "Aumenta o custo da técnica em 4 SP."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
		 {
        "tipo": "ataque",
        "nome": "Void Attack",
        "nomeLimpo": "Void Attack",
        "efeitos": [
            "Se esse ataque causar mais de 1 ponto de dano, remova uma condição positiva não-natural ativa sobre o alvo. A condição removida é decidida aleatoriamente pelo Mestre ou por rolagens de dados combinadas entre mestre e jogador.",
			"A remoção da condição é sempre após o cálculo de dano ter sido feito e aplicado.",
            "Ao ativar esse ataque, pague mais 1 SP para cada alvo que a técnica possuir. O custo extra não é ativado em alvos únicos. Esse pagamento não pode ser reduzido por nenhum efeito e conta como um custo de ativação.",
			"O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque ou contra um único alvo. Os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "Aumenta o custo da técnica em 5 SP."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 304,
        "tipo": "ataque",
        "nome": "Chain Attack",
        "nomeLimpo": "Chain Attack",
        "efeitos": [
            "Se esse ataque nocautear o alvo dele, você pode realizar uma nova ação de ataque (ataque básico, habilidade, etc) contra outro alvo como uma ação grátis (não consome turno, mas ainda consome SP) imediatamente ao fim desse ataque. Isso também vale para contra-ataques realizados com Chain Attack.",
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
            "Se o oponente realizar um contra-ataque contra essa técnica, essa técnica recebe +2 Bônus de Habilidade na sua rolagem de dano.",
            "Aumenta o custo da técnica em 3 SP."
        ],
        "conceitos": [
            "unicidade",
			"stacking"
        ],
        "nivel": 1
    },
    {
        "id": 238,
        "tipo": "ataque",
        "nome": "Counter Counter II",
        "nomeLimpo": "Counter Counter II",
        "efeitos": [
            "Se o oponente realizar um contra-ataque contra essa técnica, essa técnica recebe +4 Bônus de Habilidade na sua rolagem de dano.",
            "Aumenta o custo da técnica em 5 SP."
        ],
        "conceitos": [
            "unicidade",
			"stacking"
        ],
        "nivel": 2
    },
    {
        "id": 335,
        "tipo": "ataque",
        "nome": "Damage over Time",
        "nomeLimpo": "Damage over Time",
        "efeitos": [
			"Esse ataque passa a ser normalizado. Esse addon não funciona quando um ataque já fosse normalizado.",
			"Caso esse ataque acerte o alvo, o alvo recebe um dano direto de 1. A rolagem de dano não aplica danos no oponente, mas sim aumenta seu DoT Counter na mesma quantidade.",
			"Veja o conceito de Damage Over Time."
       ],
        "conceitos": [
			"damageovertime"

        ],
        "nivel": 2
    },
    {
        "id": 330,
        "tipo": "ataque",
        "nome": "Door Knocker",
        "nomeLimpo": "Door Knocker",
        "efeitos": [
            "Durante a criação dessa técnica, escolha 50% ou 100%. Ataques realizados com essa técnica ganham essa quantidade de penetração.",
            "Ataques com essa técnica também recebem -3 ou -6 em testes de acerto, de forma respectiva à porcentagem de penetração escolhida.",
            "Esse addon não pode ser usado lado-a-lado com addons que fornecem bônus em testes de acerto ou testes contra defesa, nem junto de addons que impeçam o oponente de se esquivar. Esse addon ainda pode ser usado caso o personagem esteja recebendo o bônus de outra fonte (como uma passiva ou um buff com duração).",
            "De acordo com a penetração escolhida para essa técnica, aumente o custo dela em 5 ou 10 SP."
        ],
        "conceitos": [

        ],
        "nivel": 2
    },
	{
        "tipo": "ataque",
        "nome": "Door Poker",
        "nomeLimpo": "Door Poker",
        "efeitos": [
            "O ataque ganha +50% de penetração. A técnica com esse addon tem o seu dano causado reduzido pela metade, acumulando multiplicativamente com outras reduções de dano. ",
            "Esse addon não pode ser usado lado-a-lado com addons que fornecem bônus em testes de acerto ou testes contra defesa, nem junto de addons que impeçam o oponente de se esquivar. Esse addon ainda pode ser usado caso o personagem esteja recebendo o bônus de outra fonte (como uma passiva ou um buff com duração).",
            "Aumenta o custo da técnica em 4 SP."
        ],
        "conceitos": [

        ],
        "nivel": 2
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
            "Se o seu resultado de dano for par, aumente ele em +2 Bônus de Poder.",
            "Se o seu resultado de dano for ímpar, reduza ele em 3 Bônus de Poder (isso inclui o modificador também).",
			"Aumente o custo de SP em 1.",
            "Caso você não tenha rolado um dado para dano por qualquer motivo, seu dano não é alterado."
        ],
        "conceitos": [
			"stacking"
        ],
        "nivel": 1
    },
    {
        "id": 295,
        "tipo": "ataque",
        "nome": "First Strike",
        "nomeLimpo": "First Strike",
        "efeitos": [
            "Adiciona +1 Bônus de Velocidade à prioridade desse ataque."
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
            "Se um oponente tentar um contra-ataque contra essa técnica, você recebe +2 Bônus de Habilidade no seu teste de esquiva caso decida tentar evitar o contra-ataque dele.",
            "O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque e os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "Aumenta custo da técnica em 3 SP."
        ],
        "conceitos": [
            "stacking"
        ],
        "nivel": 1
    },
    {
        "id": 246,
        "tipo": "ataque",
        "nome": "Chicken Out",
        "nomeLimpo": "Chickenout",
        "efeitos": [
            "Caso você use isso num contra-ataque e o oponente decida não esquivar do seu contra-ataque, você pode cancelar seu contra-ataque e esquivar do ataque dele. O custo pago por esse ataque não é devolvido.",
			"Esquivas críticas não são possíveis quando este addon está sendo usado.",
			"Aumente o custo da técnica em 1 SP."
        ],
        "conceitos": [],
        "nivel": 1
    },	
    {
        "id": 325,
        "tipo": "ataque",
        "nome": "High Risk High Reward",
        "nomeLimpo": "High Risk High Reward",
        "efeitos": [
            "Se o oponente tentar um contra-ataque contra essa técnica, você e ele jogam 1d6 + Ataque seguido do dano das suas técnicas. Aquele que vencer as duas rolagens causa seu dano em completo, com o ataque do outro nunca tendo sido realizado.",
            "No caso de um empate, você causa 50% do seu dano nele e ele causa 50% do dano dele em você (redução em % sempre é feita APÓS a aplicar a RD).",
			"Aumente o custo de SP em 2."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 326,
        "tipo": "ataque",
        "nome": "Uncontrollable Power I",
        "nomeLimpo": "Incontrollable Power I",
        "efeitos": [
            "Diminui o custo da técnica em 2 SP.",
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
        "nome": "Uncontrollable Power II",
        "nomeLimpo": "Incontrollable Power II",
        "efeitos": [
            "Diminui o custo da técnica em 3 SP.",
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
        "nome": "Uncontrollable Power III",
        "nomeLimpo": "Incontrollable Power III",
        "efeitos": [
            "Diminui o custo da técnica em 5 SP.",
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
            "\"Dano\" pode ser escolhido como destino desse bônus, onde neste caso, o bônus aumenta para +2.",
            "Aumenta o custo da técnica em 2 SP."
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
            "Uma técnica só pode ter um addon da família Leadership.",
		    "Aumenta o custo da técnica em 2 SP.",
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
			"Escolha um aliado: ele fará um ataque em conjunto com você. Primeiro, você irá atacar - o alvo tem chance de reação normal (esquiva, bloqueio ou contra-ataque). Se você acertar o teste/causar dano nele, o seu aliado então rola o teste dele de ataque contra a esquiva do inimigo (ele é obrigado a esquivar nessa parte). O golpe do aliado é um ataque básico. O dano final então é a soma do seu dano com a soma do dano do aliado. Caso o aliado ou usuário erre o golpe, essa técnica terá como dano apenas dano básico de quem acertar (dado de dano + bônus de arma + um atributo).",
            "Para qualquer efeito acontecendo nessa técnica, VOCÊ é o único usuário. Então efeitos como Mark of the Guardian podem ser utilizados por você e addons como Inspire terão todos os seus aliados como alvos válidos.",
            "Redutores ou Bônus de dano em porcentagem para o dano do aliado são ignorados durante esse seu ataque, mas qualquer Bônus ou Redutor adicionado no SEU ataque é considerado para o ataque final.",
            "O dano final desse ataque é a soma do seu dano com o dano do seu aliado e possui como tipos quaisquer atributos de dano que tenham sido usados por você e ele.",
            "Esse addon não funciona quando a técnica é usada como contra-ataque.",
			"Observação: Esse addon não está perfeitamente balanceado e deverá ser refeito eventualmente."
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
            "Caso um inimigo role uma esquiva crítica versus a rolagem de ataque do aliado que está te ajudando, os efeitos da esquiva crítica não ocorrem. Trate-a como um sucesso comum (se for um sucesso).",
			"Efeitos que mudam de acordo com quem está executando eles não podem ser adicionados nessa técnica. Então Mark of the Guardian não pode ser adicionado (as marcas funcionam diferente dependendo de qual personagem a está colocando).",
            "Outros efeitos podem ser adicionados, como Inspire para aumentar algum atributo de outro aliado. Só que tanto o personagem que usou essa técnica quanto quem realizou o ataque contam como o \"usuário\" dela. Assim sendo, efeitos que exigem um \"aliado\" (como Inspire) só poderiam afetar um terceiro personagem.",
            "Apesar de ambos serem o Usuário do Poder, é considerado que o dano é causado pelo dono do turno (apesar do aliado realizar o ataque e rolar os dados). Assim sendo, caso o aliado possua redutores nos danos dele, esses redutores NẪO são carregados para On My Command. Mas se o personagem que usou essa técnica possuir redutores no seu dano causado, esses redutores são repassados para o ataque do aliado.",
			"Aumenta o custo da técnica em 2 SP.",
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
            "Aumente o custo da técnica em 3 SP."
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
            "Aumente o custo da técnica em 1 SP."
        ],
        "conceitos": [
            "marcas",
            "basicos",
            "normalizado"
        ],
        "nivel": 1
    },
    {
        "id": 261,
        "tipo": "ataque",
        "nome": "No Flaws",
        "nomeLimpo": "No Flaws",
        "efeitos": [
			"Caso o oponente tente te contra-atacar, você reduz qualquer dano que seria recebido pelo ataque dele em até sua Sabedoria de Combate.",
			"Esse dano não pode ser reduzido para 0.",
			"Nesse momento, você também perde SP na mesma quantidade em que reduziu o dano do oponente.",
			"Não aumenta o custo da técnica ao ser adicionado."
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
            "Caso esse ataque cause 1 ponto de dano ou mais, reduza o SP do alvo em 4. Esse addon acumula consigo mesmo.",
            "Como um custo extra para utilizar essa técnica, pague 2 SP para cada alvo que o ataque possua. Esse custo extra não se ativa para alvos únicos. Isso conta como um custo de ativação, mas não pode ser reduzido de nenhuma maneira.",
            "O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque.",
            "Aumenta o custo da técnica em 2 SP."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 263,
        "tipo": "ataque",
        "nome": "Optimization I",
        "nomeLimpo": "Optimization I",
        "efeitos": [
            "Diminui o custo da técnica em 1 SP."
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
            "Diminui o custo da técnica em 2 SP.",
            "Diminui o dano da técnica em 1."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
    {
        "id": 265,
        "tipo": "ataque",
        "nome": "Optimization III",
        "nomeLimpo": "Optimization III",
        "efeitos": [
            "Diminui o custo da técnica em 4 SP.",
            "Diminui o dano da técnica em 3."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 2
    },
    {
        "id": 284,
        "tipo": "ataque",
        "nome": "Overwhelming Force",
        "nomeLimpo": "Overwhelming Force",
        "efeitos": [
            "Caso o oponente tente um contra-ataque, você pode fazer sua técnica engolir o ataque do oponente. Isso significa que ao invés das três opções normais, você tentará Dano VS Dano. Você joga o dano dessa técnica e o oponente joga o dano da dele. A diferença é causada como dano direto (ignora resistências) em quem tirou o resultado menor. Se você jogar 14 de dano e o oponente jogar 12 de dano na dele, você causa 2 pontos de dano diretos no HP dele.",
			"Aumente o custo da técnica em 1 SP."
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
            "Ao ativar esse ataque, pague mais 2 SP para cada alvo que a técnica possuir. Esse pagamento não pode ser reduzido por nenhum efeito e conta como um custo de ativação.",
            "O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque ou c contra um único alvo. Os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "Aumenta o custo da técnica em 3 SP."
        ],
        "conceitos": [
            "stacking"
        ],
        "nivel": 1
    },
    {
        "id": 381,
        "tipo": "ataque",
        "nome": "Price in Blood I",
        "nomeLimpo": "Price in Blood I",
        "efeitos": [
            "Aumente o dano causado por essa técnica em +1 Bônus de Poder.",
            "Como um custo extra para ativar essa técnica, pague 2 de HP. Isso é uma remoção direta do seu HP e não pode ser reduzida por outros efeitos. Não conta como um dano recebido.",
            "Esse addon pode te jogar para 0 ou menos de HP, fazendo você entrar nas fases de teste de morte, normalmente"
        ],
        "conceitos": [
            "unicidade",
			"stacking"
        ],
        "nivel": 1
    },
    {
        "id": 382,
        "tipo": "ataque",
        "nome": "Price in Blood II",
        "nomeLimpo": "Price in Blood II",
        "efeitos": [
            "Aumente o dano causado por essa técnica em +2 Bônus de Poder.",
            "Como um custo extra para ativar essa técnica, pague 4 de HP. Isso é uma remoção direta do seu HP e não pode ser reduzida por outros efeitos. Não conta como um dano recebido.",
            "Esse addon pode te jogar para 0 ou menos de HP, fazendo você entrar nas fases de teste de morte, normalmente"
        ],
        "conceitos": [
            "unicidade",
			"stacking"
        ],
        "nivel": 2
    },
    {
        "id": 338,
        "tipo": "ataque",
        "nome": "Sadism",
        "nomeLimpo": "Sadism",
        "efeitos": [
            "Caso esse ataque cause mais do que um ponto de dano, você pode usar a ação \"Buscar Coragem\" e se curar.",
            "Você não pode se curar mais do que o dano final causado no oponente (a quantidade de HP que ele perdeu). Você pode decidir gastar SP ou não só depois de saber o dano causado (para não perder e curar pouco demais).",
            "Aumente o custo da técnica em 4 SP."
        ],
        "conceitos": [
		"coragem"

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
            "Aumenta o custo da técnica em 4 SP."
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
            "Aumente o custo da técnica em 2 SP.",
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
            "Aumente o custo da técnica em 2 SP."
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
            "Aumente o custo da técnica em 3 SP."
        ],
        "conceitos": [
            "stacking"
        ],
        "nivel": 1
    },
    {
        "id": 232,
        "tipo": "ataque",
        "nome": "Técnica à Distância",
        "nomeLimpo": "Tecnica a Distancia",
        "efeitos": [
			"A técnica com este addon é sempre considerada Ranged, independente da arma sendo utilizada. Aplique as eventuais penalidades e bônus dependendo da zona em que for utilizada.",
			"Este addon não pode funcionar junto de \"Técnica Corpo à Corpo\".",
			"Aumente o custo dessa técnica em 3 SP."		
        ],
        "conceitos": [
            "unicidade",
			"meleevsranged"
        ],
        "nivel": 1
    },
    {
        "id": 232,
        "tipo": "ataque",
        "nome": "Técnica Corpo à Corpo",
        "nomeLimpo": "Tecnica Corpo a Corpo",
        "efeitos": [
			"A técnica com este addon é sempre considerada Melee, independente da arma sendo utilizada. Aplique as eventuais penalidades e bônus dependendo da zona em que for utilizada.",
			"Este addon não pode funcionar junto de \"Técnica à Distância\".",
			"Aumente o custo dessa técnica em 1 SP."		
        ],
        "conceitos": [
            "unicidade",
			"meleevsranged"
        ],
        "nivel": 1
    },		
    {
        "id": 232,
        "tipo": "ataque",
        "nome": "Special Attack I",
        "nomeLimpo": "Special Attack I",
        "efeitos": [
            "Adiciona um segundo atributo de dano, diferente do primeiro, dividido por 2 (arredondando para BAIXO) ao dano da técnica. Uma técnica só pode ter um Special Attack.",
            "Aumente o custo da técnica em 1 SP.",
			"Você pode escolher somar +4 SP no custo deste addon (junto do custo base) para tornar a técnica Ranged independente da arma que está sendo utilizada na descrição.",
			"Golpes Ranged recebem +1 Bônus de Prioridade e os outros bônus e penalidades que um golpe dessa categoria normalmente tem, dependendo da zona em que é feito.",
            "Special Attack I pode ser adicionada a uma técnica sem ocupar slots. Nesse caso: aumente o custo da técnica em 3 ao invés de 2. Não é possível ignorar o limite de apenas uma Special Attack dessa maneira."
        ],
        "conceitos": [
            "unicidade",
			"meleevsranged"
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
			"Você pode escolher somar +4 SP no custo deste addon (junto do custo base) para tornar a técnica Ranged independente da arma que está sendo utilizada na descrição.",
			"Golpes Ranged recebem +1 Bônus de Prioridade e os outros bônus e penalidades que um golpe dessa categoria normalmente tem, dependendo da zona em que é feito.",
            "Aumenta o custo da técnica em 4 SP."
        ],
        "conceitos": [
            "unicidade",
			"meleevsranged"
        ],
        "nivel": 1
    },
    {
        "id": 339,
        "tipo": "ataque",
        "nome": "Special Attack III",
        "nomeLimpo": "Special Attack III",
        "efeitos": [
            "O dano base dessa técnica se reduz ao dado e bônus base da arma, sem adicionar nenhum atributo de dano.",
            "Aumente o dano dessa técnica em duas vezes a sua Sabedoria de Combate.",
            "Essa técnica passa a ter como tipo todos os seus atributos que estejam acima de 0. Você deve fazer uma descrição que explique isso.",
            "Uma técnica só pode ter um Special Attack e você só pode utilizar Special Attack III quando cada um dos atributos de dano do usuário for menor ou igual a sua sabedoria de combate.",
			"Você pode escolher somar +4 SP no custo deste addon (junto do custo base) para tornar a técnica Ranged independente da arma que está sendo utilizada na descrição.",
			"Golpes Ranged recebem +1 Bônus de Prioridade e os outros bônus e penalidades que um golpe dessa categoria normalmente tem, dependendo da zona em que é feito.",
            "Aumente o custo da técnica em 4 SP."
        ],
        "conceitos": [
            "unicidade",
			"meleevsranged"
        ],
        "nivel": 1
    },
	{
        "id": 232,
        "tipo": "ataque",
        "nome": "Soul Strike",
        "nomeLimpo": "Soul Strike",
        "efeitos": [
			"O addon consome 2 slots da técnica.",
			"Ao atacar e causar dano com a técnica que contém esse addon, você pode cancelar metade do dano causado e usá-lo como dano direto no SP da vítima (antes de passar pelas RDs). A outra metade do dano é aplicada normalmente passando pelas RDs da vítima.",
			"Aumente o custo da técnica em 4 SP."
        ],
        "conceitos": [
            "unicidade",
			"stacking"
        ],
        "nivel": 1
    },
	{
        "id": 232,
        "tipo": "ataque",
        "nome": "Special Attack - Basic Master",
        "nomeLimpo": "Special Attack - Basic Master",
        "efeitos": [
            "O ataque com esse addon recebe +1 Bônus de Habilidade em testes de acerto. Esse addon sofre de unicidade com outros special attack e só pode ser usada por personagens que tenham um atributo de dano.",
            "Aumente o custo da técnica em 2 SP."
        ],
        "conceitos": [
            "unicidade",
			"stacking"
        ],
        "nivel": 1
    },
    {
        "id": 266,
        "tipo": "ataque",
        "nome": "Strong but Slow I",
        "nomeLimpo": "Strong but Slow I",
        "efeitos": [
            "Aumenta o dano da técnica em +1 Bônus de Poder.",
            "Esse addon não pode ser usado em conjunto com addons que dão bônus em acerto.",
            "Usuário recebe -1 no teste de acerto da técnica.",
			"Não aumenta o custo da técnica."
        ],
        "conceitos": [
            "unicidade",
			"stacking"
        ],
        "nivel": 1
    },
    {
        "id": 267,
        "tipo": "ataque",
        "nome": "Strong but Slow II",
        "nomeLimpo": "Strong but Slow II",
        "efeitos": [
            "Aumenta o dano da técnica em +2 Bônus de Poder.",
            "Esse addon não pode ser usado em conjunto com addons que dão bônus em acerto.",
            "Usuário recebe -2 no teste de acerto da técnica.",
            "Aumenta o custo dessa técnica em 1 SP."
        ],
        "conceitos": [
            "unicidade",
			"stacking"
        ],
        "nivel": 2
    },
    {
        "id": 303,
        "tipo": "ataque",
        "nome": "Strong but Slow III",
        "nomeLimpo": "Strong but Slow III",
        "efeitos": [
            "Aumenta o dano da técnica em +3 Bônus de Poder.",
            "Não pode ser utilizado em conjunto com addons que dão bônus em acerto.",
            "Usuário recebe -3 no teste de Ataque.",
            "Aumenta o custo dessa técnica em 3 SP."
        ],
        "conceitos": [
            "unicidade",
			"stacking"
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
            "Aumenta o custo da técnica em 3 SP."
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
            "\"Não errar\" significa que o alvo ainda pode tentar esquivar, bloquear ou contra-atacar, mas independente de tudo isso: quem estiver usando a técnica com este addon SEMPRE acerta o alvo. Ou seja, testes de esquiva dos oponentes sempre falham independente dos resultados; contra-ataques podem acontecer mas a técnica com este addon sempre acerta sua vítima, mesmo que ela tenha uma prioridade superior.",
			"O uso da técnica quando esse efeito é ativado envolve uma cena que precisa deixar claro para o inimigo e todos os outros jogadores que essa técnica é um Último Recurso.",
            "Aumenta custo da técnica em 4 SP.",
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
            "Garante +2 Bônus de Habilidade dano caso o oponente tente bloquear seu golpe.",
            "Aumenta o custo da técnica em 2 SP."
        ],
        "conceitos": [
            "unicidade",
			"stacking"
        ],
        "nivel": 1
    },
    {
        "id": 245,
        "tipo": "ataque",
        "nome": "Unblockable II",
        "nomeLimpo": "Unblockable II",
        "efeitos": [
            "Garante +3 Bônus de Habilidade dano caso o oponente tente bloquear seu golpe.",
            "Aumenta o custo da técnica em 4 SP."
        ],
        "conceitos": [
            "unicidade",
			"stacking"
        ],
        "nivel": 2
    },
    {
        "id": 259,
        "tipo": "ataque",
        "nome": "Vulnerability",
        "nomeLimpo": "Vulnerability",
        "efeitos": [
            "Caso o ataque acerte,  o alvo se torna Vulnerável e o próximo ataque realizado contra ele com sucesso causará +2 Bônus de Poder em dano. Esse efeito dura até o começo do seu próximo turno.",
            "Ao ativar esse ataque, pague mais 1 SP para cada alvo que a técnica possuir. Esse pagamento não pode ser reduzido por nenhum efeito e conta como um custo de ativação.",
            "O custo extra desse addon não é pago quando esse ataque é usado como contra-ataque ou contra um alvo único.  Os efeitos desse addon são ignorados quando o ataque é feito como contra-ataque.",
            "Aumenta o custo da técnica em 2 SP."
        ],
        "conceitos": [
            "unicidade",
			"stacking"
        ],
        "nivel": 1
    },
    /*
     * Técnicas Especiais
     */
	 {
        tipo : 'especial',
        nome : 'Haymaker',
        nomeLimpo : 'Haymaker',
        efeitos :[
            "Você pode ativar este addon durante o seu turno e ganhar um Bônus de Poder igual à +1 no seu próximo teste de Ataque feito em um Contra-Ataque.",
            "Custo de ativação: 3 SP e não gasta o turno, sendo feito somente uma vez por rodada."
        ],
        conceitos : [
		"stacking"
		],
        nivel : 1
    },
	 {
        tipo : 'especial',
        nome : 'Gaze of the Guardian',
        nomeLimpo : 'Gaze of the Guardian',
        efeitos :[
            "Escolha um inimigo marcado por você. Até o seu próximo turno, você se torna o único alvo válido para ataques realizados pelo inimigo escolhido. Isso não é válido para contra-ataques, apenas ataques diretos feitos pelo alvo.",
            "Caso um personagem esteja afetado por vários Gaze of the Guardian ou efeitos similares, ele pode realizar ataques contra qualquer um dos personagens que aplicaram esses efeitos nele.",
            "Ativar esse efeito consome seu turno. O custo de ativação desse efeito é 2 SP."
        ],
        conceitos : [],
        nivel : 2
    },
    {
        tipo : 'especial',
        nome : 'Esforço Agressivo',
        nomeLimpo : 'Esforco Agressivo',
        efeitos :[
            "Esse efeito pode ser ativado quando usando algum efeito de Formas Especiais que consome o turno do próprio personagem.",
            "O turno do personagem não é consumido pelo efeito em questão.",
			"Esse addon só pode ser ativado uma vez por rodada pelo personagem.",
            "O custo de ativação desse efeito é 6 SP, cobrados além do custo de ativação do efeito que altera."
        ],
        conceitos : [],
        nivel : 2
    },
	  {
        tipo : 'especial',
        nome : 'Bloodlust',
        nomeLimpo : 'Bloodlust',
        efeitos :[
            "Esse efeito não consome o turno do personagem. Gaste 6 SP para aumentar a sua próxima rolagem de dano em +2 Bônus de Poder. Esse efeito se perde se não for gasto até o começo do seu próximo turno.",
            "Você não pode gastar mais de 6 SP de uma vez.",
            "Esse efeito não pode ser usado múltiplas vezes de uma vez e um alvo entra num estado de exaustão após usá-lo, sendo incapaz de usá-lo na sua rodada seguinte. Dessa forma, é necessário um intervalo de 1 rodada até que possa usar novamente."
        ],
        conceitos : [
			"stacking"
		],
        nivel : 2
    },
    {
        tipo : 'especial',
        nome : 'Avatar of Destruction I',
        nomeLimpo : 'Avatar of Destruction I',
        efeitos :[
            "Ao ativar esse efeito, o personagem recebe +1 Bônus de Poder em testes de combate e +2 Bônus de Poder dano até o final do combate.",
            "Após o final da luta (ou se o personagem for derrotado), os danos ao corpo do personagem serão gigantes. Coisas como ossos quebrados pelo corpo inteiro, músculos estourados, etc. O personagem não será capaz de lutar nem de fazer nada que exija muito do físico até tudo estar em ordem novamente.",
            "Mestres devem levar em conta quanto tempo o efeito durou para decidir o dano recebido pelo corpo do personagem. O jogador fazendo essa técnica também deve explicar como esse dano é capaz de ignorar qualquer vantagem que ele tenha, realmente exigindo tempo para se recuperar.",
            "Caso seja impossível encontrar uma forma de causar esse dano e a passagem de tempo para o personagem, pode-se cobrar 10% da Experiência TOTAL do personagem, sem volta."
        ],
        conceitos : [
			"stacking"
		],
        nivel : 2
    },
    {
        tipo : 'especial',
        nome : 'Avatar of Destruction II',
        nomeLimpo : 'Avatar of Destruction II',
        efeitos :[
            "Ao ativar esse efeito, o personagem recebe +3 Bônus de Poder em testes de combate e +6 Bônus de Poder em dano até o final do combate.",
            "O SP do personagem se torna o máximo e não desce. Custos extras de técnicas devem ser sempre o mínimo possível (Ataques com All I have não poderiam gastar SP para aumentar seu dano).",
            "Toda vez que o turno do personagem chegar, o HP Atual dele é aumentado para 7 caso seja menor do que 7. Isso não conta como uma cura e não gasta SP.",
            "Se o HP do personagem chegar a 0 ou menos em algum momento, esse efeito termina e o HP do personagem não se recuperará no turno dele.",
            "Ao final da luta (ou se o personagem for derrotado), o personagem que ativou esse efeito morre. Essa morte irá acontecer independente de quais vantagens ou efeitos o personagem tenha. A morte é inevitável."
        ],
        conceitos : [
			"stacking"
		],
        nivel : 3
    },
    {
        "id": 209,
        "tipo": "especial",
        "nome": "Backstabber",
        "nomeLimpo": "Backstabber",
        "efeitos": [
            "Recebe um inimigo e um aliado como alvos. Faça um teste de Esquiva contra o Ataque do inimigo escolhido. Se você vencer, o próximo ataque que o inimigo fosse fazer em você é realizado no aliado escolhido. Em caso de empates, rolem novamente até um vencedor ser declarado.",
            "Não consome o turno do usuário, mas só pode ser ativada uma vez por rodada.",
            "Ativar este efeito consome 2 SP."
        ],
        "conceitos": [
        ],
        "nivel": 1
    },
	    {
        "tipo": "especial",
        "nome": "Tudo ou Nada",
        "nomeLimpo": "Tudonada",
        "efeitos": [
            "Você pode ativar esse efeito como uma ação de defesa contra um ataque do oponente que possa ser esquivado. Você só pode ativar esse efeito uma vez por rodada.",
            "Caso ative esse efeito, faça uma ação de esquiva normalmente. Se você esquivar do ataque do oponente com sucesso, você pode realizar um ataque imediato contra ele (e apenas ele). Esse ataque recebe um bônus de acerto de +1 Bônus de Habilidade.",
			"Quando seu próximo turno começar, ele termina imediatamente, sem você poder agir.",
			"Esse addon não pode funcionar em conjunto com efeitos colaterais de addons que forcem o personagem a ficar indefeso, como por exemplo, o addon \"Bull Rush\"",
            "Ativar este efeito consome 2 SP."
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
            "Consome 2 SP para dar +1 Bônus de Apoio em algum atributo de combate de um aliado (escolhido na criação desta técnica). O efeito termina no início do seu próximo turno.",
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
            "Consome 2 SP e o turno do personagem para dar+ 1 Bônus de Apoio em algum atributo de combate de todos os aliados (escolhido na criação desta técnica). O efeito termina no início do seu próximo turno.",
            "\"Dano\" pode ser escolhido como destino do bônus. Caso ele seja escolhido, o bônus de poder dele é +2 ao invés de +1.\""
        ],
        "conceitos": [
            "stacking"
        ],
        "nivel": 1
    },
    {
        "id": 224,
        "tipo": "especial",
        "nome": "Bloqueio Agressivo",
        "nomeLimpo": "Bloqueio Agressivo",
        "efeitos": [
            "A técnica pode ser usada para consumir o turno do usuário. Se o personagem realizar um contra-ataque antes do seu próximo turno, não recebe dano pelo ataque do oponente.  Isso só vale para o primeiro contra-ataque realizado antes do seu próximo turno. Entretanto, caso o oponente resolva esquivar do seu contra-ataque e passe no teste, gerando assim um dano crítico, o personagem usando esta técnica recebe o dano normalmente.",
            "Quando esse efeito é utilizado, fica completamente claro para o oponente e todos os participantes da luta que o usuário está preparando um contra-ataque.",
            "Ativar este efeito consome 4 SP."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 2
    },
    {
        "tipo": "especial",
        "nome": "Bull Rush",
        "nomeLimpo": "Bullrush",
        "efeitos": [
			"Usável apenas no turno do personagem. Esse poder pode ser ativado durante o seu turno, antes de você realizar qualquer ação que fosse acabar seu turno.",
			"Quando esse turno fosse acabar, faça um novo ataque (básico ou por técnicas de ataque).",
			"Até o início do seu próximo turno, você fica indefeso e não pode reagir a nada.",
			"Você não pode agir no seu próximo turno e ele acaba assim que começa. Seus turnos se normalizam depois disso."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },	
    {
        "id": 365,
        "tipo": "especial",
        "nome": "Controle Absoluto",
        "nomeLimpo": "Controle Absoluto",
        "efeitos": [
            "Sempre que você for rolar dados de combate (testes de Acerto, Esquiva, Dano e outros diretamente relacionados ao combate), você pode reduzir seu modificador para qualquer número que quiser, contanto que seja menor do que o modificador que você ia usar. Você não precisa avisar ninguém disso.",
            "Esse addon não funciona junto de Area of Effect.",
			"Reduzir seus modificadores não consome SP."
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
            "O redirecionamento não funciona se você e seu aliado protegido estiverem em zonas diferentes e for logicamente impossível de protegê-lo(a).",
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
            "Ativar este efeito consome 4 SP."
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
            "Você pode ativar esse efeito quando realizar uma ação de ataque ou defesa para receber +1 Bônus de Habilidade na rolagem de teste, caso ela aconteça. O efeito pode ser ativado para os dois tipos de teste sem exigir que o personagem possua mais de uma Esforço Especial.",
            "Você deve decidir usar Esforço Especial antes de qualquer rolagem acontecer, junto da sua decisão do que fazer com a sua ação. Você não pode utilizar Esforço Especial só para receber o +1 que faltou para vencer.",
            "O custo de ativação desse efeito é 4 SP."
        ],
        "conceitos": [
			"stacking"
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
            "Você pode gastar 4 SP para receber um +2 Bônus de Poder em um teste dessas perícias."
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
            "Escolha um aliado que está realizando um teste de perícia e pague 4 SP. Esse aliado recebe um +2 Bônus de Poder no seu teste."
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
        "nome": "Expertise III",
        "nomeLimpo": "Expertise III",
        "efeitos": [
            "Use esse addon e ganhe superioridade no seu próximo teste de perícia ou atributo-teste.",
			"Custo de SP igual à 5 e só pode ser usado 1x por combate ou a cada 30 minutos dentro do jogo." 
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
        "nivel": 3
    },
    {
        "id": 375,
        "tipo": "especial",
        "nome": "Fusão - Use meus poderes",
        "nomeLimpo": "Fusao - Use meus poderes",
        "efeitos": [
            "Você pode se unir a outro personagem e aumentar seus poderes de alguma forma (como sendo absorvido no processo ou algo do tipo).",
            "Isso retira você do combate.",
            "O outro personagem passa a receber +2 Bônus de Fusão em qualquer teste de combate e +4 Bônus de Fusão em qualquer rolagem de dano até o fim da fusão.",
            "A duração da fusão deve ser especificada na criação da técnica, como 30 minutos ou algo assim. A duração mínima da fusão é \"até o fim do combate atual\". A fusão pode ser eterna, se apropriado. Uma fusão não pode acontecer sem consentimento de ambos os jogadores.",
            "Essa fusão não pode ser realizada durante eventos PVP."
        ],
        "conceitos": [
			"stacking"
        ],
        "nivel": 2
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
            "Ativar essa habilidade não consome SP, mas consome o turno do usuário."
        ],
        "conceitos": [

        ],
        "nivel": 1
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
            "Ativar este efeito consome 2 SP."
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
            "Escolha um dos dois efeitos: 1 - Você consegue visualizar o que um alvo está portando (Equipamentos, dinheiro e itens, incluindo seus atributos e addons).",
			"2 - Você pode fazer um teste de Percepção contra uma dificuldade colocada pelo Mestre pra perceber uma fraqueza, potencial ou detalhe narrativo ou mecânica do alvo. O que vai ser analisado é determinado na hora da ação",
            "A habilidade não gasta o turno do usuário, mas somente um efeito pode ser usado por rodada.",
            "Ativar este efeito consome 2 SP."
        ],
        "conceitos": [

        ],
        "nivel": 1
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
            "Ativar este efeito consome 4 SP."
        ],
        "conceitos": [

        ],
        "nivel": 3
    },
	    {
        "tipo": "especial",
        "nome": "Mirage",
        "nomeLimpo": "Mirage",
        "efeitos": [
            "O primeiro golpe que acertar o usuário desse addon com sucesso após o uso da técnica com ele, tem o seu dano reduzido em 50%. Esse efeito não é acumulativo com outras reduções.",
            "Este efeito não se ativa caso o personagem empate no teste de esquiva contra o ataque.",
            "Um personagem não pode bloquear enquanto estiver sobre os efeitos deste addon.  O efeito desaparece quando o usuário receber um ataque ou quando o início do seu próximo turno chegar.",
            "Esse addon gasta o turno do usuário quando usado.",
            "Ativar este efeito consome 5 SP."
        ],
        "conceitos": [
        ],
        "nivel": 3
    },
		    {
        "tipo": "especial",
        "nome": "Wooden Skin",
        "nomeLimpo": "Wooden Skin",
        "efeitos": [
            "Escolha um aliado e conceda um bônus de poder na RD geral dele igual à +1 até o início da sua próxima rodada.",
            "Esse efeito não pode acontecer mais de 1x por combate sobre um mesmo alvo.",
            "Custo de SP: 2 e gasta o turno OU 4 e não gasta o turno.",
        ],
        "conceitos": [
	 "unicidade",
	 "stacking"
        ],
        "nivel": 2
    },
			    {
        "tipo": "especial",
        "nome": "Praying Shield",
        "nomeLimpo": "Praying Shield",
        "efeitos": [
            "Escolha um dos atributos de dano na criação dessa técnica: ao usar os efeitos desse addon, ganhe um Bônus de RD Protegida nesse atributo até o fim do seu próximo turno.",
			"Custo de SP: 2 e gasta o turno ou 4 e não gasta o turno.",
        ],
        "conceitos": [
	 "unicidade",
	 "stacking"
        ],
        "nivel": 1
    },
				    {
        "tipo": "especial",
        "nome": "Windwall Shield",
        "nomeLimpo": "Windwall",
        "efeitos": [
            "O alvo fica imune ao primeiro ataque do tipo Ranged (à distância) que receber após o uso desse addon.",
						"Este efeito não pode ser aplicado mais do que 1x por combate num mesmo alvo e não pode estar ativo ao mesmo tempo em que o addon Spike Shield.",
            "Custo de SP: 3 e gasta o turno ou 5 e não gasta o turno, podendo ser usado em aliados mas somente uma vez por rodada.",
        ],
        "conceitos": [
	 "unicidade",
        ],
        "nivel": 2
    },
					    {
        "tipo": "especial",
        "nome": "Spike Shield",
        "nomeLimpo": "Spike Shield",
        "efeitos": [
            "O alvo fica imune ao primeiro ataque do tipo Melee (físico).",
			"Este efeito não pode ser aplicado mais do que 1x por combate num mesmo alvo e não pode estar ativo ao mesmo tempo em que o addon Windwall Shield.",
            "Custo de SP: 3 e gasta o turno ou 5 e não gasta o turno, podendo ser usado em aliados mas somente uma vez por rodada.",
        ],
        "conceitos": [
	 "unicidade",
        ],
        "nivel": 2
    },
		 {
        "tipo": "especial",
        "nome": "Embrace the Shadows",
        "nomeLimpo": "Embrace the Shadows",
        "efeitos": [
            "O alvo fica invisível, e em termos narrativos ele não pode ser visto por ninguém. Enquanto invisível, um personagem:",
			"Ganha +1 Bônus de Habilidade em seu Ataque e Dano, caso ataque um alvo que não o detecte.",
            "Ganha superioridade no primeiro teste de Furtividade e Prestidigitação da rodada.",
			"Perde a invisibilidade tomar dano de qualquer tipo (Damage Over Time Incluso), for curado ou afetado por qualquer habilidade aliada direta (passivas que afetam vários alvos não revelam o personagem invisível). O personagem também perde a invisibilidade APÓS causar dano por qualquer fonte direta ou após usar habilidades em geral. A invisibilidade não é perdida ao pagar o custo de manutenção de passivas.",
			"Enquanto invisível, um personagem não pode:",
			"Falar, usar itens ou qualquer ação que teoricamente quebraria sua invisibilidade.",
			"Alvos que estejam lutando contra um personagem invisível, podem fazer um teste de 1d10 + SAB + Percepção VS 1d10 + AGI + Furtividade do alvo invisível para detectá-lo.",
			"Este mesmo teste deve ser feito toda vez que o combatente invisível for atacar alguém de qualquer forma ou fizer uma ação. Caso um combatente que seja alvo passe neste teste de identificação, o personagem invisível perde seus bônus contra esse alvo e é imediatamente relevado para todos.",
			"Custo: 5 SP, gasta o turno",
			"Pode ser ativada no turno de preparação da luta."
        ],
        "conceitos": [
	 "unicidade",
	 "stacking",
	 "superioridade",
        ],
        "nivel": 2
    },
			 {
        "tipo": "especial",
        "nome": "Break the Shadows",
        "nomeLimpo": "Break the Shadows",
        "efeitos": [
            "O personagem realiza um teste de 1d10 + SAB + Percepção VS 1d10 + AGI + Furtividade contra todos os alvos que estejam sob o efeito de Embrace the Shadows. ",
			"Jogue o teste separadamente para cada alvo. Se passar, o personagem revela esses alvos, fazendo com que eles percam os efeitos da invisibilidade imediatamente.",
			"Custo: 3 SP base +2 para cada alvo invisível, gasta o turno."
        ],
        "conceitos": [
	 "unicidade",
        ],
        "nivel": 2
    },
			 {
        "tipo": "especial",
        "nome": "Area of No Effect",
        "nomeLimpo": "Area of No Effect",
        "efeitos": [
            "Uma força envolve a zona em que está, fazendo com que o primeiro ataque com um addon da família Area of Effect que for jogado contra tal zona, seja negado.", 
			"Somente uma zona pode estar protegida por Area of No Effect por vez e permanece ativa por 1 rodada até o início do turno do usuário caso nenhum Area of Effect tenha sido jogado até então.",
			"É possível estender a duração para mais uma rodada (totalizando duas) uma única vez, ao pagar 3 SP (sem reduzí-lo de qualquer forma) já no início do turno do usuário. Para isso ocorrer, nenhum AoE pode ter consumido os efeitos deste addon.",
			"Esse efeito não pode ocorrer mais do que 1x por combate por personagem.",
			"Custo: 6 SP, gasta o turno."
        ],
        "conceitos": [
		],
        "nivel": 3
    },
			 {
        "tipo": "especial",
        "nome": "Shroud of Peace",
        "nomeLimpo": "Shroud of Peace",
        "efeitos": [
            "Uma força envolve você e seus aliados independente da zona em que estiverem, fazendo com que o primeiro ataque com um addon da família Area of Effect que seja jogado contra você ou seus aliados, seja negado. Uma vez que um alvo protegido receba um golpe com AoE, a proteção para todos os outros é cancelada também.",
			"Esse addon não pode ocorrer mais do que 1x por combate, independente de qual aliado usá-lo.",
			"Custo: 8 SP, gasta o turno."
        ],
        "conceitos": [
		],
        "nivel": 3
    },	
				 {
        "tipo": "especial",
        "nome": "Parry",
        "nomeLimpo": "Parry",
        "efeitos": [
            "Este addon só pode ser ativado quando você for alvo de um golpe ou habilidade. A técnica com esse addon só pode ser usada uma vez por rodada.",
			"Quando ativado, você pode usar seu valor de Ataque ao invés de Defesa no teste de Esquiva.",
			"Quando esse efeito é utilizado, fica completamente claro para o oponente e todos os participantes da luta que o usuário está preparando uma forma de anular o golpe.",
			"Custo: 8 SP."
        ],
        "conceitos": [
	 "unicidade",
        ],
        "nivel": 3
    },
					 {
        "tipo": "especial",
        "nome": "Consume Rage",
        "nomeLimpo": "Consume Rage",
        "efeitos": [
            "O personagem pode usar esse addon para causar 2 pontos de dano direto no próprio HP e ganhar +1 Bônus de Poder para cada debuff (condição negativa) ativa sobre ele.",
			"Esse efeito só persiste até o fim do turno do usuário ou quando o primeiro dano for causado.",
			"O efeito é consumido quando as condições anteriores forem respeitadas.",
			"Custo: 1 SP, não gasta o turno mas só pode acontecer 1x por rodada."
        ],
        "conceitos": [
		"unicidade",
		"stacking"
        ],
        "nivel": 4
    },
					 {
        "tipo": "especial",
        "nome": "Divine Trap",
        "nomeLimpo": "Divine Trap",
        "efeitos": [
            "Escolha um atributo na criação dessa técnica e um alvo ou você mesmo (ver custos de SP): quando usar este addon, você ou seu aliado ficam protegidos no atributo em questão.",
			"O primeiro golpe que acertar o alvo protegido e utilizar tal atributo, ao invés de causar dano, irá restaurar o HP da vítima em um valor igual à metade da ROLAGEM de dano causado.",
			"Custo de SP: 4, consome o turno do personagem e só pode ser usada uma vez por combate por este personagem OU 6 SP, consome o turno, somente 1 vez por combate e pode ser usado também num aliado."
        ],
        "conceitos": [
	 "unicidade",
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
            "Como um custo para ativar esse efeito, você paga (4 + X) SP e recebe um dano direto de (Nível + X) HP. O dano conta como um dano para outros efeitos e não pode ser reduzido. Esse custo é cobrado toda vez que o bônus é usado em algo.",
            "Você recebe um Bônus de +X Bônus de Poder em testes de combate e um Bônus de +(2 * X) Bônus de Poder dano até o término daquela ação, que não pode durar mais do que um turno.",
            "Após ativar Overload em alguma ação, o personagem entra no estado 'Overloaded'.",
            "- Overloaded: Você está explodindo poder. O personagem não pode ser curado de maneira alguma. Realizar qualquer ação de combate sem ativar Overload cancela esse efeito e faz o personagem entrar no estado 'Exausto'.",
            "- Exausto: Você usou todas as suas forças. Receba -1 em qualquer Teste e -2 Dano. Esse efeito dura até o personagem poder descansar, não podendo ser removido antes do final do combate. Personagens Exaustos não podem mais ativar Overload."
        ],
        "conceitos": [
			"stacking"
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
            "O personagem pode gastar um turno em combate para reduzir o redutor em atributos de Poder Reserva em 1. Isso não consome SP.",
            "O personagem pode retirar os redutores como uma ação extra ao custo de 15 SP. Isso retira apenas um redutor (mas o personagem pode retirar todos os redutores no mesmo turno, se quiser, pagando o custo várias vezes).",
            "Aumente o SP máximo do personagem em 10 SP para cada Poder Reserva nessa técnica."
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
            "Ativar esse efeito não consome o turno do personagem, mas só pode ser ativado uma vez por rodada. Ativar esse efeito também custa 4 SP.",
            "Pode-se consumir o próprio turno ao ativar esse efeito para reduzir seu custo de SP a 0.",
			"Alternativamente aos efeitos listados acima, o usuário pode escolher um aliado, gastar o seu turno e zerar o contador de Damage Over Time dele. Esse efeito custa 2 SP."
        ],
        "conceitos": [
			"damageovertime",

        ],
        "nivel": 1
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
            "Ativar este efeito consome 6 SP."
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
            "Ativar este efeito consome 6 SP."
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
			"Ao ativar essa técnica, escolha um aliado. Esse aliado tem seu HP curado em até 1d6 + (Sabedoria de Combate x 2), com cura em excesso do HP dele sendo perdida.",
			"Você pode substituir 1d6 pelo seu dado (e bônus) de armas.",
            "Para cada ponto de HP curado no alvo dessa maneira, tanto ele quanto você perdem 0.5 SP (ou 1 SP para cada 2 HP curados).",
			"Além disso, você perde 3 SP ao ativar essa técnica.",
			"Ativar esse efeito consome seu turno."
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
			"Ao ativar essa técnica, escolha um aliado. Esse aliado tem seu HP curado em até 1d6 + [Um atributo de dano escolhido na criação dessa técnica], com cura em excesso do HP dele sendo perdida.",
			"Caso suas armas equipadas funcionem para o atributo escolhido, você pode substituir 1d6 pelo seu dado (e bônus) de armas.",
            "Para cada ponto de HP curado no alvo dessa maneira, ele perde 0.5 SP (ou 1 SP para cada 2 HP curados).",
            "Além disso, você perde 1 SP ao ativar essa técnica.",
			"Ativar esse efeito consome seu turno."
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
			"Escolha um atributo de dano.",
			"Ao ativar essa técnica, todos os aliados e também você se curam no valor do atributo escolhido, com cura em excesso dos HP de cada um sendo perdida.",
            "Para cada ponto de HP curado dessa maneira, o personagem curado perde 0.5 SP (ou 1 SP para cada 2 HP curados).",
			"Além disso, para cada alvo afetado por essa técnica, você paga 1 SP.",
			"Ativar esse efeito consome seu turno."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 369,
        "tipo": "especial",
        "nome": "Restauração - Mountain's Stand",
        "nomeLimpo": "Restauracao - Mountain's Stand",
        "efeitos": [
            "Cure-se no valor de (Sabedoria de Combate + 2) + 1d4. Caso suas armas equipadas funcionem para o atributo escolhido, você pode substituir 1d4 pelo seu dado (e bônus) de armas.",
			"Usar este addon consome o turno do personagem.",
            "Restauração - Mountain's Stand só pode ser utilizada quando o personagem possui alguma passiva com addons da família Protection ativa. Caso contrário, mesmo que uma técnica com Mountain's Stand seja criada, ela não poderá ser utilizada.",
            "Para cada ponto de HP curado dessa maneira, você perde 1 SP (ou 1 SP para cada 1 HP)."
        ],
        "conceitos": [
            
        ],
        "nivel": 1
    },
    {
        "id": 345,
        "tipo": "especial",
        "nome": "Restauração - Patch up",
        "nomeLimpo": "Restauracao - Patch up",
        "efeitos": [
            "Cura um aliado em 1d4 HP. Essa cura não cobra SP do alvo curado. Esta cura não pode ser aumentada de forma alguma por outras influências.",
			"Ativar esse efeito consome 2 SP do usuário.",
            "Ativar esse efeito não consome seu turno, mas só pode ser utilizado uma vez por rodada."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
	    {
        "tipo": "especial",
        "nome": "Restauração - Lifebloom",
        "nomeLimpo": "Restauracao - Lifebloom",
        "efeitos": [
            "Ao ativar essa técnica, escolha um aliado. Você coloca um efeito adormecido que só se ativa no início do próximo turno de tal aliado.",
            "Quando esse efeito se ativar, o alvo se cura em 1d6 + [Um atributo de dano escolhido na criação dessa técnica], com cura em excesso do HP dele sendo perdida.",
            "Caso suas armas equipadas funcionem para o atributo escolhido, você pode substituir 1d6 pelo seu dado (e bônus) de armas.",
			"Para cada ponto de HP curado no alvo dessa maneira, ele perde 0.5 SP (ou 1 SP para cada 2 HP curados).",
			"Você pode ativar isso em um alvo por 2 SP, sem consumir seu turno, mas podendo fazer isso apenas uma vez por rodada.",
			"Alternativamente, você pode ativar isso em três alvos por 6 SP, consumindo seu turno."
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
            "Ativar este efeito consome 2 SP."
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
			"Em caso de empates, ambos os envolvidos devem re-jogar os dados.",
            "Aumente o custo da técnica em 2 SP. Essa habilidade só pode ser usada uma vez por turno do usuário."
        ],
        "conceitos": [
            "marcas",
            "basicos",
            "normalizado"
        ],
        "nivel": 1
    },
	 {
        "tipo": "especial",
        "nome": "Spellthief",
        "nomeLimpo": "Spellthief",
        "efeitos": [
            "Faça um teste de Ataque contra Defesa do alvo. Esse teste conta como um teste de esquiva. Se obtiver sucesso, escolha uma condição positiva (buff) ativa sobre o alvo e remova dele, trazendo para você. Isso não se aplica para buffs de Estilos de Luta e outros naturais do personagem (originários de itens, efeitos naturais, etc).",
            "O buff roubado dura até o início da sua próxima rodada. Um alvo que tiver um buff roubado ganha um bônus não-nomeado de +1 no teste de Defesa na próxima vez que for alvo DESSE mesmo addon, acumulando-se até um máximo de +4. Caso o alvo não seja alvo desse addon por duas rodadas ou mais, esse contador é resetado para zero.",
			"Um personagem que roubar uma passiva, ganha os efeitos dela somente se ela não for de estado natural do alvo, e o alvo em questão precisa reativar a passiva em seu turno. A habilidade passiva fica ativa somente até o início do próximo turno do personagem que a roubou.",
			"Ativar este efeito consome 4 SP."
        ],
        "conceitos": [
        ],
        "nivel": 3
    },
		 {
        "tipo": "especial",
        "nome": "Supress",
        "nomeLimpo": "Supress",
        "efeitos": [
            "Escolha um aliado que esteja sofrendo um debuff: essa penalidade fica adormecida e tem seus efeitos suspensos até o início da próxima rodada do usuário deste addon.",
            "Durações também ficam adormecidas e voltam a contar quando este efeito sair de cena.",
			"Um alvo não pode ter a mesma penalidade adormecida várias vezes seguidas.",
			"Gasto de SP igual à 4. Não gaste o turno do personagem, mas só podendo ser usada uma vez por rodada."
        ],
        "conceitos": [
        ],
        "nivel": 2
    },
			 {
        "tipo": "especial",
        "nome": "Blackward",
        "nomeLimpo": "Blackward",
        "efeitos": [
            "Escolha um aliado, não gaste seu turno, mas só use 1x por rodada: a primeira condição negativa que entrar em contato com ele é redirecionada para você.",
            "Apenas a condição é redirecionada, os danos ainda são aplicados contra o alvo primário.",
			"Ativar este efeito consome 3 SP."
        ],
        "conceitos": [
        ],
        "nivel": 2
    },
    {
        "id": 201,
        "tipo": "especial",
        "nome": "Summon - Ally",
        "nomeLimpo": "Summon - Ally",
        "efeitos": [
            "Invoca um aliado que lutará ao seu lado. O aliado é representado por uma Arma de Duas Mãos de nível 2 que sempre possui o addon \"Autômato sem alma\".",
            "O aliado possui dois slots de addons, mas Autômato sem Alma não ocupa slots.",
            "Ativar essa técnica consome 2 SP e o turno do personagem. É possível invocar rapidamente, sem consumir o turno do personagem, mas isso aumenta o custo de invocação para 6 SP.",
            "Pagando 6 SP, é possível ativar essa técnica durante a fase de preparação.",
            "A \"Arma\" criada por essa técnica não pode possuir addons de armas que criem outras técnicas dentro dela.",
            "Um personagem só pode ter um único aliado invocado por \"Summon - Ally\" de cada vez. O personagem pode abandonar aliados invocados anteriormente como uma ação grátis durante seu turno.",
            "Addons \"Summon\" não são afetados pelas regras de unicidade e pode-se ter vários deles em uma mesma técnica e são todos tratados separadamente."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 202,
        "tipo": "especial",
        "nome": "Summon - Sword of the Holy Titans",
        "nomeLimpo": "Summon - Sword of the Holy Titans",
        "efeitos": [
            "Você conjura uma peça de equipamento de nível 2, com dois slots de addon.",
            "O equipamento conjurado deve ser uma Arma de Duas Mãos, Arma de uma Mão, Arma Defensiva ou Armadura. Ele não pode ser um item consumível nem um acessório.",
            "O item a ser invocado deve ser definido durante a criação dessa técnica.",
            "Ativar esse efeito para invocar o equipamento consome 1 SP e o turno do personagem. É possível invocar rapidamente, sem consumir o turno do personagem, gastando 4 SP ao invés de 1 SP.",
            "Consumindo 4 SP, é possível ativar essa técnica durante a fase de preparação.",
            "O item criado por essa técnica não pode possuir addons que criem outras técnicas dentro dele.",
            "A qualquer momento, só deve existir uma cópia do item criado por essa técnica. O personagem pode fazer um equipamento criado por essa técnica desaparecer como uma ação grátis durante seu turno.",
            "Addons \"Summon\" não são afetados pelas regras de unicidade e pode-se ter vários deles em uma mesma técnica e são todos tratados separadamente."
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
			"O aumento no dano é adicionado após o calculo de RD.",
            "Seu aliado não recebe dano algum.",
			"Para este efeito ocorrer, o usuário precisa estar na mesma zona do protegido. Com o gasto de 4 SP ele pode ser usado para proteger alvos de zonas adjacentes. Esse custo não pode ser reduzido por nenhum efeito.",
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
        "nivel": 2
    },
{
        "tipo": "passiva",
        "nome": "Symbol of Protection",
        "nomeLimpo": "Symbol of Protection",
        "efeitos": [
            "Quando um inimigo marcado por você faz um ataque que não inclui você como alvo, cure um aliado da sua escolha em 2 HP.",
			"Você não pode mais ativar suas marcas.",
            "Aumenta o custo por rodada da técnica passiva em 2 SP."
        ],
        "conceitos": [
            "marcas",
            "basicos",
            "normalizado"
        ],
        "nivel": 1
    },
{
        "tipo": "passiva",
        "nome": "Symbol of Pain",
        "nomeLimpo": "Symbol of Pain",
        "efeitos": [
			"Quando um inimigo marcado por você faz um ataque não inclui você como alvo, contra-ataques bem sucedidos contra esse ataque fazem o inimigo receber 1 ponto de dano direto causado por você.",
			"Você não pode mais ativar suas marcas.",
            "Aumenta o custo por rodada da técnica passiva em 2 SP."
        ],
        "conceitos": [
            "marcas",
        ],
        "nivel": 1
    },
{
        "tipo": "passiva",
        "nome": "Symbol of Recovery",
        "nomeLimpo": "Symbol of Recovery",
        "efeitos": [
			"Quando um inimigo marcado por você faz um ataque que não inclui você como alvo, recupere 2 SP.",
			"Você não pode mais ativar suas marcas.",
            "Aumenta o custo por rodada da técnica passiva em 2 SP."
        ],
        "conceitos": [
            "marcas",
        ],
        "nivel": 1
    },
{
        "tipo": "passiva",
        "nome": "Symbol of Peace",
        "nomeLimpo": "Symbol of Peace",
        "efeitos": [
			"Quando um inimigo marcado por você faz um ataque que não inclui você como alvo, o ataque causa -2 dano.",
			"Você não pode mais ativar suas marcas.",
            "Aumenta o custo por rodada da técnica passiva em 2 SP."
        ],
        "conceitos": [
            "marcas"
        ],
        "nivel": 1
    },
{
        "tipo": "passiva",
        "nome": "Symbol of Destruction",
        "nomeLimpo": "Symbol of Destruction",
        "efeitos": [
			"Quando um inimigo marcado por você faz um ataque que não inclui você como alvo, o seu próximo ataque realizado antes do final do seu próximo turno naquele oponente ganha +2 Bônus de Poder de dano.",
			"Você não pode mais ativar suas marcas.",
            "Aumenta o custo por rodada da técnica passiva em 2 SP."
        ],
        "conceitos": [
            "marcas",
			"stacking"
        ],
        "nivel": 1
    },		
    {
        "id": 341,
        "tipo": "passiva",
        "nome": "Iron Will",
        "nomeLimpo": "Iron Will",
        "efeitos": [
			"Enquanto essa passiva estiver ativa, o personagem só pode ser nocauteado no fim do próprio turno.",
			"Um personagem com essa passiva ativa é nocauteado no fim do próprio turno se seu HP estiver baixo o suficiente para tal, independente de ter perdido HP nesse turno ou não.",
			"Se o HP do personagem ficar abaixo de -10 a qualquer momento, ele ainda morre imediatamente.",
			"Aumenta o custo por rodada da técnica passiva em 2 SP."
			],
        "conceitos": [],
        "nivel": 1
    },
    {
        "id": 341,
        "tipo": "passiva",
        "nome": "Berserking",
        "nomeLimpo": "Berserking",
        "efeitos": [
            "Caso você receba um dano final que exceda sua cura por (Sabedoria de Combate) + 2, você pode gastar esta mesma quantia (SdC + 2) em SP para se curar imediatamente depois do dano ter sido recebido.",
            "Quando você realiza um ataque dentro do seu turno e você recebeu algum dano desde o seu último turno, receba um Bônus de Habilidade igual à +3 em danos, esse bônus só é ganho no seu turno atual desde que a condição seja obedecida. No fim do seu turno, esse efeito é resetado.",
            "Enquanto esse efeito estiver ativo, reduza sua RD Geral em 2 pontos.",
            "Aumente custo total da técnica em 2 SP (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa."
        ],
        "conceitos": [
			"stacking"
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
            "Aumente custo total da técnica em 2 (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa.",
            "Desativar essa técnica consome o turno do personagem."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 306,
        "tipo": "passiva",
        "nome": "Boon of the Protector",
        "nomeLimpo": "Boon of the Protector",
        "efeitos": [
            "Inimigos marcados por você causam 1 ponto de dano a menos contra você, redução aplicada após o cálculo de danos e podendo reduzir o dano tomado a 0.",
            "Ataques realizados no seu turno são Normalizados.",
            "Aumente custo total da técnica em 2 (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa."
        ],
        "conceitos": [
            "marcas",
            "basicos",
            "normalizado"
        ],
        "nivel": 1
    },
    {
        "id": 347,
        "tipo": "passiva",
        "nome": "Change Form",
        "nomeLimpo": "Change Form",
        "efeitos": [
            "Escolha dois atributos durante a criação dessa técnica, um primário e um secundário. Enquanto essa passiva estiver ativa, você pode usar o seu atributo de dano primário como se fosse o atributo de dano secundário, contanto que os dois não sejam usados ao mesmo tempo. ",
            "Exemplo: um personagem pode escolher na criação trocar arma com magia, assim sendo, ele pode ativar a passiva e usar seu valor de arma como se fosse magia.",
            "Aumente o custo total da técnica em +2 (não acumulativo, mas somatório entre outros addons) pra cada rodada ativa.",
            "Ativar não consome o turno, mas dobra o custo de SP pago pela habilidade nesse turno. A técnica pode ser desativada sem gastar o turno.",
            "Esse addon consome dois slots."
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
            "Ações realizadas por aliados e inimigos recebem custos extras de SP.",
            "Defesas: 1 SP.",
            "Ataques: 2 SP.",
            "O personagem com essa passiva ativa recebe os custos extras duas vezes.",
            "Defesas: 2 SP.",
            "Ataques: 4 SP.",
            "Ativar esse efeito não é opcional para aliados nem inimigos. Os custos extras são adicionados às ações e não podem ser reduzidos de nenhuma maneira."
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
            "IMPORTANTE: Todos os seus ataques passam a ser normalizados. Ver regras de Ataques Normalizados.",
            "Aumente custo total da técnica em 2 (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa."
        ],
        "conceitos": [
            "normalizado"
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
            "Sua descrição para essa técnica deve levar como esse addon funciona em conta, incluindo a forma pela qual o inimigo cancela o efeito.",
            "Os efeitos deste addon acabam quando o usuário ou vítima chegam a 0 de HP.",
			"Causar dano em si mesmo por quaisquer efeitos de addons não faz o dano ser repassado para o inimigo.",
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
            "Enquanto essa passiva estiver ativa, toda vez que você, o usuário dessa técnica, pagar 4 SP ou mais de uma vez só, você deve pagar 4 SP a mais.",
            "\"De uma vez só\" significa durante a resolução de um único efeito. Como o custo de manter uma Passiva ativa, o custo de Ativar algum Efeito Especial, então dá tempo desse custo ser alterado por outros efeitos, como aumentos ou reduções, e isso também afeta se Magical Flux irá se ativar ou não.",
            "Magical Flux não pode ser incluída em Passivas criadas por Armaduras.",
            "Diminua o custo dessa passiva em 2 SP por rodada.",
            "Exemplo: Realizar um ataque de custo 6 SP com Magical Flux ativa aumenta o custo para 10 SP.",
            "Exemplo 2: Se você tiver uma passiva com custo de 4 SP por rodada e estiver com ela ativa enquanto Magical Flux está ligada, o custo dela por rodada passa a ser 8 SP."
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
            "Se esse for o único addon em uma técnica, ele não aumenta seu custo, mantendo os 0 SP originais de passivas. Caso contrário, ele aumente custo total da técnica em 1 (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa."
        ],
        "conceitos": [

        ],
        "nivel": 1
    },
    {
        "id": 354,
        "tipo": "passiva",
        "nome": "Master of One",
        "nomeLimpo": "Master of One",
        "efeitos": [
            "Enquanto essa técnica estiver ativa, sempre que você for rolar danos, substitua o valor de qualquer atributo de dano que você esteja adicionando a rolagem pela sua sabedoria de combate.",
            "Seus ataques passam a ter como tipo todos os seus atributos de dano que estejam acima de 0.",
            "Caso te falte metade ou menos da exp para conseguir um Level Up na sua Sabedoria de Combate (como em 12.5 de 25 Exp), você pode tratá-la como uma fração até o momento da rolagem. Qualquer número após a vírgula deve ser ignorado na hora de rolar o seu dano, mas se você possuir uma sabedoria de combate de 4.5, você poderia somá-la em 9 com Special Attack II, ao invés dos 8 que seriam obtidos por se ignorar a parte incompleta. Se nenhum número quebrado for adicionado à rolagem, essa fração não o altera de forma alguma: 1d6 + 4.5 se torna 1d6 + 4, simplesmente.",
            "Aumente o custo por rodada dessa passiva em 1 SP. Se esse for o único addon em uma passiva, é possível fazê-la estar ativa sempre e não poder ser desativada, nesse caso o custo cai para 0 SP por rodada."
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
            "Essa técnica é ativada na primeira oportunidade e não pode ser desativada em hipótese alguma, mas não consome SP fora de combate. Ela passa a ser uma vantagem inata do personagem.",
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
            "No fim de cada um de seus turnos, marque um oponente.",
            "Todos os seus ataques passam a ser Normalizados. Ver regras de Ataques Normalizados.",
            "Enquanto essa passiva estiver ativa, você não pode ativar suas Marcas para realizar ataques básicos. Ao invés disso, você pode redirecionar ataques de inimigos marcados por você para você mesmo. Quando você faz isso, você só pode Bloquear o ataque, não esquivar. Isso é equivalente ao seu personagem entrar no meio do caminho e receber o ataque. Isso só é possível de ser feito se o personagem estiver na mesma zona do alvo protegido.",
            "Enquanto essa passiva estiver ativa, você pode realizar a ação \"Buscar Coragem\".",
            "Ativar essa passiva consome o turno do personagem. Desativar essa passiva consome o turno do personagem.",
            "Se esse addon for o único addon em uma técnica, o personagem pode decidir fazer essa técnica ser o estado natural dele. Nesse caso, a técnica não possui mais custo e está SEMPRE ativa. Caso contrário, aumente custo total da técnica em 2 (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa."
        ],
        "conceitos": [
            "unicidade",
            "coragem",
            "basicos",
            "marcas",
            "normalizado"
        ],
        "nivel": 1
    },
    {
        "id": 336,
        "tipo": "passiva",
        "nome": "Protection - Protector Wall",
        "nomeLimpo": "Protection - Protector Wall",
        "efeitos": [
            "No fim de cada um de seus turnos, marque um oponente.",
            "Todos os seus ataques passam a ser Normalizados. Ver regras de Ataques Normalizados.",
            "Enquanto essa passiva estiver ativa, seus ataques por ativação de Marca passam a acontecer antes dos ataques do alvo.",
            "Se você atingir um ataque causado pela ativação de Marca, o inimigo não pode mais atacar o seu aliado. Ele pode decidir entre redirecionar o ataque dele para você ou cancelar o ataque. Se ele cancelar o ataque, ele ainda perde o turno dele. Se ele redirecionar o ataque para você, você pode realizar a defesa normalmente, mas sem poder contra-atacar.",
            "Enquanto essa técnica estiver ativa, você pode realizar a ação \"Buscar Coragem\".",
            "Ativar essa técnica consome o turno do personagem. Desativar essa técnica consome o turno do personagem.",
            "Aumente custo total da técnica em 2 (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa."
        ],
        "conceitos": [
            "marcas",
            "basicos",
            "coragem",
            "normalizado"
        ],
        "nivel": 1
    },
    {
        "id": 337,
        "tipo": "passiva",
        "nome": "Protection - Stalwart Protector",
        "nomeLimpo": "Protection - Stalwart Protector",
        "efeitos": [
            "No fim de cada um de seus turnos, marque um oponente.",
            "Todos os seus ataques passam a ser normalizados. Ver regras de Ataques Normalizados.",
            "Você passa a poder ativar suas marcas até duas vezes por rodada, ao invés de uma.",
            "Enquanto essa passiva estiver ativa, você pode realizar a ação \"Buscar Coragem\".",
            "Ativar essa passiva consome o turno do personagem. Desativar essa passiva consome o turno do personagem.",
            "Se esse addon for o único addon em uma técnica, o personagem pode decidir fazer essa técnica ser o estado natural dele. Nesse caso, a técnica não possui mais custo e está SEMPRE ativa. Caso contrário, aumenta o custo da técnica em 2 por rodada."
        ],
        "conceitos": [
            "marcas",
            "basicos",
            "coragem",
            "normalizado"
        ],
        "nivel": 1
    },
    {
        "id": 359,
        "tipo": "passiva",
        "nome": "The End is Near",
        "nomeLimpo": "The End is Near",
        "efeitos": [
            "Se você atingir um inimigo e causar dano com um ataque, até o início do seu próximo turno, a primeira cura por um aliado cura 1d4 pontos extras, independente de qual efeito está permitindo o uso (item, técnica dele, técnica de outro, tudo conta). The End is Near não se acumula.",
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
            "Enquanto essa técnica estiver ativa, o personagem causa -2 pontos de dano ou tem -2 RD Geral, escolhido durante a criação da técnica",
            "Diminua custo total da técnica em 2  (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa.",
            "Troca Perigosa só é afetada pelas regras de unicidade quando afetando o mesmo atributo. Você pode ter várias Troca Perigosa na mesma passiva, contanto que elas não repitam atributo. Você pode ter Troca Perigosa em mais de uma passiva ativa ao mesmo tempo, contanto que essas Troca Perigosa não afetem o mesmo atributo."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
	    {
        "tipo": "passiva",
        "nome": "Punishing Volt",
        "nomeLimpo": "Punishing Volt",
        "efeitos": [
            "Toda vez que você for atingido com 1 ou mais de dano por qualquer inimigo, cause 1 de dano aleatório direto no HP de um inimigo, podendo ser o próprio atacante.",
			"A forma de definir a aleatoriedade é decidida entre Mestre e Jogador, podendo ser rolagens de dados, jogada de moedas, etc.",
			"Esse efeito não se ativa com danos passivos que aconteçam sobre o usuário do addon, apenas danos diretos. Assim sendo, danos provenientes de Damage Over Time não ativam este addon, por exemplo.",
            "Aumente o custo total da técnica em 2 SP por rodada para se manter ativo e 1 SP extra toda vez que for atingido e esse efeito se propagar. Ambos os custos dessa técnica não podem ser reduzidos por nenhum addon."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 2
    },
		    {
        "tipo": "passiva",
        "nome": "Mage Killer",
        "nomeLimpo": "Mage Killer",
        "efeitos": [
            "Toda vez que você for atingido com 1 ou mais de dano por qualquer inimigo, remova metade do dano recebido (após passar pelas RDs e arredondado para cima) de SP do(s) atacante(s).",
            "Aumente o custo total da técnica em 2 SP por rodada ou 0 SP se ele for o único addon dessa técnica."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 2
    },
			    {
        "tipo": "passiva",
        "nome": "Delay Pain",
        "nomeLimpo": "Delay Pain",
        "efeitos": [
            "Enquanto ativo, jogue todos os efeitos que causariam dano em você no início do seu turno, para o fim dele.",
            "Aumenta o custo por rodada da técnica passiva em 2 SP."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 1
    },
				    {
        "tipo": "passiva",
        "nome": "Sharing is Caring",
        "nomeLimpo": "Sharing is Caring",
        "efeitos": [
            "Toda vez que você permitir que um aliado se cure e ele o faça, cure 1 HP seu. Isso vale para a ação de cura, não para valores.",
			"Então se você permitisse que 5 aliados se curassem, você se curaria em +5 extras. Você não paga SP pela própria cura.",
            "Aumenta o custo por rodada da técnica passiva em 3 SP. Esse custo não pode ser reduzido por nenhum addon."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 3
    },
					    {
        "tipo": "passiva",
        "nome": "Spellcaster",
        "nomeLimpo": "Spellcaster",
        "efeitos": [
            "Enquanto está passiva estiver ligada, você pode decidir pagar seu custo para recuperar seu SP em 10 pontos.",
			"Para utilizar esse efeito você deve pagar (Sabedoria de Combate) + 2 pontos de HP.",
            "Esse addon deve ser o único da técnica."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 3
    },
					    {
        "tipo": "passiva",
        "nome": "Energy Coat",
        "nomeLimpo": "Energy Coat",
        "efeitos": [
            "O alvo sobre esse efeito pode gastar 2 SP imediatos no momento em que fosse receber um dano e então reduzí-lo em 1 ponto (depois de passar pelas RDs).",
			"A redução não pode transformar o dano à zero (0).",
            "Aumente o custo total da técnica em 1, se for o único addon na técnica, o custo de SP não é aplicado."
        ],
        "conceitos": [
            "unicidade"
        ],
        "nivel": 2
    },
		 {
        "tipo": "passiva",
        "nome": "Aegis Domini",
        "nomeLimpo": "Aegis Domini",
        "efeitos": [
            "Enquanto essa passiva estiver ativa o personagem pode adicionar o seu valor de RES como bônus nos testes Bloqueio.",
			"Esse efeito por si próprio não permite que o dano reduzido chegue a 0.",
			"Todos os seus ataques passam a ser normalizados.",
            "Aumenta o custo por rodada da técnica passiva em 2 SP."
        ],
        "conceitos": [
            "unicidade",
			"normalizado",
			"basicos"
        ],
        "nivel": 2
    },
							  {
        "tipo": "passiva",
        "nome": "Boon of the Oppressor",
        "nomeLimpo": "Boon of the Oppressor",
        "efeitos": [
            "Inimigos marcados por você recebem 1 ponto de dano a mais quando atacados por você.",
			"O dano é aplicado após passar pelas RDs do alvo, dessa forma causando um dano final mínimo igual a 2 (ou um, caso o alvo possua Boon of the Protector).",
			"Ataques realizados no seu turno são Normalizados.",
            "Aumente custo total da técnica em 1 (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa. "
        ],
        "conceitos": [
            "unicidade",
			"normalizado"
        ],
        "nivel": 1
    },
							  {
        "tipo": "passiva",
        "nome": "Boon of the Aggressor",
        "nomeLimpo": "Boon of the Aggressor",
        "efeitos": [
            "Quando realizando um novo ataque contra o último inimigo que você atacou, receba +2 Bônus de Habilidade nas suas rolagens de dano.",
            "Ataques em área alteram seu último inimigo atacado para \"Nenhum\" e não recebem o bônus desse addon. Ataques de ativação de marca também são considerados para o primeiro efeito, alterando seu último alvo.",
            "Não pode ser usado jundo de Boon of the Oppressor.",
            "Aumente custo total da técnica em 3 SP (não acumulativo, mas somatório entre outros addons) para cada rodada que a habilidade com este addon ficar ativa."
        ],
        "conceitos": [
            "unicidade",
			"stacking"
        ],
        "nivel": 3
    },
								  {
        "tipo": "passiva",
        "nome": "Domínio Absoluto",
        "nomeLimpo": "Dominio Absoluto",
        "efeitos": [
            "Enquanto a passiva estiver ativa, reduza qualquer custo de SP que você fosse vir a ter em 1, uma vez por rodada.",
			"Esse efeito só é válido se o personagem possuir apenas uma técnica passiva ativa.",
			"Esse addon pode ser comprado mais de uma vez, tendo seu efeito acumulado.",
            "Não aumenta o custo de SP.",
        ],
        "conceitos": [
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
        "nivel": 1
    },
	
    /* Addons de Armas */
	{
        "tipo": "arma",
        "nome": "Rápida",
        "nomeLimpo": "Rapida",
        "efeitos": [
            "Sua arma é mais rápida que o comum, permitindo golpes mais velozes que o normal. Todos os seus ataques e técnicas usando a arma com este addon ganham +1 de Prioridade."
        ],
        "conceitos": [],
        "nivel": 1
    },	
    {
        "tipo" : "arma",
        "nome" : "Capacidade Especial",
        "nomeLimpo" : "Capacidade Especial",
        "efeitos" : [
            "Essa arma pode utilizar Itens Consumíveis com o addon \"Munição Especial\", recebendo efeitos extras nesse momento."
        ],
        "conceitos": [],
        "nivel" : 1
    },
    {
        "tipo" : "arma",
        "nome" : "Dano Especial - Capacidade Destrutiva",
        "nomeLimpo" : "Capacidade Destrutiva",
        "efeitos" : [
		"Se causando dano através de armas com Capacidade Destrutiva, role 1d8-1 ao invés de 1d6 se apenas uma arma possuir capacidade destrutiva. Se ambas as armas de uma mão, ou uma arma de duas mãos, possuirem Capacidade Destrutiva, role 1d10-2 ao invés de 1d6 para o dano.",
		"Uma arma só pode ter um addon da categoria “Dano Especial”.",
		"O addon só funciona com o tipo de ataque declarado. Assim, um personagem que use uma arma melee e outra ranged, ambas com este addon, mas decide atacar com a arma melee, então ele rolará apenas 1d8 ao invés 1d10, pois a arma ranged não entra no golpe em questão."
        ],
        "conceitos": [],
        "nivel" : 1
    },
    {
        "tipo": "arma",
        "nome": "Aliada",
        "nomeLimpo": "Aliada",
        "efeitos": [
            "A arma é, na verdade, um aliado que luta junto de você. Um companheiro animal pode ser transformado em uma arma com o addon Aliada para se explicar dentro do sistema.",
            "Esse addon não aumenta o nível da arma. A arma é um companheiro que não pode ser atacado e te ajuda. Isso pode ser um robô, uma espada que flutua e ataca quase que por conta própria, um lobo... Isso é mais um addon da narrativa do que do sistema em si.",
            "Observação: por questões de balanceamento, essa arma ainda preenche um slot de \"mão\". Ou seja, você não pode ter uma arma Aliada de duas mãos ao mesmo tempo que utiliza um escudo."
        ],
        "conceitos": [],
        "nivel": 1
    },
     {
        "tipo": "arma",
        "nome": "Catalisadora",
        "nomeLimpo": "Catalisadora",
        "efeitos": [
			"Ao comprar esse addon, a arma não pode ser utilizada para realizar ataques básicos.",
			"Reduza o custo de comprar essa arma em 25% do seu preço em Moedas de Ouro.",
			"Ao comprar esse addon, pode-se decidir que a arma em questão também não pode ser utilizada em ataques como um todo. Nesse caso, o custo é reduzido em 50% ao invés de 25%.",
			"Esse addon não ocupa slots."
		],
        "conceitos": [],
        "nivel": 1
    },
 {
        "tipo": "arma",
        "nome": "Mau Perdedor",
        "nomeLimpo": "Mau Perdedor",
        "efeitos": [
			"Caso o personagem seja nocauteado em combate, essa arma força um último Ataque Básico contra o alvo que o derrubou. O alvo desse ataque básico pode apenas se defender esquivando."
			],
        "conceitos": [],
        "nivel": 1
    },
	{
        "tipo": "arma",
        "nome": "Longo Alcance",
        "nomeLimpo": "Longo Alcance",
        "efeitos": [
			"Apenas para armas melee. Aumente o alcance efetivo da arma em +1 zona (ver Grimório da Destruição para entender o conceito de Zonas), fazendo com que armas melee com esse addon possam acertar a zona onde o personagem está e as adjacentes.",
			"Exemplos de armas desse tipo seriam lanças e alabardas.", 
			"	Golpear alvos na mesma zona que o personagem portando a arma com este addon, faz com que ele não receba nenhum modificador de dano que a arma tenha, ou seja, o jogador rola apenas o dado + o atributo de dano usado pelo equipamento. Isso é efetivamente a mesma coisa que dizer que esta arma foi projetada para atacar alvos em zonas adjacentes ao personagem e não na mesma, devido à alguma complicação de manuseio / tamanho.",
			"Para todos os efeitos, o personagem atacando zona adjacentes com uma arma com este addon, é considerado uma unidade Ranged (não recebe os bônus do addon, apenas é considerado ranged). Golpear alvos na mesma zona mantém este personagem como Melee.",
			"Este addon consome 1 slot."
			],
        "conceitos": [
			"meleevsranged"
		],
        "nivel": 1
    },
	{
        "tipo": "arma",
        "nome": "Curto Alcance",
        "nomeLimpo": "Curto Alcance",
        "efeitos": [
			"Apenas para armas ranged. A arma ranged com este addon agora pode executar golpes à distância na mesma zona sem sofrer as penalidades usuais deste tipo de arma contra unidades Melee ou Ranged.",
			"Entretanto, todos os danos causados contra alvos em até duas zonas de distância do personagem, não recebem nenhum modificador de dano que a arma tenha, ou seja, o jogador rola apenas o dado + o atributo de dano usado pela arma. Isso é efetivamente a mesma coisa que dizer que esta arma foi projetada para atacar alvos próximos ao personagem e não em distâncias longas, devido à alguma complicação de manuseio ou perda de poder.",
			"Essa desvantagem pode ser combatida com a vantagem “Maestria Ranged”.",
			"Exemplos de armas desse tipo seriam espingardas e outras armas de fogo que não dependem tanto de aceleração e distância viajada para causar o ápice do seu dano.",
			"Este addon consome 1 slot."
			],
        "conceitos": [
			"meleevsranged"
		],
        "nivel": 1
    },	
	{
        "tipo": "arma",
        "nome": "Larga e Pesada",
        "nomeLimpo": "Arma Pesada",
        "efeitos": [
			"Caso ambas as armas (ou uma arma de duas mãos) sendo utilizadas possuam \"Larga e Pesada\", ataques realizados com essas armas causam +2 em danos, mas recebem um redutor de -1 Ataque.",
			"Esse addon não faz efeito algum caso usado em apenas uma arma de uma mão."
			],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "arma",
        "nome": "Artefato",
        "nomeLimpo": "Artefato",
        "efeitos": [
            "Crie uma técnica do tipo Forma de Ataque junto dessa arma. Essa técnica tem uma quantia de addons igual a quantidade de vezes que Artefato aparece nessa arma, com um máximo de 4. Enquanto equipado com essa arma, você pode utilizar essa técnica, e o custo dela é cobrado normalmente. Quaisquer atributos usados na técnica usam os atributos do personagem que utiliza o item.",
            "Poderes de equipamentos utilizados por personagens de nível 0 possuem efeitos aumentados. Substitua os valores de atributos usados no ataque pelo nível da arma quando esses poderes forem utilizados por NPCs.",
			"Os efeitos adicionados por esse addon devem ser iguais ao nível do item em questão. Dessa forma, não é possível adicionar um addon de nível 2, 3 ou 4 num equipamento que seja de nível 1, por exemplo.",
            "Esse addon pode ser usado em armas criadas pelos jogadores através de vantagens, mas nunca por addons que permitam criação de itens através de técnicas."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "arma",
        "nome": "Autômato sem Alma",
        "nomeLimpo": "Automato sem Alma",
        "efeitos": [
            "A arma existe como um personagem próprio e com vida que ataca sob o comando do personagem que a possui. Essa arma não ocupa slots de equipamento. Essa arma passa a poder ser atacada por outros personagens e combatentes. Essa arma tem 1 HP e RD 0, sendo quebrada ao receber algum ataque com sucesso. Quando atacada, essa arma irá tentar esquivar em resposta, utilizando a Defesa (DEF) do personagem que a utiliza, mas não recebendo quaisquer bônus que ele possua.",
            "Enquanto a arma estiver viva, a arma conta como um aliado e pode ser afetada por efeitos que funcionassem em Aliados, como Bônus, Redirecionamento de Ataques e outros, com durações de efeito padrões.",
            "Ataques realizados com essa arma são tratados como ataques do personagem original, utilizando seus atributos e os addons dessa Arma para decidir os efeitos. Personagens que sejam atacados por essa arma podem incluir tanto a Arma quanto o personagem que a utiliza em alvos de contra-ataques. A arma sempre tenta esquivar quando atacada, como dito antes.",
            "Contra-ataques contra o personagem que possui a arma funcionam como sempre, com o personagem, por exemplo, perdendo a concentração necessária para finalizar o ataque após um bloqueio ou uma esquiva mal-sucedida.",
            "Enquanto um Autômato sem Alma estiver em campo, o personagem e seus aliados podem realizar a ação \"Se esconder\". Se esconder - 0 SP: Consome o turno do personagem e só pode ser realizada no turno do personagem. Se esconde atrás de um Autômato sem Alma. Todos os ataques realizados contra o personagem são redirecionados para o Autômato sem Alma enquanto ele estiver inteiro."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "arma",
        "nome": "Dano Especial - Confiável",
        "nomeLimpo": "Confiavel",
        "efeitos": [
			"A arma é menos potente que o normal, mas garante maior firmeza e precisão em seus golpes, fazendo com que seu poder destrutivo não seja tão oscilante. A arma com esse addon passa a rolar 1d4 para danos ao invés de 1d6.",
			"Adicionalmente, esse addon concede um bônus de +2 de dano em danos que a arma entre como fator de uso (esse efeito não pode ser comprado múltiplas vezes).",
			"Esse addon só funciona quando todas as armas usadas pelo personagem (equipadas no momento) possuem “Confiável”, caso contrário não aumenta o dano nem reduz o dado.",
			"Esse addon efetivamente altera o “alcance” do dano da arma para 3 a 6, sendo equivalente a aumentar o dano mínimo em 2.",
			"Uma arma só pode ter um addon da categoria “Dano Especial”."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "arma",
        "nome": "Dano Especial - Golpe Superior",
        "nomeLimpo": "Dano Minimo",
        "efeitos": [
			"A arma possui uma garantia de que os golpes atingirão com uma certa potência mínima. O dado de dano desta arma continua sendo 1d6, mas caso a primeira rolagem de dano de um ataque com essa arma seja 1, você ganha superioridade nesta rolagem e pode rolar novamente.",
			"Uma arma só pode ter um addon da categoria “Dano Especial”."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "arma",
        "nome": "Devorador de Almas",
        "nomeLimpo": "Devorador de Almas",
        "efeitos": [
			"Se você nocautear um oponente com essa arma, você pode usar a ação \"Buscar Coragem\" imediatamente. O efeito só funciona em inimigos de nivel igual ou maior ao seu."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "arma",
        "nome": "Efeito Narrativo",
        "nomeLimpo": "Efeito Narrativo",
        "efeitos": [
            "Essa arma possui um efeito narrativo apenas dentro da história ou cena acontecendo. Efeitos narrativos são necessários para efeitos que talvez não encaixem em outros addons ou não fossem permitidos / sejam grandes demais. O mestre deve informar ao jogador sobre quando o Efeito Narrativo é necessário para manter a descrição escolhida.",
            "Um efeito narrativo dá alguns efeitos como, por exemplo:",
            "Uma espada que brilha azul quando goblins estão por perto;",
            "Uma armadura tecnológica que pode fazer ligações;",
            "Um escudo que se dobra e desaparece.",
            "O que o efeito narrativo vai fazer, depende da criatividade do jogador."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "arma",
        "nome": "Escondido a plena vista",
        "nomeLimpo": "Escondido a plena vista",
        "efeitos": [
            "A arma, quando desativada, não pode ser reconhecida como uma arma. Talvez a espada se reduza a uma caneta, ou a pistola fique encaixada e bem reduzida perto do pulso. Alguém que não tenha familiaridade com aquele equipamento não será capaz de reconhecer ele como uma arma, podendo passar despercebida."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "arma",
        "nome": "Forma",
        "nomeLimpo": "Forma",
        "efeitos": [
            "A arma possui múltiplas formas, que podem ser trocadas somente no início do turno do personagem.",
            "Inicialmente, a arma possui uma única forma. Para cada vez que Forma é comprada, a arma ganha uma forma extra.",
			"Cada forma deve ser feita como uma arma diferente. Cada forma tem a quantidade padrão de addons reduzida no número de vezes que Forma foi colocada na arma.",
			"Exemplo A: Arma de Duas mãos Nível 3 com um addon Forma. A arma se tornaria duas armas de duas mãos, cada uma com dois addons (3 - 1).",
			"Exemplo B: Arma de uma mão Nível 4 com dois addons Forma. A arma se tornaria três armas de uma mão, cada uma com dois addons (4 - 2).",
			"Em todos os casos, apenas uma forma da arma pode estar ativa ao mesmo tempo."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "arma",
        "nome": "Lado Defensivo",
        "nomeLimpo": "Lado Defensivo",
        "efeitos": [
            "Apenas para armas de duas mãos e não aumenta o nível da arma. A arma possui um lado defensivo, passando a funcionar como uma Arma de uma Mão e uma Arma Defensiva. Recrie a arma com duas partes de nível igual ao anterior: uma arma de uma mão e uma arma defensiva. Equipar a arma equipa ambas partes ao mesmo tempo.",
            "Nota: Você não estará utilizando uma arma de duas mãos e não pode se beneficiar de addons específicos para armas de duas mãos."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "arma",
        "nome": "Múltiplos Atributos",
        "nomeLimpo": "Multiplos Atributos",
        "efeitos": [
            "A arma é útil para mais de um atributo de dano. Cada vez que esse addon for adicionado, escolha mais um atributo de dano para a arma."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "arma",
        "nome": "Melee",
        "nomeLimpo": "Melee",
        "efeitos": [
			"A arma é feita para ser usada em combates corpo à corpo. Esse addon não preenche slots nem aumenta o nível do equipamento.",
			"Atacar com uma arma melee alguém que esteja com uma arma ranged equipada (ou usa uma técnica ranged de contra-ataque) e esteja na mesma zona que o personagem, garante Superioridade no teste de Dano.",
			"Este tipo de arma só pode atacar alvos na mesma zona que o personagem."
        ],
        "conceitos": [
		"meleevsranged"
		],
        "nivel": 1
    },
    {
        "tipo": "arma",
        "nome": "Melee Option",
        "nomeLimpo": "Melee Option",
        "efeitos": [
			"A arma funciona tanto em longo alcance quanto em curto alcance, entretanto, o personagem só pode fazer isso no início do turno para trocar entre o modo Ranged e o modo Melee. Após a troca, o personagem obrigatoriamente só pode executar um Ataque Básico, Usar um Item ou passar o turno.",
			"Enquanto em um dos modos (Ranged ou Melee) assuma todas as propriedades de tal modo para a arma, incluindo os bônus, penalidades, restrições e funcionamentos específicos em zonas.",
			"Esse addon aumenta o nível do item em +2, e portanto, consome dois slots."
        ],
        "conceitos": [
		"meleevsranged"
		],
        "nivel": 1
    },
    {
        "tipo": "arma",
        "nome": "Ranged",
        "nomeLimpo": "Ranged",
        "efeitos": [
			"A arma é feita para ser usada em combates a distância. Armas ranged podem atacar alvos em até duas zonas de distância (ver o significado de zonas no Grimório da Destruição).",
			"Este tipo de arma também garante +1 Bônus de Prioridade (também explicado no Grimório da Destruição) em golpes que sejam feitos contra alvos de uma zona diferente da que o personagem está.",
			"Usuários de armas ranged ganham Inferioridade em seus testes de Ataque e Dano se atacarem alvos na mesma zona que eles. Isso não se aplica se o alvo usar uma arma ou técnica ranged como resposta.",
			"Esse addon pode ser adicionado de duas formas: consumindo slot e não consumindo slot de uma arma.",
			"Não consumir slot faz com que essa arma seja obrigada a consumir munição OU faz o usuário pagar 1 SP a mais para cada vez que usar a arma (habilidades inclusas).",
			"Gastar slot faz com que a arma não use munições nem pague o 1 SP extra."
        ],
        "conceitos": [
		"meleevsranged"
		],
        "nivel": 1
    },
    {
        "tipo": "arma",
        "nome": "Segundo Golpe",
        "nomeLimpo": "Segundo Golpe",
        "efeitos": [
			"Suas rolagens de dano passam a receber um redutor de -2. Sempre que você causar dano em um inimigo com um ataque, você causa 1 ponto de dano extra como dano direto e separado do ataque principal.",
			"Esse addon só está ativo quando utilizando duas armas de uma mão (ambas com Segundo Golpe) ou uma arma de duas mãos."
        ],
        "conceitos": [],
        "nivel": 1
    },	
    {
        "tipo": "arma",
        "nome": "Utiliza Munição",
        "nomeLimpo": "Utiliza Municao",
        "efeitos": [
            "A arma utiliza munição e passa a seguir as regras de munição que estejam funcionando para a sua campanha. Uma arma que utiliza munição tem seu custo em lojas ou de criação reduzido em 50%. Esse addon não ocupa slots nem aumenta o nível da arma.",
            "Para armas criadas através de vantagens, colocar esse addon reduz o custo da vantagem em 1 ponto. Esse addon não pode ser adicionado caso a arma já fosse utilizar munição através de Ranged."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "arma",
        "nome": "Vorpal",
        "nomeLimpo": "Vorpal",
        "efeitos": [
			"Se o inimigo ficar fora da batalha (seja por atingir 0 de HP ou algo do tipo) em um ataque com essa arma, um efeito devastador acontece contra a vítima ao ponto de destruí-la completamente (Ex: sua cabeça é arrancada, seu corpo é rasgado, etc).",
			"Personagens que ainda possam lutar até -10 HP por algum motivo não são afetados por este addon. Este efeito não se ativa em lutas contra outros jogadores (PvP)."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "arma",
        "nome": "Obliterante",
        "nomeLimpo": "Obliterante",
        "efeitos": [
			"Sua arma possui o fio mais afiado ou os disparos dela são mais profundos. Uma arma com esse addon causa, em resultados críticos, dano máximo com 75% de penetração ao invés de 50%.",
			"Esse addon só pode ser adicionado em armas de nível 2 para cima e não pode ser adicionado durante a criação de personagem.  Este efeito não acumula entre si entre múltiplas ou a mesma arma.",
			"O efeito de aumento da % de dano crítico só se ativa também se a arma estiver sendo utilizada no ataque de alguma forma (isso inclui técnicas)."
        ],
        "conceitos": [],
        "nivel": 2
    },
    {
        "tipo": "arma",
        "nome": "Atordoante",
        "nomeLimpo": "Atordoante",
        "efeitos": [
			"A arma é capaz de atordoar um inimigo por um curto espaço de tempo. Sempre que você rolar um resultado crítico em uma rolagem de dano utilizando uma arma com este addon, o próximo ataque executado contra o mesmo alvo não poderá ser bloqueado por ele. A vítima ainda tem a opção de esquivar ou contra-atacar."
		],
        "conceitos": [],
        "nivel": 1
    },			
    {
        "tipo": "escudo",
        "nome": "Efeito Narrativo",
        "nomeLimpo": "Efeito Narrativo",
        "efeitos": [
            "Essa arma defensiva possui um efeito narrativo apenas dentro da história ou cena acontecendo. Efeitos narrativos são necessários para efeitos que talvez não encaixem em outros addons ou não fossem permitidos / sejam grandes demais. O mestre deve informar ao jogador sobre quando o Efeito Narrativo é necessário para manter a descrição escolhida.",
            "Um efeito narrativo dá alguns efeitos como, por exemplo:",
            "Uma espada que brilha azul quando goblins estão por perto;",
            "Uma armadura tecnológica que pode fazer ligações;",
            "Um escudo que se dobra e desaparece.",
            "O que o efeito narrativo vai fazer, depende da criatividade do jogador."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "escudo",
        "nome": "Escondido a Plena Vista",
        "nomeLimpo": "Escondido a plena vista",
        "efeitos": [
            "A arma, quando desativada, não pode ser reconhecida como uma arma. Talvez o escudo se reduza a um bracelete, ou a espada defensiva vire um anel no dedo indicador do usuário. Alguém que não tenha familiaridade com aquele equipamento não será capaz de reconhecer ele como uma arma, podendo passar despercebida."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "escudo",
        "nome": "Esponja",
        "nomeLimpo": "Esponja",
        "efeitos": [
            "Até uma vez por combate, você pode rolar 1d4 antes de receber um dano e reduzi-lo de forma aprimorada através da ação de bloqueio. Isso é além da sua redução normal pelo bloqueio. Esse efeito só pode ser utilizado contra ataques de um tipo que essa arma defensiva proteja. Adicionar esse addon várias vezes aumenta a quantidade de absorções por combate, de 1 em 1, não podendo ser utilizados mais de um num ataque só."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "escudo",
        "nome": "Material Especial",
        "nomeLimpo": "Material Especial",
        "efeitos": [
            "Escolha mais um atributo de dano. A arma defensiva passa a estar protegendo contra ele, garantindo +1 Bônus de Proteção no RD específico ali também."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "escudo",
        "nome": "Torre",
        "nomeLimpo": "Torre",
        "efeitos": [
            "A arma defensiva reduz em 1 ponto todo e qualquer dano de origem à distância (Ranged).",
			"Esse addon não pode ser usado em conjunto com o addon “\Reforçado”\."
        ],
        "conceitos": [],
        "nivel": 1
    },
	    {
        "tipo": "escudo",
        "nome": "Reforçado",
        "nomeLimpo": "Reforcado",
        "efeitos": [
            "A arma defensiva reduz em 1 ponto todo e qualquer dano de origem Corpo à Corpo (Melee).",
			"Esse addon não pode ser usado em conjunto com o addon “\Torre”\."
        ],
        "conceitos": [],
        "nivel": 1
    },
	 {
        "tipo": "escudo",
        "nome": "Couraça",
        "nomeLimpo": "Couraca",
        "efeitos": [
            "Essa arma defensiva possui espinhos, placas metálicas pontudas ou algo que repele aqueles que atacam-a.",
			"Sempre que usar a opção “Bloquear”, você devolve 1 de dano contra o atacante, automaticamente. Esse addon não pode ser comprado junto de “\Esponja\”, e só pode devolver um máximo de cinco ataques (5 pontos de dano).",
        ],
        "conceitos": [],
        "nivel": 1
    },
	{
        "tipo": "armadura",
        "nome": "Energizada",
        "nomeLimpo": "Energizada",
        "efeitos": [
            "A armadura possui uma reserva de energia mágica e espiritual que auxilia seu usuário",
			"Se um personagem chegar a 0 de SP enquanto usar uma armadura com este addon, ele não perde a consciência ou fica fora de combate, apenas fica incapaz de usar manobras que gastem SP."
        ],
        "conceitos": [],
        "nivel": 1
    },
	 {
        "tipo": "armadura",
        "nome": "Último Suspiro",
        "nomeLimpo": "Ultimo Suspiro",
        "efeitos": [
            "Essa armadura aguenta impactos que seriam fatais, dando ao usuário um último suspiro de ação antes que o real impacto se espalhe pelo corpo",
			"Quando um personagem com uma armadura que tenha este addon chegar a 0 de HP ou menos, ele fica no estado \"Abatido\" ainda podendo agir na rodada atual ou seguinte (dependendo da ordem de iniciativas) num estado reduzido de mobilidade e ações, ficando caído ao chão. Após isso ser concluído, ele cai inconsciente e passa a fazer testes de morte de acordo com a sua situação atual.", 
			"Durante esse estado, o personagem só pode fazer um ataque básico, usar alguma perícia ou outras ações narrativas menores. Uso de técnicas, itens e quaisquer tentativas de curar a si mesmo são negadas automaticamente, mesmo que por efeitos passivos.",
			"Um personagem abatido ainda é um alvo válido para inimigos, podendo agravar a sua situação ao ser alvo de golpes inimigos. Suas reações ficam limitadas à contra-ataques básicos, esquivas ou bloqueios.",
			"Este addon consome 1 slot e não pode ser comprado na criação de personagem.",
			"Este addon não funciona junto de efeitos que permitam que o personagem continue lutando mesmo após chegar à 0 ou menos de HP."
        ],
        "conceitos": [],
        "nivel": 1
    },	
    {
        "tipo": "armadura",
        "nome": "Armadura Leve",
        "nomeLimpo": "Armadura Leve",
        "efeitos": [
            "Essa armadura é mais leve que o normal, mas concede menor proteção geral. Esse addon garante uma penalidade de +0 RD Geral para armaduras, mas ao utilizar uma armadura leve o personagem recebe +1 em testes de Defesa (DEF) e +1 em testes de Ataque (ATK). Esse addon não aumenta o nível da armadura e nem preenche slot ao ser adicionado.",
            "Qualquer roupa que não impede movimentos, mesmo que não tenha sido feita para combate, é considerada armadura leve.",
			"Um personagem com esse addon também recebe +1 Bônus de Proteção na RD Específica em um atributo da sua escolha, na criação do item"
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "armadura",
        "nome": "Armadura Média",
        "nomeLimpo": "Armadura Media",
        "efeitos": [
            "Essa armadura é uma mistura entre a armadura leve e pesada, permitindo movimentos diversos com leveza e flexibilidade ao mesmo tempo que oferece boa proteção (sem necessariamente se especializar em ambas as propriedades). Esse addon concede um bônus de item igual à +1 RD Geral e ao mesmo tempo concede +1 de Bônus de Item em rolagens de Ataque (ATK). Esse addon não aumenta o nível da armadura e nem preenche slot ao ser adicionado.",
			"Um personagem com esse addon também recebe +1 Bônus de Proteção na RD Específica em um atributo da sua escolha, na criação do item"
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "armadura",
        "nome": "Armadura Pesada",
        "nomeLimpo": "Armadura Pesada",
        "efeitos": [
            "Essa armadura é mais pesada que o normal, mas muito mais reforçada e trabalhada que as outras. Esse addon aumenta a RD Geral em +2. do personagem. Esse addon não aumenta o nível da armadura e nem preenche slot ao ser adicionado.",
			"Um personagem com esse addon também recebe +1 Bônus de Proteção na RD Específica em um atributo da sua escolha, na criação do item"
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "armadura",
        "nome": "Efeito Contínuo",
        "nomeLimpo": "Efeito Continuo",
        "efeitos": [
            "Crie uma técnica Passiva de 1 slot para essa armadura. Essa técnica passiva ganhará o addon \"Natural\" sem gastar slots por isso nem ter seu custo reduzido e não poderá ter Natural escolhido novamente. A técnica passiva está ativa em combates enquanto você utilizar essa armadura. Quaisquer atributos usados na técnica usam os atributos do personagem que utiliza o item."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "armadura",
        "nome": "Efeito Narrativo",
        "nomeLimpo": "Efeito Narrativo",
        "efeitos": [
            "Essa armadura possui um efeito narrativo apenas dentro da história ou cena acontecendo. Efeitos narrativos são necessários para efeitos que talvez não encaixem em outros addons ou não fossem permitidos / sejam grandes demais. O mestre deve informar ao jogador sobre quando o Efeito Narrativo é necessário para manter a descrição escolhida.",
            "Um efeito narrativo dá alguns efeitos como, por exemplo:",
            "Uma espada que brilha azul quando goblins estão por perto;",
            "Uma armadura tecnológica que pode fazer ligações;",
            "Um escudo que se dobra e desaparece.",
            "O que o efeito narrativo vai fazer, depende da criatividade do jogador."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "armadura",
        "nome": "Escondido a Plena Vista",
        "nomeLimpo": "Escondido a plena vista",
        "efeitos": [
            "A armadura, quando desativada, não pode ser reconhecida como uma armadura. Talvez a pesada cota de malha se reduza a uma camisa simples, ou a armadura de batalha cheia de espinhos fique reduzida à uma placa metálica fina com alguns espinhos discretos na altura do ombro. Alguém que não tenha familiaridade com aquele equipamento não será capaz de reconhecer ele como uma arma, podendo passar despercebida."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "armadura",
        "nome": "Injeção Instantânea",
        "nomeLimpo": "Injecao Instantanea",
        "efeitos": [
			"Após receber dano pela primeira vez num combate, a armadura faz com que o personagem recupere uma quantidade de HP igual a sua Sabedoria de Combate.",
			"Esse HP é recuperado durante várias rodadas, com o personagem recuperando 1 HP no início de cada um de seus turnos até o valor ser atingido. Caso o personagem entre no estado “Morrendo”, essa cura é interrompida."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "armadura",
        "nome": "Quebra de Ritmo",
        "nomeLimpo": "Quebra de Ritmo",
        "efeitos": [
			"Se você for atacado por um oponente e ele te causar apenas 1 ponto de dano, o oponente que o atacou recebe um Redutor de Desequilibrio de -1 em Ataque OU Defesa até o início do próximo turno dele. Escolha na hora de aplicar a condição."
        ],
        "conceitos": [],
        "nivel": 1
    },	
    {
        "tipo": "armadura",
        "nome": "Proteção Especial",
        "nomeLimpo": "Protecao Especial",
        "efeitos": [
            "Escolha mais um atributo de dano. Ele também está protegido por essa armadura, ganhando +1 RD Específico. Você pode adicionar Proteção Especial várias vezes, mas um atributo só pode ser protegido uma vez."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "acessorio",
        "nome": "Ferramenta",
        "nomeLimpo": "Ferramenta",
        "efeitos": [
            "Escolha uma perícia. Esse acessório garante um +1 Bônus de Item em testes dessa perícia. Um mesmo acessório pode ser uma Ferramenta para mais de uma perícia."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "acessorio",
        "nome": "Efeito Narrativo",
        "nomeLimpo": "Efeito Narrativo",
        "efeitos": [
            "Esse acessório possui um efeito narrativo apenas dentro da história ou cena acontecendo. Efeitos narrativos são necessários para efeitos que talvez não encaixem em outros addons ou não fossem permitidos / sejam grandes demais. O mestre deve informar ao jogador sobre quando o Efeito Narrativo é necessário para manter a descrição escolhida.",
            "Um efeito narrativo dá alguns efeitos como, por exemplo:",
            "Uma espada que brilha azul quando goblins estão por perto;",
            "Uma armadura tecnológica que pode fazer ligações;",
            "Um escudo que se dobra e desaparece.",
            "O que o efeito narrativo vai fazer, depende da criatividade do jogador."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "acessorio",
        "nome": "Largo",
        "nomeLimpo": "Largo",
        "efeitos": [
            "Esse item ocupa dois slots em seu inventário. Esse addon não aumenta o nível do item e é adicionado pelo mestre onde ele achar relevante."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "acessorio",
        "nome": "Poder Ativado",
        "nomeLimpo": "Poder Ativado",
        "efeitos": [
            "Crie uma técnica Forma Especial de um slot e aumente o custo dela em 2 SP. Você pode utilizar ela através desse item. Caso a técnica escolhida fosse utilizar mais de 8 SP, aumente o custo dela em +4 SP ao invés de +2 SP. Quaisquer atributos usados na técnica usam os atributos do personagem que utiliza o item.",
            "Caso seja relevante à técnica criada: o usuário do poder é VOCÊ e ela funciona igual a uma técnica criada por pontos de habilidade ou ganha naturalmente, com exceção ao custo elevado."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "acessorio",
        "nome": "Super Leve",
        "nomeLimpo": "Super Leve",
        "efeitos": [
            "Esse item ocupa apenas meio slot / espaço em seu inventário. Esse addon não aumenta o nível do item e é adicionado pelo mestre onde ele achar relevante. Acessórios do Tipo Ferramenta devem ter esse addon a maior quantidade de vezes possível, enquanto não for nenhum objeto grande demais que simplesmente não possa ser leve."
        ],
        "conceitos": [],
        "nivel": 1
    },
	{
        "tipo": "acessorio",
        "nome": "Zephyr",
        "nomeLimpo": "Zephyr",
        "efeitos": [
            "Esse item aumenta passivamente a iniciativa do personagem que o utiliza em +1.",
			"Este addon ocupa um slot.",
			"Os efeitos desse addon se acumulam múltiplas vezes até o máximo de +4."
        ],
        "conceitos": [],
        "nivel": 1
    },
	{
        "tipo": "acessorio",
        "nome": "Poder de Uso Único",
        "nomeLimpo": "Single blast",
        "efeitos": [
            "Crie uma técnica de Ataque ou Especial e anexe ela a esse acessório. Essa técnica tem um número de slots igual ao número de “Poder de Uso Único” colocados nesse addon.",
			"Uma vez por combate, você pode ativar a técnica criada por 0 SP. A técnica não pode ser usada mais vezes. A técnica criada precisa ser utilizável em combate.",
			"Utilizar a técnica sempre irá consumir o turno do personagem."
        ],
        "conceitos": [],
        "nivel": 1
    },
	{
        "tipo": "acessorio",
        "nome": "Muleta",
        "nomeLimpo": "Muleta",
        "efeitos": [
            "O acessório ajuda o personagem de alguma forma. Escolha um atributo-teste durante a criação desse acessório.",
			"O personagem recebe +1 Bônus de Item no atributo-teste escolhido enquanto estiver equipando o acessório.",
			"Esse addon ocupa dois slots e pode ser comprado várias vezes (mas para atributos diferentes)."
        ],
        "conceitos": [],
        "nivel": 1
    },	
	
	{
        "tipo": "acessorio",
        "nome": "Vigor",
        "nomeLimpo": "Vigor",
        "efeitos": [
            "O item com este addon permite que o usuário ao chegar em 20% do seu HP máximo, possa usar da ação \"Buscar Coragem\"",
			"Este addon ocupa um slot.",
        ],
        "conceitos": [],
        "nivel": 1
    },
    /* Addons para Itens Consumíveis */
    {
        "tipo": "consumivel",
        "nome": "Munição",
        "nomeLimpo": "Municao",
        "efeitos": [
            "Esse item passa a poder ser usado como munição.",
            "Caso esse seja o único addon no item, é recomendável utilizar preços diferenciados para criação ou venda.",
            "Antes de usar Munições, veja de que forma o mestre irá tratar munições. Elas podem ser gastas para cada ataque ou depois de certa quantidade de tempo, conforme explicado no Manual DFS."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "consumivel",
        "nome": "Munição Especial",
        "nomeLimpo": "Municao Especial",
        "efeitos": [
            "Esse item passa a poder ser usado como Munição Especial, podendo ser utilizada por armas com o addon \"Capacidade Especial\".",
            "Ao criar esse item, escolha um atributo de dano. Ao atacar com a arma, o tipo do dano se torna o tipo da munição no lugar de todos os atributos que essa arma possa funcionar junto.",
            "Exemplo: Uma pistola que funciona com Arma e Tecnologia, junto de uma Munição Especial para Artes Marciais iria trocar danos de tipo Arma ou Tecnologia para Artes Marciais, mas não afetaria um dano de tipo Magia.",
            "Caso esse seja o único addon no item, é recomendável utilizar preços diferenciados para criação ou venda.",
            "Antes de usar Munições, veja de que forma o mestre irá tratar munições. Elas podem ser gastas para cada ataque ou depois de certa quantidade de tempo, conforme explicado no Manual DFS."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "consumivel",
        "nome": "Efeito Destrutivo",
        "nomeLimpo": "Efeito Destrutivo",
        "efeitos": [
            "O item explode ou algo assim. Crie uma técnica de ataque com um número de slots igual à quantidade de Efeito Destrutivo nesse item e máximo de 2 slots. Utilizar esse item consome seu turno e realiza um ataque com essa técnica (utilizando os atributos do personagem)."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "consumivel",
        "nome": "Efeito Especial",
        "nomeLimpo": "Efeito Especial",
        "efeitos": [
            "Crie uma técnica especial de um slot. Utilizar esse item ativa essa técnica (sem gastar SP). Utilizar itens sempre resulta no fim do seu turno atual. Quaisquer atributos usados na técnica usam os atributos do personagem que utiliza o item.",
            "Para caso seja relevante à técnica criada, o usuário da técnica é O ITEM, mesmo que o seu personagem seja o alvo."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "consumivel",
        "nome": "Ferramenta de uso único",
        "nomeLimpo": "Ferramenta de uso unico",
        "efeitos": [
            "O item serve para auxiliar em um tipo de teste (fora os de puro combate), como uma poção de coragem para diplomacia ou um grampo de ladrões pra abrir uma fechadura. Consuma o item e adicione +2 ao teste da perícia."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "consumivel",
        "nome": "Grande/Pesado",
        "nomeLimpo": "Grande Pesado",
        "efeitos": [
            "O item ocupa 2 slots ao invés de 1. Esse addon deve ser colocado pelo mestre em itens onde seja relevante e não ocupa slots nem aumenta o nível do item. Opcionalmente, itens com esse addon podem ter seu custo reduzido em 25% quando vendidos em uma loja de NPC."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "consumivel",
        "nome": "Pesado",
        "nomeLimpo": "Pesado",
        "efeitos": [
            "Esse item ocupa dois slots em seu inventário. Esse addon não aumenta o nível do item e é adicionado pelo mestre onde ele achar relevante."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "consumivel",
        "nome": "Semente dos Dragões",
        "nomeLimpo": "Semente dos Dragoes",
        "efeitos": [
			"Caso um personagem no estado “Morrendo” consuma esse item, ele se cura até 1 HP e acorda imediatamente. Semente dos Dragões pode ser adicionada várias vezes no mesmo item, recebendo efeitos extras para cada adição além de 1:",
			"- 2 Semente dos Dragões: Todos os machucados no corpo do personagem que consumir esse item se curam imediatamente, no limite do possível.",
			"- 3 Semente dos Dragões: Todos os efeitos negativos, doenças e venenos afetando o personagem que consumir esse item deixam de o afetar.",
			"- 4 Semente dos Dragões: O personagem que consumir esse item recupera seu HP ao máximo instantaneamente."

			],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "consumivel",
        "nome": "Poção",
        "nomeLimpo": "Pocao",
        "efeitos": [
			"Itens com esse addon permitem o personagem se curar 1d6 + Nível do item. Reduza o custo do item em 50% do valor normal.",
			"O item com este addon não gasta o turno do personagem quando usado, mas somente um item com este addon pode ser usado por rodada e deve ser feito antes de ações que terminem o turno do personagem. Esse deve ser o único addon do item, podendo ser comprado múltiplas vezes (aumentando o nível do item e portanto, o bônus de cura)."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "consumivel",
        "nome": "Super-Leve",
        "nomeLimpo": "Super-Leve",
        "efeitos": [
            "Esse item ocupa apenas meio slot / espaço em seu inventário. Esse addon não aumenta o nível do item e é adicionado pelo mestre onde ele achar relevante. Acessórios do Tipo Ferramenta devem ter esse addon a maior quantidade de vezes possível, enquanto não for nenhum objeto grande demais que simplesmente não possa ser leve."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "consumivel",
        "nome": "Uso Médico",
        "nomeLimpo": "Uso Medico",
        "efeitos": [
            "Esse item conta como \"Bandagens\" ou algum outro item consumível para a perícia \"Socorrer / Primeiros Socorros\", dando +2 Bônus de Item em testes dessas perícias, ou outros efeitos que exijam isso. Caso esse seja o único addon adicionado no item, o preço dele cai para 25 moedas de ouro."
        ],
        "conceitos": [],
        "nivel": 1
    },
    {
        "tipo": "consumivel",
        "nome": "Reator de Mana",
        "nomeLimpo": "Reator de Mana",
        "efeitos": [
			"Esse item funciona como um produtor de Mana ou meramente algum item que possa ser consumido e explique uma restauração sobrenatural / química de SP.",
			"O item restaura +5 SP quando consumido. Este valor é acumulativo até o máximo de 4 slots (+20 SP). Este addon ocupa um slot."
        ],
        "conceitos": [],
        "nivel": 1
    }
].sort(function (a,b) {
    var na = a.nome.toUpperCase().latinize();
    var nb = b.nome.toUpperCase().latinize();
    if (na < nb) return -1;
    if (na > nb) return 1;
    return 0;
});

window.techAddonsHash = {};
var addon;
var nome;
for (var i = 0; i < window.techAddons.length; i++) {
    addon = window.techAddons[i];
    nome = addon.tipo.toUpperCase() + '-' + 
                addon.nome.toUpperCase().replace(/ *\([^)]*\) */, '').trim();
    if (window.techAddonsHash[nome] !== undefined) {
        console.log("Addon repetido. Antigo: ");
        console.log(window.techAddonsHash[nome]);
        console.log("Novo:");
        console.log(addon);
    }
    window.techAddonsHash[nome] = addon;
}
