/**
 * 
 * Changelog
 * @type Array
 */
window.vantagensChangelog = [
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

/**
 * Tipos
 * @type Array
 */
window.tiposVant = [
    {
        id : "vantagens",
        nome : "Vantagens",
        pontos : "Preço",
        descricao : "Um personagem pode ter quantas vantagens puder pagar. Algumas raças concedem pontos de vantagens. Desvantagens concedem pontos para se comprar mais vantagens."
    },
    {
        id : 'desvantagens',
        nome : 'Desvantagens',
        pontos : 'Concede',
        descricao : 'Um personagem pode ter quantas desvantagens quiser, mas apenas as 4 maiores irão conceder pontos. Um personagem não pode ganhar mais do que 10 pontos de vantagens por desvantagens.'
    },
    {
        id : 'vantagensr',
        nome : "Vantagens Raciais",
        pontos : "Preço",
        descricao : "Essas vantagens funcionam como vantagens comuns, mas exigem que vocẽ faça parte de alguma raça.",
        requisito : "Exige raça"
    },
    {
        id : 'desvantagensr',
        nome : "Desvantagens Raciais",
        pontos : "Concede",
        descricao : "Essas vantagens funcionam como desvantagens comuns, mas exigem que vocẽ faça parte de alguma raça.",
        requisito : "Exige raça"
    }
];

/**
 * Vantagens!
 * @type Array
 */
window.vantagensArray = [
    {
        "nome": "Alerta Constante",
        "pontos": "3",
        "descricao": [
            "Receba +4 em quaisquer testes de Percepção para perceber uma emboscada ou algum tipo de cilada.",
            "Mesmo que você falhe em perceber um ataque surpresa, você ainda pode agir na rodada de Surpresa, sendo o último a realizar ação durante ela."
        ]
    },
    {
        "nome": "Aliado",
        "pontos": "2",
        "descricao": [
            "Um aliado ou amigo que te ajuda (e pode pedir ajuda também). Você pode ter NPCs em sua história e tudo, mas ele não será necessariamente relevante para a história se você não comprar essa vantagem."
        ]
    },
    {
        "nome": "Aliados",
        "pontos": "3 ou 5",
        "descricao": [
            "O personagem possui uma quantia de aliados NPCs (personagens do mestre) que estarão à disposição dele para ajudá-lo. Os aliados não podem entrar em combate direto e acompanhar o grupo toda hora, mas podem ajudar de alguma forma que o mestre decida. Os aliados possuem suas próprias vidas e nem sempre poderão acompanhar o personagem também.",
            "O jogador deve explicar o motivo desses aliados se unirem a ele. Você pode ter outros aliados na sua história de personagem, mas eles só serão obrigatoriamente relevantes à história através dessa vantagem. Ao fazer parte do grupo ou organização que os aliados são provenientes, o personagem está susceptível às vantagens e desvantagens que eles podem causar.",
            "3 Pontos: Um grupo/organização de tamanho mediano.",
            "5 Pontos: Um grupo/organização bem grande, importante e influente."
        ]
    },
    {
        "nome": "Alma Pura",
        "pontos": "3",
        "descricao": [
            "Você é imune aos efeitos de maldições, venenos, seu sangue é venenoso como água benta aos vampiros e você ainda é capaz de sentir a aproximação de objetos ou seres malignos (não exatamente onde estão, apenas que estão por perto). Sua presença é o suficiente para aterrorizar criaturas das trevas.",
            "Caso você se corrompa precisará pagar uma penitência para recuperar essa vantagem, que vai depender da gravidade da corrupção."
        ]
    },
    {
        "nome": "Alta Resistência a Dor",
        "pontos": "2 ou 4",
        "descricao": [
            "O personagem é capaz de resistir melhor quando dor é utilizada como uma arma contra ele. Em testes para resistir enquanto está sendo machucado ou torturado, o personagem recebe bônus de +2 em rolagens de Força de Vontade (FV). Pagando 4 pontos por essa vantagem, a vontade do personagem é inquebrável e o personagem nunca se rende à dor."
        ]
    },
    {
        "nome": "Anfíbio",
        "pontos": "1",
        "descricao": [
            "O personagem possui traços de criaturas aquáticas dentro de si (e não necessariamente na sua fisiologia externa). Permite que o personagem respire debaixo d’água."
        ]
    },
    {
        "nome": "Anti-machucados",
        "pontos": "1",
        "descricao": [
            "O personagem é muito vaidoso e treinou para não ganhar muitos ferimentos. Efetivamente, o personagem é capaz de evitar ataques até se cansar demais, e esses machucam muito mesmo. O personagem perde HP normalmente, mas na narrativa ele não é acertado em nenhum ataque que não entre em dois pontos: o ataque que o deixou com menos da metade do HP o terá acertado, e o ataque que o nocauteou o terá acertado.",
            "Essa vantagem é útil para histórias em que os machucados serão realistas, pois personagens irão se machucar seriamente com menos frequência e não passarão metade da história num hospital ou se recuperando. Independente do caso, o mestre pode considerar ataques que “erram” como raspões que causam machucados pequenos e irrelevantes, mas os golpes que “acertam” aos 50% e 0% HP devem ser maiores do que o normal, algo como um crítico."
        ]
    },
    {
        "nome": "Aparência",
        "pontos": "1 ou 3",
        "descricao": [
            "O personagem é belo e possui traços relativamente acima da média para a sua raça, encantando até aqueles que não simpatizam muito com determinada raça. Essa vantagem aumenta sua Carisma em 1 a 3 pontos quando considerando aparência. Isso significa que um personagem com Carisma 3 e Aparência 3 teria um valor de aparência final de 6.",
            "Esse bônus em carisma só é considerado em testes de Sedução, mas pode ser utilizado em outros lugares à escolha do mestre. Assuma que esse bônus não será adicionado em testes de Diplomacia, Manha ou Blefe quando Sedução não está sendo feita."
        ]
    },
    {
        "nome": "Atalho",
        "pontos": "2",
        "descricao": [
            "O personagem conhece atalhos diversos e mesmo que não seja familiarizado com o local em questão, consegue rastrear rotas alternativas com maior facilidade que os outros. Em testes de Percepção ou Rastreamento para encontrar um caminho alternativo ou atalho, adicione um bônus de +2 em suas rolagens."
        ]
    },
    {
        "nome": "Biblioteca",
        "pontos": "1 ou 3",
        "descricao": [
            "O personagem possui acesso a uma quantidade enorme de informação que quase sempre pode responder suas questões. Isso pode ser um lugar, uma coisa ou uma pessoa.",
            "1 Ponto: Sua biblioteca está em um lugar meio fixo, você só precisa ir até lá.",
            "3 Pontos: Sua biblioteca está sempre (ou quase sempre) ao seu lado.",
            "Utilizar a biblioteca é um Sucesso Automático para testes de conhecimento com dificuldade de até 10. A biblioteca é inútil para qualquer coisa além disso.",
            "Portanto, uma biblioteca tem muita informação até chegar ao ponto em que é uma informação secreta ou que realmente não está disponível para qualquer pessoa."
        ]
    },
    {
        "nome": "Boa Fama",
        "pontos": "2",
        "descricao": [
            "O personagem possui reconhecimento por onde passa seja por algum ato heróico ou um grande feito do passado que o envolva ou tenha presenciado. Você ganha reputação com NPCs mais facilmente. O jogador deve especificar o motivo da boa fama na história do personagem."
        ]
    },
    {
        "nome": "Bruto",
        "pontos": "1",
        "descricao": [
            "O personagem é naturalmente bruto, no sentido físico da coisa. Ao fazer uma demonstração qualquer de sua força (como esmagar um objeto, quebrar algo ou o que for), você pode usar sua Força (FOR) como modificador em testes para Intimidação, ao invés de Carisma (CAR)."
        ]
    },
    {
        "nome": "Bugigangas",
        "pontos": "5",
        "descricao": [
            "Até uma vez por sessão, você pode puxar uma pequena maquina que você fez/achou/conseguiu e utilizar ela para a situação. Obviamente, se você foi livrado de todas suas possessões, essa máquina não estaria disponível.",
            "Essa máquina deve fazer uma única coisa bem simples e só funciona uma vez, quebrando logo em seguida. Exemplos: uma pequena bomba capaz de derrubar paredes, um telefone especial capaz de ultrapassar quaisquer bloqueios, botas adesivas que o permitem andar pelo teto por um curto período."
        ]
    },
    {
        "nome": "Calmo",
        "pontos": "1",
        "descricao": [
            "O personagem quase nunca sai do controle, sempre permanece calmo. Isso o auxilia muito em situação de desespero, que levariam a penalidades. O personagem apenas não as sofre."
        ]
    },
    {
        "nome": "Ciência da Informação",
        "pontos": "1",
        "descricao": [
            "Você trata contatos e informação como um produto, comprando e vendendo com cuidado. Arquivando, calculando e pensando em tudo como se fosse um pesquisador.",
            "Você pode utilizar Inteligência no lugar de Carisma para testes com a perícia Manha."
        ]
    },
    {
        "nome": "Conhecido Interessante",
        "pontos": "0",
        "descricao": [
            "Você tem ou teve contato de algum tipo com algum personagem importante de Arcos / campanhas anteriores e pode desenvolver isso de alguma forma na sua história.",
            "Envolver um personagem antigo em sua história muito provavelmente vai exigir aprovação do mestre e/ou do criador daquele personagem, dependendo de como você o incluiu - é importante garantir que o personagem não tome um rumo não desejado."
        ]
    },
    {
        "nome": "Contatos",
        "pontos": "2 ou 3",
        "descricao": [
            "O personagem possui um contato especial que está disposto a ajudá-lo de alguma forma em eventos esporádicos desde que também seja ajudado em certos momentos. O jogador deve especificar quem é o contato do personagem e porque esse contato o ajuda, assim como a natureza da ajuda prestada.",
            "2 pontos: 1 contato",
            "3 pontos: até 2 contatos"
        ]
    },
    {
        "nome": "Controle Emocional",
        "pontos": "3",
        "descricao": [
            "Por algum motivo, você pode controlar e inserir emoções em outras pessoas. Com um leve esforço, você pode deixar alguém realmente feliz ou realmente triste. Utilizar isso muda as variáveis e pode trazer certos testes sociais em seu favor... Ou ajudar uma situação desejada a acontecer.",
            "Você deve realizar um teste de 1d6 + 3 contra 4 + Força de Vontade do alvo. Uma falha significa que ele percebeu algo tentando mexer com a cabeça dele e conseguiu resistir. Depois de uma falha, tentativas novas não são possíveis."
        ]
    },
    {
        "nome": "Corajoso",
        "pontos": "1 a 3",
        "descricao": [
            "O personagem ganha um bônus de +1 nos testes de medo e insanidade. Se gastar mais pontos de vantagem, ganha +1 para cada ponto gasto, até um máximo de +3 (3 pontos)."
        ]
    },
    {
        "nome": "Defesa Mental",
        "pontos": "1 a 3",
        "descricao": [
            "O personagem possui uma alta resistência mental contra certos ataques psíquicos ou mágicos. Isso funciona como um bônus adicionado a testes de Força de Vontade quando sendo atacado por algo assim e o tamanho do bônus varia de acordo com a quantidade de pontos gasta.",
            "1 ponto: Recebe um bônus de +1 no testes contra ataques mentais.",
            "2 pontos: Recebe um bônus de +2 no testes contra ataques mentais.",
            "3 pontos: Recebe um bônus de  +3 no testes contra ataques mentais."
        ]
    },
    {
        "nome": "Defesas Naturais",
        "pontos": "1",
        "descricao": [
            "Através de treinamento, tendo enfrentado usuários desse tipo de poder, algum poder mágico ou até mesmo algo que simplesmente faz parte do seu corpo, você possui uma defesa elevada contra certos tipos de ataque. Escolha um atributo de dano. O atributo de dano escolhido está sempre protegido, mesmo que você não esteja usando armaduras. Contra ataques de um atributo de dano protegido, você recebe +1 RD Específica para a sua defesa contra ele. Um atributo não pode ser protegido várias vezes. Defesas naturais pode ser comprada várias vezes, sempre para atributos de dano diferentes."
        ]
    },
    {
        "nome": "Deus Grego",
        "pontos": "1 a 3",
        "descricao": [
            "O personagem possui um corpo perfeito, bem acima da média para sua raça.",
            "1 Ponto: Você pode usar Constituição no lugar de Carisma quando se tratando de Aparência. Isso também vale para testes de sedução.",
            "3 Pontos: Mesma coisa que o de cima, mas você usa (Constituição + 2) ao invés de Constituição. De novo, apenas para questões de aparência."
        ]
    },
    {
        "nome": "Direção Absoluta",
        "pontos": "2",
        "descricao": [
            "O personagem nunca se perde, como se tivesse uma bússola embutida no cérebro, sempre sabe onde é o norte, voltar pelo caminho que fez, etc. O personagem ganha sucesso automático em testes para encontrar o caminho ou direção de até dificuldade 10, recebendo um +2 em testes com dificuldades maiores."
        ]
    },
    {
        "nome": "Disposofobia",
        "pontos": "2",
        "descricao": [
            "Você carrega um monte de tranqueiras aparentemente inúteis, mas que podem ajudar o grupo em alguma situação (lápis, caderno, pilhas, lanterna, pá, corda, sinos ou outros objetos que ninguém lembrou de pegar). Quando necessário, você pode puxar um desses itens. Essa vantagem não funciona se vilões limparam os personagens de seus pertences.",
            "O mestre pode restringir essa Vantagem caso o jogador tente abusar dela."
        ]
    },
    {
        "nome": "Duro de Matar",
        "pontos": "3",
        "descricao": [
            "Você é mais resistente ou tem uma força de vontade elevada que o faz continuar levantando quando outros já teriam desistido.",
            "Aumente seu HP Máximo em 2 pontos."
        ]
    },
    {
        "nome": "Empatia com Animais",
        "pontos": "3",
        "descricao": [
            "Animais selvagens não atacam o personagem a menos que ele os ataque primeiro e ele pode tentar controlar um animal selvagem com um teste de Natureza. Recebe +2 em testes que envolvam lidar com animais diversos."
        ]
    },
    {
        "nome": "Equipamento Épico",
        "pontos": "X Pontos – Ver descrição",
        "descricao": [
            "Você possui uma peça de equipamento poderosa para você e sua história, além de ter um significado grande para algum acontecimento ou para alguém. Esses equipamentos não mudam de nível, mas são sempre de nível 2 (portanto, possuem 2 slots de addons) e são criados por você. Esses equipamentos não mudam de nível. Você pode comprar Equipamento Épico várias vezes, mas ela não se acumula no mesmo equipamento.",
            "O custo dessa vantagem varia com o tipo do equipamento criado:",
            "1 Ponto: Arma Defensiva",
            "1 Ponto: Arma de uma mão",
            "2 Pontos: Arma de duas mãos",
            "2 Pontos: Armadura.",
            "Você pode pegar essa vantagem várias vezes, mas para equipamentos diferentes."
        ]
    },
    {
        "nome": "Equipamento Lendário",
        "pontos": "X Pontos – Ver descrição",
        "descricao": [
            "Você possui uma peça de equipamento incrivelmente rara e poderosa. Esse equipamento sempre será de nível 3 (portanto, possui 3 slots de addons)  e são criados por você. Esses equipamentos não mudam de nível. Você pode comprar Equipamento Lendário várias vezes, mas ela não se acumula no mesmo equipamento.",
            "O custo dessa vantagem varia com o tipo do equipamento criado:",
            "2 Ponto: Arma Defensiva",
            "2 Ponto: Arma de uma mão",
            "4 Pontos: Arma de Duas Mãos",
            "4 Pontos: Armadura",
            "Você pode pegar essa vantagem várias vezes, mas para equipamentos diferentes"
        ]
    },
    {
        "nome": "Equipamento de Valor Emocional",
        "pontos": "X Pontos – Ver descrição",
        "descricao": [
            "Você possui uma peça de equipamento muito importante para você e sua história. Ela pode não ser a melhor de todas, mas você vai se esforçar e fazer ela funcionar. Esses equipamentos não mudam de nível. Você pode comprar Equipamento de Valor Emocional várias vezes, mas os equipamentos ganhos ainda serão nível 1 (portanto, possui 1 slot de addons).",
            "O custo dessa vantagem varia com o tipo do equipamento criado:",
            "1 Ponto: Arma Defensiva + Arma de uma mão",
            "1 Ponto: Duas armas de uma mão",
            "1 Pontos: Arma de duas mãos",
            "1 Pontos: Armadura.",
            "Você pode pegar essa vantagem várias vezes, mas para equipamentos diferentes."
        ]
    },
    {
        "nome": "Equipamento Natural",
        "pontos": "1",
        "descricao": [
            "Sua espécie (ou você em particular), o que precisa ser explicado, possui defesas naturais que te ajudam em combate. Para cada vez que comprar essa vantagem, o seu personagem ganha equipamentos que fazem parte do seu corpo, significando que só podem ser removidos ao ser desmembrado.",
            "Os equipamentos criados por essa vantagem são sempre de nível 1. Essa vantagem pode ser comprada várias vezes.  Equipamentos ganhos (apenas um):",
            "Uma arma de duas mãos",
            "Duas armas de uma mão",
            "Uma arma de uma mão e uma defensiva",
            "Uma armadura"
        ]
    },
    {
        "nome": "Equipamento X",
        "pontos": "1",
        "descricao": [
            "Você possui equipamentos que fazem parte do seu corpo (você pode fazer uma descrição para encaixar com isso). A vantagem se resume a nunca estar desarmado.",
            "Você pode escolher qualquer quantidade de equipamentos que você tenha na sua ficha no momento de criação dela, podendo ser equipamentos comprados na loja ou equipamentos criados com vantagem. Esses equipamentos passam a fazer parte do corpo de seu personagem e não podem ser desequipados sem desmembrá-lo.",
            "Você pode (e deve) alterar as descrições desses \"equipamentos\" para algo que encaixe com essa vantagem. Um personagem orgânico provavelmente teria armas naturais. Um personagem robô talvez simplesmente tivesse a arma encaixada ali. Fazer upgrades nessas armas durante a história pode ser algo muito traumático para o personagem caso o equipamento seja uma arma natural dele. É recomendável que mestres explorem uma situação assim.",
            "Exemplo: Cria-se uma arma de duas mãos para Magia com Equipamento de Valor Sentimental e usa-se Equipamento X para transformá-la em uma Antena que atira raios. O custo final das duas vantagens juntas é 2.",
            "Exemplo 2: Criam-se duas armas para o atributo Arma com Equipamento Lendário e usa-se Equipamento X para transformá-las em duas garras que saem dos punhos. O custo final das duas vantagens juntas é 5."
        ]
    },
    {
        "nome": "Espírito Inabalável",
        "pontos": "5",
        "descricao": [
            "Nada te põe para baixo! Aumente sua Força de Vontade em +1. Toda vez que você dormir, você começa o dia com +1 ponto de Stamina além do seu limite normal.",
            "Essa vantagem também aumenta a quantidade de Stamina que você tem disponível em PVP."
        ]
    },
    {
        "nome": "Estômago de Ferro",
        "pontos": "1",
        "descricao": [
            "Personagem é imune a venenos, a intoxicação ou qualquer tipo de dano via comida."
        ]
    },
    {
        "nome": "Estranho Misterioso",
        "pontos": "3",
        "descricao": [
            "O personagem é ajudado eventualmente por um misterioso estranho que nunca se revela. Essa ajuda pode ser de qualquer tipo e a qualquer hora. Diferentemente da vantagem \"aliado\", um estranho misterioso não pode ser consultado, achado ou revelado."
        ]
    },
    {
        "nome": "Estranho no Ninho",
        "pontos": "1",
        "descricao": [
            "Seu personagem cresceu no meio de uma cultura incomum para a sua raça. O personagem aprende a língua de uma outra raça (desde que essa tenha uma língua básica a ser aprendida - verifique na página de cada raça para ver qual língua cada raça possui acesso)."
        ]
    },
    {
        "nome": "Eterno Aprendiz",
        "pontos": "3",
        "descricao": [
            "Você entende a importância do aprendizado e presta mais atenção em tudo que você faz. Durante a criação da ficha, você ganha 2 pontos extras para distribuir em Perícias. Além disso, a cada nível você ganha 1 ponto extra para distribuir em Perícias."
        ]
    },
    {
        "nome": "Familiares",
        "pontos": "2",
        "descricao": [
            "O personagem possui uma pequena criatura (animal, espírito, capetinha, etc.) inteligente, que o segue para todos os lugares, entende comandos simples e pode levar mensagens por ele. Escolha até 2 atributos-teste. O familiar é capaz de realizar tarefas simples em relação a esses atributos.",
            "Coisas como \"Força\" permitindo que ele mova caixas e \"Agilidade\" que ele passe despercebido."
        ]
    },
    {
        "nome": "Flexibilidade",
        "pontos": "1",
        "descricao": [
            "O personagem ganha +2 nos testes para escapar de agarrões, entrar em locais estreitos, e fazer tarefas onde a flexibilidade conta."
        ]
    },
    {
        "nome": "Força Descomunal",
        "pontos": "3",
        "descricao": [
            "Você tem mais força do que o normal. Aumente sua força em +1, podendo ultrapassar o limite de 5 iniciais."
        ]
    },
    {
        "nome": "Formas Múltiplas",
        "pontos": "2",
        "descricao": [
            "O personagem possui várias formas diferentes que alteram totalmente como ele luta. Para cada vez que essa vantagem for comprada, crie uma segunda tabela de seus atributos de combate, podendo alterar todos os seus gastos de Experiência (EXP). Essa segunda ficha irá subir de nível e ganhar experiência junto da sua principal.",
            "Você deve dividir todas as suas técnicas entre as fichas criadas. Uma técnica só pode ser usada pela forma à qual foi entregue. Em todos os níveis pares, você não ganha Pontos de Habilidade. Ao invés disso, você ganha a nova técnica do nível uma vez para cada uma de suas formas. Essas técnicas devem ficar uma com cada forma obrigatoriamente.",
            "Trocar de forma consome 4 MP e é uma ação grátis que deve ser realizada durante o seu turno."
        ]
    },
    {
        "nome": "Hardcore",
        "pontos": "0",
        "descricao": [
            "O personagem adora combates 1 a 1 e também não interfere em combates 1 a 1 de seus aliados, quando possível. Em casos de inimigos muito, muito fortes ou com vários combatentes, uma luta em equipe é aceitável.",
            "Itens de cura e habilidades de cura não recuperam HP, apesar de ainda ajudarem com ferimentos. O personagem só recupera HP quando o mestre diz que ele recuperou. Personagens devem alternar quem enfrenta inimigos para conseguirem vencer os desafios sem morrer.",
            "No fim do episódio, você ganha +2 pontos extras de Experiência. Você não perde EXP alguma pelas lutas em que não participou.",
            "Essa vantagem só pode ser comprada se todos os outros jogadores também a comprarem."
        ]
    },
    {
        "nome": "Herdeiro",
        "pontos": "1,3 ou 5",
        "descricao": [
            "Você é herdeiro de alguma fortuna de algum tipo ou origem. Isso te faz iniciar a história com um pouco mais de dinheiro do que o normal. Você só pode comprar Herdeiro uma vez. O motivo e origem da herança devem ser explicados na história do personagem.",
            "1 ponto: Comece a história com 750 moedas ao invés de 500.",
            "3 pontos: Comece a história com 1000 moedas ao invés de 500.",
            "5 pontos: Comece a história com 1500 moedas ao invés de 500."
        ]
    },
    {
        "nome": "Identidade Alternativa",
        "pontos": "2",
        "descricao": [
            "O personagem possui uma ou mais identidades alternativas, completamente legais."
        ]
    },
    {
        "nome": "Imortalidade Avançada",
        "pontos": "4",
        "descricao": [
            "Caso o personagem morra completamente, ele retorna à vida um tempo depois, regenerando completamente o seu corpo (mesmo se for destruído). Para um personagem ser imortal, o mestre e o jogador deverão definir qual é a única coisa que pode matar completamente o personagem, o poder imortalidade tem sempre que ter algum tipo de ponto fraco. Por exemplo, decapitação com Vampiros, balas de prata para Lobisomens, etc."
        ]
    },
    {
        "nome": "Imortalidade Simples",
        "pontos": "2",
        "descricao": [
            "O personagem não envelhece, nunca morrendo de causas naturais. O personagem ainda pode morrer de outras maneiras normais, ele é apenas imune aos efeitos do tempo."
        ]
    },
    {
        "nome": "Imunidade à Doença",
        "pontos": "1",
        "descricao": [
            "O personagem é imune a qualquer tipo de doença, de nível de poder humano e sobre-humano."
        ]
    },
    {
        "nome": "Imunidade à Veneno",
        "pontos": "1",
        "descricao": [
            "O personagem é imune a qualquer tipo de veneno, de nível de poder humano e sobre-humano."
        ]
    },
    {
        "nome": "Imunidade Jurídica",
        "pontos": "2",
        "descricao": [
            "Por algum motivo o personagem não pode ser julgado criminalmente pela justiça comum."
        ]
    },
    {
        "nome": "Invisibilidade a Maquinas",
        "pontos": "2",
        "descricao": [
            "O personagem não pode ter sua imagem capturada por nenhum tipo de aparelho ou máquina, não aparece em vídeo nem em fotos."
        ]
    },
    {
        "nome": "Leitura Labial",
        "pontos": "2",
        "descricao": [
            "Seja por capacidade natural ou uma incrível paciência e treino, você possui a habilidade de entender o que outras pessoas falam mesmo sem ouví-los, apenas pelo fato de observar como seus lábios se movem à distância. Dessa forma, se você tiver em uma situação onde não pode ouvir o que alguma pessoa está dizendo em até 8 metros de distância de você, faça um teste de Percepção contra uma dificuldade colocada pelo mestre para entender sobre o quê essa pessoa está falando. Você ganha um bônus de +1 nesse teste para cada ponto extra comprado nesta vantagem (além do custo básico de 2), até ela custar um máximo de 4 pontos."
        ]
    },
    {
        "nome": "Língua de Prata",
        "pontos": "3",
        "descricao": [
            "O personagem tem um dom em situações sociais, sempre sabendo exatamente como se comportar e como falar. Aumente sua carisma em +1, podendo ultrapassar o limite inicial de 5."
        ]
    },
    {
        "nome": "Magia da Amizade",
        "pontos": "2",
        "descricao": [
            "Enquanto você for a última esperança de seus amigos, você não pode ser parado. Você não é nocauteado ao atingir 0 de HP, ao invés disso você continua de pé e lutando até alcançar -10 HP, momento no qual você morre, sem direito a testes.",
            "Se seu HP for menor do que 1 quando você completar seu objetivo, você despenca e faz os testes de morte normalmente. Não funciona em eventos de batalha pura onde a morte não significa nada."
        ]
    },
    {
        "nome": "Mais do Mesmo",
        "pontos": "1",
        "descricao": [
            "Testes de sedução executados por personagens do sexo oposto falham automaticamente contra você. Testes de sedução executados por personagens do mesmo sexo tem chances de sucesso comuns contra você."
        ]
    },
    {
        "nome": "Melhor de ambos os lados",
        "pontos": "4",
        "descricao": [
            "Escolha uma raça primária e uma raça secundária. Você é uma mistura das duas raças, contendo partes positivas da segunda raça em relação à primeira. Você recebe todos os bônus da primeira raça normalmente. Escolha um dos atributos raciais que a segunda raça fornecia: você passa a receber esse bônus. Além disso, você passa a poder comprar as Vantagens e Desvantagens Raciais oferecidas para a segunda raça. (Nota: Quando \"Humano\" é escolhido como raça secundária, você recebe +2 pontos de vantagem ao invés de um bônus em atributo-teste, efetivamente reduzindo o custo dessa vantagem para 2). Não é compatível com a desvantagem \"Pior de ambos os lados\" nem com a raça Changeling."
        ]
    },
    {
        "nome": "Mente Rápida",
        "pontos": "3",
        "descricao": [
            "Seu personagem sempre teve uma facilidade com pensamento lógico e com aprender e memorizar coisas importantes. Aumente sua Inteligência em +1, podendo ultrapassar o limite inicial de 5."
        ]
    },
    {
        "nome": "Mente Veloz",
        "pontos": "3",
        "descricao": [
            "Seu personagem é capaz de pensar muito mais rápido que outras pessoas, independente da sua inteligência. O efeito disso é que ele é capaz de tomar decisões complexas mesmo em pouco tempo sem afetar seu julgamento. Isso significa que você, o jogador, não precisa responder rapidamente à situação (como mestres realizando contagens de tempo) e você pode pensar um pouco para tomar a melhor decisão, sem tempo passar na história."
        ]
    },
    {
        "nome": "Mentor",
        "pontos": "2",
        "descricao": [
            "O personagem tem alguém que lhe dá conselhos. Alguém que ensinou a ele o que sabe, e pode ensinar mais. O jogador deve especificar quem é o mentor do personagem, como ele é e por que se tornou o mentor."
        ]
    },
    {
        "nome": "Mentor Especial",
        "pontos": "0",
        "descricao": [
            "Exatamente como a vantagem Mentor, mas seu mentor é um personagem importante de um dos arcos ou histórias anteriores.",
            "Envolver um personagem antigo em sua história muito provavelmente vai exigir aprovação do mestre e/ou do criador daquele personagem, dependendo de como você o incluiu - é importante garantir que o personagem não tome um rumo não desejado."
        ]
    },
    {
        "nome": "Memória Eidética",
        "pontos": "2",
        "descricao": [
            "O personagem possui uma memória fotográfica, e se lembra de tudo que conseguiu botar os olhos na vida. O personagem nunca esquece de nada e pode retornar mentalmente a algum lugar em que esteve para procurar mais informações. Exemplo: ao descobrir que o Rei era na verdade um vilão, o personagem retorna ao quarto do rei mentalmente e faz um teste de percepção procurando algo fora de lugar... E aí ele consegue se lembrar de algo que estava em cima da mesa e que na hora não tinha peso, mas agora muda tudo."
        ]
    },
    {
        "nome": "Muralha",
        "pontos": "3",
        "descricao": [
            "Você possui um corpo realmente forte e resistente. Aumente sua constituição em +1, podendo ultrapassar o limite inicial de 5."
        ]
    },
    {
        "nome": "Não comer / beber",
        "pontos": "1 a 3",
        "descricao": [
            "O personagem não necessita comer ou beber para sobreviver. Ele sustenta seu corpo por algum outro meio (luz solar, magia, tecnologia, etc.). Ele não perde MP por falta de comida (perda normal de 8 MP por dia, não recuperáveis a não ser com alimentação, por falta de comida e 16 MP por dia, não recuperáveis a não ser com água, por falta de água). O jogador deve especificar o porquê o personagem não precisa comer ou beber e dizer qual tipo de alimentação alternativa usa. Se você não precisa, mas pode comer, você pode ganhar os bônus normais de alimentação comendo.",
            "1 Ponto: Você não precisa se alimentar, não ganhando as vantagens de alimentação normais.",
            "2 Pontos: Você recebe +1 Stamina depois de uma noite de sono. Isso é equivalente a um personagem normal se alimentar e não acumula esses pontos.",
            "3 Pontos: Você recebe +2 Stamina depois de uma noite de sono. Isso é equivalente a um personagem normal se alimentar e não acumula esses pontos."
        ]
    },
    {
        "nome": "Não dorme",
        "pontos": "1",
        "descricao": [
            "O personagem não necessita dormir, recebe os efeitos de dormir depois de algumas horas de descanso ou meditando e não necessita realmente dormir."
        ]
    },
    {
        "nome": "Não precisa respirar",
        "pontos": "2",
        "descricao": [
            "O personagem não tem necessidade de oxigênio para viver, por algum motivo genético, cibernético, sobrenatural."
        ]
    },
    {
        "nome": "Oráculo",
        "pontos": "3",
        "descricao": [
            "Em certos momentos, escolhidos pelo Mestre, ele pode dizer que você teve uma rápida visão sobre uma situação. Você também podem tentar se concentrar com calma para ter essas visões (não necessariamente claras).",
            "Os testes para prever algo são feitos com 1d10 + Sabedoria + (1/2 Emprego [Vidente]), e a dificuldade varia de acordo com o que se está tentando prever"
        ]
    },
    {
        "nome": "Parrudo",
        "pontos": "1",
        "descricao": [
            "Seu personagem possui uma larga constituição física, acima do normal para a sua raça ou um pouco mais reforçada do que o normal. As pessoas tendem a se intimidar pela sua constituição e resistência geral, permitindo que você use sua Constituição (CON) como modificador em testes de Intimidação, ao invés de Carisma (CAR)."
        ]
    },
    {
        "nome": "Paz Interior",
        "pontos": "3",
        "descricao": [
            "Seu personagem alcançou níveis incomuns de autoconhecimento e se tornou muito sábio no processo. Aumente sua Sabedoria em +1, podendo ultrapassar o limite inicial de 5."
        ]
    },
    {
        "nome": "Pequeno",
        "pontos": "3",
        "descricao": [
            "Seu personagem é menor que os padrões de sua raça (defina nas informações da ficha o quanto), por isso, ele recebe um bônus de +2 em rolagens onde seu tamanho seja relevante para executar alguma ação."
        ]
    },
    {
        "nome": "Princesa para sempre",
        "pontos": "1",
        "descricao": [
            "O universo conspira a seu favor e você nunca deixa de estar apresentável, não importa o que aconteça. Mesmo que você passe um mês vivendo no meio do pântano sem tomar banho, a sujeira vai se arrumar de um jeito que apenas te faz parecer mais forte, sem realmente afetar sua aparência. Machucados e outros também acabam funcionando assim, seu rosto não pode ficar completamente inchado."
        ]
    },
    {
        "nome": "Protegido Indefeso",
        "pontos": "2",
        "descricao": [
            "Seu personagem é o protegido indefeso de alguém mais forte. Isso significa que seu personagem não é realmente capaz de lutar. Essa vantagem conta como Aparência Inofensiva também.",
            "Seu personagem não participa de lutas e não possui nenhuma habilidade de luta. Ao invés disso, crie sua ficha de combate para alguma outra coisa (como um robô que luta por seu personagem, um animal ou até mesmo outra pessoa). Essa pessoa lutará por você. É até possível utilizar essa vantagem para ter uma forma alternativa para combate!",
            "Qualquer vantagem ou desvantagem que você compre que se ligue ao combate passará a valer para essa pessoa. O mesmo pode valer para seu arquétipo, se quiser. O que essa vantagem faz é criar um muro entre a ficha de combate e a ficha fora de combate."
        ]
    },
    {
        "nome": "Rede Mundial de X",
        "pontos": "2",
        "descricao": [
            "Escolha um ou dois atributos-teste e uma atividade relacionada a eles (como Rede Mundial de Detetives para Inteligência e Sabedoria). Seu personagem faz parte de um grupo altamente seletivo de especialistas nessa área.",
            "Seu personagem pode pedir ajuda ao grupo, mas dificilmente irá receber uma ajuda direta e em pessoa. O grupo pode ajudar com dicas, suporte à distância e, principalmente, abrir portas para você.",
            "Requerimentos: Caso apenas um atributo-teste seja escolhido, você deve possuir um nível de 4 ou mais nele par fazer parte da Rede. Caso dois sejam escolhidos, você precisa de 3 ou mais neles para fazer parte da rede."
        ]
    },
    {
        "nome": "Reflexos Velozes",
        "pontos": "3",
        "descricao": [
            "Seu personagem é capaz de reagir rápido e com precisão. Aumente sua Agilidade em +1, podendo ultrapassar o limite inicial de 5."
        ]
    },
    {
        "nome": "Reflexos em Combate",
        "pontos": "3",
        "descricao": [
            "Seu personagem está sempre atento e pronto para reagir para problemas.",
            "Aumente suas rolagens de iniciativa em +2."
        ]
    },
    {
        "nome": "Rico",
        "pontos": "2 ou 4",
        "descricao": [
            "Seu personagem tem acesso a uma quantidade enorme de dinheiro. Por questões de balanceamento, você não pode gastar esse dinheiro em Itens utilizáveis em combate nem para seus aliados. Esse dinheiro se torna abstrato e não é anotado na sua ficha (o Dinheiro da ficha você pode gastar normalmente).",
            "2 pontos: Você tem dinheiro o suficiente para pagar qualquer coisa de custo normal durante a história, como hotéis, comida, etc.",
            "4 Pontos: Você é realmente podre de rico. Pode ter casas em várias cidades e é capaz de suprir praticamente qualquer gasto que ocorra dentro da história sem precisar se esforçar muito."
        ]
    },
    {
        "nome": "Sangue Frio",
        "pontos": "1 ou 3",
        "descricao": [
            "O corpo do personagem não regula sua temperatura, então o personagem não se sente desconfortável em temperaturas \"ruins\" e também não precisa comer tanto.",
            "Por um ponto, o personagem é capaz de sobreviver a temperaturas baixas e temperaturas altas, contanto que não esteja frio a ponto de o congelar por dentro nem de ferver seus líquidos, casos nos quais ele morre. É importante perceber que você não possui defesas além disso: se estiver frio o suficiente para te matar e ninguém te esquentar, você não pode se esquentar independente de quantas blusas utilize, da mesma forma, se o ambiente for quente o suficiente para te cozinhar por dentro, você não tem como se proteger sem simplesmente sair daquele lugar.",
            "Entretanto, se as temperaturas estiverem dentro dos seus limites de sobrevivência, você obtém sucesso automático em testes para \"resistir\" elas. Você aguenta temperaturas maiores e mais baixas do que o normal, mas se passar do limite você falha automaticamente em testes para resistir. Por 3 pontos, o seu corpo resiste a temperaturas extremamente baixas ou excessivamente altas, efetivamente o dando sucesso automático em testes de resistir temperatura que sejam possíveis de se sobreviver.",
            "No caso, se alguém com Constituição 5 poderia resistir a alguma temperatura num resultado máximo, alguém com Sangue Frio 3 resiste com sucesso automático."
        ]
    },
    {
        "nome": "Segunda Chance",
        "pontos": "3",
        "descricao": [
            "Uma vez por sessão ou dia (o que demorar mais), o personagem pode realizar um teste de sorte em um rolamento com o qual não está satisfeito. Nesse caso, ele faz o mesmo teste novamente. O novo resultado deve ser usado e não pode ser refeito através de novos testes de sorte, mesmo que seja menor do que o primeiro resultado. Não pode ser utilizado em combate contra outros jogadores."
        ]
    },
    {
        "nome": "Segunda Raça - Morto Vivo",
        "pontos": "2",
        "descricao": [
            "O personagem se torna um temível morto-vivo. Claro, cada caso é um caso e como isso irá afetar o personagem e sua 'vida' pode variar muito. O jogador pode decidir não incluir qualquer uma (ou todas) das vantagens e desvantagens à seguir, alterando o custo final da vantagem Morto-Vivo. Some o custo/redutor de todas as vantagens/desvantagens escolhidas ao custo inicial da vantagem morto-vivo para encontrar o custo final. O custo final não pode ser inferior a 0.",
            "As desvantagens escolhidas não contam para o limite de 4 desvantagens por ficha. Tanto as vantagens quanto as desvantagens escolhidas passam a fazer parte de 'Segunda Raça - Morto-Vivo' e só existem dentro dela, por mais que possam funcionar exatamente como as normais.",
            "+0 - Não Comer/Beber: O morto-vivo não pode nem precisa se alimentar/beber. O personagem não é capaz de se alimentar de forma alguma e nunca recebe stamina bônus através de alimentação.",
            "+0 - Morto: Você já está morto. Seus órgãos internos já não funcionam e você não precisa se preocupar tanto com temperatura. Funciona como a vantagem \"Sangue Frio\", com a exceção que você não tem nenhuma defesa natural contra temperaturas. Se ficar frio demais, você congela e não consegue mais se mover. Se ficar quente demais você cozinha, o que deve ser bem desagradável.",
            "+1 - Não Dorme: O morto-vivo não precisa dormir.",
            "+1 - Não Respira: O morto-vivo não precisa respirar.",
            "+1 - Imortalidade Simples: O morto-vivo não é afetado pelo passar do tempo, nunca envelhecendo.",
            "+3 - Imortalidade Avançada: Funciona exatamente como a vantagem Imortalidade Avançada.",
            "+1 - Imunidade a veneno: Funciona exatamente como a vantagem Imunidade a Veneno.",
            "-2 - Alergia Sobrenatural: Funciona exatamente como a desvantagem de mesmo nome e o personagem não pode possuir essa desvantagem dentro de Morto-Vivo e por fora ao mesmo tempo.",
            "-1 - Aparência Hedionda: Funciona exatamente como a desvantagem de mesmo nome e o personagem não pode possuir essa desvantagem dentro de Morto-Vivo e por fora ao mesmo tempo.",
            "-2 - Corpo Alienígena: Funciona exatamente como a desvantagem de mesmo nome e o personagem não pode possuir essa desvantagem dentro de Morto-Vivo e por fora ao mesmo tempo.",
            "-1 - Dependente: Funciona exatamente como a desvantagem de mesmo nome e o personagem não pode possuir essa desvantagem dentro de Morto-Vivo e por fora ao mesmo tempo. A dependência do morto-vivo também pode ser a única fonte de alimento válida para ele, se conveniente.",
            "-2 - Fraqueza Sobrenatural: Funciona exatamente como a desvantagem de mesmo nome e o personagem não pode possuir essa desvantagem dentro de Morto-Vivo e por fora ao mesmo tempo.",
            "-2 - Morte pelo sol: Funciona exatamente como a desvantagem de mesmo nome e o personagem não pode possuir essa desvantagem dentro de Morto-Vivo e por fora ao mesmo tempo."
        ]
    },
    {
        "nome": "Sono Leve",
        "pontos": "3",
        "descricao": [
            "O personagem tem sono leve nunca dorme pesado, sempre vai poder acordar quando quiser. Ele também ganha resistência em qualquer situação de desmaio, ou sono induzido."
        ]
    },
    {
        "nome": "Super Audição",
        "pontos": "1 a 3",
        "descricao": [
            "1 ponto: Você é capaz de escutar claramente um alfinete caindo na sala ao lado. Isso te dá novas oportunidades para testes de percepção auditiva.",
            "3 pontos: Você pode ouvir claramente sussurros realizados longe (25m) de você. Também pode escutar frequências inaudíveis para ouvidos normais. Isso te dá novas oportunidades para testes de percepção auditiva."
        ]
    },
    {
        "nome": "Super Sentidos",
        "pontos": "5",
        "descricao": [
            "O personagem possui Super Audição (equivalente a Super Audição de 3 pontos), Super Visão telescópica (aumenta 10x a visão normal e permite enxergar detalhes a distâncias gigantescas), Super Olfato (identifica cheiros impossíveis de serem sentidos por um ser humano).",
            "Não pode ser comprada junto das vantagens individuais de cada Sentido."
        ]
    },
    {
        "nome": "Super Visão",
        "pontos": "2",
        "descricao": [
            "Enxerga 10x a visão normal humana. Sucesso automático em testes para enxergar pequenos detalhes de longe."
        ]
    },
    {
        "nome": "Trabalho Duro",
        "pontos": "2",
        "descricao": [
            "O personagem se esforça mais do que o normal quando está trabalhando. Aumente a quantia de moedas de ouro ganhas trabalhando com Emprego em 25%."
        ]
    },
    {
        "nome": "Treinamento Extra",
        "pontos": "2",
        "descricao": [
            "O personagem começa a história com uma técnica a mais. Essa técnica possui um slot de addon e não pode ser fundida com outras técnicas inicialmente. Em níveis seguintes, a técnica pode receber upgrades tanto por ser fundida com outras técnicas quanto por pontos de habilidade. A técnica também pode ser um Estilo de Luta.",
            "Treinamento Extra pode ser comprada múltiplas vezes."
        ]
    },
    {
        "nome": "Treinamento Pesado",
        "pontos": "3",
        "descricao": [
            "O treinamento difícil e cansativo realizado pelo personagem aumentou seus limites. O MP máximo do personagem aumenta em +5. Essa vantagem não pode ser comprada múltiplas vezes."
        ]
    },
    {
        "nome": "Treinamento Simples",
        "pontos": "1",
        "descricao": [
            "O personagem começa a história com uma técnica a mais. Essa técnica não possui nenhum slot de addon. Essa vantagem é obrigatória caso o personagem deseje ser capaz de atacar de formas especiais mesmo desarmado (como atirar hadoukens). A técnica sem slots passa a ser considerada uma técnica comum, podendo ser alterada por Pontos de Habilidade normalmente mais tarde e simplesmente possuindo 0 slots para addons."
        ]
    },
    {
        "nome": "Tolerância à Álcool",
        "pontos": "1",
        "descricao": [
            "Imune aos efeitos do álcool. O personagem pode beber e nunca ficará bêbado."
        ]
    },
    {
        "nome": "Visão de 360 Graus",
        "pontos": "1",
        "descricao": [
            "O personagem pode ver em um ângulo de 360º, devido a algum motivo (sobrenatural,racial,implante cibernético,magia, superpoder, etc.)."
        ]
    },
    {
        "nome": "Visão Noturna",
        "pontos": "1",
        "descricao": [
            "O personagem possui visão em ambientes com pouca ou quase nenhuma luz. É a famosa visão preto-e-branco de câmeras noturnas. Pode ser ofuscado por luminosidade normal quando estiver usando a visão noturna."
        ]
    },
    {
        "nome": "Voz Sábia",
        "pontos": "1",
        "descricao": [
            "Você fala com um tom calmo que passa o quanto você aprendeu sobre a vida. Você pode usar sua Sabedoria no lugar de Carisma para testes de Diplomacia."
        ]
    }
];