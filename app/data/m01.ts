import type { ModuleData } from "./types";

const m01: ModuleData = {
  number: "01",
  slug: "m01",
  title: "O que é IA e por que importa pra você",
  description:
    "Entenda o que é inteligência artificial sem complicação: o que ela faz, como surgiu e por que está mudando tudo.",
  icon: "🧠",
  aulas: [
    {
      number: 1,
      slug: "aula-1",
      title: "O que é inteligência artificial — sem enrolação",
      intro: [
        "Você já deve ter ouvido falar em inteligência artificial em algum lugar — no noticiário, numa conversa, talvez num meme. Mas quando alguém tenta explicar o que é, parece que a explicação complica mais do que esclarece. Tem muito termo técnico, muita analogia estranha, muita coisa que não faz diferença pra quem está começando do zero.",
        "Então vamos fazer diferente. Vamos falar do que é de verdade, sem rodeio, sem jargão. Porque entender o básico com clareza vale muito mais do que ter uma ideia vaga de algo complicado.",
        "A premissa é simples: inteligência artificial é um programa de computador que aprende com informações e usa esse aprendizado pra responder perguntas, criar coisas e resolver problemas. Não é robô, não é ficção científica. É software — como qualquer outro app no seu celular, só que com uma capacidade diferente.",
      ],
      body: [
        "A diferença entre um programa comum e uma IA está em como cada um funciona. Um programa comum segue regras fixas e rígidas: se apertar o botão A, acontece a coisa B, sempre. Não tem variação, não tem adaptação. A IA é diferente porque ela aprende padrões a partir de exemplos — e usa esses padrões pra lidar com situações que nunca viu antes.",
        "Pensa assim: quando você era criança, aprendeu a falar ouvindo as pessoas ao redor. Ninguém te entregou um manual de gramática com todas as regras da língua portuguesa. Você foi captando os padrões naturalmente — o que combina com o quê, o que faz sentido numa frase, o que soa estranho. A IA aprende de um jeito parecido, só que com muito mais velocidade e com uma quantidade de dados que é difícil até de imaginar.",
        "Esses dados são textos, imagens, áudios, vídeos — tudo que foi produzido e está disponível na internet, em livros digitalizados, em artigos científicos, em fóruns, em redes sociais. A IA processou mais conteúdo do que qualquer ser humano poderia consumir em mil vidas. Com esse aprendizado, ela consegue conversar de forma natural, escrever textos coerentes, resumir documentos longos, traduzir idiomas, criar imagens e responder dúvidas sobre quase qualquer assunto.",
        "Mas aqui tem um detalhe que é importante entender desde o começo: a IA não pensa. Pelo menos não da forma que a gente pensa. Ela não tem sentimentos, não tem vontade própria, não tem consciência. Quando parece que ela está \"refletindo\" sobre algo, o que está acontecendo por baixo é um cálculo sofisticado: qual é a próxima palavra, a próxima ideia, a próxima resposta mais provável com base no que você perguntou e em tudo que ela já aprendeu.",
        "Isso pode parecer frio, mas na prática é libertador. Significa que você não precisa ter medo dela. Significa que ela não tem agenda. Significa que ela trabalha com base no que você pede — e se você aprender a pedir bem, ela entrega bem. A qualidade da resposta depende, em grande parte, da qualidade da pergunta.",
        "O que também significa que você não precisa entender como ela funciona por dentro pra usá-la bem. Você usa o celular sem saber de eletrônica. Você usa o Google Maps sem entender os algoritmos de roteamento. Com a IA é a mesma coisa — o conhecimento técnico é interessante, mas não é pré-requisito pra aproveitar a ferramenta.",
        "O que você precisa é de curiosidade e disposição pra experimentar. Precisa aprender a formular perguntas, avaliar respostas, identificar quando a ferramenta erra e quando ela acerta. Precisa, acima de tudo, entender que a IA é um meio — e você decide o fim. Isso é exatamente o que este curso ensina. Não existe nenhuma barreira técnica que impeça você de começar hoje.",
      ],
      closing:
        "Você acabou de entender o que muita gente que usa IA todo dia ainda não parou pra entender — e isso já faz diferença.",
    },
    {
      number: 2,
      slug: "aula-2",
      title: "A IA já está na sua vida (e você não sabia)",
      intro: [
        "Aqui vai uma coisa que talvez te surpreenda: você provavelmente já usa IA todo dia. Não o ChatGPT, não o Gemini — mas inteligência artificial do mesmo jeito. Ela está presente em aplicativos que você abre sem pensar, em plataformas que fazem parte da sua rotina, em ferramentas que você usa sem perceber que existe uma tecnologia sofisticada por trás.",
        "Não é exagero e não é força de expressão. As plataformas que você usa pra se distrair, se comunicar, navegar na internet e resolver coisas do dia a dia já são movidas por inteligência artificial. A diferença é que agora você vai começar a enxergar isso com outros olhos.",
        "Reconhecer onde a IA já existe na sua vida é o primeiro passo pra entender como usar as ferramentas novas de forma consciente. E mais do que isso — é o primeiro passo pra perceber que você não está chegando a um território completamente desconhecido.",
      ],
      body: [
        "Quando você abre o TikTok, o Instagram ou o YouTube e o algoritmo te mostra exatamente o tipo de conteúdo que você gosta, isso é IA. Ela analisou o que você assistiu, quanto tempo você ficou em cada vídeo, o que você pulou, o que você repetiu, o que você comentou — e com tudo isso construiu um modelo do que te prende a atenção. O feed que você vê é diferente do feed de qualquer outra pessoa no mundo, porque ele foi montado especificamente pra você.",
        "Quando você vai no Google e começa a digitar uma palavra e ele já completa o resto da frase antes de você terminar, isso é IA prevendo o que você provavelmente quer perguntar. Quando você manda áudio no WhatsApp e alguém usa a transcrição automática pra ler ao invés de ouvir, isso é IA convertendo fala em texto em tempo real. Quando o Spotify monta uma playlist nova numa segunda-feira de manhã com músicas que você nunca tinha ouvido mas que combinam exatamente com o seu gosto, isso é IA analisando seus padrões de escuta.",
        "O Google Tradutor que você usou pra entender uma letra de música em inglês? IA. O corretor ortográfico do celular que sugere a palavra certa antes de você errar? IA. O filtro de câmera que reconhece seu rosto e aplica efeitos em tempo real? IA. A recomendação de produto que aparece quando você pesquisa algo no Google e depois abre outro site? IA rastreando seu comportamento.",
        "A IA está no sistema do seu banco identificando transações suspeitas antes que você perceba. Está nos aplicativos de mapa recalculando o melhor caminho quando tem acidente ou trânsito à frente. Está nas plataformas de streaming decidindo qual série ou filme aparece na sua tela principal. Está nos sistemas de atendimento ao cliente respondendo antes de qualquer humano chegar.",
        "Em todos esses casos, a IA está trabalhando **pra quem construiu a plataforma**. O objetivo dela é manter você mais tempo no app, comprar mais, clicar mais, interagir mais. Não é necessariamente ruim — mas é importante entender que esses sistemas têm interesses que nem sempre são os seus.",
        "As ferramentas que você vai aprender a usar neste curso funcionam de um jeito diferente. Você faz a pergunta, você define o objetivo, você usa a resposta do jeito que quiser. A IA trabalha pra você, não pra uma empresa tentando te vender algo. Essa diferença parece pequena, mas muda completamente a relação que você tem com a tecnologia.",
        "Deixar a IA te influenciar passivamente — através de algoritmos de feed, de recomendações, de conteúdo viciante — é uma coisa. Usar a IA ativamente como ferramenta — pra estudar, criar, se preparar, produzir — é outra completamente diferente. E é essa segunda forma que abre oportunidades reais.",
      ],
      closing:
        "A IA já estava na sua vida antes deste curso — a partir de agora, você vai saber o que fazer com ela.",
    },
    {
      number: 3,
      slug: "aula-3",
      title: "Por que aprender isso agora muda o jogo",
      intro: [
        "Existe um momento em certas tecnologias onde quem aprende cedo sai na frente por muito tempo. A internet foi assim. O smartphone foi assim. Em ambos os casos, as pessoas que entenderam o potencial antes da maioria — não necessariamente as mais ricas ou as mais técnicas, mas as que prestaram atenção — tiveram uma vantagem real que durou anos.",
        "A inteligência artificial está nesse momento agora. E o \"agora\" ainda é o começo — o que significa que a janela está aberta, mas não vai ficar assim pra sempre.",
        "O que torna esse momento diferente dos anteriores é a velocidade e o acesso. A internet levou décadas pra chegar em todo lugar. O smartphone levou anos. A IA chegou rápido, com ferramentas gratuitas, em português, que funcionam em qualquer celular com internet. A barreira de entrada nunca foi tão baixa. Isso é uma oportunidade real, e vale levar a sério.",
      ],
      body: [
        "Vamos falar de mercado de trabalho de forma direta, porque é algo que afeta muita gente. A IA já está mudando quais habilidades têm valor — não porque vai \"roubar empregos\" (essa conversa é mais complexa do que os noticiários costumam mostrar), mas porque quem sabe usar IA entrega mais resultado em menos tempo. E isso conta, em qualquer área.",
        "Imagina dois candidatos num processo seletivo com currículos parecidos. Um sabe usar IA pra pesquisar, organizar ideias, escrever com mais clareza, preparar apresentações, analisar dados. O outro não. Mesmo que a vaga não exija \"saber IA\" como requisito formal, quem usa vai se destacar na prática — nas entregas, na velocidade, na qualidade do trabalho. Essa diferença já está acontecendo no mercado.",
        "E não estamos falando só de tecnologia ou de empregos de escritório. Saúde, educação, comunicação, design, comércio, direito, arquitetura, agronegócio — em todos esses setores, pessoas que sabem usar IA estão produzindo mais e melhor. A maioria dessas pessoas não é programadora. São pessoas que aprenderam a fazer as perguntas certas pra ferramenta certa, no momento certo.",
        "Mas além do trabalho, tem algo que talvez seja ainda mais importante: o aprendizado. Com IA, você tem acesso a um tutor disponível 24 horas por dia, em português, que nunca fica com preguiça de explicar de novo, que adapta a linguagem se você pedir mais simples, que dá exemplos do jeito que você precisar. Isso representa um nivelamento real de acesso ao conhecimento.",
        "Mas tem um ponto que pouca gente menciona quando fala das vantagens da IA: saber usar não é só apertar botão. É saber o que pedir. É saber avaliar a resposta com senso crítico — porque a IA erra, inventa informações, pode ser superficial. É saber quando confiar na ferramenta e quando questionar ela. Isso exige um tipo de pensamento que não vem automático.",
        "É exatamente por isso que existe este curso. Não é um tutorial de como clicar em qual botão. É um treinamento pra você desenvolver uma relação inteligente com a ferramenta — pra usar ela com intenção, não só com curiosidade passageira.",
        "Você não precisa ter formação técnica. Não precisa saber programar. Não precisa ter um computador potente. Precisa de acesso à internet e disposição pra aprender de forma ativa. O momento certo não é quando você se sentir \"pronto\". Raramente alguém se sente pronto antes de começar. O momento certo é agora, enquanto ainda tem vantagem em aprender.",
      ],
      closing:
        "Você não precisa ser o mais experiente, o mais técnico ou o mais conectado — você só precisa começar antes.",
    },
  ],
  exercise: {
    title: "Minha primeira conversa com IA",
    subtitle: "Funciona no celular. Sem criar conta, sem baixar nada.",
    blocks: [
      "Abra o navegador do seu celular — Chrome, Safari, qualquer um — e acesse **gemini.google.com**. O Gemini é a IA do Google e funciona sem login pelo navegador.",
      "No campo de texto, escreva a seguinte mensagem:",
      {
        q: "Me explica o que é inteligência artificial como se eu nunca tivesse ouvido falar nisso. Usa uma linguagem simples e direta.",
      },
      "Leia a resposta com atenção. Depois, experimente mudar o tema pra algo da sua vida real — uma matéria que você está estudando, um assunto que te interessa, uma dúvida que você tem:",
      { q: "Me explica [o tema que você escolheu] de um jeito simples, com exemplos práticos." },
      { h: "O que observar" },
      "Presta atenção em como a IA ajusta a resposta dependendo do que você pede. Se a explicação ficar muito técnica ou confusa, peça pra ela simplificar. Se ficar superficial demais, peça mais detalhes.",
      "Não existe resposta certa nem exercício a entregar. O objetivo é você sentir na prática que a ferramenta responde ao que você pede — e começar a desenvolver o instinto de como fazer perguntas mais eficientes.",
    ],
  },
};

export default m01;
