import { ChapterContent, BookRecommendation } from './types';

export const EBOOK_CHAPTERS: ChapterContent[] = [
  {
    id: 'intro',
    title: 'Bem-vindo à Jornada da Riqueza',
    subtitle: 'Transforme sua mentalidade, transforme sua vida',
    icon: 'Sparkles',
    content: [
      'Este e-book é seu guia definitivo para alcançar a liberdade financeira e desenvolver uma mentalidade milionária.',
      'Você está prestes a descobrir os segredos que separam os ricos dos pobres - e não é apenas dinheiro.',
      'Prepare-se para uma transformação completa: mental, financeira e comportamental.',
      'Cada capítulo foi cuidadosamente elaborado para fornecer conhecimento prático e acionável.',
    ],
  },
  {
    id: 'mindset',
    title: 'A Mentalidade Milionária',
    subtitle: 'Como os ricos pensam diferente',
    icon: 'Brain',
    content: [
      'A diferença entre ricos e pobres começa na mente. Enquanto pessoas pobres veem obstáculos, milionários enxergam oportunidades.',
      'Seu cérebro é programável. As crenças limitantes sobre dinheiro foram instaladas na infância, mas podem ser reprogramadas.',
      'Milionários não trabalham por dinheiro - fazem o dinheiro trabalhar para eles através de investimentos e ativos.',
      'O medo do fracasso paralisa. A mentalidade de crescimento transforma fracassos em aprendizados valiosos.',
    ],
    mindsetPrinciples: [
      {
        principle: 'Abundância vs Escassez',
        explanation: 'Pessoas ricas acreditam que há riqueza suficiente para todos. Pessoas pobres acreditam em recursos limitados.',
        action: 'Pratique gratidão diária e celebre o sucesso dos outros. Isso reprograma seu cérebro para abundância.',
      },
      {
        principle: 'Ativos vs Passivos',
        explanation: 'Ricos compram ativos (que geram renda). Pobres compram passivos achando que são ativos.',
        action: 'Antes de comprar algo, pergunte: "Isso vai me gerar dinheiro ou me custar dinheiro?"',
      },
      {
        principle: 'Educação Financeira Contínua',
        explanation: 'Milionários investem em conhecimento constantemente. Pobres param de aprender após a escola.',
        action: 'Dedique 30 minutos diários para ler sobre finanças, investimentos e desenvolvimento pessoal.',
      },
      {
        principle: 'Ação Massiva',
        explanation: 'Ricos agem apesar do medo. Pobres esperam o momento perfeito que nunca chega.',
        action: 'Implemente a regra dos 5 segundos: quando tiver uma ideia, aja em 5 segundos antes que o medo paralise.',
      },
    ],
  },
  {
    id: 'money-management',
    title: 'Gestão Inteligente do Dinheiro',
    subtitle: 'Domine suas finanças pessoais',
    icon: 'Wallet',
    content: [
      'Não importa quanto você ganha, mas quanto você guarda e como investe.',
      'A regra de ouro: Pague-se primeiro! Antes de pagar contas, separe 10-20% para investimentos.',
      'Crie múltiplas contas: Essenciais (50%), Investimentos (20%), Educação (10%), Lazer (10%), Doações (10%).',
      'Elimine dívidas de alto custo (cartão de crédito, cheque especial) antes de investir agressivamente.',
    ],
    tips: [
      {
        title: 'Método dos Envelopes Digital',
        description: 'Divida seu salário em categorias específicas e não misture os recursos.',
        example: 'Salário de R$ 5.000: R$ 2.500 (essenciais), R$ 1.000 (investimentos), R$ 500 (educação), R$ 500 (lazer), R$ 500 (reserva).',
        icon: 'Wallet',
      },
      {
        title: 'Regra das 24 Horas',
        description: 'Antes de comprar algo acima de R$ 200, espere 24 horas. Compras impulsivas destroem patrimônio.',
        example: 'Viu um tênis de R$ 800? Anote e volte amanhã. 80% das vezes você perceberá que não precisa.',
        icon: 'Clock',
      },
      {
        title: 'Automatize Seus Investimentos',
        description: 'Configure transferências automáticas no dia do salário. Você não sente falta do que não vê.',
        example: 'Todo dia 5, R$ 500 vão automaticamente para sua corretora. Em 1 ano: R$ 6.000 + juros.',
        icon: 'Repeat',
      },
      {
        title: 'Corte os "Lattes Financeiros"',
        description: 'Pequenos gastos diários somam fortunas ao longo do tempo.',
        example: 'R$ 15/dia em cafeteria = R$ 450/mês = R$ 5.400/ano. Investido a 10% ao ano por 20 anos = R$ 343.000!',
        icon: 'Coffee',
      },
    ],
  },
  {
    id: 'compound-interest',
    title: 'O Poder dos Juros Compostos',
    subtitle: 'A 8ª maravilha do mundo segundo Einstein',
    icon: 'TrendingUp',
    content: [
      'Juros compostos são juros sobre juros. Seu dinheiro cresce exponencialmente, não linearmente.',
      'Quanto mais cedo você começar, maior será o impacto. 10 anos de diferença podem significar milhões.',
      'A consistência vence a intensidade. R$ 500/mês por 30 anos supera R$ 5.000/mês por 5 anos.',
      'Use a calculadora abaixo para visualizar o poder transformador dos juros compostos no seu futuro financeiro.',
    ],
    tips: [
      {
        title: 'Comece Hoje, Não Amanhã',
        description: 'Cada dia de atraso custa milhares de reais no futuro.',
        example: 'Investir R$ 500/mês aos 25 anos (até 65): R$ 3,8 milhões. Começar aos 35: R$ 1,4 milhão. Diferença: R$ 2,4 milhões!',
        icon: 'Rocket',
      },
      {
        title: 'Reinvista os Dividendos',
        description: 'Nunca gaste os rendimentos. Reinvista tudo para acelerar o crescimento exponencial.',
        example: 'R$ 100.000 a 10% ao ano: gastando dividendos = R$ 100.000 sempre. Reinvestindo = R$ 672.000 em 20 anos.',
        icon: 'RefreshCw',
      },
      {
        title: 'Aumente Aportes Gradualmente',
        description: 'A cada aumento salarial, aumente também seus investimentos proporcionalmente.',
        example: 'Ganhou 10% de aumento? Aumente seus aportes em 5%. Você melhora de vida E acelera a riqueza.',
        icon: 'ArrowUp',
      },
    ],
  },
  {
    id: 'economy',
    title: 'Economia e Mercado',
    subtitle: 'Como mudanças econômicas afetam seu bolso',
    icon: 'LineChart',
    content: [
      'Você não vive isolado. Decisões do governo, inflação e juros impactam diretamente sua vida financeira.',
      'Entender economia básica te dá vantagem competitiva e protege seu patrimônio.',
      'Crises são oportunidades disfarçadas. Quem entende o jogo compra barato e vende caro.',
      'Diversificação geográfica e de ativos protege contra instabilidade política e econômica.',
    ],
    economicConcepts: [
      {
        term: 'PIB (Produto Interno Bruto)',
        definition: 'Soma de todos os bens e serviços produzidos no país em um período. Mede o tamanho da economia.',
        realLifeImpact: 'PIB crescendo = mais empregos, salários maiores, empresas lucrando. PIB caindo = recessão, desemprego, seu poder de compra diminui.',
      },
      {
        term: 'Taxa Selic',
        definition: 'Taxa básica de juros da economia brasileira, definida pelo Banco Central.',
        realLifeImpact: 'Selic alta = renda fixa rende mais, mas empréstimos ficam caros. Selic baixa = renda fixa rende menos, hora de investir em ações.',
      },
      {
        term: 'Inflação',
        definition: 'Aumento generalizado dos preços. Seu dinheiro perde poder de compra ao longo do tempo.',
        realLifeImpact: 'Inflação de 5% ao ano significa que R$ 100 hoje valerão R$ 95 daqui 1 ano. Por isso investir é obrigatório, não opcional.',
      },
      {
        term: 'Câmbio (Dólar)',
        definition: 'Valor da moeda estrangeira em relação ao Real. Afeta importações, exportações e investimentos.',
        realLifeImpact: 'Dólar subindo = viagens e produtos importados mais caros, mas suas ações e investimentos em dólar valem mais em reais.',
      },
      {
        term: 'Déficit Público',
        definition: 'Quando o governo gasta mais do que arrecada. Precisa se endividar para cobrir a diferença.',
        realLifeImpact: 'Déficit alto = governo aumenta impostos ou imprime dinheiro (gerando inflação). Seu bolso paga a conta sempre.',
      },
    ],
  },
  {
    id: 'government',
    title: 'Como o Governo Funciona',
    subtitle: 'Entenda quem controla as regras do jogo',
    icon: 'Building',
    content: [
      'O governo define as regras: impostos, juros, regulamentações. Ignorar isso é jogar vendado.',
      'Políticas fiscais (gastos e impostos) e monetárias (juros e moeda) impactam seus investimentos diretamente.',
      'Eleições mudam o jogo. Governos diferentes têm prioridades diferentes que afetam setores específicos.',
      'Aprenda a ler sinais políticos e econômicos para antecipar movimentos do mercado.',
    ],
    tips: [
      {
        title: 'Acompanhe Decisões do Banco Central',
        description: 'Reuniões do COPOM definem a Selic. Isso muda completamente a estratégia de investimentos.',
        example: 'Selic subindo? Aumente posição em Tesouro Selic e CDBs. Selic caindo? Hora de aumentar ações e fundos imobiliários.',
        icon: 'Building2',
      },
      {
        title: 'Entenda Reformas Estruturais',
        description: 'Reformas tributária, previdenciária e administrativa impactam setores inteiros da economia.',
        example: 'Reforma tributária aprovada? Setores de consumo podem ser afetados. Ajuste seu portfólio antecipadamente.',
        icon: 'FileText',
      },
      {
        title: 'Diversifique Geograficamente',
        description: 'Não coloque todos os ovos na cesta Brasil. Invista em ativos internacionais.',
        example: 'Tenha 20-30% do patrimônio em dólar (ETFs, ações americanas, REITs). Protege contra crises locais.',
        icon: 'Globe',
      },
    ],
  },
  {
    id: 'books',
    title: 'Biblioteca do Milionário',
    subtitle: 'Livros que transformam vidas',
    icon: 'BookOpen',
    content: [
      'Milionários são leitores vorazes. A média é 5+ livros por mês sobre negócios e desenvolvimento.',
      'Cada livro abaixo contém décadas de experiência condensadas. Vale mais que qualquer curso caro.',
      'Não apenas leia - implemente. Um livro aplicado vale mais que 100 livros lidos.',
      'Invista em conhecimento. É o único ativo que ninguém pode tirar de você.',
    ],
  },
  {
    id: 'action-plan',
    title: 'Seu Plano de Ação',
    subtitle: 'Transforme conhecimento em resultados',
    icon: 'Target',
    content: [
      'Conhecimento sem ação é ilusão. Este é seu plano de 90 dias para começar a jornada milionária.',
      'Seja consistente. Pequenas ações diárias criam resultados extraordinários ao longo do tempo.',
      'Meça seu progresso. O que não é medido não é gerenciado.',
      'Celebre pequenas vitórias. Cada passo conta na maratona da riqueza.',
    ],
    tips: [
      {
        title: 'Dias 1-30: Fundação',
        description: 'Organize suas finanças, elimine gastos desnecessários, abra conta em corretora.',
        example: 'Semana 1: Planilha de gastos. Semana 2: Cortar 3 gastos supérfluos. Semana 3: Abrir conta. Semana 4: Primeiro aporte de R$ 100.',
        icon: 'Calendar',
      },
      {
        title: 'Dias 31-60: Aceleração',
        description: 'Aumente aportes, estude 1 livro de finanças, configure investimentos automáticos.',
        example: 'Leia "Do Mil ao Milhão". Aumente aportes para R$ 300/mês. Configure débito automático no dia do salário.',
        icon: 'Zap',
      },
      {
        title: 'Dias 61-90: Otimização',
        description: 'Diversifique investimentos, busque renda extra, revise e ajuste estratégia.',
        example: 'Adicione ações e fundos imobiliários. Inicie freelance ou venda online. Revise metas e celebre progresso.',
        icon: 'Settings',
      },
      {
        title: 'Mentalidade Diária',
        description: 'Pratique afirmações, visualização e gratidão todos os dias.',
        example: 'Manhã: "Sou um ímã de dinheiro e oportunidades". Noite: Liste 3 coisas pelas quais é grato financeiramente.',
        icon: 'Heart',
      },
    ],
  },
];

export const RECOMMENDED_BOOKS: BookRecommendation[] = [
  {
    title: 'Do Mil ao Milhão',
    author: 'Thiago Nigro (Primo Rico)',
    description: 'Guia prático para sair do zero e construir patrimônio através de investimentos inteligentes. Linguagem acessível e exemplos brasileiros.',
    amazonLink: 'https://www.amazon.com.br/Do-mil-milhão-cafezinho-best-seller/dp/8595083274/ref=sr_1_1?adgrpid=131281767354&dib=eyJ2IjoiMSJ9.QCCU0Gdm5Kjin--KJnOjLy6iT4Ga7AwJLRcl4EWmkFyyQBGgYmMd_j3p_sheTy7nwnjgtTUpR07nOOaH5bGw1thZVksGBDXrotnB89FjMRigjIW-6m_xKsakMJlZ0YX0wnIKtu56zirLSJBRs_pVkihDxO08fu51ZoqwF8S2frbmpZOtiqvapuH1jqlvy0QPyN71jhkcEB3YJrbnlY3aMgb2lEXS0GNcA9b-8RoXIl5mnnIM1tHK031coG0O4_ZWHi_xqvXbMBMy_eYx7GxHC6kTxVlk4-NXRNh_Ah8qZfk.yvQHu-yOBtJaoodRfSvvJlYWUwK5ifE6i2c_2ulFo00&dib_tag=se&hvadid=595853710063&hvdev=c&hvlocphy=9100274&hvnetw=g&hvqmt=e&hvrand=6289771541539468396&hvtargid=kwd-523898564110&hydadcr=20714_13349182&keywords=do+mil+ao+milhão&mcid=e2073881fed33e23b3c54537cf17d782&qid=1762966396&sr=8-1',
    imageUrl: 'https://images.unsplash.com/photo-1554224311-beee4ece8c35?w=400&h=600&fit=crop',
  },
  {
    title: 'Quem Pensa Enriquece',
    author: 'Napoleon Hill',
    description: 'Baseado em 20 anos de pesquisa com milionários. Os 13 princípios universais do sucesso e da riqueza.',
    amazonLink: 'https://www.amazon.com.br/Quem-Pensa-Enriquece-Legado-Napoleon/dp/8568014542/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=2BXAFQI0EQ1L5&dib=eyJ2IjoiMSJ9.2JVKE9p5AZc7qV4yUEf2caqsBgcsVeqbWrr0NPJKHrCrNtwBTv_tSBj7pkHP6G768mYJQ_ayEW0wDW8-lvueJ3F9v9BBLSuXKb-YHKc2IOf7gPEnX-rKe1q7FyUdDi-mGtNs4qcn25DhbIpNVlZeSkL1iDrP053MfPXmQVzsWr-yv8TQQ_mkhYthtfeXHoNJP4Jnr2V00zk7OdwzLXuOqOZWLBegpNWHz6A6kPEgatAewje4GefGDm4an7cb1Qqmr3NpiFZAKldheqdGHZW9z9ZTxlJbe9re2CujhUDRmRE.lE8U0f9WYLyBBrX9py7s4lek5u8Lxt4Gn1lQFnvd2RE&dib_tag=se&keywords=Quem+Pensa+Enriquece&qid=1762966476&sprefix=quem+pensa+enriquece%2Caps%2C195&sr=8-1',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=600&fit=crop',
  },
  {
    title: 'O Homem Mais Rico da Babilônia',
    author: 'George S. Clason',
    description: 'Lições atemporais sobre riqueza através de parábolas da antiga Babilônia. Princípios que funcionam há 4.000 anos.',
    amazonLink: 'https://www.amazon.com.br/Homem-Mais-Rico-Babilônia/dp/8595081530/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=3QKI96DU4HAGD&dib=eyJ2IjoiMSJ9.vr3cqICSg2vvyClkSpjR6WlmDUo-vmNXF4BS5EVXeN03ctdrMe0z7MOusqyXkUNR8WxjFhb2FXvG7UGqe0OiNYB1ywX-BsbG6hi8ZGZvm1xM7e-X5-KRaEqZbxct-nTslSnMMv9D2zcoHuhajrgt63KRUpEPxqDaX4EAC5fzTMsZZWtic5Nw1Almd3_paCvF4D1T3mJv6QOm3wy858jglYKQmEi8t_OgR6DLhgVR2e2ITQk_Pivnc6hHT3EPls1qH-2jbQJ-tsHhfchQBNI4iFYrbtmUUf1nC-3tTjwh4qs.LIwmEnl7GLiG0bRc43_e-VBA-IWtpY4YtwhY7Xz5gzo&dib_tag=se&keywords=O+Homem+Mais+Rico+da+Babilônia&qid=1762966529&sprefix=o+homem+mais+rico+da+babilônia%2Caps%2C194&sr=8-1',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop',
  },
  {
    title: 'Os Segredos da Mente Milionária',
    author: 'T. Harv Eker',
    description: 'Descubra como suas crenças sobre dinheiro foram programadas e aprenda a reprogramá-las para o sucesso financeiro.',
    amazonLink: 'https://www.amazon.com.br/segredos-mente-milion%C3%A1ria-Harv-Eker/dp/8575422391',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
  },
  {
    title: 'Pai Rico, Pai Pobre',
    author: 'Robert Kiyosaki',
    description: 'O clássico que mudou a forma como milhões de pessoas pensam sobre dinheiro. Ativos vs Passivos explicado de forma brilhante.',
    amazonLink: 'https://www.amazon.com.br/Pai-rico-pai-pobre-Robert/dp/8550801488',
    imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=600&fit=crop',
  },
  {
    title: 'O Investidor Inteligente',
    author: 'Benjamin Graham',
    description: 'A bíblia dos investimentos em valor. Livro que formou Warren Buffett e milhares de investidores de sucesso.',
    amazonLink: 'https://www.amazon.com.br/Investidor-Inteligente-Benjamin-Graham/dp/8595080801',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop',
  },
];

export const COLORS = {
  gold: '#D4AF37',
  darkGreen: '#0B5345',
  richBlack: '#1A1A1A',
  cream: '#F5F5DC',
  emerald: '#10B981',
  amber: '#F59E0B',
};
