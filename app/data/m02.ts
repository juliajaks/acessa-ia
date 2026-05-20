import type { ModuleData } from "./types";

const m02: ModuleData = {
  number: "02",
  slug: "m02",
  title: "Ferramentas gratuitas que você pode usar hoje",
  description:
    "Conheça o ChatGPT, Gemini e Copilot: como acessar de graça, o que cada um faz melhor e como começar agora mesmo.",
  icon: "🛠️",
  aulas: [
    {
      number: 1,
      slug: "aula-1",
      title: "ChatGPT, Gemini e Copilot — o que são e como acessar",
      intro: [
        "Quando as pessoas falam de IA, geralmente falam de um nome só — ChatGPT. Mas o ChatGPT é só uma das ferramentas disponíveis, e nem sempre é a melhor opção dependendo do que você precisa. Existem outras igualmente poderosas, igualmente gratuitas, e que em alguns casos funcionam ainda melhor no celular ou sem precisar de cadastro.",
        "Nesta aula você vai conhecer as três principais: ChatGPT, Gemini e Copilot. Vai entender o que cada uma faz, quais são as diferenças práticas entre elas e como acessar cada uma sem gastar nada. Sem enrolação, sem comparativos técnicos desnecessários — só o que importa pra você começar a usar hoje.",
        "Uma coisa importante antes de começar: todas essas ferramentas têm versões pagas com mais recursos, mas as versões gratuitas já são extremamente úteis. Se em algum momento a ferramenta pedir cartão de crédito ou pagamento, não é necessário — é só uma oferta, não uma exigência.",
      ],
      body: [
        "O **ChatGPT** é o mais famoso, criado pela empresa OpenAI. Foi ele que popularizou as IAs de conversa no mundo todo quando foi lançado em 2022. Você acessa pelo site **chat.openai.com** ou pelo aplicativo ChatGPT, disponível pra Android e iPhone. Pra usar, você precisa criar uma conta gratuita com e-mail — pode ser o Gmail que você já tem. A versão gratuita usa o modelo GPT-4o mini, que já é muito capaz pra conversas, textos, resumos e perguntas gerais.",
        "O **Gemini** é a IA do Google. Você acessa pelo site **gemini.google.com** — e aqui tem uma vantagem importante: dá pra usar no navegador do celular sem precisar criar conta específica, só com a conta do Google que você provavelmente já tem. Se você usa Gmail, YouTube ou qualquer serviço do Google, já tem acesso. O Gemini se destaca bastante em tarefas que envolvem pesquisa e informações atualizadas, porque ele tem integração com a busca do Google — algo que o ChatGPT gratuito não tem da mesma forma.",
        "O **Microsoft Copilot** é a IA da Microsoft, e talvez seja a mais subestimada das três. Você acessa pelo site **copilot.microsoft.com** ou pelo próprio navegador Edge do celular — sem precisar de conta nenhuma. O Copilot gratuito já usa o modelo GPT-4 da OpenAI, o mesmo que o ChatGPT Plus cobra por acesso. Isso significa que, em termos de capacidade bruta de linguagem, o Copilot gratuito está no nível do plano pago do ChatGPT. Ele é especialmente bom pra pesquisas que precisam de fontes — ele costuma indicar de onde tirou cada informação.",
        "Como escolher qual usar? No começo, não precisa escolher. Experimente as três, veja qual interface você prefere, qual responde melhor ao tipo de coisa que você costuma perguntar. Com o tempo, você vai desenvolver uma intuição natural sobre quando usar cada uma. Mas se precisar de um ponto de partida: use o **Gemini** pra pesquisas e informações atuais, o **Copilot** pra perguntas que precisam de fontes, e o **ChatGPT** pra conversas mais longas, criação de texto e exercícios de estudo.",
        "Existe também o **Claude**, da empresa Anthropic, acessível em **claude.ai**. É uma ferramenta excelente pra texto longo, análise e conversas mais aprofundadas. A versão gratuita tem um limite de uso diário, mas dentro desse limite é muito competitiva. Vale a pena conhecer também.",
        "Uma coisa que todas essas ferramentas têm em comum: elas conversam. Não é um formulário onde você preenche campos — é uma janela de chat, igual ao WhatsApp. Você escreve, ela responde. Você replica, ela se adapta. Você pede pra refazer, ela refaz. Quanto mais você usa, mais natural fica essa interação.",
        "Nos próximos dias, o objetivo é simples: abra pelo menos uma dessas ferramentas e faça uma pergunta sobre qualquer coisa que você queira saber. Não precisa ser nada sofisticado. Qualquer dúvida serve. O importante é quebrar o gelo e sentir como é a experiência na prática.",
      ],
      closing:
        "Você agora sabe onde estão as ferramentas — o próximo passo é aprender a usá-las do jeito certo.",
    },
    {
      number: 2,
      slug: "aula-2",
      title: "Como fazer perguntas que geram respostas úteis",
      intro: [
        "Existe uma habilidade que faz mais diferença do que qualquer outra quando o assunto é IA: saber perguntar. Não é exagero. Duas pessoas usando a mesma ferramenta podem ter experiências completamente diferentes dependendo de como cada uma faz os pedidos. Uma sai frustrada achando que a IA é inútil. A outra sai com exatamente o que precisava em poucos minutos.",
        "Essa habilidade tem um nome no mundo da tecnologia — se chama \"prompt engineering\", que em português seria algo como \"engenharia de prompts\". Soa técnico, mas o conceito é simples: um prompt é o que você escreve pra IA, e quanto melhor você elabora esse pedido, melhor a resposta que você recebe.",
        "A boa notícia é que você não precisa de nenhum conhecimento técnico pra dominar isso. É mais sobre comunicação do que sobre tecnologia. E as regras são intuitivas — quando você entende a lógica, fica fácil aplicar em qualquer situação.",
      ],
      body: [
        { h: "Princípio 1: seja específico" },
        "A IA não lê mente. Ela responde com base no que você escreve. Se você escreve pouco, ela vai preencher as lacunas com suposições — e essas suposições nem sempre são as certas. Compare: **\"Me fala sobre o ENEM\"** versus **\"Quero me preparar pro ENEM de ciências da natureza. Me explica quais são os temas mais cobrados em biologia nos últimos 5 anos e como eu deveria organizar minha revisão.\"** O segundo pedido tem contexto real. A resposta vai ser infinitamente mais útil.",
        { h: "Princípio 2: dê contexto sobre você" },
        "A IA não sabe quem você é. Se você está perguntando algo pra estudar, diz isso. Se você é iniciante no assunto, diz isso. Se você precisa de uma resposta curta porque está sem tempo, diz isso. Exemplos de como adicionar contexto: \"Sou iniciante e nunca estudei esse assunto.\" / \"Precisa ser uma explicação curta, tenho pouco tempo.\" / \"Explica como se eu tivesse 16 anos.\" / \"Quero usar isso pra uma apresentação escolar.\" Esses poucos detalhes mudam completamente o tom e o nível da resposta.",
        { h: "Princípio 3: peça o formato que você quer" },
        "A IA pode responder em texto corrido, em lista, em tabela, em tópicos, como um passo a passo numerado, como um resumo de três parágrafos — o que você pedir. Diga o formato explicitamente: \"Responde em forma de lista.\" Ou: \"Me dá um passo a passo numerado.\" Ou: \"Resume em no máximo 5 linhas.\" Ou: \"Monta uma tabela comparando as duas opções.\" Quanto mais claro for o formato pedido, mais fácil de usar o resultado.",
        { h: "Princípio 4: continue a conversa" },
        "Uma das maiores vantagens das IAs de conversa é que elas lembram o contexto da troca enquanto a janela está aberta. Se a primeira resposta não foi o que você esperava, você não precisa começar do zero. Você pode simplesmente ajustar: \"Fica muito longo. Resume mais.\" / \"Não entendi essa parte. Explica de outro jeito.\" / \"Agora faz o mesmo, mas com foco em química.\" / \"Adiciona exemplos práticos.\" Cada ajuste refina a resposta.",
        { h: "Princípio 5: diga pra IA qual papel ela deve jogar" },
        "Em vez de só fazer uma pergunta, você pode dizer quem você quer que a IA seja naquela conversa. \"Age como um professor de história explicando pra um aluno do ensino médio.\" Ou: \"Age como um recrutador de RH avaliando meu currículo.\" Ou: \"Age como um amigo que entende de finanças e está me dando um conselho honesto.\" Essa instrução muda completamente o tom e o foco da resposta.",
        "Juntando tudo: um bom prompt tem **quem você é**, **o que você quer**, **pra que serve**, **qual formato você prefere** e, quando faz sentido, **qual papel a IA deve assumir**. Você não precisa incluir tudo sempre — mas quando você precisa de algo específico e útil, esses elementos fazem toda a diferença.",
      ],
      closing:
        "A qualidade da ferramenta depende da qualidade de como você usa — e agora você já sabe como usar melhor do que a maioria.",
    },
    {
      number: 3,
      slug: "aula-3",
      title: "Erros comuns de quem está começando",
      intro: [
        "Todo mundo comete erros quando começa a usar qualquer ferramenta nova. Com IA não é diferente. Mas tem alguns erros que são muito comuns e que, se você souber de antemão, pode evitar logo de cara — e economizar bastante frustração no processo.",
        "Esta aula não é pra te assustar. É pra te colocar um passo à frente. Conhecer os erros mais comuns antes de cometê-los é uma vantagem real, porque significa que você vai chegar mais rápido ao ponto onde a ferramenta de fato te ajuda.",
        "E tem um princípio que vale lembrar antes de tudo: errar faz parte. A IA não julga, não fica impaciente, não te olha diferente. Você pode tentar de novo quantas vezes quiser.",
      ],
      body: [
        { h: "Erro 1: acreditar em tudo que a IA responde" },
        "Esse é de longe o erro mais perigoso. As IAs são extremamente convincentes — elas escrevem com confiança, de forma fluida, sem hesitar. O problema é que elas também erram, e quando erram, erram com o mesmo nível de confiança com que acertam. O termo técnico pra isso é \"alucinação\": a IA gera uma informação que parece certa mas é inventada. Isso acontece com mais frequência em dados específicos: datas, nomes, números, citações. A regra prática é simples: pra informações que você vai usar de verdade, sempre verifique numa fonte confiável.",
        { h: "Erro 2: desistir depois da primeira resposta ruim" },
        "Muita gente testa a IA uma vez, recebe uma resposta que não serve, e conclui que a ferramenta é inútil. Isso é como desistir de aprender a andar de bicicleta depois da primeira queda. A primeira resposta não é o resultado final — é o começo de uma conversa. Se a resposta ficou genérica demais, peça mais detalhe. Se ficou longa demais, peça pra resumir. Se não ficou no tom certo, diz qual tom você quer. A IA é extremamente responsiva a ajustes.",
        { h: "Erro 3: perguntas vagas demais" },
        "\"Me ajuda com história.\" O que exatamente? Qual período? Qual aspecto? Pra qual finalidade? Quando a pergunta é vaga, a resposta é vaga. Antes de escrever sua pergunta, pense por 10 segundos: o que exatamente eu preciso? Pra quê? Em que formato? Esses 10 segundos de preparação economizam vários minutos de conversa improdutiva.",
        { h: "Erro 4: usar a IA só pra fazer o trabalho por você, sem aprender nada" },
        "É possível pedir pra IA escrever uma redação, responder uma lista de exercícios ou montar um trabalho escolar do zero — e tecnicamente ela faz. O problema é que você passa pelo processo sem aprender nada. A IA é mais valiosa como parceira de aprendizado do que como substituta de esforço. Use ela pra entender o que você não entendeu, pra tirar dúvidas, pra revisar o que você escreveu. Quando você usa a IA pra aprender, o conhecimento fica com você.",
        { h: "Erro 5: não saber que as IAs têm limites de conhecimento" },
        "As IAs são treinadas com dados até uma certa data — isso é chamado de \"data de corte\". Depois dessa data, elas não sabem o que aconteceu no mundo, a menos que tenham acesso à internet em tempo real (como o Gemini e o Copilot têm em certos modos). Se você perguntar sobre algo que aconteceu recentemente, a resposta pode estar desatualizada. Pra esse tipo de informação, use buscas na internet e use a IA pra ajudar a entender o que você encontrou.",
        { h: "Erro 6: achar que a IA é neutra e imparcial" },
        "A IA foi treinada por humanos, com dados produzidos por humanos. Isso significa que ela pode reproduzir vieses — tendências e perspectivas que estão nos dados com os quais ela aprendeu. Use o senso crítico. Se uma resposta te parece estranha ou unilateral, questione, pesquise outras fontes, forme sua própria opinião. Quem conhece os limites de uma ferramenta usa ela com muito mais inteligência.",
      ],
      closing:
        "Quem conhece os limites de uma ferramenta usa ela com muito mais inteligência — e é exatamente isso que você acabou de fazer.",
    },
  ],
  exercise: {
    title: "Testando as três ferramentas com o mesmo pedido",
    subtitle:
      "Funciona no celular. Sem precisar de conta em todas — o Copilot não precisa de nenhuma.",
    blocks: [
      "Escolha uma dúvida real que você tem sobre qualquer assunto — pode ser de uma matéria da escola, sobre uma profissão que te interessa, sobre como funciona algo que você quer entender melhor.",
      "Formule um pedido bem estruturado usando o que você aprendeu nesta aula. Inclua contexto, especifique o formato e diga seu nível de conhecimento no assunto:",
      {
        q: "Sou estudante do ensino médio e nunca estudei [tema]. Me explica os conceitos principais de um jeito simples, com exemplos do dia a dia, em no máximo 10 linhas.",
      },
      "Agora faça esse mesmo pedido, com a mesma frase, nas três ferramentas:",
      {
        li: [
          "Gemini — gemini.google.com",
          "Copilot — copilot.microsoft.com",
          "ChatGPT — chat.openai.com (precisa de conta gratuita)",
        ],
      },
      { h: "O que observar" },
      "Compare as respostas. Qual ficou mais clara? Qual ficou mais completa? Qual usou uma linguagem mais próxima da sua? Qual indicou fontes ou links? Alguma delas errou algo que as outras acertaram?",
      "O objetivo do exercício é você desenvolver a sua própria percepção sobre qual funciona melhor pra cada tipo de coisa que você precisa.",
    ],
  },
};

export default m02;
