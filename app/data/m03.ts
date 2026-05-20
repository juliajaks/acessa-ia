import type { ModuleData } from "./types";

const m03: ModuleData = {
  number: "03",
  slug: "m03",
  title: "IA para estudar melhor",
  description:
    "Use IA para criar resumos, gerar simulados, tirar dúvidas sobre qualquer matéria e se preparar para o ENEM — tudo de graça.",
  icon: "📚",
  aulas: [
    {
      number: 1,
      slug: "aula-1",
      title: "Como usar IA para resumir qualquer matéria",
      intro: [
        "Estudar é uma das coisas que mais consome energia — não necessariamente porque o conteúdo é difícil, mas porque muitas vezes a forma como ele é apresentado não funciona pra todo mundo. Um livro didático denso, uma explicação do professor que foi rápida demais, um vídeo que não chegou no ponto certo. Você fica com a sensação de que entendeu na hora e esqueceu logo depois, ou de que nunca chegou a entender direito.",
        "A IA muda isso de uma forma bastante concreta. Ela consegue pegar qualquer conteúdo — um texto, um capítulo de livro, um tema de prova — e reorganizar da forma que faz mais sentido pra você. Mais curto, mais simples, com exemplos do seu contexto, no ritmo que você precisa.",
        "Nesta aula você vai aprender a usar IA pra transformar qualquer matéria num resumo que realmente funciona pra revisar e fixar o conteúdo. E vai conhecer uma ferramenta específica do Google que foi feita exatamente pra isso.",
      ],
      body: [
        "O uso mais direto é também o mais simples: você tem um texto longo e quer entender os pontos principais. Você cola o texto na IA e pede um resumo. Mas a forma como você faz esse pedido faz diferença enorme. Compare: **\"Resume esse texto\"** versus **\"Resume esse texto destacando os 5 conceitos mais importantes, em linguagem simples, como se eu fosse apresentar pra alguém que nunca estudou o assunto.\"** O segundo pedido vai gerar um resumo muito mais utilizável.",
        "Mas há algo ainda mais poderoso do que pedir um resumo pronto: pedir que a IA te explique o conteúdo de um jeito diferente do que você leu. Isso funciona especialmente bem quando você leu algo e não entendeu, ou entendeu na superfície mas sabe que não fixou. Ao invés de reler o mesmo texto, você pede:",
        { q: "Me explica o conceito de [tema] de um jeito diferente, com uma analogia do cotidiano." },
        "A IA vai buscar uma outra forma de apresentar o mesmo conteúdo. E às vezes é exatamente essa segunda perspectiva que faz o conceito finalmente \"clicar\". Com a IA você pode pedir quantas versões quiser — algo impossível num livro didático.",
        "Outra estratégia muito útil é o **resumo progressivo**: você pede primeiro um resumo de 5 linhas sobre o tema. Depois pede que ela expanda um ponto específico que te interessou. Depois pede exemplos práticos desse ponto. Você vai aprofundando no que importa, sem ter que passar por tudo que já sabe.",
        "A IA também é muito boa pra criar conexões entre assuntos. As matérias parecem separadas — biologia de um lado, química do outro — mas as provas mais difíceis cobram exatamente essa integração. Você pode perguntar: \"Como o conceito de [tema de biologia] se conecta com o que estudo em química?\" Quando você consegue ver como um conceito abstrato existe no mundo real, ele deixa de ser uma informação isolada.",
        { h: "Uma ferramenta específica pra isso: NotebookLM" },
        "Existe uma ferramenta do Google feita especialmente pra estudo com documentos — e ela é gratuita. Chama **NotebookLM**, e você acessa pelo site **notebooklm.google.com** com a conta do Google. O diferencial do NotebookLM em relação ao ChatGPT ou ao Gemini é simples: em vez de responder com base em tudo que ela aprendeu na internet, ela responde **só com base no material que você enviou**. Isso é enorme pra quem estuda.",
        "Funciona assim: você abre o NotebookLM, cria um \"caderno\" e adiciona suas fontes — pode ser um PDF do livro didático, um texto que o professor mandou, um link do YouTube com a aula, um documento do Google Drive. A partir daí, você pode fazer perguntas sobre o conteúdo, pedir um resumo, pedir um guia de estudos organizado por tópicos, pedir uma lista de perguntas e respostas pra revisar.",
        "Uma das funcionalidades mais impressionantes é o **Podcast de áudio**: o NotebookLM cria uma conversa entre dois apresentadores discutindo o seu material, como se fosse um episódio de podcast feito sobre o que você precisa estudar. Dura entre 10 e 20 minutos e você pode ouvir enquanto faz outra coisa.",
        "A vantagem de usar o NotebookLM é que as respostas vêm sempre com referência a qual parte do documento aquela informação veio. Isso reduz muito o risco de a IA inventar algo que não estava no seu material — algo muito valioso pra quem está estudando pra provas.",
        "Um ponto que precisa ser dito: usar a IA pra entender melhor é diferente de usar a IA pra não precisar estudar. Quando você pede um resumo e lê com atenção, fazendo perguntas sobre o que não entendeu, você está aprendendo. A IA é mais poderosa como ferramenta de compreensão do que como atalho. Quando você entende de verdade, a informação fica.",
      ],
      closing:
        "Você acabou de aprender a ter um professor particular disponível a qualquer hora — o próximo passo é usar isso de verdade.",
    },
    {
      number: 2,
      slug: "aula-2",
      title: "Criando simulados e questões de prova com IA",
      intro: [
        "Uma das formas mais eficazes de estudar é a prática ativa — ou seja, testar o que você sabe antes de ir pra prova. Não só reler anotações, não só assistir aula de novo, mas se colocar na posição de ter que responder perguntas sem consulta. Esse processo é comprovadamente muito mais eficaz para fixar conteúdo do que qualquer forma passiva de estudo.",
        "O problema é que material de prática nem sempre está disponível na quantidade e no formato que você precisa. Apostilas têm um número limitado de questões. Os simulados gratuitos que você acha na internet nem sempre cobrem exatamente o que você está estudando.",
        "A IA resolve isso completamente. Ela consegue gerar questões sobre qualquer tema, em qualquer nível de dificuldade, em qualquer formato, em segundos.",
      ],
      body: [
        "O uso mais básico é pedir questões sobre um tema específico. Em vez de \"Me faz questões sobre biologia\", tente:",
        { q: "Cria 5 questões de múltipla escolha sobre o ciclo celular, no nível do ENEM, com 4 alternativas cada uma. Não me dá o gabarito ainda." },
        "Esse último detalhe — pedir pra segurar o gabarito — é importante. Se a resposta aparecer junto com a questão, o cérebro vai direto pra ela sem realmente pensar. Peça as questões primeiro, tente responder, e só depois peça o gabarito comentado. O comentário é onde o aprendizado real acontece: a IA explica por que cada alternativa está certa ou errada.",
        "Você pode variar o formato das questões dependendo do que precisa treinar. **Múltipla escolha** é bom pra simular provas. **Questões dissertativas** são boas pra desenvolver raciocínio e argumentação. **Verdadeiro ou falso** é bom pra revisar conceitos rápido. Cada formato treina uma habilidade diferente.",
        "Uma estratégia muito poderosa é pedir questões que misturem temas — exatamente como as provas mais difíceis fazem. O ENEM é famoso por questões que parecem ser de uma matéria mas exigem conhecimento de outra. Você pode pedir:",
        { q: "Cria uma questão que misture conceitos de biologia e química, no estilo ENEM, com contexto ambiental." },
        "Outra aplicação muito útil é usar a IA como parceira de autocorreção. Quando você faz uma questão dissertativa, você pode pedir que a IA avalie sua resposta com critérios específicos:",
        { q: "Aqui está minha resposta pra essa questão: [sua resposta]. Avalia com base nos critérios do ENEM, aponta o que está bom e o que eu poderia melhorar." },
        "A IA vai dar um feedback detalhado. Não é a mesma coisa que um professor humano corrigindo — mas é infinitamente melhor do que não ter nenhum feedback. E você pode fazer isso quantas vezes quiser, sem constrangimento.",
        "Uma dica pra quem quer ir além: depois de fazer um simulado e ver o gabarito, anote os temas onde você errou. Depois peça:",
        { q: "Errei questões sobre [tema específico]. Cria 5 questões focadas exatamente nesse ponto, começando com mais fáceis e aumentando a dificuldade gradualmente." },
        "Esse processo de identificar fraqueza e treinar especificamente ela é a forma mais eficiente de melhorar. Lembre-se também de que a IA pode errar nas questões que cria — se uma questão parecer estranha, questione: \"Tem certeza que o gabarito é essa alternativa? Me explica de novo.\" Exercitar esse senso crítico é parte do aprendizado.",
      ],
      closing:
        "Agora você tem como criar seu próprio banco de questões sobre qualquer assunto — use isso a seu favor antes de toda prova importante.",
    },
    {
      number: 3,
      slug: "aula-3",
      title: "Montando um plano de estudos personalizado para o ENEM",
      intro: [
        "Uma das maiores dificuldades de quem está se preparando pro ENEM não é falta de material — é falta de direção. Existe uma quantidade enorme de conteúdo pra estudar, e sem um plano claro, é fácil gastar tempo e energia nos lugares errados: revisar o que já sabe, ignorar o que mais cai, estudar de um jeito que não funciona pro seu perfil.",
        "Um bom plano de estudos leva em conta quem você é, quanto tempo você tem, quais são suas forças e fraquezas, e o que o ENEM realmente cobra. Montar esse plano sozinho leva horas. Com IA, leva minutos — e o resultado é algo feito especificamente pra você, não um cronograma genérico copiado da internet.",
        "Nesta aula você vai aprender a usar a IA pra criar, ajustar e acompanhar um plano de estudos real. Um plano que você vai conseguir seguir de verdade.",
      ],
      body: [
        "O primeiro passo é dar pra IA as informações que ela precisa pra montar algo útil. Antes de pedir o plano, pense nas seguintes perguntas:",
        {
          li: [
            "Quantas horas por semana você consegue estudar de verdade? (seja honesto — não o ideal, o real)",
            "Quantos meses faltam pro ENEM que você vai fazer?",
            "Quais matérias você se sai melhor?",
            "Quais matérias você tem mais dificuldade?",
            "Você prefere estudar de manhã, de tarde ou de noite?",
            "Você prefere estudar uma matéria por vez ou alternar?",
          ],
        },
        "Com essas informações, escreva um pedido assim:",
        {
          q: "Quero montar um plano de estudos pro ENEM. Tenho [X] horas por semana disponíveis, o ENEM é em [mês]. Minhas matérias mais fortes são [lista]. Tenho mais dificuldade em [lista]. Prefiro estudar [período do dia]. Cria um plano semanal realista, distribuindo as matérias de acordo com o peso delas no ENEM e dando mais atenção às que tenho dificuldade.",
        },
        "A IA vai gerar um cronograma baseado nesses dados. Mas não aceite o primeiro resultado como definitivo — refine. Se uma semana ficou muito carregada, diz. Se uma matéria está com pouco tempo, ajusta. Se você quer incluir dias de revisão, pede. Trate o plano como um rascunho que você vai moldando até ficar viável.",
        "Um detalhe importante: peça pra IA explicar o raciocínio por trás da distribuição que ela fez. **\"Por que você colocou matemática três vezes por semana e história só uma?\"** Entender a lógica do plano te ajuda a seguir ele com mais convicção — e a ajustar quando a vida não cooperar.",
        "A IA também pode te ajudar a entender o que o ENEM realmente cobra. A prova valoriza interpretação de texto, raciocínio contextualizado e aplicação de conhecimento em situações reais, mais do que memorização pura. Você pode perguntar:",
        { q: "Quais são os temas que mais aparecem em ciências humanas no ENEM nos últimos anos? Me dá uma lista em ordem de frequência." },
        "Outro uso valioso é usar a IA pra revisar ao final de cada semana de estudos. Você pode fazer um check-in rápido:",
        { q: "Estudei isso e aquilo essa semana. Não consegui terminar [tema]. Me ajuda a ajustar o plano da próxima semana considerando o que ficou pra trás." },
        "Isso transforma o plano de algo estático em algo vivo, que se adapta à sua realidade semana a semana. A maioria dos cronogramas falha porque é rígido demais pra funcionar com a vida real. Com a IA, você consegue recalcular a rota toda vez que precisar.",
        "Pra redação, que é um componente específico e muito importante do ENEM, a IA pode ajudar de formas diferentes: gerando temas pra você praticar, explicando os cinco critérios de avaliação da banca, analisando redações que você já escreveu, sugerindo repertório sociocultural pra incluir na argumentação.",
        "Por fim, uma coisa que muitos planos de estudo ignoram: o descanso e a saúde mental fazem parte da preparação. Um plano que não inclui tempo livre e flexibilidade pra quando a vida apertar é um plano que vai ser abandonado na segunda semana. Peça pra IA incluir isso no cronograma. Um bom plano é aquele que você consegue de fato seguir — não o mais ambicioso que você consegue imaginar.",
      ],
      closing:
        "Você agora tem tudo que precisa pra estudar com direção — e um plano que é seu, feito pra sua realidade.",
    },
  ],
  exercise: {
    title: "Seu primeiro simulado personalizado",
    subtitle: "Funciona no celular. Sem criar conta, sem download.",
    blocks: [
      "Escolha uma matéria que você vai ter prova ou que está estudando agora. Pode ser qualquer uma — matemática, português, história, biologia, química, geografia.",
      "Abra o Gemini (gemini.google.com) ou o Copilot (copilot.microsoft.com) e envie a seguinte mensagem, adaptada pro seu tema:",
      {
        q: "Vou fazer uma prova sobre [tema/matéria] em breve. Cria um mini simulado com 5 questões de múltipla escolha sobre os conceitos mais importantes desse tema, no nível do ensino médio. Não coloca o gabarito ainda — deixa eu responder primeiro.",
      },
      "Leia cada questão com calma e tente responder sem consultar nada. Anote suas respostas.",
      "Depois de responder as 5 questões, envie outra mensagem:",
      { q: "Agora me mostra o gabarito comentado. Explica por que cada resposta está certa e por que as erradas estão erradas." },
      "Leia os comentários. Preste atenção especial nas que você errou. Pra cada uma, peça mais explicação:",
      { q: "Não entendi bem essa questão. Me explica esse conceito de outro jeito, com um exemplo do dia a dia." },
      { h: "O que observar" },
      "Você conseguiu responder sem consultar? Onde travou? O gabarito comentado ajudou a entender o raciocínio, não só a resposta certa?",
      "Essa é a estrutura que você pode repetir pra qualquer matéria, qualquer semana, com qualquer conteúdo, até a véspera da prova.",
    ],
  },
};

export default m03;
