import type { ModuleData } from "./types";

const m05: ModuleData = {
  number: "05",
  slug: "m05",
  title: "Criando com IA",
  description:
    "Gere imagens, escreva textos criativos e monte apresentações impressionantes usando IA como ferramenta de criação.",
  icon: "🎨",
  aulas: [
    {
      number: 1,
      slug: "aula-1",
      title: "Criando imagens e apresentações do zero",
      intro: [
        "Durante muito tempo, criar imagens de qualidade exigiu anos de prática em design, programas caros e um computador potente. Fazer uma apresentação bonita exigia saber usar o PowerPoint em profundidade ou ter acesso a um designer. Isso criou uma barreira real entre quem tinha recursos pra produzir conteúdo visual profissional e quem não tinha.",
        "Essa barreira praticamente desapareceu. Com as ferramentas de IA disponíveis hoje, qualquer pessoa consegue criar imagens originais, montar apresentações com design profissional e produzir material visual de qualidade — sem saber desenhar, sem saber de design, sem precisar de equipamento caro.",
        "Esta aula mostra como fazer isso na prática, com as ferramentas certas pra cada tipo de criação.",
      ],
      body: [
        "Vamos começar pela **geração de imagens**. Existem ferramentas que criam imagens originais a partir de uma descrição de texto — você escreve o que quer ver, e a IA gera a imagem. A ferramenta mais acessível pra começar é o **Microsoft Designer** (designer.microsoft.com) ou o gerador de imagens do próprio **Copilot** (copilot.microsoft.com) — ambos gratuitos, sem precisar instalar nada, funcionam no celular. O **Canva** também tem geração de imagens por IA integrada na versão gratuita.",
        "A chave pra gerar boas imagens é saber descrever bem o que você quer. A descrição que você escreve pra gerar uma imagem é chamada de \"prompt de imagem\", e quanto mais detalhada e específica, melhor o resultado. Em vez de escrever **\"uma pessoa estudando\"**, escreva:",
        {
          q: "Uma jovem estudando à noite numa mesa com livros e um celular, iluminação quente, estilo ilustração digital, tons de roxo e azul escuro.",
        },
        "Os detalhes que mais fazem diferença num prompt de imagem são: o assunto principal, o ambiente, o estilo visual (fotografia realista, ilustração, aquarela, pixel art), a iluminação e as cores predominantes. Você não precisa incluir tudo sempre — mas quanto mais você especifica, mais controle tem sobre o resultado.",
        "Se a imagem não ficou como você esperava, não descarte — refine. Adicione ou remova elementos, mude o estilo, peça uma variação. Gerar imagens com IA é um processo iterativo. Além de criar imagens do zero, a IA visual serve pra: criar capas pra trabalhos escolares, ilustrar apresentações, fazer thumbnails pra vídeos, criar posts pra redes sociais, montar logos simples pra projetos pessoais.",
        "Agora vamos pras **apresentações**. O **Canva** é a ferramenta mais completa pra isso e tem uma versão gratuita generosa. Dentro do Canva, existe um recurso chamado \"Magic Design\" que, com base num tema que você digita, gera automaticamente uma apresentação completa com slides estruturados e design profissional. É um ponto de partida que leva segundos e que você personaliza depois.",
        "Outra abordagem igualmente eficaz é usar o ChatGPT ou o Gemini pra estruturar o conteúdo da apresentação e o Canva pra montar visualmente. Você pede:",
        {
          q: "Preciso fazer uma apresentação sobre [tema] com 8 slides. Me dá o roteiro completo: título de cada slide e os pontos principais que devem aparecer em cada um.",
        },
        "A IA organiza a estrutura. Você pega esse roteiro, abre um template no Canva e encaixa o conteúdo. O resultado é uma apresentação bem estruturada e visualmente profissional em uma fração do tempo que levaria fazer tudo manualmente.",
        "Uma combinação muito poderosa pra trabalhos escolares ou projetos é: **NotebookLM** pra entender e organizar o conteúdo, **ChatGPT ou Gemini** pra estruturar os slides, e **Canva** pra montar visualmente. Cada ferramenta faz o que faz melhor, e juntas entregam um resultado que antes levaria dias.",
        "Por fim, um ponto que vale sempre lembrar: a IA é ponto de partida, não ponto de chegada. Uma imagem gerada por IA pode precisar de ajustes. Uma apresentação gerada automaticamente precisa da sua voz, do seu contexto, das suas ideias. O diferencial de quem usa bem essas ferramentas não é só saber gerá-las — é saber editar, refinar e colocar algo seu no resultado.",
      ],
      closing:
        "Você não precisa mais depender de ninguém pra criar algo bonito e profissional — as ferramentas estão na sua mão.",
    },
    {
      number: 2,
      slug: "aula-2",
      title: "Escrevendo textos, posts e ideias com IA",
      intro: [
        "Escrever bem é uma das habilidades mais valorizadas em qualquer área — e também uma das que mais assusta. Muita gente trava na frente de uma página em branco, não sabe por onde começar, escreve algo e acha que ficou ruim, ou simplesmente não tem tempo pra desenvolver uma ideia do jeito que gostaria.",
        "A IA não vai escrever por você no sentido de substituir o que você tem a dizer. Mas ela resolve o que mais trava o processo de escrita: o começo, a estrutura, o refinamento e a consistência. Com ela, uma ideia que ficaria na sua cabeça por falta de tempo ou de confiança se transforma em texto de verdade.",
        "Nesta aula você vai aprender a usar IA pra escrever qualquer tipo de conteúdo — de um post simples nas redes sociais até uma redação, um roteiro ou um projeto.",
      ],
      body: [
        { h: "Vencer a página em branco" },
        "Quando você não sabe por onde começar, o melhor que a IA pode fazer é gerar um rascunho inicial a partir da ideia que você tem na cabeça. Você não precisa pedir um texto pronto — você pode pedir só um ponto de partida:",
        { q: "Tenho que escrever [tipo de texto] sobre [tema]. Me dá um parágrafo inicial pra eu me inspirar e continuar." },
        "Muitas vezes esse primeiro parágrafo é suficiente pra destravar o resto. A IA deu o empurrão, você continua com suas próprias palavras, e o texto final é genuinamente seu.",
        { h: "Estruturar ideias" },
        "Você tem muita coisa na cabeça sobre um assunto mas não sabe organizar. Despeja tudo num pedido pra IA:",
        { q: "Tenho essas ideias sobre [tema]: [lista bagunçada de tudo que você quer dizer]. Me ajuda a organizar isso numa estrutura lógica de texto, com introdução, desenvolvimento e conclusão." },
        "A IA vai montar um esqueleto coerente. Você vê onde cada ideia se encaixa, o que está sobrando, o que está faltando. Esse esqueleto vira o mapa do seu texto.",
        { h: "Gerar variações pra redes sociais" },
        "Você tem uma mensagem que quer passar, mas não sabe como formatar pra cada plataforma. O que funciona no Instagram não funciona no LinkedIn. A IA consegue pegar uma ideia central e reescrever ela em vários formatos:",
        {
          q: "Tenho essa ideia: [sua mensagem]. Reescreve ela em 4 versões diferentes — uma pra legenda de Instagram (leve e visual), uma pra LinkedIn (mais profissional), uma pra Twitter (curta e direta) e uma pra um roteiro de vídeo curto de 30 segundos.",
        },
        { h: "Revisar redações escolares e vestibulares" },
        "Para redações, a IA é uma parceira de processo — não de resultado. O processo ideal: você escreve a redação com seus próprios argumentos e sua própria voz. Depois pede pra IA revisar:",
        {
          q: "Aqui está minha redação: [texto]. Revisa erros de gramática e concordância, avalia se a argumentação está clara e coesa, e aponta o que eu poderia melhorar na conclusão.",
        },
        "Você recebe um feedback detalhado, faz as correções que fazem sentido pra você, e entrega um texto genuinamente seu — só melhor do que estaria sem revisão.",
        { h: "Planejar conteúdo de forma consistente" },
        "Pra quem quer criar conteúdo de forma mais consistente — um blog, um canal, uma série de posts — a IA também ajuda no planejamento:",
        {
          q: "Quero criar conteúdo sobre [tema de interesse] pra [plataforma]. Me dá 10 ideias de conteúdo que seriam relevantes pra quem está começando nesse assunto.",
        },
        "Uma coisa importante de repetir: existe uma diferença entre usar a IA pra escrever melhor e usar a IA pra não escrever. A primeira te desenvolve. A segunda te mantém no mesmo lugar — ou te prejudica, se a escola ou a banca identificar que o conteúdo não é seu. Use a ferramenta como parceira, não como substituta.",
      ],
      closing:
        "Escrever bem é uma habilidade que se desenvolve com prática — e agora você tem uma parceira disponível pra te ajudar em cada etapa desse desenvolvimento.",
    },
    {
      number: 3,
      slug: "aula-3",
      title: "Como transformar tudo isso em projeto ou renda",
      intro: [
        "Ao longo deste curso, você aprendeu a usar ferramentas de IA pra estudar melhor, se preparar pro mercado de trabalho, criar imagens, escrever textos e montar apresentações. Essas habilidades, juntas, formam um conjunto que tem valor real — não só pra você, mas pra outras pessoas que ainda não sabem usá-las.",
        "Esta última aula é sobre o passo seguinte: como transformar o que você aprendeu em algo concreto. Pode ser um projeto pessoal, um portfólio, uma fonte de renda extra, ou o começo de algo maior.",
        "O objetivo aqui não é te vender a ideia de que aprender IA vai te tornar rico da noite pro dia. O objetivo é mostrar o que é possível quando você combina as ferramentas que aprendeu com intenção e consistência.",
      ],
      body: [
        { h: "Construir um portfólio" },
        "O primeiro passo prático pra transformar habilidade em oportunidade é construir um portfólio, mesmo que pequeno. Portfólio é um conjunto de exemplos do que você sabe fazer — e ele serve como prova concreta da sua capacidade pra qualquer pessoa que você queira impressionar.",
        "Com o que você aprendeu neste curso, você já consegue montar um portfólio com: textos que você escreveu (com e sem ajuda de IA), imagens que você gerou e editou, apresentações que você montou, resumos e materiais de estudo que você criou. Você pode guardar esses exemplos numa pasta do Google Drive, num perfil do Canva, num documento compartilhável.",
        "Ter um portfólio muda a conversa de **\"eu sei fazer isso\"** pra **\"aqui está prova de que eu faço\"**. E essa diferença é enorme quando você está tentando entrar num mercado competitivo.",
        { h: "Trabalho freelancer" },
        "Plataformas como **Workana**, **GetNinjas** e **Fiverr** conectam pessoas que precisam de serviços com pessoas que prestam esses serviços — e muitos dos serviços mais demandados lá são exatamente o que você aprendeu a fazer: criação de textos, posts pra redes sociais, apresentações, imagens, logotipos simples, currículos. Você pode começar com preços baixos pra construir reputação, pegar os primeiros feedbacks positivos, e ir aumentando o valor do serviço com o tempo.",
        { h: "Criação de conteúdo próprio" },
        "Se você se identifica com algum tema — pode ser tecnologia, estudo, culinária, moda, esportes, qualquer coisa — você pode criar conteúdo sobre esse tema usando as ferramentas de IA pra acelerar a produção. Um canal no YouTube, uma página no Instagram, uma newsletter gratuita no Substack. Construir uma audiência leva tempo, mas o custo de começar hoje é zero.",
        { h: "Ajudar outras pessoas a aprenderem" },
        "Você já sabe mais sobre IA do que a maioria das pessoas ao seu redor. Há professores que não sabem usar essas ferramentas. Há pequenos empreendedores que nem sabem que elas existem. Você pode oferecer uma aula informal no seu grupo de amigos, propor uma apresentação pra sua escola, montar um mini-workshop pago pra comerciantes que querem entender como usar IA no negócio deles. Ensinar o que você sabe consolida o seu próprio aprendizado e abre portas.",
        { h: "Três princípios que aparecem em todas as histórias de sucesso" },
        {
          bh: [
            [
              "Começar antes de se sentir pronto",
              "Quem espera dominar tudo pra começar geralmente não começa.",
            ],
            [
              "Consistência acima de perfeição",
              "Fazer algo imperfeito todo dia vale mais do que fazer algo perfeito uma vez por mês.",
            ],
            [
              "Documentar o processo",
              "Mostrar o que você está aprendendo e construindo, mesmo enquanto está no meio, cria conexões e oportunidades que produtos finalizados raramente criam.",
            ],
          ],
        },
        "Você terminou este curso com um conjunto de ferramentas que boa parte das pessoas ainda não sabe usar. Isso é uma vantagem real. O que você faz com ela é uma escolha sua.",
      ],
      closing:
        "Você chegou até aqui — e isso já é mais do que a maioria das pessoas fez. O próximo passo é só seu.",
    },
  ],
  exercise: {
    title: "Seu primeiro projeto criativo com IA",
    subtitle:
      "Funciona no celular. Sem criar conta obrigatória — exceto Canva, que tem cadastro gratuito.",
    blocks: [
      "Este exercício é diferente dos anteriores. Em vez de uma tarefa única, você vai escolher um dos três caminhos abaixo — aquele que mais faz sentido pra sua realidade agora.",
      { h: "Caminho 1 — Crie um post completo pra redes sociais" },
      "Escolha um tema que você conhece ou que te interessa. Abra o ChatGPT ou o Gemini e peça:",
      {
        q: "Quero criar um post sobre [tema] pra o Instagram. Me dá um texto de legenda envolvente, com no máximo 150 palavras, um gancho forte na primeira linha, e 5 sugestões de hashtags relevantes.",
      },
      "Depois, abra o Canva (canva.com) e crie um card visual pra acompanhar o post. Use um template de post de Instagram, substitua o texto pelo que a IA gerou e ajuste as cores e fontes do jeito que você quer. O resultado é um post completo — texto e imagem — criado do zero com ajuda de IA.",
      { h: "Caminho 2 — Monte uma apresentação sobre algo que você aprendeu" },
      "Escolha qualquer conteúdo que você estudou recentemente. Abra o ChatGPT ou o Gemini e peça:",
      {
        q: "Preciso montar uma apresentação de 6 slides sobre [tema]. Me dá o roteiro completo: título de cada slide e os 3 pontos principais de cada um, em linguagem clara e direta.",
      },
      "Com o roteiro em mãos, abra o Canva, escolha um template de apresentação que você goste, e monte os slides encaixando o conteúdo gerado. Personalize as cores, adicione imagens e deixe com a sua cara.",
      { h: "Caminho 3 — Crie o esboço de um projeto pessoal" },
      "Pense em algo que você gostaria de criar, construir ou começar — pode ser qualquer coisa: um canal, um negócio simples, um projeto escolar, uma ideia que você tem na cabeça faz tempo mas nunca tirou do papel. Abra o ChatGPT ou o Gemini e escreva:",
      {
        q: "Tenho uma ideia: [descreve sua ideia com detalhes]. Me ajuda a transformar isso num plano inicial com: nome do projeto, público-alvo, o que vai ser oferecido, como vai funcionar na prática, e três primeiros passos concretos pra começar essa semana.",
      },
      { h: "O que observar em qualquer caminho" },
      "Você conseguiu criar algo do zero que não existia antes de abrir a ferramenta? O resultado ficou próximo do que você tinha em mente? O que você mudaria se fizesse de novo?",
      "Guarde o que você criou. É o começo do seu portfólio.",
    ],
  },
};

export default m05;
