import type { ModuleData } from "./types";

const m04: ModuleData = {
  number: "04",
  slug: "m04",
  title: "IA para o seu futuro profissional",
  description:
    "Monte um currículo com ajuda da IA, se prepare para entrevistas e descubra as novas profissões que estão surgindo.",
  icon: "💼",
  aulas: [
    {
      number: 1,
      slug: "aula-1",
      title: "Criando um currículo com ajuda da IA",
      intro: [
        "O currículo é muitas vezes a primeira impressão que você causa em qualquer processo seletivo. Antes de uma entrevista, antes de qualquer conversa, o recrutador vê um papel — ou uma tela — com as suas informações. E em segundos decide se você avança ou não. Isso coloca muita pressão num documento que a maioria das pessoas não sabe muito bem como montar.",
        "O problema é que ninguém ensina isso de forma direta. A escola não ensina, a família muitas vezes não sabe orientar, e os modelos que você encontra na internet são genéricos demais pra realmente te ajudar. O resultado é que muita gente chega na hora de se candidatar com um currículo mal estruturado.",
        "A IA muda esse jogo de uma forma muito concreta. Ela não vai inventar experiências que você não tem — isso seria desonesto e ia te prejudicar. Mas ela consegue ajudar a apresentar o que você tem da forma mais clara, mais profissional e mais adequada pra cada tipo de vaga.",
      ],
      body: [
        "O primeiro passo é reunir as informações brutas sobre você: onde você estudou, se já trabalhou em algum lugar (mesmo que informal, temporário ou voluntário), quais habilidades você tem, quais cursos ou certificados fez, quais idiomas fala, quais ferramentas ou programas sabe usar. Não se preocupe com formato ainda — só lista tudo que você tem, sem filtro.",
        "Com essas informações em mãos, você abre o ChatGPT, o Gemini ou o Copilot e faz um pedido como este:",
        {
          q: "Vou montar meu primeiro currículo. Tenho as seguintes informações sobre mim: [coloca tudo que você listou]. Me ajuda a organizar isso num formato profissional, com linguagem adequada pra quem está se candidatando ao primeiro emprego.",
        },
        "A IA vai estruturar as informações em seções claras — dados de contato, objetivo profissional, formação, experiência, habilidades — e vai ajustar a linguagem pra um tom mais profissional sem perder a autenticidade.",
        "Um ponto que muita gente não sabe: o **objetivo profissional**, aquele parágrafo curto no topo do currículo, é uma das partes mais importantes e mais mal aproveitadas. A maioria das pessoas escreve algo genérico tipo \"Busco uma oportunidade de crescimento profissional\" — o que não diz nada sobre quem você é. A IA consegue te ajudar a escrever um objetivo específico:",
        {
          q: "Me ajuda a escrever um objetivo profissional pra um currículo de [área que você quer]. Tenho [sua formação] e [suas habilidades]. Quero algo com no máximo 3 linhas, direto e profissional.",
        },
        "Outro uso muito valioso é **adaptar o currículo pra vagas específicas**. Recrutadores modernos usam sistemas que filtram currículos por palavras-chave antes de qualquer humano ler. Se a descrição da vaga fala em \"atendimento ao cliente\" e essa palavra não aparece no seu currículo, o sistema pode descartá-lo automaticamente. Você pode usar a IA pra isso:",
        {
          q: "Aqui está a descrição da vaga: [cola o texto]. E aqui está meu currículo atual: [cola o texto]. Me ajuda a ajustar o meu currículo pra se alinhar melhor com essa vaga, usando as palavras-chave certas, sem inventar nada que não seja verdade.",
        },
        "Isso não é trapaça — é estratégia de comunicação. Você está apresentando o que você tem de um jeito que faz mais sentido pra aquela oportunidade específica.",
        "Pra a parte visual, ferramentas gratuitas como o **Canva** (canva.com) têm templates prontos de currículo. O fluxo ideal é: usar a IA pra montar o conteúdo e a linguagem, e depois jogar esse conteúdo num template do Canva pra deixar com boa aparência.",
        "Uma última coisa importante: peça pra IA revisar seu currículo depois de pronto com uma avaliação crítica:",
        {
          q: "Aqui está meu currículo. Você é um recrutador experiente. O que está bom? O que chamaria atenção negativa? O que está faltando? O que você mudaria?",
        },
        "Esse tipo de feedback honesto, antes de mandar o currículo pra uma vaga real, pode fazer a diferença entre passar ou não passar pela primeira triagem.",
      ],
      closing:
        "Você não precisa de experiência de anos nem de um curso caro pra ter um currículo profissional — você precisa das informações certas e de saber como apresentá-las.",
    },
    {
      number: 2,
      slug: "aula-2",
      title: "Simulando entrevistas de emprego",
      intro: [
        "A entrevista de emprego é uma das situações que mais gera ansiedade — mesmo em pessoas experientes. Você não sabe exatamente o que vão perguntar, não sabe como vai se sair na hora, não sabe se vai travar ou falar demais. E quanto menos você praticou, mais intensa essa ansiedade costuma ser.",
        "A solução pra ansiedade de entrevista é simples na teoria e difícil na prática: praticar. Mas praticar entrevista exige que alguém do outro lado faça as perguntas — e nem sempre você tem acesso a alguém que possa simular isso de forma realista e dar um feedback honesto.",
        "A IA resolve exatamente isso. Você pode simular uma entrevista completa, com perguntas reais do mercado, quantas vezes quiser, sem julgamento, a qualquer hora do dia.",
      ],
      body: [
        "O setup básico pra uma simulação de entrevista é dar contexto pra IA sobre a vaga e pedir que ela assuma o papel de recrutador:",
        {
          q: "Vou simular uma entrevista de emprego. A vaga é de [cargo] numa empresa de [setor]. Você é o recrutador. Faz as perguntas uma por vez, espera minha resposta antes de fazer a próxima, e no final me dá um feedback geral sobre como me saí.",
        },
        "A partir daí, a IA conduz a entrevista como um recrutador real faria — e você responde como faria numa entrevista de verdade. Esse exercício, feito algumas vezes antes de uma entrevista real, reduz significativamente a ansiedade porque você já terá passado pela situação antes.",
        "Existem categorias de perguntas que aparecem em praticamente todas as entrevistas. Vale conhecer e preparar respostas pra cada uma:",
        {
          bh: [
            [
              "Perguntas sobre você",
              "\"Me fala sobre você.\" / \"Quais são seus pontos fortes?\" / \"Qual é seu maior ponto a melhorar?\" Essas parecem simples mas pegam muita gente desprevenida. Peça pra IA te ajudar a formular respostas que sejam honestas, diretas e estratégicas ao mesmo tempo.",
            ],
            [
              "Perguntas situacionais",
              "\"Me conta uma situação em que você teve um problema e como resolveu.\" / \"Já trabalhou em equipe com alguém difícil? Como lidou?\" Essas pedem histórias reais. A IA pode te ajudar a estruturar suas experiências — mesmo que informais — num formato que responde bem a esse tipo de pergunta.",
            ],
            [
              "Perguntas sobre a vaga e a empresa",
              "\"Por que você quer trabalhar aqui?\" / \"O que você sabe sobre nossa empresa?\" Aqui a preparação faz toda diferença. Antes da entrevista real, use a IA pra pesquisar a empresa: \"Me conta sobre a empresa [nome], o que ela faz, quais são os valores dela, o que eu deveria saber antes de uma entrevista.\"",
            ],
          ],
        },
        "Depois de cada simulação, peça um feedback específico:",
        {
          q: "Como foi minha resposta pra essa pergunta? Fui claro? Fui específico o suficiente? O que eu deveria ter incluído que não incluí? Como eu poderia ter dito isso melhor?",
        },
        "Esse nível de análise é o que realmente prepara você. Não é sobre decorar respostas — é sobre entender o que os recrutadores buscam em cada tipo de pergunta.",
        "A IA também pode te ajudar a preparar as perguntas que **você vai fazer** ao recrutador — sim, você deveria fazer perguntas. Entrevistadores valorizam candidatos que demonstram interesse real pela vaga e pela empresa:",
        {
          q: "Que perguntas inteligentes eu poderia fazer ao recrutador numa entrevista pra [cargo]? Quero mostrar que me preparei e que tenho interesse genuíno.",
        },
        "Por fim, use a IA pra se preparar também nos aspectos não-verbais. Você pode perguntar: \"Quais são os erros de postura, linguagem e comportamento mais comuns em entrevistas de emprego? O que recrutadores observam além das respostas?\" Às vezes os detalhes de como você se apresenta importam tanto quanto o que você diz.",
      ],
      closing:
        "Entrevista é uma habilidade — e habilidade se treina. Quanto mais você pratica, mais natural fica na hora que conta.",
    },
    {
      number: 3,
      slug: "aula-3",
      title: "Profissões que a IA está abrindo para quem sabe usar",
      intro: [
        "Quando as pessoas falam sobre IA e mercado de trabalho, o foco costuma ser no que vai desaparecer — quais empregos a IA vai substituir, quais funções vão deixar de existir. Essa conversa tem alguma validade, mas ela ignora algo muito maior: o número de oportunidades novas que estão surgindo, especialmente pra quem aprender a usar essas ferramentas agora.",
        "Não estamos falando de empregos que exigem faculdade de cinco anos ou conhecimento de programação avançado. Estamos falando de funções que qualquer pessoa com acesso à internet, disposição pra aprender e senso crítico consegue desenvolver — muitas delas de forma autônoma, sem precisar ser contratado por ninguém.",
        "Esta aula não é uma lista de promessas. É uma visão honesta e prática de onde estão as oportunidades reais, o que cada uma exige e como você pode começar a se posicionar pra elas.",
      ],
      body: [
        {
          bh: [
            [
              "Criação de conteúdo assistida por IA",
              "Empresas, profissionais autônomos e negócios locais precisam de textos, posts, roteiros, legendas, e-mails e muito mais. Pessoas que sabem usar IA pra acelerar esse processo — mantendo qualidade, adaptando o tom, revisando o que a ferramenta gera — estão sendo contratadas como freelancers. Você não precisa ser escritor profissional. Precisa saber usar a ferramenta e ter bom senso sobre o que funciona ou não.",
            ],
            [
              "Criação de imagens e materiais visuais com IA",
              "Ferramentas como o Canva com IA integrada, o Adobe Firefly e outras permitem criar imagens, ilustrações, logos e materiais gráficos sem saber desenhar. Negócios pequenos precisam desse tipo de material constantemente e muitas vezes não têm orçamento pra contratar um designer. Quem sabe usar essas ferramentas encontra um mercado acessível e crescente.",
            ],
            [
              "Automação de processos com IA",
              "Muitas tarefas repetitivas em empresas — organizar planilhas, responder e-mails por categorias, catalogar informações, montar relatórios — podem ser automatizadas. Pessoas que aprendem a identificar quais processos podem ser automatizados e implementar essas soluções estão encontrando oportunidades em empresas de todos os tamanhos, muitas vezes como consultores ou freelancers.",
            ],
            [
              "Treinamento e avaliação de IA",
              "As empresas de IA precisam de pessoas pra revisar as respostas das ferramentas, identificar erros, avaliar se uma resposta foi boa ou ruim. Esse trabalho — chamado de anotação de dados — é feito remotamente, pago por tarefa, e não exige formação técnica. Plataformas como Scale AI e Remotasks recrutam para esse tipo de função em português.",
            ],
            [
              "Educação e consultoria sobre IA",
              "Você está aprendendo agora algo que a maioria das pessoas ainda não sabe. Em pouco tempo, você vai saber usar essas ferramentas melhor do que boa parte das pessoas ao seu redor. Existe uma demanda real por pessoas que consigam mostrar pra outros como usar IA de forma prática — em workshops, mentorias, consultorias, aulas presenciais ou online.",
            ],
          ],
        },
        "Um ponto importante sobre todas essas oportunidades: elas não exigem que você seja o maior especialista do mundo. Elas exigem que você saiba um pouco mais do que quem você está ajudando, e que você consiga entregar um resultado útil. O mercado de IA ainda está se formando — quem entra cedo, mesmo sem domínio completo, sai na frente.",
        "A IA também está transformando profissões que já existem — não substituindo, mas mudando o que se faz dentro delas. Um profissional de saúde que usa IA pra pesquisar, um advogado que usa IA pra revisar contratos, um professor que usa IA pra criar material didático — todos eles entregam mais, com menos tempo, e se tornam mais valiosos. Qualquer área que você já tenha interesse pode ser potencializada com IA.",
        "E isso é importante dizer claramente: nenhuma dessas oportunidades vai cair no seu colo. O que a IA oferece é uma redução de barreira — ela torna possível o que antes exigia mais tempo, mais dinheiro ou mais formação. Mas o esforço de aprender, de praticar, de se colocar no mercado — esse esforço continua sendo seu. A ferramenta potencializa quem age.",
      ],
      closing:
        "O mercado está mudando mais rápido do que os currículos escolares conseguem acompanhar — e você não precisa esperar o sistema te preparar pra isso.",
    },
  ],
  exercise: {
    title: "Seu currículo e sua primeira simulação de entrevista",
    subtitle: "Funciona no celular. Sem criar conta, sem download.",
    blocks: [
      { h: "Parte 1 — Monte seu currículo" },
      "Abra o Copilot (copilot.microsoft.com) ou o ChatGPT e envie a seguinte mensagem, preenchendo com suas informações reais:",
      {
        q: "Me ajuda a montar um currículo profissional. Aqui estão minhas informações: nome completo [seu nome], contato [seu e-mail ou telefone], formação [onde você estuda ou estudou], experiências [qualquer coisa — trabalho formal, informal, voluntário, estágio, bico], habilidades [o que você sabe fazer — pode ser soft skills também, como trabalhar em equipe, ser organizado], cursos ou certificados [se tiver], idiomas [português + outros se houver]. Quero o resultado organizado por seções, com linguagem profissional, adequado pra quem está buscando o primeiro emprego.",
      },
      "Leia o resultado. Ajuste o que não soar como você. Peça pra refinar qualquer parte que ficou estranha.",
      { h: "Parte 2 — Simule uma entrevista" },
      "Na mesma ferramenta ou em outra, envie:",
      {
        q: "Quero simular uma entrevista de emprego. A vaga é de [um cargo que você tem interesse]. Você é o recrutador. Faz as perguntas uma por vez e espera minha resposta. No final, me dá um feedback honesto de como me saí.",
      },
      "Responda as perguntas como faria numa entrevista real. Não releia nem corrija antes de enviar — simule a pressão do momento.",
      "Depois do feedback, escolha a pergunta onde você se saiu pior e peça:",
      { q: "Como eu poderia ter respondido essa pergunta de forma melhor? Me mostra um exemplo de resposta que seria mais eficaz." },
      { h: "O que observar" },
      "O currículo ficou mais profissional do que você conseguiria montar sozinho? A simulação te deixou mais confortável com o formato de entrevista? O feedback apontou algo que você não tinha percebido sobre as suas respostas? Guarde o currículo num documento — você vai precisar dele em breve.",
    ],
  },
};

export default m04;
