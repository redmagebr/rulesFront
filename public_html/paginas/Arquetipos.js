window.arquetiposChangelog = [
    {
        "version" : [3, 0],
        "description" : [
            "Website criado. Alguma pobre alma precisa verificar se todos os arquétipos ainda estão up to date."
        ]
    }
].sort(function (a, b) {
    if (a.version[0] > b.version[0]) return -1;
    if (a.version[0] < b.version[0]) return 1;
    if (a.version[1] > b.version[1]) return -1;
    if (a.version[1] < b.version[1]) return 1;
    return 0;
});

window.arquetiposArray = [
    {
        "nome": "Alquimista",
        "descricao": [
            "O Alquimista é a representação da curiosidade e da sabedoria incorporadas no aventureiro. Uma figura histórica que através do tempo esteve presente em diversas situações importantes, auxiliando seus companheiros com suas diversas poções e bugigangas alquímicas, garantindo geralmente um fator imprevisível dentro e fora de combate. Além de ser capaz de manipular diversos elementos químicos, o Alquimista  geralmente representa uma mente criativa e visionária, agindo como alguém em busca de mais e mais conhecimento para a sua vida."
        ],
        "joguese": "Você deseja ser bem aventurado e curioso em diversas combinações de poções, misturas e efeitos mágicos que se misturam com uma tecnologia não muito avançada. Você pode agir tanto como uma importante peça de suporte para seus aliados quanto um combatente estratégico que brinca e desabilita os oponentes com seus experimentos mágicos e químicos diversos.",
        "atributos": "Magia ou Elemento",
        "vantagens": [
            {
                "nome": "Trabalho Duro",
                "descricao": "Você possui aptidões naturais para trabalhar com Alquimia e componentes químicos, assim, esta vantagem concede um bônus de +2 em testes de criação de itens pelo            Emprego: Alquimia."
            },
            {
                "nome": "Apotecário",
                "descricao": "Uma vez por sessão ou dia (o que demorar mais para acontecer) você pode puxar uma poção que possua um efeito narrativo relativamente simples voltado para um propósito único. Essa poção não pode ser usada em combate para fins de aumentar HP, MP ou coisas que o influenciem diretamente. Exemplos: um frasco que faz crescer uma densa vegetação entre o usuário e os inimigos, impossibilitando que eles o alcancem dali, permitindo que o grupo fuja, ou mesmo uma poção que cria um efeito ilusório de fogo intenso, assustando qualquer ameaça que tente se aproximar (sem saberem que é um fogo falso). O mestre pode vetar um efeito se achar que ele não corresponde às regras ou foge dos objetivos dessa vantagem."
            }
        ]
    },
    {
        "nome": "Arauto da Profecia",
        "descricao": [
            "O Arauto da Profecia representa o espírito do destino e clamor do tempo e dos deuses incorporado no aventureiro. O Arauto possui sempre um artefato extremamente raro que o escolheu, seja através de uma profecia, escrituras antigas ou passadas de geração em geração. Esse artefato o escolheu e, através de tal item, ele recebe todos os seus poderes e habilidades mais profundas que permanecem dormentes em sua alma.",
            "O personagem talvez seja uma pessoa especial, mesmo sem o artefato, ou talvez ele fosse um ninguém até o artefato aparecer em sua vida... O que importa é que a partir deste momento ele se tornou muito poderoso, e uma força desafiadora à ser respeitada. O Arauto possui um forte vínculo e é preso ao objeto que concede seus poderes, mas isso não significa que sem tal coisa ele seja necessariamente fraco."
        ],
        "joguese": "Você quer ser o portador de um mistério, não só para a sua vida quanto para o mundo e entender o que aquilo significa na existência de todos e, principalmente, na sua. Embora você não tenha certeza de todo o seu potencial e nem sabe de que forma poderá providenciar auxílio ao seu grupo (seja de forma ofensiva, defensiva ou de suporte), é de comum acordo que uma lendária força está adormecida em seu coração e possui uma forte ligação com tal objeto. Você aprenderá, com sua vida e suas experiências, por que você nasceu e por que fora escolhido – seja para tornar-se um novo Deus ou para ser o portador de uma profunda maldição que lhe atormentará para o resto de sua vida.",
        "atributos": "O atributo principal varia de acordo com o tipo de artefato que ele porta. O artefato deve ser criado em conjunto com a história do personagem, e caso ele não queira ou não ache necessário, não é obrigatória a definição complexa do real poder que está adormecido no item (isso pode ser algo que o mestre possa desenvolver caso o jogador não queira decidir por si próprio).",
        "vantagens": [
            {
                "nome": "O Poder do Cinto",
                "descricao": "O Arauto carrega consigo um artefato especial. O Arauto tem todos seus atributos de combate reduzidos em -1 (inclui Ataque e Defesa), para um mínimo de 0.  O jogador pode decidir reduzir seus atributos para 0 sem o artefato, se relevante. Ele deve ativar o seu artefato para poder utilizar seus atributos (como uma ação grátis que pode ser realizada na Fase de Preparação). O jogador também pode decidir incluir alguns atributos-teste e/ou perícias nessa separação, se quiser. O artefato não precisa ser um cinto, esta é só a definição da vantagem."
            },
            {
                "nome": "Ultimate Life Form",
                "descricao": "Em um marco importante da história, você pode ter aprendido o segredo da sua forma final, junto do seu artefato. Ao ativar sua forma final, você pode transformar uma luta 1x1 em uma batalha cinemática (seguindo as regras apropriadas para essas lutas). Inimigos de nível igual ou superior ao seu são muito fortes para serem enfrentados dessa maneira. Você também pode incluir sua Forma Final em suas técnicas a partir desse ponto da história, mas isso não é obrigatório nem te dá bônus extras."
            },
            {
                "nome": "Segredos Antigos",
                "descricao": "O seu artefato possui muitos segredos místicos que você está apenas começando a despertar. A cada novo nível que você adquirir, você ganha 1 ponto de habilidade a mais do que o normal."
            }
        ]
    },
    {
        "nome": "Arqueiro",
        "descricao": [
            "O Arqueiro representa o espírito de liberdade e exploração incorporadas no aventureiro. Sendo um errante natural, ele busca viajar pelo mundo conhecendo novas coisas e vivendo emoções fortes para dar valor a sua vida, equilibrando-se entre a linha tênue de ser um solitário ou de alguém com compaixão pelos mais necessitados. O Arqueiro é uma figura que é representada através dos tempos como uma importante peça dentro de conflitos, guerras e outros cenários militares."
        ],
        "joguese": "Você deseja manter-se a distância na linha de trás de combate dando cobertura a todos os seus aliados e atacando com segurança o suficiente para não ser atingido de volta. Você também desempenhará papéis como o de escolta e eliminação de alvos específicos enquanto seu grupo cuida de outros assuntos, além de poder combinar seus projéteis com elementos especiais, efeitos mágicos ou mesmo tecnológicos.",
        "atributos": "Arma",
        "vantagens": [
            {
                "nome": "Obsevador Nato",
                "descricao": "Criaturas ou alvos quaisquer não podem se esconder de seus sentidos. Caso alguém esteja se escondendo de você (ou no local onde está), você sempre consegue encontrar pistas ou falhas na manobra para encontrar tal alvo muito mais facilmente que qualquer outra pessoa conseguiria. Esses efeitos não se aplicam em combate e também funcionam para aparatos tecnológicos ou magia."
            },
            {
                "nome": "Concentração Atroz",
                "descricao": "Após anos e anos de treinamento, os movimentos do arqueiro são extremamente precisos. Você é capaz de acertar o olho de um rato a muitos metros de distância, e torna testes menores de precisão irrelevantes."
            }
        ]
    },
    {
        "nome": "Assassino",
        "descricao": [
            "O aventureiro se entrega as sombras e passa um grande tempo recluso e solitário, treinando intensamente e aprendendo técnicas esquecidas e banidas pelas sociedades, tornando-se assim um frio Assassino. Ostentando uma incrível velocidade, reflexos e percepção, ele funciona como um dos combatentes mais fortes dentro de uma luta, sendo capaz de eliminar facilmente um alvo sem fazer muito esforço. Suas habilidades sombrias permitem ao mesmo tempo em que caminhe pela escuridão sem ser notado, brincando com os sentidos das vítimas antes de matá-las. A trilha da lâmina e sombras o espera, entretanto, em tempos difíceis duvide até de sua própria sombra."
        ],
        "joguese": "Você deseja reservar-se para si mesmo e trabalhar de forma silenciosa, mortal e precisa contra aqueles que se opuserem a você. O Assassino é capaz de eliminar alvos únicos e múltiplos com uma agilidade incrível, além de ser um dos mais rápidos combatentes conhecidos. Embora o Assassino não confie nem na sua sombra, ele utiliza das trevas a seu favor enquanto a lâmina que perfura os corações inimigos é a sua única aliada de confiança.",
        "atributos": "Arma",
        "vantagens": [
            {
                "nome": "Débito de Sangue",
                "descricao": "Enquanto existirem pelo menos duas pessoas no mundo, alguém vai querer alguém morto. O assassino sempre sabe como conseguir alvos e pode conseguir um sem a necessidade de testes, contanto que esteja em uma cidade/vilarejo. Um assassino não pode conseguir um alvo novo enquanto não tiver se livrado do último. Se livrar de um alvo dá uma quantia de dinheiro para o assassino apropriado ao seu nível. O nível do assassino também define a dificuldade do trabalho."
            },
            {
                "nome": "Mercenário",
                "descricao": "Você não liga para quem morre, você só está fazendo o que te dá dinheiro. Você ganha o dobro do Dinheiro provido de qualquer inimigo considerado Boss (Chefe) - isso pode ser interpretado de várias formas e o dinheiro não precisa vir diretamente no Boss, você pode receber ele mais tarde ou o que for: ALGUÉM te mandou matar aquele cara."
            }
        ]
    },
    {
        "nome": "Bardo",
        "descricao": [
            "O aventureiro caminha rumo a uma aventura onde sua melhor aliada é a música. Sendo capaz de criar e executar canções diversas que motivam seus companheiros, aumentam suas habilidades e outros efeitos diversos, o Bardo é a definição do nomadismo e espírito-livre no aventureiro. Embora não possua grandes habilidades em combate, este arquétipo esteve presente através do tempo em momentos de decisões importantes, principalmente sociais, onde, através de sua música, sua lábia e influência, alterou o rumo de muitos desastres e conflitos que foram evitados. Bardos geralmente evitam confrontos e preferem uma boa vida regada a conforto e boas companhias, justamente por isso acabam tornando-se a escolha preferida de pessoas ricas e influentes como companheiros de viagem."
        ],
        "joguese": "Você deseja viajar e tocar sua música para quem quiser ouvir (ou quem estiver disposto a pagar), sempre buscando experiências que incrementem seu estilo de vida e te deem grandes histórias para contar. Bom combatente ou não, sua música tem o poder de mudar opiniões e afugentar inimigos poderosos, escolha bem.",
        "atributos": "Liderança ou Magia",
        "vantagens": [
            {
                "nome": "Harmonia Improvisada",
                "descricao": "Você começa a tocar uma música improvisada (ela precisa ter uma breve letra para acompanhar a canção, mas não precisa ser nenhuma obra de arte) e imediatamente todos os ouvintes do local começam a prestar atenção em você, num raio de até 10 metros. Os ouvintes suspendem todas as suas atividades atuais e passam a observá-lo até que sua canção acabe ou até que o efeito vá lentamente se dissipando. Isso não funciona em combate."
            },
            {
                "nome": "Bard's Song",
                "descricao": "Por cantar uma música relacionada ao teste que está fazendo (você precisa inventar uma pequena letra, não precisa ser uma obra de arte, mas precisa existir) você recebe até +4 em um teste de perícia, com um mínimo de +2. Você também pode cantar músicas relacionadas ao teste de aliados, dando um bônus de +2 para eles. Pode atrapalhar em certas situações. O tamanho do bônus varia de acordo com a qualidade do Poema/Música em questão. “Minta, minta para o rei~! Faça ele de bobo e nos salve da lei~!”"
            }
        ]
    },
    {
        "nome": "Bárbaro",
        "descricao": [
            "Com o entardecer de mais um dia ensanguentado, o Aventureiro pega suas armas que respingam sangue e guarda num suporte em suas costas, tornando-se assim o lendário Bárbaro. Possuindo uma força inigualável e ataques selvagens que destroem dezenas de inimigos num piscar de olhos, o Bárbaro ergue a bandeira da matança e do caos por onde passar. O Bárbaro representa uma figura clássica dos princípios do desenvolvimento de qualquer raça, mostrando a brutalidade, a força primal e o contato com a natureza. A trilha do combate e da fúria o aguarda, não solte suas armas, pois elas serão seus melhores aliados."
        ],
        "joguese": "Você deseja dizimar seus inimigos com golpes devastadores, usar armas e armaduras de grande porte enquanto despeja golpes selvagens e furiosos através do campo de batalha. Bárbaros também podem providenciar suporte e auxílio aos seus aliados com técnicas primitivas de combate e incentivos especiais.",
        "atributos": "Arma",
        "vantagens": [
            {
                "nome": "Implacável",
                "descricao": "Se você estiver com 2 de HP ou menos mas ainda for capaz de agir e lutar, você entra num estado corporal e espiritual que transcendem a normalidade. Assim, caso seja reduzido para 0 de HP ou menos, você automaticamente passa nos dois primeiros testes de morte (seja de Força de Vontade ou Constituição)."
            },
            {
                "nome": "Fúria Renovada",
                "descricao": "Uma vez por dia ou episódio (o que demorar mais para acontecer) você pode entrar num estado de fúria mediante à uma situação tensa ou que necessite de tal mobilização psíquica. Enquanto neste estado, você ignora qualquer dificuldade de terreno para se mover, não ganhando penalidades nisso. Também pode se mover com o dobro de velocidade normal, para cenas narrativas isso significa que você é quase um perseguidor implacável. Durante esse tempo você também não pode sofrer efeitos de dominação mental ou alteração de emoções, muito menos ser pego de surpresa em combate (portanto, se um combate iniciar e você estiver em modo de fúria previamente, você age primeiro que todos independente dos resultados). A fúria dura 1d4 rodadas ou 5 minutos."
            }
        ]
    },
    {
        "nome": "Caçador",
        "descricao": [
            "Para o caçador, a caça não é apenas um trabalho. A caça é sua paixão e não existe ninguém melhor do que ele. Com orgulho em cada uma de suas conquistas, o caçador avança atrás de desafios cada vez maiores. Um verdadeiro survivalista e um grande mestre de armas, não existe obstáculo que o caçador não possa superar!",
            "Um profissional que não erra. Um predador inescapável. Um gênio da caça que não pode ser enganado por nenhuma presa. O caçador está sempre no topo da cadeia alimentar."
        ],
        "joguese": "você deseja ser uma pessoa que elevou seu corpo e habilidades ao máximo e se tornou um predador letal que não conhece o termo \"falhar\".",
        "atributos": "Arma ou Tecnologia",
        "vantagens": [
            {
                "nome": "Líder do Bando",
                "descricao": "Orgulho é o que separa o amador do profissional, e um caçador é movido pela sua vontade de superar qualquer obstáculo. Sempre que um caçador estiver realizando testes de uma forma competitiva com outro personagem ou criatura, ele recebe +1 Bônus de Arquétipo em testes de atributos-teste e +2 Bônus de Arquétipo em testes de perícia com atributo-teste. Estar realizando exatamente o mesmo teste que o resto do grupo e ao mesmo tempo conta como  atividade competitiva."
            },
            {
                "nome": "Combatente Alfa",
                "descricao": "O caçador é um mestre de armas e está sempre pronto para um combate com sua presa. Todas as armas passam a funcionar para seu maior atributo de dano, independente de qual arma seja e qual o atributo de dano do caçador seja, ele faz funcionar. O caçador também pode utilizar qualquer arma improvisada como uma arma de nível 0 para seu atributo de dano principal."
            },
            {
                "nome": "Rei da Selva",
                "descricao": "A mera presença de um caçador tão grandioso é o suficiente para amedrontar criaturas de todos os tipos. Animais de nível igual ou inferior ao do caçador não irão atacar nem atrapalhar o grupo em nenhuma hipótese, mesmo que sejam treinados. Eles sabem muito bem que não teriam como vencer."
            }
        ]
    },
    {
        "nome": "Cavaleiro",
        "descricao": [
            "O Cavaleiro representa a justiça e a lealdade incorporadas no aventureiro. Com o objetivo maior de proteger seus aliados e também posicionar-se na linha de frente de combate, ele faz o seu caminho para lutar por aquilo que acha certo. A lealdade e a nobreza do cavaleiro são aspectos notáveis que garantiram sua notoriedade e presença nas diversas sociedades através do tempo, mostrando-se tanto como uma força defensiva quanto estratégica e ofensiva."
        ],
        "joguese": "Você deseja exercer o papel de protetor do seu grupo, e de certa forma, um líder natural. Com a capacidade de misturar golpes elementais com seus ataques físicos, o cavaleiro também pode providenciar suporte e proteção com suas diversas estratégias e usos dentro de combate, enquanto seus companheiros agem de suas formas.",
        "atributos": "Arma",
        "vantagens": [
            {
                "nome": "Patrono (Vantagem Opcional)",
                "descricao": "Uma grande organização, empresa, governo ou NPC poderoso ajuda você. Dentro de certos limites um Patrono pode fornecer transporte, equipamento e informação para você. Um Patrono também pode ajudar e enviar reforços quando você mais precisar. Ter um Patrono também significa que você precisa ser leal e seguir ordens. Muitas vezes vai precisar cumprir missões especiais para o seu Patrono."
            },
            {
                "nome": "Vanguarda",
                "descricao": "Você pode não ser o melhor protetor de todos e pode nem sempre estar em todos os lugares, mas fará de tudo para proteger seus aliados mais estimados. Caso esteja na frente do grupo durante uma exploração, movimentação ou cena, você pode agir como uma força de aviso e alerta para o grupo, permitindo que eles ganhem um bônus de +2 na primeira rolagem de qualquer coisa que possa vir a acontecer nesse caso, você também ganha esse bônus, mas reduzido para +0. Esse bônus só acontece novamente depois de um certo tempo (a critério do mestre)."
            }
        ]
    },
    {
        "nome": "Cavaleiro Negro",
        "descricao": [
            "Desviando-se do lado comum de um cavaleiro, o aventureiro se aventura pelo vale sombrio do poder, egoísmo e manipulação dos mais fracos, tornando-se assim um Cavaleiro Negro. Com uma filosofia básica de “o mais forte sobrevive” ele segue seu caminho manchado de sangue e disputas sociais até alcançar seus objetivos mais distantes. Misturando as artes de magia negra com o uso de armas feito espadas e machados, o Cavaleiro Negro se torna uma força temida dentro do campo de batalha, fazendo alguns inimigos desistirem de enfrentá-lo antes mesmo da luta começar."
        ],
        "joguese": "Você deseja traçar o lado oposto ao da luz e lealdade, servindo forças que visam a busca de poder, dominação e glória pelos métodos que forem necessários. Dentro de combate você agirá como tanto como uma força mágica quanto uma força física, podendo combinar magias com o uso de suas armas e vice-versa.",
        "atributos": "Arma ou Magia",
        "vantagens": [
            {
                "nome": "Sua Reputação te Precede",
                "descricao": "Ao lidar com capangas ou outros empregados de ranking baixo, todos os seus testes de intimidação ficam mais fáceis (tem sua dificuldade reduzida em uma categoria na tabela de dificuldades)."
            },
            {
                "nome": "O mundo é dos espertos",
                "descricao": "Se você estiver com 2 de HP ou menos, mas de pé e capaz de agir sem problemas, você pode escapar do combate de alguma forma apropriada e sem chance de falhar. Assim que o Cavaleiro Negro percebe que a situação não está em seu favor, ele se manda... Viver para lutar outro dia. Isso é considerado uma Derrota por Rendição caso seja relevante. Essa vantagem só pode ser usada se outros integrantes do seu grupo estiverem segurando os inimigos até o limite do bom senso. Exemplos: Em uma luta de 2x5 até pode funcionar você sair e deixar seu último aliado sozinho, mas em uma 2x20 não. Da mesma forma, em uma luta 1x1 seria impossível fugir sorrateiramente."
            }
        ]
    },
    {
        "nome": "Clérigo",
        "descricao": [
            "O Clérigo representa o espírito de purificação e compaixão incorporadas no aventureiro. Adepto dos caminhos da luz e possivelmente de ensinamentos divinos, ele caminha pelo mundo coberto de sombras espalhando a sua luz e purificando o mal. Assim, sua jornada de luz e prosperidade tenta tornar o mundo mais pacífico e calmo, sem tantos conflitos e gerando o benefício máximo para todos."
        ],
        "joguese": "Você deseja providenciar um exímio suporte para si e para seus aliados, sendo capaz de mantê-los vivos e dispostos para lutas a todos os instantes, dispondo de magias restaurativas e melhorias específicas. Você também pode exercer o papel de um combatente fervoroso que traz a justiça e julgamento através de seus pesados golpes físicos que misturam energias divinas e espirituais.",
        "atributos": "Liderança ou Arma",
        "vantagens": [
            {
                "nome": "Símbolos Sagrados",
                "descricao": "Qualquer símbolo ou objeto feito em honra ao deus escolhido na criação do personagem se torna um símbolo sagrado, podendo funcionar como uma arma para seus ataques que envolvem a sua divindade. Símbolos sagrados nunca estão em nível inferior ao seu, mas símbolos realmente bem acabados ou poderosos podem ter nível superior."
            },
            {
                "nome": "Religioso",
                "descricao": "Você deve seguir as regras da religião apropriada ao seu personagem. Você não ganha pontos por isso e não pode tomar a desvantagem religioso da forma normal. Essa desvantagem não é tão pesada quanto a normal, então você pode ir até o ponto em que estiver confortável ao definir as regras."
            }
        ]
    },
    {
        "nome": "Defensor",
        "descricao": [
            "O Aventureiro transcende e continua o seu caminho, de combate, transformando-se no honroso Defensor. Essa figura representa a defesa contra o mal e o zelo com aqueles que amamos, é a personificação do conceito de proteção, mesmo que essa proteção seja um ataque contra o próximo. A trilha da justiça e da honra o esperam, mas muitas batalhas deverão ser lutadas até que seu objetivo seja concluído."
        ],
        "joguese": "Você quer proteger seus aliados com honra e força de vontade. O Defensor utiliza diversos equipamentos e geralmente um largo escudo para equipar-se e garantir a segurança dos mais fracos, sendo um dos combatentes mais resistentes e capaz de iniciar combates garantindo a vantagem de seu grupo.  Além de ser um exímio combatente, o Defensor é um dos heróis que pode oferecer uma forte resistência em duelos 1 contra 1, sendo duro de matar.",
        "atributos": "Arma",
        "vantagens": [
            {
                "nome": "Friends in High Places",
                "descricao": "Sempre que você chegar atrasado e do alto para salvar alguém/um grupo de pessoas, você recebe sucesso automático nos três primeiros testes que forem possíveis para você dos atributos-teste: Força ou Agilidade."
            },
            {
                "nome": "Respeito",
                "descricao": "O personagem diminui uma dificuldade em seus testes de Diplomacia na categoria na tabela de dificuldades, quando lidando com aliados, NPCs ou criaturas que entendam sua língua."
            }
        ]
    },
    {
        "nome": "Druida",
        "descricao": [
            "O aventureiro entra em contato com a natureza e acaba por se tornar parte dela como opção. Ao se transformar no Druida, o personagem adquire uma figura marcante e muito presente nas histórias mais antigas do mundo, um guardião da natureza que incorpora poderes naturais e mágicos, além de se transformar em animais e outras criaturas para proteger seus ideais e principalmente – sua casa. Tomado por um forte senso de justiça, igualdade e equilíbrio, essa figura raramente representa comportamentos caóticos e que perturbem a paz natural das coisas. Entretanto, a figura de Druidas que voltaram-se contra a natureza para usar seus conhecimentos, poderes e dons para benefícios próprios (ou mesmo para o bem de forças ocultas) é algo também presente através da história. Esse herói primal defende com unhas e dentes (literalmente) aquilo pelo que acredita e almeja."
        ],
        "joguese": "Você quer ser um avatar da natureza que busca seu próprio destino e também para proteger aqueles com quem se importa. Um Druida evita conflitos mas não hesita em ensinar uma lição contra um oponente que mereça e ameace-o, podendo funcionar de uma forma extremamente versátil dentro de combate: um poderoso guerreiro que combate com força física com a ajuda de elementos naturais; um mago que comanda as forças da natureza para o auxiliarem dentro e fora de combate (junto de seus aliados) ou mesmo um forte metamorfo que transforma-se em diversos animais nas mais variadas situações.",
        "atributos": "Arma, Magia ou Liderança",
        "vantagens": [
            {
                "nome": "Como se fosse minha casa",
                "descricao": "Qualquer teste para busca de alimentos em uma área selvagem que fosse exigir um teste possível de até dificuldade média (15) passa a ser sucesso automático, você conhece a natureza como a palma da sua mão. O mesmo vale para testes para não se perder ou encontrar alguém que passou por ali."
            },
            {
                "nome": "O Filho Pródigo Retorna",
                "descricao": "Quando em uma selva, pântano ou floresta realmente densa, você evita perigos e perigos evitam você. As árvores parecem guiar o seu caminho e os predadores se afastam. Criaturas mágicas da floresta também podem te auxiliar, a depender do misticismo do local."
            },
            {
                "nome": "Comandar Plantas",
                "descricao": "Você pode se concentrar para fazer plantas morrerem ou florescerem. Seu toque pode levar uma flor murcha a algo com beleza sem preço. Em poucas semanas, você poderia transformar uma pequena área de um deserto em um Oasis, usando apenas o seu dom."
            }
        ]
    },
    {
        "nome": "Elementalista",
        "descricao": [
            "Aprofundando-se em estudos de magias elementais e manipulação dos elementos da natureza, o Aventureiro transcende para uma forma superior de conjurador, tornando-se assim o Elementalista. O Elementalista representa a sabedoria e maestria que conecta as duas áreas de conhecimento para um único uso, além de estar presente em diversos momentos decisivos da história do planeta, como em guerras. Envolvido por longos mantos, livros e bastões mágicos, ele é um dos poucos heróis que comanda a natureza para obedecer a suas vontades. A trilha dos elementos e da superioridade o aguarda, meça seu poder ou ele será sua principal ruína."
        ],
        "joguese": "Você deseja ser o melhor manipulador de magias elementais eliminando inimigos apenas com um estalar de dedos, além de possuir um vasto conhecimento sobre o mundo e ter um dos maiores índices intelectuais da sociedade (geralmente). O elementalista pode agir de formas ofensivas e de suporte, usando os elementos sempre a seu favor e moldá-los da forma que precisar no momento.",
        "atributos": "Elemento",
        "vantagens": [
            {
                "nome": "Ascendência Elemental",
                "descricao": "Ao criar o seu personagem, escolha um elemento. Você só poderá usar esse elemento até obter outras formas de manipular os que não detêm controle. Você pode usar esse elemento para qualquer coisa que desejar em questões interpretativas, como formar um cantil de gelo, um escudo temporário de pedra (para fins que não sejam de combate), uma corda de trovões para segurá-lo num penhasco ou mesmo um furacão de ar para prevenir que você e seus aliados recebam dano por queda numa situação especial."
            },
            {
                "nome": "Espírito Elemental",
                "descricao": "Esta vantagem usa o elemento escolhido pela vantagem anterior durante a criação do personagem (Fogo, Eletricidade, Ar, Gelo, Água, Bio ou Terra). Você pode ter um objeto que é sua posse inquestionável encantado para não poder ser utilizado por outras pessoas. Você pode definir as especificidades desse encantamento, mas como exemplos: uma espada encantada por água pode se desfazer e passar pelas mãos dos outros quando tentarem a segurar. Uma espada encantada por terra pode aumentar o próprio peso em várias toneladas. O fato é que se alguém que não for você tentar usar o item encantado, não vai poder."
            }
        ]
    },
    {
        "nome": "Engenheiro",
        "descricao": [
            "O aventureiro se entrega completamente aos estudos e conhecimento da tecnologia e tudo o que há de moderno no mundo, desenvolvendo-se assim como um aspirante ou um engenheiro profissional.  Sendo capaz de desenvolver vários projetos de máquinas ou mesmo equipamentos reforçados, exóticos e diferenciados, o Engenheiro conta com um arsenal imprevisível e flexível para as diversas situações que precisa. Movido por um ímpeto de botar em prática seus estudos e usar suas invenções para o bem comum (ou não), este personagem estará constantemente se aprofundando e buscando novas fontes de tecnologia para usar em seus projetos. Um Engenheiro geralmente é curioso para qualquer tipo de tecnologia que não conhece e prefere acreditar no poder da ciência ao invés dos benefícios da magia (embora não negue que ambos são úteis para a vida). Em combate, desempenha um papel flexível, desde a um forte combatente com grandes armaduras e equipamentos diversos (metralhadoras ou martelos biônicos) até mesmo uma figura de suporte e ajuda que posiciona suas criações para o bem de seus aliados."
        ],
        "joguese": "Você deseja usar suas criações para ajudá-lo em combate ou mesmo providenciar um backup necessário para seus companheiros. Você também pode agir como uma força tática, abrindo portas que teoricamente precisariam de uma chave especial, desabilitar inimigos e mecanismos específicos, construir soluções na hora em que precisarem, ser um combatente de distância, proximidade física ou os dois ao mesmo tempo!",
        "atributos": "Tecnologia",
        "vantagens": [
            {
                "nome": "Inventor",
                "descricao": "Você pode criar uma invenção de tamanho pequeno / médio com um único propósito objetivo e bem definido para justificar sua existência. Essa invenção dura 1d4 horas ao seu lado e eventualmente para de funcionar, perdendo seu funcionamento. A invenção não pode ser usada em combate e para fins de testes sempre utilizam o atributo Inteligência, no valor sendo igual ao do engenheiro que a criou. Sua resistência é baixa e qualquer golpe simples a destrói facilmente. A invenção pode ter diversas funções simples, como: iluminar uma área enquanto se move, funcionar como um detector de metais, ser um sonar, servir café, aspirar pó, suportar peso, etc. O engenheiro sempre tem pequenas peças desimportantes em seus bolsos/mochila para criar uma invenção simples do tipo. O personagem pode fazer duas invenções pequenas e simples por dia ou episódio (o que demorar mais para acontecer), entretanto, elas não podem funcionar juntas ou serem criadas ao mesmo tempo. O personagem pode sacrificar as duas invenções e fazer uma invenção média no lugar, somente uma vez por dia ou episódio (o que demorar mais para acontecer). Uma invenção média pode ter até duas funções que ficam ativas ao mesmo tempo e ela possui uma resistência maior, equivalendo à 5 pontos de HP e 1 RD geral, mas não pode ser usada em combate como um integrante extra ou mesmo causar dano. Criar uma invenção leva certo tempo dependendo da função dela e se é uma invenção simples ou média. Invenções médias levam mais tempo que as pequenas, e a quantia de tempo é estipulada pelo mestre, mas sempre deve ser superior à 20 minutos (ou 1 rodada dentro do jogo)."
            }
        ]
    },
    {
        "nome": "Esgrimista",
        "descricao": [
            "Preferindo um caminho mais veloz, preciso e elegante, o Aventureiro escolhe espadas leves e rápidas como suas fiéis aliadas de confiança, tornando-se assim o ágil Esgrimista. Possuidor de uma agilidade fora do comum, reflexos estupendos e uma precisão digna de inveja, o Esgrimista é rápido como o vento, leve como uma pena e forte como um canhão. A trilha da agilidade e elegância o aguarda, ataque como um assassino e porte-se como um membro da realeza para atingir o sucesso."
        ],
        "joguese": "você deseja ser um elegante combatente capaz de manusear as mais finas espadas e lâminas de todas, usando-as como uma extensão de seu corpo para aniquilar o mal e proteger a quem lhe interessa. O Esgrimista é o vento, ele desfere golpes ágeis e poderosos com muita precisão e requinte, sendo capaz de combater diversos problemas sem pestanejar. Combinando armas rápidas com reflexos rápidos, eles alcançam mobilidade, poder e alta agilidade, sendo uma forte ameaça até para os guerreiros mais experientes.",
        "atributos": "Arma",
        "vantagens": [
            {
                "nome": "Reação Improvisada",
                "descricao": "Quase sempre sua agilidade natural e graça permitem que você reaja de forma adequada as situações diversas e mais inesperadas. Com isso, você ganha um bônus natural de +2 em testes que são reações contra alguma coisa que esteja acontecendo (fora de combate)."
            },
            {
                "nome": "Duelista",
                "descricao": "Uma vez por sessão ou dia (o que demorar mais para acontecer) você pode desafiar um alvo específico para um duelo 1x1 onde ninguém mais poderá intervir. Esse duelo automaticamente passa de um combate clássico para um combate cinemático especial (ver regras e informações de C.E.C. no manual básico). Caso você ganhe o duelo, você recebe uma quantia bônus de experiência - a quantia dada nesse bônus é critério do mestre."
            }
        ]
    },
    {
        "nome": "Estrategista",
        "descricao": [
            "O estrategista é um grande conhecedor de táticas de guerra e um gênio imbatível. Seus planos são capazes de tocar em cada variável nas formas mais delicadas e seus subordinados funcionam como peças de uma máquina, em perfeita harmonia. Os planos do estrategista nunca falham: sempre existe um plano reserva.",
            "Inspirando seus aliados e os ajudando a enxergar o caminho correto, ele consegue rapidamente o respeito e autoridade necessárias para levar seu grupo à vitória. Um líder nato e um mestre de guerra sem igual. O estrategista domina o campo de batalha apenas garantindo que cada peça esteja exatamente onde deveria estar e fazendo justamente o que precisava fazer. O estrategista multiplica a força de seus aliados, os tornando invencíveis."
        ],
        "joguese": "deseja ser o líder que ajuda o resto do grupo a atingir seus objetivos. Um gênio que motiva seus subordinados através de excelência e os faz atingir objetivos que nunca imaginaram alcançar.",
        "atributos": "Liderança",
        "vantagens": [
            {
                "nome": "O Plano do Estrategista",
                "descricao": "O estrategista sabe muito bem o que faz e suas ordens são exatamente o que precisava ser feito. Sempre que personagens forem realizar passos de um plano que o estrategista definiu, eles recebem +1 em qualquer teste de Atributo-teste ou perícia."
            },
            {
                "nome": "Ordens Superiores",
                "descricao": "A presença física do estrategista não é necessária. Contanto que o estrategista tenha como saber o que está acontecendo e passar seus comandos, o estrategista pode participar de um combate. Dessa maneira, o estrategista não pode ser alvo de nenhum efeito e não pode realizar nenhuma ação que fosse exigir sua presença no local, mas pode continuar participando do combate como suporte."
            },
            {
                "nome": "Gênio",
                "descricao": "O estrategista não possui oponentes do seu próprio nível e nunca perde uma partida de jogos nos quais a estratégia seja decisiva, como Xadrez."
            }
        ]
    },
    {
        "nome": "Ferreiro",
        "descricao": [
            "Deixando de lado o espírito do ouro para entregar-se ao trabalho puro e árduo, o Aventureiro transcende para o poderoso e destemido Ferreiro. Sendo capaz de forjar armas, armaduras, escudos e equipamentos dos mais variados tipos, ele providencia para si e para seus aliados um constante arsenal que está sempre a disposição quando necessário. Quando necessário, torna-se uma força incontrolável dentro de campo de batalha, representando a fúria e força física em níveis extremos. A trilha do ferro e fogo o espera, pegue seu martelo e decida se o usará para providenciar suporte para um exército ou tornar-se parte dele diretamente."
        ],
        "joguese": "Você deseja ser uma força bruta dentro de combate, sendo capaz de combater os desafios geralmente sem o auxílio de energias místicas extremamente místicas e apenas com seu corpo e seu próprio vigor. O Ferreiro também pode proporcionar utilidade para seus aliados, com possíveis técnicas que melhorem seus desempenhos.",
        "atributos": "Arma",
        "vantagens": [
            {
                "nome": "Trabalhador",
                "descricao": "Semanalmente o seu personagem pode dar o melhor de si para conseguir os melhores resultados para seu próprio trabalho. Em termos de jogo isso significa que toda vez que você fosse criar itens através do sistema de empregos (sistema opcional) você pode usar um \"efeito especial\" que permite ter um resultado otimizado e usar menos materiais que o normal. Esse efeito pode ser usado 4 vezes por semana e só vale para materiais do tipo: Madeira, Gemas e Minerais. Usar um efeito significa reduzir a quantia de materiais usados pela metade do que seriam usados normalmente."
            },
            {
                "nome": "A arte da criação",
                "descricao": "Seus sentidos foram treinados além do normal quando o assunto é uma peça forjada seja por uma máquina ou a mão. Com isso, você ganha bônus de +4 em qualquer teste que envolver o reconhecimento de falsificações, origens de um objeto, saber sua função real ou possíveis habilidades escondidas e até mesmo a história do objeto (completa ou não, a critério do mestre)."
            }
        ]
    },
    {
        "nome": "Gladiador",
        "descricao": [
            "O Gladiador supera seus próprios limites e avança em direção ao caminho de se tornar um verdadeiro mestre das armas, obtendo novos conhecimentos e técnicas de como manusear as mais diversas armas e alterar seu próprio estilo de combate dependendo da situação. O Gladiador esteve presente em momentos críticos com outros arquétipos, geralmente dentro de conflitos e situações de tensão, o que ajudou a desenvolver seu espírito e aptidão para tais tarefas árduas. A trilha da coragem e do sangue o espera, mas não será fácil."
        ],
        "joguese": "Você deseja ser ótimo combatente físico em duelos, sendo capaz de desempenhar ataques poderosos e devastantes além de poder alternar entre diversas armas e compor um estilo totalmente diferente de combate. Um gladiador pode ser focado em um estilo de combate levemente mais defensivo, porém com muita mobilidade e rapidez ou mesmo ser um poderoso guerreiro que destrói qualquer inimigo com armamentos pesados.",
        "atributos": "Arma",
        "vantagens": [
            {
                "nome": "My Profession!",
                "descricao": "Sempre que realizar testes de perícia relacionados a motivar aliados para um combate, adicione +2 ao resultado do dado."
            },
            {
                "nome": "Mestre da Arena",
                "descricao": "Você nunca está desprevenido num combate ou situação que exija uma ação drástica, você pode ir contra tudo e todos usando qualquer coisa ou qualquer tipo de arma. Em termos práticos, isso permite que o personagem ache / crie uma rápida arma simples e rústica para atender suas necessidades. A arma é sempre de nível 0 e usa o atributo apropriado / que mais fizer sentido."
            }
        ]
    },
    {
        "nome": "Guerreiro",
        "descricao": [
            "O Guerreiro representa o espírito da força e adrenalina incorporadas no aventureiro. Sendo um combatente natural, ele não tem medo ou incerteza de enfrentar um combate quando preciso.",
            "Procurando aventuras e persuadindo seus interesses pessoais através de grandes batalhas, ele vaga pelo mundo com um espírito forte."
        ],
        "joguese": "você deseja ser a mão que destrói os inimigos que tentam impedir o seu avanço e o do seu grupo, armado com várias armas e técnicas que providenciam uma boa desenvoltura em combate. Você também desempenhará papéis como o de atacante principal, podendo ser uma mistura de um personagem resistente e forte.",
        "atributos": "Arma",
        "vantagens": [
            {
                "nome": "Herói",
                "descricao": "Você não se abate fácil e possui uma grande força de vontade interna. Ao ficar com 2 de HP ou menos (contanto que ainda seja positivo) você pode ativar esta vantagem e continuar lutando normalmente mesmo depois que cair para 0 de HP ou menos, podendo ficar com o HP negativo (indo até -10). Se você atingir -10 de HP você morre automaticamente, mas, se a luta terminar e você ficar com o HP menor que 1, os testes de morte são feitos normalmente."
            },
            {
                "nome": "Presença Inspiradora",
                "descricao": "Sua vontade interior é algo admirável, mesmo que não se mostre sempre que possível. Com isso, sempre que estiver na companhia de dois (2) aliados ou mais, ganhe um bônus de +1 nas três primeiras rolagens que fizer durante o episódio ou dia (o que demorar mais para acontecer), desde que essas atividades ou testes envolvam uma forma de ajudar os aliados."
            }
        ]
    },
    {
        "nome": "Hematologista",
        "descricao": [
            "Dedicando-se a um caminho proibido, o Aventureiro avança em busca de livros e práticas esquecidas e proibidas pelo tempo, aprendendo assim não a manipular a energia elemental ou as forças caóticas do universo, mas sim o que há de mais essencial: a energia da vida e o sangue dos seres vivos, tornando-se assim o Hematologista. Ao escolher esse estilo de ocultismo, o Hematologista se torna uma poderosa arma de combate e extremamente flexível dentro de um confronto, além de poder providenciar um bom suporte para o grupo. A trilha do sangue e insanidade o aguarda, tome cuidado para a sua sede não ficar maior do que deveria ser."
        ],
        "joguese": "você deseja especializar-se em práticas de ocultismo proibidas pela sociedade e esquecidas pelo tempo, tendo como princípio fundamental a manipulação de energia vital e de sangue. Assim, atacando seus alvos com magias traiçoeiras e que não são conhecidas nem consideradas “seguras”.",
        "atributos": "Magia",
        "vantagens": [
            {
                "nome": "Flagelo Vermelho",
                "descricao": "Seus sentidos ficam extremamente mais apurados quando um alvo ou uma pessoa que está com ferimentos (e/ou sangrando) se localiza próxima ou numa distância considerável. Obedecendo a essas condições, você pode sentir o cheiro de tal alvo, saber a localização aproximada do mesmo e até saber dizer quão ferido ele (a) está e até onde poderia ir. Caso feche seus olhos, você abdica da sua visão geral, mas ganha uma forma de ver a silhueta do alvo com um tom vermelho vibrante e saber a direção onde ele está."
            },
            {
                "nome": "Venábulo Carmesim",
                "descricao": "Você consegue manipular o sangue como ninguém, e isso lhe permite moldá-lo em algum objeto desejado ou desenho / escritura qualquer. Adicionalmente, você pode usar quantias de sangue (sua ou de outra origem) como uma arma de nível 0 que utiliza o atributo Magia."
            }
        ]
    },
    {
        "nome": "Ilusionista",
        "descricao": [
            "O ilusionista representa o espírito da estratégia astúcia incorporado no aventureiro. Para um Ilusionista tudo é um show, ele utiliza de acessórios diversos e truques misteriosos para fingir que possui poderes super-humanos, enganando os olhos de todos. O Ilusionista utiliza iscas para adquirir a atenção das pessoas enquanto realiza suas ações verdadeiras. Em combate, isso significa que um Ilusionista é bem elegante, e ao mesmo tempo, exagerado, tramando por debaixo de espelhos e posições falsas para dar uma impressão confusa sobre suas ações.",
            "Assim, através do seu conhecimento de vida e estudos de magia diversa paralela, mas não aprofundada, ele mistura uma forma de ação e combate moderno com truques diversos que podem virar os eventos de um acontecimento importante."
        ],
        "joguese": "Você deseja misturar uma força ofensiva tática de armas de fogo e aparatos tecnológicos com truques e aspectos mágicos que confundem os inimigos e tornam suas estratégias de combate fatores imprevisíveis sem serem voltadas para dano ou efeito direto. Ao mesmo tempo, suas habilidades e aparatos lhe permitem dar suporte e auxiliar o grupo de inúmeras formas diferentes. Diferentemente de Magos e outros arquétipos que mexem com energias mágicas, o Ilusionista meramente trama e usa jogos de ilusões, aparatos tecnológicos e outras formas de força sobrenaturais mais fracas para passar uma mensagem ou forte impressão emocional naqueles que fazem parte de seus alvos. Tomando vantagem disso, ele é capaz de desferir poderosos golpes e ataques surpresa contra os mesmos",
        "atributos": "Tecnologia",
        "vantagens": [
            {
                "nome": "Fumaça e Espelhos",
                "descricao": "“O que” você faz é menos importante do que o “Como” você faz. Por manter as pessoas em volta de si entretidas, o Ilusionista é capaz de realizar ações sem revelar suas intenções. Isso efetivamente permite que o Ilusionista consiga sucessos automáticos em testes de Ladinagem enquanto mantiver a atenção da audiência em outro lugar. Testes muito difíceis de Ladinagem têm a dificuldade levemente reduzida, ao invés de serem sucessos automáticos."
            },
            {
                "nome": "O Maior Truque",
                "descricao": "Se os outros membros do grupo te ajudarem a montar um plano especial, você é capaz de participar de um combate tendo todos seus atributos de combate aumentados em +10. Exceto que você não pode causar danos ou efeitos de verdade em nenhum lugar! É tudo ilusão! Mas os inimigos não precisam saber disso, não é?"
            },
            {
                "nome": "Quando ninguém estava olhando",
                "descricao": "No meio da confusão, é normal que as pessoas se esqueçam das coisas realmente importantes. Mas não o Ilusionista. A falta de atenção dos outros é justamente o que o Ilusionista usa. Assim sendo, o Ilusionista pode se aproveitar desses momentos para pegar algo “emprestado”. Durante uma sessão, caso o grupo se esqueça de algo, o Ilusionista pode realizar um teste de Ladinagem retroativo para ter pego essa coisa durante a última oportunidade, mesmo que o jogador do Mágico também tivesse se esquecido."
            }
        ]
    },
    {
        "nome": "Inquisidor",
        "descricao": [
            "Caminhando para a luz da fúria divina, o Aventureiro arma-se com vestimentas especiais e prepara-se para fazer justiça com suas próprias mãos, limpando o mundo da escuridão e das criaturas horripilantes, funcionando como o vingador dos deuses. Esse é o Inquisidor, capaz de desafiar até mesmo um Necromante num duelo e ter boas chances contra ele. O Inquisidor não medirá esforços para fazer o que acha certo e seguir com fé nos seus objetivos. A trilha da retribuição e do julgamento o aguarda, destrua os infiéis com suas habilidades, mas não fique cego por dogmas."
        ],
        "joguese": "Você deseja seguir os caminhos da energia divina e do trovão para arremessar o martelo do julgamento em seus inimigos com força brutal e precisa enquanto também pode proporcionar um suporte moderado para si e seus aliados.",
        "atributos": "Magia",
        "vantagens": [
            {
                "nome": "Ordem dos Inquisidores (Opcional)",
                "descricao": "Você faz parte da milenar ordem dos Inquisidores. Precisar de ajuda é uma fraqueza vergonhosa, mas pedidos de ajuda em geral serão respondidos. Dependendo das circunstâncias, você também pode receber missões."
            },
            {
                "nome": "Fogo Sagrado",
                "descricao": "Por um curto período de alguns minutos, se torna dia (ou extremamente claro) na região onde você estiver. Além disso, qualquer escuridão artificial ou mágica enfraquece, deixando tudo mais claro. Você só consegue realizar essa façanha uma vez por dia ou episódio, o que demorar mais para passar."
            },
            {
                "nome": "Intuição Divina",
                "descricao": "Não existe \"escuro demais\" para você. Você enxerga perfeitamente bem em uma escuridão absoluta. Você possui um sexto sentido que não te deixa em paz enquanto magia negra estiver sendo realizada por perto. Sob a luz da sol, você pode enxergar um pentagrama na testa de uma pessoa que usou magia negra, mesmo que ela tenha feito isso apenas uma vez."
            },
            {
                "nome": "Humilhação Inconsolável",
                "descricao": "Se você falhar em destruir algum usuário de magia negra após tentar caçá-lo, a Fúria Divina te consumirá, pouco a pouco, com um ódio incontrolável. Quanto mais tempo você demorar para corrigir esse erro, pior fica. Eventualmente, você será incapaz de pensar em nada a não ser terminar o trabalho."
            }
        ]
    },
    {
        "nome": "Invocador Astral",
        "descricao": [
            "Indo em direção dos segredos antigos e artes proibidas pelos deuses e estrelas, o Aventureiro ergue-se com uma mistura de robes leves e armaduras sutis que protegem seu corpo enquanto um arsenal de cajados, grimórios e até mesmo espadas e outras armas ficam a sua disposição. Entretanto, essas não são suas maiores armas, mas sim, o seu próprio intelecto e a capacidade celestial presente dentro de sua alma e força vital: bestas arcanas, seres mitológicos, serpentes colossais, dragões, titãs e muitas outras criaturas que estão presentes em lendas e histórias, são conjuradas pelo Invocador Astral, para que assim, todos os que se oporem à ele sejam derrotados de forma incomparável."
        ],
        "joguese": "Você deseja seguir os caminhos da invocação e controlar criaturas mágicas diversas para que elas representem sua vontade no campo de batalha, podendo servir desde uma força destruidora inigualável à até mesmo um suporte diferenciado para seus aliados.",
        "atributos": "Liderança ou Magia",
        "vantagens": [
            {
                "nome": "Convocação Extraplanar",
                "descricao": "Você pode convocar uma criatura extraplanar / celestial / mágica / astral, e de outras categorias ao pagar um custo igual a 2 de MP."
            },
            {
                "nome": "Invocação Rápida",
                "descricao": "Com o gasto de 2 de MP, o Invocador pode, por alguns segundos, conjurar uma criatura celestial / mágica / astral / extraplanar e de outras categorias para auxiliá-lo em uma tarefa ou causar algum efeito que tenha a ver com o conceito de tal besta. A criatura é conjurada e executa uma ação, depois sumindo quando completar o propósito pelo qual foi chamada."
            }
        ]
    },
    {
        "nome": "Monstro",
        "descricao": [
            "Incontrolável. Indestrutível. Irresistível. Monstros são verdadeiras aberrações da natureza, capazes de distribuir dor e sofrimento pelo mundo enquanto ninguém aguenta ficar em seu caminho. Como máquinas criadas especificamente para matar, Monstros entram no campo de batalha com nada além de seus instintos e vencem seus inimigos como se a batalha estivesse em seu sangue.",
            "Independente do que o personagem queira, ele é um monstro. Isso nunca vai mudar. O melhor que ele pode fazer é tentar jogar isso a seu favor...",
            "Monstros existem de várias maneiras. Alguns se transformam em outra criatura quando saem de controle. Outros são a criatura em tempo integral. A única constante é a raiva incontrolável e o poder de destruição. Monstros são sempre guerreiros formidáveis.",
            "Alguns Monstros são apenas membros comuns de uma raça: algumas raças bestiais se tornam incontroláveis em lutas e aumentam muito sua força no processo. Mas geralmente é alguma coisa extra: uma maldição, algum ritual ou experimento que deu errado (ou muito certo) ou até mesmo magia negra. Grande parte dos Monstros se sentem terrivelmente mal tanto com a perda de controle quanto com o mal que causam quando o monstro dentro deles acorda, mas psicopatas podem acabar gostando do que acontece, se entregando ao monstro."
        ],
        "joguese": "você deseja ser uma fera selvagem com um espírito de luta inigualável. Uma criatura violenta que não vai descansar até que seus inimigos estejam derrotados. Ser um Monstro significa ser uma pessoa muito poderosa, mas que luta principalmente consigo mesma durante todos os dias da sua vida. Você irá dominar o monstro ou será consumido por ele?",
        "atributos": "Arma ou Artes Marciais",
        "vantagens": [
            {
                "nome": "O monstro acorda",
                "descricao": "Em situações bem específicas, geralmente, mas não necessariamente, relacionadas à raiva, o personagem se transforma ou perde boa parte do controle, se tornando uma fera selvagem. Quando o monstro acorda, o personagem pode gastar 1 Stamina para curar seu HP totalmente. O monstro costuma dormir quando o que o acordou não existe mais, mas em situações mais intensas a transformação pode durar mais tempo. O jogador tem controle sobre quando \"O monstro acorda\", sendo quem julga se uma situação é boa o suficiente ou não.                        Caso o jogador queira, o personagem pode ter seus atributos de combate reduzidos a 0 enquanto o monstro estiver dormente. Nesse caso, a primeira ativação de \"O monstro acorda\" em uma sessão não consome Stamina."
            },
            {
                "nome": "O jogador que escolher esse arquétipo deve escolher também uma (e somente uma) das opções abaixo",
                "descricao": ""
            },
            {
                "nome": "Fúria é minha escolha, não uma doença",
                "descricao": "O personagem enfrentou o monstro e venceu. A fera nunca sai do seu controle e faz o que ele quer que faça, não que isso seja fácil para o personagem. O personagem passa a receber +2 em testes de Força de Vontade para se controlar ou testes contra medo. O personagem pode ativar \"O monstro acorda\" quando quiser, sem exigir nenhuma situação."
            },
            {
                "nome": "Você não quer me ver zangado",
                "descricao": "Em situações especiais das condições de sua perda de controle, circunstâncias ainda mais fortes (exemplo: muita, muita raiva) o personagem se torna o monstro... Mas totalmente descontrolado.            O monstro irá destruir o que o trouxe e então passará a destruir tudo que existe a sua volta, sejam apenas objetos, amigos ou o amor da sua vida. Durante a duração da transformação, todas as rolagens de combate do personagem recebem +1. Além disso, o HP máximo do personagem aumenta em +20 temporariamente e ele é curado completamente.            O personagem passará a atacar aliados depois de eliminar seu inimigo atual e precisará ser parado por eles. Enquanto fora de controle você não irá matar seus amigos e quando eles seriam nocauteados eles são nocauteados com 0 de HP sem risco de morte.                         Atenção:            Você ainda pode causar a morte deles indiretamente. Alguém nocauteado não pode se defender de outras ameaças.                        Atenção: se seu HP ficar -10 ou menor do que isso de uma vez só, você morre imediatamente ao invés de retornar ao normal.                        Esse poder não se ativa em eventos PVP e é controlado pelo mestre nas outras ocasiões, sendo recomendável não a ativar para uma luta entre jogadores (o monstro precisa enfrentar múltiplos jogadores). Então o jogador não escolhe quando ativar essa vantagem, o mestre escolhe.                        Essa vantagem pode ser trocada por \"Fúria é minha escolha, não uma doença\" no decorrer da história caso seja relevante aos acontecimentos."
            }
        ]
    },
    {
        "nome": "Ladrão",
        "descricao": [
            "O Ladrão representa o espírito de sobrevivência e malandragem incorporadas no aventureiro. Possuindo bons reflexos combinados com uma inteligência e percepção acima do comum, ele consegue o que quiser num piscar de olhos sem que as pessoas deem falta de um objeto ou mesmo notem-no. Em combate, funciona como uma força invisível que dilacera os inimigos pouco a pouco e de forma estratégica para se manter vivo ao mesmo tempo em que ajuda a si mesmo e seus aliados."
        ],
        "joguese": "Você deseja agir como uma força tática para o seu grupo, debilitando e assassinando inimigos em específico ou mesmo avançando de forma imperceptível em direção a um objetivo maior enquanto seu grupo luta. Você também desempenhará papéis de escolta, ataque, posicionamento e dançará entre as variáveis de assassinato e exploração.",
        "atributos": "Arma",
        "vantagens": [
            {
                "nome": "Ouvinte Silencioso",
                "descricao": "Você sempre escuta o que lhe convém, podendo uma vez por sessão ou semana (o que demorar mais para acontecer) requisitar uma informação especial de sua escolha diretamente para o mestre. Essa informação pode chegar aos seus ouvidos por meio de conversas aleatórias de pessoas nas ruas ou mesmo pequenos informantes que podem vir a te conhecer / possuem um débito contigo."
            },
            {
                "nome": "Malícia",
                "descricao": "Você sempre está prevenido para as coisas ruins que podem vir a acontecer numa aventura. Com isso, ignore qualquer necessidade de ferramentas especiais para destrancar uma porta, baú, container ou armadilha; você sempre tem o que precisa para trabalhar. Adicionalmente, você ganha +2 em testes relacionados à abrir fechaduras e desarmar armadilhas."
            }
        ]
    },
    {
        "nome": "Mago",
        "descricao": [
            "O Mago representa o espírito de poder e inteligência incorporados no aventureiro. Tendo estudado anos a fio diversos livros, encantamentos, magias e histórias sobre tudo o que existe, o Mago adquiriu um conhecimento incrível sobre tudo que existe, principalmente quando se trata de ocultismo. Assim, avança pelo mundo trilhando seu próprio caminho e tendo as forças sobrenaturais como sua melhor aliada. Diferentemente de outras classes mágicas, o Mago pode combinar ilusões, habilidades psíquicas, elementais e até a conjuração de criaturas e equipamentos mágicos para auxiliá-lo dentro e fora de combate."
        ],
        "joguese": "Você deseja ser um forte combatente e com uma importante presença dentro de combate, devastando inimigos e podendo providenciar uma variada gama de utilidades com encantamentos, além de providenciar todo o suporte intelectual que seu grupo precisará.",
        "atributos": "Magia",
        "vantagens": [
            {
                "nome": "Granger",
                "descricao": "Sempre que você tentar adquirir informações sobre um tópico com uma perícia de Conhecimento e sua rolagem resultar em menos de 5, o resultado do dado é aumentado para 5."
            },
            {
                "nome": "Olho Arcano",
                "descricao": "Uma vez por episódio você consegue usar esse efeito e ver passagens secretas, armadilhas escondidas, pisos falsos, perigos naturais, objetos e criaturas invisíveis que são denunciadas por um acúmulo de energia arcana roxa. Adicionalmente, também é possível ver locais que tenham traços de magia ou uso de magia recente (de qualquer origem). Somente o personagem vê essas revelações. O efeito fica ativo por 5 minutos e não pode ser usado em combate."
            }
        ]
    },
    {
        "nome": "Mago Branco",
        "descricao": [
            "Caminhando completamente no caminho da luz pacífica, o Mago Branco torna-se a um representante natural de energias divinas, transcendendo  em um nível de poder tão grande quanto a de um Elementalista, entretanto, usado para outros fins. Geralmente usando longos mantos brancos com detalhes dourados e acompanhado de uma arma que providencia suporte em combate, o Mago Branco consegue manter seus aliados unidos com suas habilidades e encantamentos, melhorando a autoestima, fechando ferimentos e encorajando os combatentes a vencerem o mal. A trilha da luz e do companheirismo o aguarda, liberte aqueles que ainda estão presos pelas correntes do mal e ajude os necessitados."
        ],
        "joguese": "Você deseja ser um ótimo manipulador de magias brancas e de suporte, podendo com suas técnicas mudar completamente o rumo de um combate. Além de fazer totalmente a diferença em um grupo, um bom Mago Branco é capaz de inspirar e fortalecer seus aliados contra o mais poderoso dos inimigos.",
        "atributos": "Magia",
        "vantagens": [
            {
                "nome": "Puro",
                "descricao": "Você recebe +3 em testes relacionados a convencer outras pessoas de que você não é uma ameaça ou não lhes deseja mal. Doenças, independente da origem, tem 50% de chance (1d100 <= 50) de não te afetarem, mesmo, ou até principalmente, se forem mágicas."
            },
            {
                "nome": "Fé Intensa",
                "descricao": "Você possui uma fé muito forte dentro de si, seja em uma entidade específica ou em traços humanos abstratos (como força de vontade), e por isso a cada fim de episódio ganha +2 ponto de fé.  Um personagem começa a história com 3 pontos de fé e ganha mais 3 a cada término de sessão. Podendo acumular eles até qualquer quantidade. Pontos de fé podem ser acumulados e usados para fins específicos:"
            }
        ]
    },
    {
        "nome": "Mercante Príncipe",
        "descricao": [
            "Entregando-se totalmente a nobreza e ao espírito do ouro, o Aventureiro transcende para o rico e influente Mercante Príncipe. Ostentando uma gama de habilidades que possuem uma conexão extraordinária com o espírito  áureo, o Mercante Príncipe consegue atacar com pouco esforço e causar efeitos consideráveis, além de poder providenciar suporte para si e seus aliados. Com aptidões naturais adquiridas através da história e do tempo, ele criou uma conexão muito forte com o dinheiro e os aspectos de riqueza, sendo atraídos e atraindo os mesmos. A trilha do ouro e nobreza o espera, deixe sempre algumas moedas a postos, pois elas poderão lhe tirar dos piores problemas... Para você, o dinheiro compra tudo."
        ],
        "joguese": "Você deseja viver um caminho relativamente mais pacífico e mais voltado para o que move o mundo: dinheiro. O Mercante Príncipe pode ser uma classe conceitual divertida e útil em diversas situações, podendo armar combates interessantes ou mesmo evitá-los da mesma forma sem perder o estilo e graça. Entretanto, quando confrontado, esta classe pode ser altamente destrutiva e manipuladora por conta das variadas habilidades (tanto de dano quanto de efeitos).",
        "atributos": "Arma, Magia ou Liderança",
        "vantagens": [
            {
                "nome": "Falsificação ou Tesouro?",
                "descricao": "Com um pequeno investimento de (Nível do Objeto a ser copiado ou criado) x 50 moedas de ouro, você pode criar uma falsificação quase perfeita de um artefato ou objeto que desejar, exceto que ele SEMPRE terá um defeito e não funcionará para o seu propósito original (ou se funcionar, não funcionará totalmente como deveria). Você também pode criar artefatos que sejam totalmente novos (desde que providencie uma descrição de como ele é e o que faz) para servirem à algum propósito social ou simples o suficiente. Os artefatos não são como invenções de engenheiros, portanto eles são bem mais simples e obedecem a regras de funcionalidade e objetivos mais diretos."
            },
            {
                "nome": "Influência",
                "descricao": "Você possui certa influência por incorporar o arquétipo do Mercante Príncipe, isso lhe permite vender ou comprar um item em qualquer lugar com um bônus de 20% de desconto/lucro sobre o preço de venda/compra."
            }
        ]
    },
    {
        "nome": "Monge",
        "descricao": [
            "O Monge representa a paciência e disciplina incorporadas no aventureiro. Capaz de escolher entre os caminhos de dar suporte aos seus valorosos aliados ou mesmo de funcionar como um punho disciplinado que golpeia sem pena as forças do mal, o Monge trilha seu caminho sem perder seu equilíbrio interior."
        ],
        "joguese": "Você deseja ser um forte e disciplinado combatente que também é capaz de providenciar auxílio aos seus aliados quando precisar, tendo assim uma alta flexibilidade além de também conseguir resolver facilmente situações sem que batalhas sejam necessárias.",
        "atributos": "Artes Marciais",
        "vantagens": [
            {
                "nome": "Hamon",
                "descricao": "Você consegue controlar uma energia sobrenatural presente em todos os seres vivos tendo como a respiração como canalizador principal. Por meditar fora de combate por alguns minutos você recupera seu HP e MP ao máximo sem gastar Stamina."
            },
            {
                "nome": "Disciplina do Punho de Ferro",
                "descricao": "Quando não estiver com nenhuma arma equipada, os punhos do monge contam como duas armas de Nível 0 de uma mão (+1 de dano cada)."
            },
            {
                "nome": "Transcender - Andarilho dos Planos",
                "descricao": "Uma vez por episódio ou dia (o que demorar mais para acontecer) você pode meditar durante alguns minutos e elevar seu estado de espírito para fora de seu corpo. Enquanto estiver assim, você pode caminhar livremente pelo plano astral / espiritual e procurar por algo que deseje, sejam isso uma resposta ou encontrar com alguém que já se foi. Além disso, seu corpo fica inerte num estado de sono profundo enquanto não estiver com o espírito nele, portanto, caso ele seja danificado de alguma forma, você não poderá se defender (e pode até morrer dependendo do caso). Caso seu corpo desfaleça enquanto estiver fora, seu espírito ficará preso pra toda a eternidade no plano astral."
            },
            {
                "nome": "Transcender - Karma Espiritual",
                "descricao": "Adicionalmente ao transcender original, você pode optar por não ir ao plano espiritual, mas sim trocar de corpo com um aliado ou alvo próximo (que esteja na sua linha de visão). Quando trocar de corpo, a alma do alvo vai para o seu corpo e a sua para o dele durante 10 minutos ou 1d4 rodadas. Caso seu corpo seja danificado ao ponto de não suportar mais conter vida dentro dele, você fica preso pra sempre no corpo atual em que estiver e a alma que estiver no seu, ficará perdida, vagando então como um espírito vingativo contra você pelo resto de sua vida também. Esse efeito não pode ser usado em combate e um alvo precisa ser susceptível espiritualmente para tal troca (critério do mestre). Este efeito não requer muita meditação (e talvez até nenhuma se for de acordo do jogador e mestre) e pode ser usado sem restrições de uso por episódio ou dias. Quando estiver no corpo de um alvo, você ganha as habilidades e potencialidades dele, mas não saberá o que ele pode fazer ou não (pois não retém as memórias e trejeitos do mesmo), mas poderá descobrir acidentalmente (ou não)."
            }
        ]
    },
    {
        "nome": "Mímico",
        "descricao": [
            "Muitos teóricos do desenvolvimento humano afirmam que uma forma de aprendizagem das crianças é a imitação e cópia de outras ações que elas veem. Acreditando nisso como forma de desenvolvimento pessoal e também como uma estratégia, o aventureiro decide se tornar um Mímico. Essa figura misteriosa e rodeada de segredos esteve presente em alguns poucos momentos da história do mundo, geralmente ligado a conspirações, assassinatos, roubos ou casos que ficaram sem solução até os dias atuais. Pouco se sabe sobre essa figura e o que ela realmente representa ou quer, mas geralmente são silenciosos e ao copiar os movimentos de seus inimigos com exatidão, causam confusão e estranheza pelas vítimas que acabam por revelar não conhecedores de si próprios, caindo assim em sua destruição."
        ],
        "joguese": "Você deseja ser o elemento surpresa do grupo e ter suas ações e estratégias baseadas nos inimigos e desafios que se apresentarem diante de você e seus aliados. Embora prefira trabalhar sozinho, sua capacidade de cópia ou mesmo criação de técnicas psíquicas completamente inesperadas, podem vir a ajudar seus companheiros. Com toda certeza, seus aliados não iriam querer que você fosse o inimigo deles.",
        "atributos": "Arma ou Liderança",
        "vantagens": [
            {
                "nome": "Copycat",
                "descricao": "Você é um exímio observador frente às demonstrações de poder e força que acontecem próximas de você. O mímico pode incluir em suas técnicas qualquer estilo de luta que já tenha visto, mesmo que isso não encaixe com seus atributos muito bem. Exemplo: um Mímico poderia criar ataques que claramente usam Armas baseadas no guerreiro do grupo, mas usando seu atributo Tecnologia. Isso significa que o Mímico possui muito mais espaço para criar seus poderes."
            },
            {
                "nome": "Som Fantasma",
                "descricao": "Você consegue reproduzir um som que você já tenha ouvido com extrema precisão com sua voz (pode ser uma voz de outra pessoa, som animal, ruído, assovio, etc)."
            }
        ]
    },
    {
        "nome": "Necromante",
        "descricao": [
            "Caminhando nas sombras e dedicando-se puramente aos estudos de conhecimento e magias negras, o Aventureiro transcende para o mestre da manipulação das energias do caos e da morte em geral, tornando-se o Necromante. Devido aos seus estudos e a manipulação de energias negativas sua aparência pode mudar drasticamente, desde a embranquecimento (ou escurecimento) de cabelos até ganho de tatuagens estranhas e palidez. Com apenas um movimento, o Necromante comanda um batalhão de mortos-vivos e criaturas demoníacas para servi-lo, enquanto também distribui a pestilência e o caos contra aqueles que o desafiam. A trilha da morte e trevas o aguarda afinal você sabe muito bem o que há depois da morte."
        ],
        "joguese": "você deseja manipular magia negra e artes proibidas na sua melhor forma, sendo capaz de reviver os mortos e manipulá-los ao seu favor, liderando assim legiões e tornando-se o grande lorde. Além disso, Necromantes são peritos em habilidades de pragas mágicas e debilitação generalizada.",
        "atributos": "Magia ou Liderança",
        "vantagens": [
            {
                "nome": "Pacto",
                "descricao": "Você pode selar acordos com criaturas do tipo demônio, com as especificidades mudando caso à caso. Com um acordo selado, o demônio irá te ajudar em combates até o acordo terminar ou ser quebrado."
            },
            {
                "nome": "Ritual dos Mortos",
                "descricao": "Você consegue montar e executar um ritual especial que leva cerca de 40 minutos para ficar pronto e necessita de materiais equivalentes a 100 Moedas de ouro x o Nível do personagem/NPC morto. Se o altar que você vai criar for destruído, o espírito desaparece.. Esse ritual permite que você evoque uma figura específica já morta, seja um personagem, NPC importante ou qualquer outro que esteja morto. Para evocar o espírito é obrigatório que você use um osso ou objeto pessoal do morto em questão além dos ingredientes básicos. O espírito convocado só pode ficar ativo por 3 minutos e possui uma forma de comunicação limitada, além de não poder se mover para qualquer lugar além das redondezas do local do ritual. Um espírito convocado não pode ser destruído de forma alguma e nem pode causar mal a qualquer um a sua volta (exceto em situações especiais)."
            }
        ]
    },
    {
        "nome": "Ninja",
        "descricao": [
            "O aventureiro começa a praticar e a estudar as artes sombrias enquanto também se empenha em melhorar sua força física, agilidade, raciocínio e percepção, tornando-se assim um Ninja. Os Ninjas são figura que sempre agiram nas sombras por todas as eras, funcionando como letais assassinos pertencentes a certos clãs orientais ou mesmo lobos solitários em busca de vingança contra alguém em específico. Cercados por uma névoa de mistério e sombras, eles fazem parte dos combatentes mais temidos de toda a história. Geralmente guiados por uma forte disciplina interna (mas não necessariamente honra), esses solitários guerreiros preferem a noite e a calmaria para tratar de seus assuntos, evitando grandes conflitos barulhentos ao máximo."
        ],
        "joguese": "Você deseja misturar força física com agilidade, além de poder desempenhar ataques letais a distância e de perto. Você agirá como a principal mão que bate de seu grupo, sendo capaz de usar técnicas e armas para o auxiliar dentro de combate, desde espadas até machados enormes, shurikens, kunais, correntes e outras coisas. Quando um Ninja tem um objetivo, ele segue até o fim com ele e nada que entre em seu caminho o parará. Embora goste de se ocultar nas sombras, ninjas geralmente não optam pelo uso de magias ou ciências espirituais, mas não negam a ajuda de aparatos como bombas de fumaça disfarces especiais, camuflagens, etc.",
        "atributos": "Arma ou Tecnologia",
        "vantagens": [
            {
                "nome": "Acrobata Natural",
                "descricao": "Uma vez por episódio você pode jogar novamente uma rolagem nas perícias: Acrobacias ou Furtividade e usar o resultado que mais lhe agradar."
            },
            {
                "nome": "Bomba de Fumaça",
                "descricao": "Você possui sempre três bombas de fumaça pra usar por dia ou por sessão (o que demorar para acontecer mais) e no dia seguinte você refaz o estoque delas para essa quantidade máxima com alguns momentos de preparo breve. Uma bomba de fumaça pode ser usada em combate e fora dela, e quando usada cria uma enorme cortina de fumaça cinzenta/branca que oculta totalmente quem estiver lá dentro (incluindo você). Portanto devido ao seu treinamento nessas situações, você ganha um bônus de +4 em todos os testes de Furtividade enquanto a bomba de fumaça durar (uma ação após o uso). Esses bônus só se aplicam a você e não são válidos em situações que não sejam oportunas, como por exemplo, usar a bomba se alguém já estiver te vendo ou conseguir te achar facilmente. Usar a bomba não consome seu turno."
            }
        ]
    },
    {
        "nome": "Paladino",
        "descricao": [
            "Guiado pela justiça e vontade de esmagar o mal com suas próprias mãos, o aventureiro segue para o caminho da luz, similar aos clérigos e magos brancos, sendo guiado assim por uma entidade de sua escolha e principalmente: pela luz. Ao se tornar um Paladino, o personagem começa a dispor de várias armaduras e armamentos para destruir aqueles que atacam os fracos e impõem suas doutrinas malévolas contra uma população geral. O Paladino é muitas vezes referenciado como o arquétipo de herói, um clássico existente através dos tempos que combate as forças sombrias para a justiça, coragem e virtude triunfarem, criando uma era de paz. Paladinos geralmente possuem um espírito de compaixão com seus aliados mais valiosos e tendem a protegê-los não importa a situação. Buscam também a todo custo completar suas convicções para um bem maior a ponto de sacrificarem-se por isso se for preciso."
        ],
        "joguese": "Você deseja estar na frente do combate pronto para acabar com qualquer monstro que lhe atrapalhe, recebendo conselhos e ensinamentos seja de uma figura divina ou mesmo de suas próprias filosofias. O paladino age em combate como uma mistura de um poderoso guerreiro e um mago de suporte, sendo capaz de atacar inimigos com forças espirituais, força bruta e disciplina, também podendo providenciar todo o backup que o grupo necessitará.",
        "atributos": "Arma ou Magia",
        "vantagens": [
            {
                "nome": "Ordem dos Paladinos (Opcional)",
                "descricao": "Você faz parte da milenar ordem dos Paladinos. Se você precisar de ajuda, eles responderão com outros guardiões, mas você também pode ser chamado."
            },
            {
                "nome": "Vingador Sagrado",
                "descricao": "Durante o dia, criaturas e personagens malignos são claramente visíveis para você, não importa onde estejam escondidas. Sempre que outro personagem tentar mentir para você sob a luz do Sol, você obtém sucesso automático para perceber a mentira e seu sexto sentido te faz saber quando há maldade na espreita. Injustos não podem se esconder da sua ira."
            },
            {
                "nome": "Penitência",
                "descricao": "Qualquer Paladino que se corrompa ou se torne maligno perde todos os seus poderes e só pode recuperá-los se fizer penitência. Se fizer parte da Ordem, também será caçado."
            },
            {
                "nome": "Poder Resoluto",
                "descricao": "Uma vez por episódio e com o custo de 50% de seu MP total, você pode usar seu poder máximo e queimar sua essência na sua totalidade por um breve momento de força interna, aumentando todos os atributos de teste em +2 ponto e concedendo um bônus de +2 em todas as perícias enquanto esse efeito limitado durar."
            }
        ]
    },
    {
        "nome": "Pirata",
        "descricao": [
            "O aventureiro opta por um caminho onde seu espírito possa andar livremente e fazer o que bem entender, não tendo que prestar contas a ninguém ou trabalhar pra alguém, apenas para si mesmo. Assim, ele se torna um Pirata, uma figura notória em contos e fábulas do planeta que representam uma forma caótica e talvez até um pouco anarquista de vida. Piratas possuem uma gama variada de intenções e podem ser desde a mercenários contratados até mesmo bandidos por si próprios. Extremamente ligados com o oceano e a vida marítima, esses boêmios gostam de fazer seu próprio horário e de viver da melhor forma possível, sem ter que depender de ninguém. Embora possa vir a ter companheiros, Piratas raramente confiam em alguém a um ponto de entregar suas vidas e no geral são bem individualistas e egoístas, priorizando a si mesmos sobre tudo e todos. Não escondem sua paixão por aventuras, viagens e tesouros diversos, o que geralmente desencadeia diversos problemas e encrencas onde sempre estão metidos. Piratas não são bem vistos na maioria das sociedades e geralmente são tidos como “vagabundos” ou “marginais” que não fazem nada além de criar o caos."
        ],
        "joguese": "Você deseja lutar de uma forma em que você sempre seja o principal beneficiado. Um pirata geralmente não joga limpo e fará de tudo para vencer um confronto, apelando para técnicas desonestas, jogos emocionais/sociais, uso de armas de fogo e até mesmo jogar areia nos olhos de uma velhinha. Um pirata possui um bom balanço em combate e mistura ataques de distância com ataques físicos dependendo de qual o beneficiar mais em cada situação. Não costumam apelar para magias ou símbolos espirituais, sendo descrentes quanto a essas coisas.",
        "atributos": "Arma ou Tecnologia",
        "vantagens": [
            {
                "nome": "Presença Intimidadora",
                "descricao": "Você é um combatente impiedoso por natureza (geralmente) e isso faz com que as pessoas temam sua reputação. Você ganha leves descontos em estabelecimentos e vendedores que sejam coagidos por um teste de intimidação bem sucedido. Eles também podem providenciar informações extras que você busque com maior facilidade."
            },
            {
                "nome": "Vida de Corsário",
                "descricao": "Por ser um aventureiro de espírito livre e boêmio por natureza, você gosta muito de bares, tavernas e lugares do tipo onde pode comer e beber bem. Você sempre tem alguma amizade ou conexão nesses lugares, fazendo com que a estadia, o consumo de bebidas e comidas para si e seus aliados seja totalmente gratuita ou de preço muito reduzido do normal (à critério do mestre). Adicionalmente, ganhe +1 stamina toda vez que passar uma noite ou descansar completamente nesses lugares. Essa vantagem não implica numa conexão ou fama por que você é extrovertido ou algo do tipo, meramente significa que é conhecido / frequentador de tal lugar e por isso é bem-vindo."
            }
        ]
    },
    {
        "nome": "Pistoleiro",
        "descricao": [
            "Preferindo um caminho diferente, o Pistoleiro deixa de lado as armas clássicas de distância e parte para a tecnologia - Pistolas, metralhadoras, espingardas, revólveres e muitas outras armas de fogo que precisam somente de um toque para destruir uma vida. O Pistoleiro geralmente é uma figura solitária e determinada, que tem dificuldades em confiar em outras pessoas, não sendo muito de amizades. Sua figura histórica é marcada por tragédias que o levaram a essa vida, raramente mantendo sua integridade depois de tal escolha. A trilha da tecnologia e explosão o espera, mas é melhor que esteja bem equipado."
        ],
        "joguese": "Você deseja empunhar um vasto arsenal de armas de fogo, variando desde pistolas até metralhadoras e fuzis, empregando assim disparos e ataques mortais contra alvos sem que eles possam sequer reagir.  Um Pistoleiro é um rival potencialmente a altura de inimigos relativamente mais fortes que eles, sendo capaz de causar status, debilitar seus inimigos e ser uma confiável fonte de dano.",
        "atributos": "Arma ou Tecnologia",
        "vantagens": [
            {
                "nome": "Dedos Rápidos",
                "descricao": "Sempre que você iniciar combate com alguém (você tomou a primeira ação), você não rola os dados de iniciativa: você é o primeiro a agir na rodada e pronto."
            },
            {
                "nome": "Desde quando está aí?",
                "descricao": "O pistoleiro sempre fica quieto, então quando ele fala, as pessoas escutam. Se você realizar o seu primeiro teste social de uma cena logo depois de um aliado falhar em um teste social, você recebe um bônus de +4 na sua rolagem. Recomenda-se que mestres sejam lenientes nessa hora: se o seu aliado tinha acabado de jogar a situação toda num buraco e não deveria ter volta, você falar pode consertar tudo."
            }
        ]
    },
    {
        "nome": "Sabotador",
        "descricao": [
            "O Aventureiro se acostuma com a realidade crua das ruas e a dificuldade de conseguir sobreviver por si próprio, com isso, ele desenvolve técnicas e formas de luta especiais baseadas em brigas de rua, especializa-se em armas e também se torna o mestre dos disfarces. Possuindo características inigualáveis, o Sabotador se tornou uma figura  invisível e indetectável, através das eras, conseguindo copiar habilidades de seus inimigos e    também atrapalhá-los de diversas formas que conseguir, com trapaças e jogos especiais. Além disso tudo, representa uma ameaça natural pra  todos que prezam sua vida. A trilha da invisibilidade e  crueldade o espera, não tenha medo do desconhecido, ele deve ter medo de você."
        ],
        "joguese": "Você deseja focalizar seus esforços principalmente em atrapalhar seus inimigos e reduzir todas as suas capacidades (físicas, mentais, mágicas, etc). O Sabotador funciona mais como uma peça tática do que uma peça destrutiva dentro de combate ou fora dele, suas habilidades e estilo de jogo permitem que ele execute ataques no qual um inimigo nem imaginaria receber. Seus esforços são sempre voltados pra estratégias diversas que permitem ao próprio personagem e aos seus aliados tirarem o máximo de vantagem das fraquezas dos inimigos.",
        "atributos": "Arma",
        "vantagens": [
            {
                "nome": "Porta Dimensional",
                "descricao": "Uma vez por  episódio você tem a possibilidade de desenhar uma porta em qualquer superfície que permita desenhos, através de um giz branco ou algo do tipo. Ao desenhar uma segunda porta em outro lugar, você cria uma conexão entre os dois lugares com os desenhos, permitindo assim abri-las e viajar através de uma fenda temporal que conecta os locais. Embora tenha um longo alcance, o mestre dirá se ambos os locais foram conectado com sucesso ou não (locais muito distantes um dos outros tendem a ter conexões mais fracas). Qualquer pessoa pode usar esse mecanismo, entretanto, somente você pode abrir e destruir as portas (a não ser que o local onde ela fora desenhada, seja destruído também)."
            },
            {
                "nome": "Sorvedouro Fantasma",
                "descricao": "Uma vez por episódio você pode gastar 50% do seu MP e causar uma intensa desestabilização nas suas proximidades, desativando todos e qualquer aparato tecnológico, mágico e negando certos encantamentos ativos (não funciona dentro de combate). Embora possua uma grande força, esse efeito nem sempre pode funcionar com todos os tipos de máquinas ou energias mágicas."
            }
        ]
    },
    {
        "nome": "Samurai",
        "descricao": [
            "Forçado a um difícil caminho que nem sempre todos podem escolher livremente, o aventureiro incorpora o espírito do Samurai. Essas lendárias figuras existiram ao lado dos ninjas nas culturas orientais e possuem um grande destaque na cultura da mesma, representando guerreiros extremamente disciplinados, geralmente serenos e leais aos seus ideais, sejam esses bons ou não. Esses guerreiros empunham geralmente espadas também de origem oriental, que provam ser capaz de retalhar e fatiar corpos como se fossem uma faca cortando manteiga quente ao meio. Embora sejam solitários e prefiram sua própria companhia, os Samurais não tem dificuldade de fazer aliados e apreciam boas companhias numa luta. Quando desafiados ou testados, gostam de provar suas capacidades até o limite e talvez aceitem até a morte de bom grado se o inimigo for realmente poderoso."
        ],
        "joguese": "Você deseja fatiar seus inimigos sem piedade e fazer justiça com as próprias mãos, independente se a lei e o mundo estão do seu lado ou não. Um Samurai geralmente emprega táticas que misturam a brutalidade de ataques fortes com uma extrema agilidade, impedindo que inimigos tenham sequer tempo de reação. Eles possuem conhecimento médio de forças místicas e sobrenaturais, alguns até se especializam em tais técnicas, outros preferem continuar no caminho clássico do combate físico. Geralmente são mais focados em ataques ofensivos e defensivos, com um foco tático que sempre permite a eles ter uma boa perspectiva de suas chances em combate.",
        "atributos": "Arma",
        "vantagens": [
            {
                "nome": "Postura Rígida",
                "descricao": "Você possui a habilidade de reagir ao perigo antes mesmo dos seus sentidos normalmente permitirem. Com isso, sempre que você fosse ser pego de surpresa, você é tratado como se tivesse em uma categoria abaixo para testes relacionados à surpresa ou a reagir contra algo que acabou de aparecer ou acontecer. Em termos práticos, isso significa que para você, os testes relacionados aos eventos citados acima, são mais fáceis em uma categoria (da lista de dificuldades sugeridas, que pode ser encontrada no manual básico)."
            },
            {
                "nome": "Corte de Alta Frequência",
                "descricao": "Quando você realizar um teste para quebrar ou cortar algum objeto usando sua espada, adicione +4 à rolagem. Esse corte, diferentemente dos cortes normais, atravessa e abre caminho em metais ou materiais de extrema resistência que não poderiam ser cortados normalmente. Não pode ser usado em combate."
            }
        ]
    },
    {
        "nome": "Senhor das Bestas",
        "descricao": [
            "Nem sempre precisamos passar a vida sozinhos, não é? Com esse pensamento, o aventureiro que acaba tendo uma forte ligação com um companheiro animal/animais em geral ou mesmo até outras criaturas fantásticas naturais do planeta, acaba se tornando o Senhor das Bestas. Essa é uma figura de prestígio e tradição que existiu pelos tempos, servindo a impérios, pequenos exércitos ou até mesmo por conta própria. Esses espirituosos aventureiros que não se prendem num lugar fixo, viajam através do mundo conhecendo novas criaturas e fazendo novas amizades a fim de se tornar algo além de um ser vivo – se tornar alguém que faz e está em constante contato com a natureza. Um Senhor das Bestas geralmente tem um comportamento impulsivo e empático com outras pessoas e principalmente com animais, as vezes até se preocupando mais com seus aliados animalescos do que consigo mesmo. Embora prefiram companhias de animais, eles geralmente são leais e simpatizam com aqueles que querem proteger os mais fracos."
        ],
        "joguese": "Você deseja comandar seus companheiros animais como sua principal fonte de ataque, ordenando-os para desempenhar certas tarefas e atacar alvos específicos. Embora o Senhor das Bestas comande seus companheiros, ele também age em conjunto e é capaz de desferir golpes com chicotes, espadas e até armas a distância, combinando então suas forças com a de seu(s) fiel/fieis escudeiro(s). Além do combate, o Senhor das Bestas pode usar seus companheiros de diversas formas, como montarias, comandar corvos para escoltar uma área, colocar um lobo de vigia sobre um lugar, entre outros exemplos.",
        "atributos": "Liderança",
        "vantagens": [
            {
                "nome": "Domar Bestas",
                "descricao": "Você pode domar um animal com um teste bem sucedido de Natureza. Animais hostis precisam ser acalmados antes de serem domados."
            },
            {
                "nome": "Empatia Natural",
                "descricao": "Você consegue se comunicar com criaturas e animais, podendo compreender a linguagem delas, desde que tenham uma inteligência mínima. Os animais também geralmente compreendem seus sentimentos e motivos mais facilmente que outras pessoas."
            }
        ]
    },
    {
        "nome": "Mestre das Runas",
        "descricao": [
            "Símbolos são muito mais poderosos do que se acredita. O símbolo correto pode proteger você das piores maldições e te dar uma grande vantagem. O Mestre das Runas compreende a magia que símbolos carregam e se tornou um especialista no uso de runas para atingir seus objetivos.",
            "Com seus corpos cobertos por runas mágicas, o Mestre das Runas inicia os combates já com a vantagem. Suas runas que os protegem de magias externas também acabam por os fazer exímios caçadores de magos, que sempre são surpreendidos por um alvo que resiste a seus ataques.",
            "As histórias que forjam esses guerreiros são as mais variadas, com apenas uma constante: necessidade. O ato de forjar runas mágicas sobre o próprio corpo é traumatizante e capaz de levar aqueles com espíritos mais fracos à morte. O mestre das runas se entrega completamente à essa arte por precisar, seja por um senso de justiça ou por simplesmente ter sido escolhido para isso. O único fato que resta é que ele nunca mais será o mesmo."
        ],
        "joguese": "deseja ser alguém marcado para sempre pela dor de sua transformação, alguém que entende sobre magia tão profundamente que é capaz de utilizá-la através de símbolos que dobram o mundo à sua vontade.",
        "atributos": "Arma e Magia",
        "vantagens": [
            {
                "nome": "Corpo como um Templo",
                "descricao": "Runas espalhadas por todo o corpo do personagem, como tatuagens mágicas, o protegem de todo o mal que tenta invadir. O personagem recebe +3 em testes de resistência contra efeitos mágicos que tentem corromper seu corpo ou sua mente diretamente. O personagem não pode ter sua mente nem emoções lidas por efeitos mágicos. As runas entram na sua carne profundamente, mas se forem arrancadas de alguma forma esses efeitos são perdidos."
            },
            {
                "nome": "Preço do conhecimento",
                "descricao": "O traumatizante processo de colocar as runas no corpo do personagem o alterou para sempre. Como um sobrevivente de uma tortura que mataria muitos guerreiros altamente treinados, o personagem nunca mais será o mesmo. Personagens que tentam ler as emoções do mestre das runas por meios não mágicos recebem -3 em seus testes, pois a verdade é que o mestre das runas já não possui muitas. Isso deve ser tratado como uma desvantagem para o mestre das runas e o narrador pode decidir aplicar um redutor de até -3 em todos os testes sociais nos quais isso seja relevante."
            },
            {
                "nome": "Mais uma proteção",
                "descricao": "O mestre das runas pode aplicar suas runas a algum objeto, protegendo contra algum tipo de corrupção mágica específica. Essas runas são mais simples, não duram tanto e são destruídas já na primeira vez que lidarem com a maldição de que protegem, mas essa primeira maldição também será bloqueada completamente. Se aplicado a uma armadura, elas vão proteger o usuário da armadura. Quando aplicadas a outros itens, devem ser tratadas de forma apropriada, considerando-se que as runas atuam como um pára-raios. Tipos de corrupção mágica que podem ser escolhidas: veneno, invasão de mente. Em geral, qualquer coisa que fosse ser incluída em \"Corpo como um templo\" pode ser escolhida por \"Mais uma proteção\"."
            }
        ]
    }
].sort(function (a,b) {
    var na = a.nome.toUpperCase();
    var nb = b.nome.toUpperCase();
    if (na < nb) return -1;
    if (na > nb) return 1;
    return 0;
});