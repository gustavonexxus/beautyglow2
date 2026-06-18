import { Service, TeamMember } from './types';

// @ts-ignore
import toxinaBotulinicaImg from './assets/images/TOXINA BUULINICA.png';
// @ts-ignore
import preenchimentoFacialImg from './assets/images/preenchimento facial.png';
// @ts-ignore
import bioestimuladorImg from './assets/images/antes e depois bioestimulador.png';
// @ts-ignore
import nanopigmentacaoLabialImg from './assets/images/LABIOS.HEIC';
// @ts-ignore
import epilacaoImg from './assets/images/epilação.jfif';

export const PHONE_NUMBER = "5511932032385";
export const NAILS_PHONE_NUMBER = "5511953936451";

export const BRUNA_SERVICES: { [key: string]: Service[] } = {
  "Injetáveis & Rejuvenescimento": [
    { 
      id: "sk1", 
      name: "Toxina Botulínica (BOTOX)", 
      category: "Injetáveis", 
      description: "Suavização e prevenção de lines de expressão com planejamento individualizado para manter a dinâmica natural do rosto.",
      image: toxinaBotulinicaImg,
      imagePosition: "center",
      imageAspect: "aspect-square"
    },
    { 
      id: "sk2", 
      name: "Preenchimento Facial", 
      category: "Injetáveis", 
      description: "Restauração de volumes e contornos focada em harmonia global, evitando excessos e respeitando a anatomia individual.",
      image: preenchimentoFacialImg,
      imageAspect: "aspect-square"
    },
    { 
      id: "sk3", 
      name: "Bioestimulador de Colágeno", 
      category: "Injetáveis", 
      description: "Estímulo gradual da produção de colágeno pelo próprio organismo, promovendo firmeza e estrutura à pele a longo prazo.",
      image: bioestimuladorImg,
      imagePosition: "center",
      imageAspect: "aspect-square"
    }
  ],
  "Lábios": [
    { 
      id: "lb1", 
      name: "Nanopigmentação Labial", 
      category: "Lábios", 
      description: "Devolve vitalidade e definição sutil. Inclui neutralização de tons escurecidos e infusão de ácido hialurônico para saúde da pele.",
      image: nanopigmentacaoLabialImg,
      imageAspect: "aspect-square"
    },
    { 
      id: "lb2", 
      name: "Hidratação Labial", 
      category: "Lábios", 
      description: "Revitalização profunda com nanotecnologia. Melhora textura e viço, podendo incluir efeito lip tint temporário.",
      image: "https://pbs.twimg.com/media/HInyRooWYAAZ_Cl?format=jpg&name=large",
      imageAspect: "aspect-square"
    }
  ],
  "Sobrancelhas": [
    { 
      id: "sb1", 
      name: "Nanopigmentação de Sobrancelhas", 
      category: "Sobrancelhas", 
      description: "Pilar da Beauty Glow, focada em naturalidade e equilíbrio. Atua restaurando falhas e assimetrias respeitando o visagismo facial e incluindo o protocolo Brow Recovery.",
      image: "https://pbs.twimg.com/media/HInty-SWAAE9xhv?format=jpg&name=medium"
    },
    { 
      id: "sb2", 
      name: "Design Visagista", 
      category: "Sobrancelhas", 
      description: "Estudo de proporções e identidade. Mais que remoção de pelos, é a harmonização da expressão baseada na estrutura óssea e facial.",
      image: "https://pbs.twimg.com/media/HInxoPfXEAAhLAF?format=jpg&name=medium"
    },
    { 
      id: "sb3", 
      name: "Brow Lamination", 
      category: "Sobrancelhas", 
      description: "Alinhamento estratégico dos fios naturais para um olhar estruturado e definido, mantendo a leveza e saúde capilar.",
      image: "https://pbs.twimg.com/media/HInxSyrXoAAiXz-?format=jpg&name=medium"
    },
    { 
      id: "sb4", 
      name: "Brow Recovery", 
      category: "Sobrancelhas", 
      description: "Protocolo regenerativo para estimular o folículo e favorecer o crescimento saudável dos fios naturais das sobrancelhas.",
      image: "https://pbs.twimg.com/media/HIs4XGfXIAE9nj6?format=jpg&name=large",
      imagePosition: "center 42%",
      imageAspect: "aspect-square"
    }
  ],
  "Olhos": [
    { 
      id: "ol1", 
      name: "Lash Lifting", 
      category: "Olhos", 
      description: "Curvatura técnica personalizada dos cílios naturais, preservando a integridade dos fios e realçando o olhar de forma orgânica.",
      image: "https://pbs.twimg.com/media/HInzYFHWoAEFs5k?format=jpg&name=large"
    },
    { 
      id: "ol2", 
      name: "Nanopigmentação de Delineado", 
      category: "Olhos", 
      description: "Realce elegante e discreto da base dos cílios. Técnicas sutilmente esfumadas que valorizam o olhar sem pesar.",
      image: "https://pbs.twimg.com/media/HInzp41WEAAkKZv?format=jpg&name=large"
    }
  ],
  "Complementares": [
    { 
      id: "cm1", 
      name: "Epilação Facial (Linha)", 
      category: "Complementares", 
      description: "Remoção precisa com linha aprovada pela Anvisa, respeitando a sensibilidade e garantindo acabamento refinado.",
      image: epilacaoImg,
      imageAspect: "aspect-square"
    }
  ]
};

export const DUCY_SERVICES: { [key: string]: Service[] } = {
  "Alongamento": [
    { id: "na1", name: "Alongamento em Gel", category: "Alongamento", description: "Acabamento natural e resistente para um visual elegante e duradouro.", image: "https://pbs.twimg.com/media/HIW2lhSWgAEu1kc?format=jpg&name=medium" },
    { id: "na2", name: "Alongamento em Acrygel", category: "Alongamento", description: "Equilíbrio perfeito entre a leveza do gel e a força do acrílico.", image: "https://pbs.twimg.com/media/HIs3owwWsAEKWsh?format=jpg&name=large" },
    { id: "na3", name: "Alongamento em Polygel", category: "Alongamento", description: "Maleabilidade superior e resistência para formatos impecáveis.", image: "https://pbs.twimg.com/media/HIW2lhSWEAAHYPf?format=jpg&name=medium" },
    { id: "na4", name: "Faceta em Gel", category: "Alongamento", description: "Praticidade e durabilidade com géis pré-curados para correção estética.", image: "https://pbs.twimg.com/media/HIW2lhRW4AAfCKI?format=jpg&name=medium" },
    { id: "na5", name: "Alinhamento de Lâminas", category: "Alongamento", description: "Harmonização do formato natural sem necessidade de extensões completas.", image: "https://pbs.twimg.com/media/HIW2hpoWMAASxkV?format=jpg&name=medium" }
  ],
  "Blindagem & Fortalecimento": [
    { id: "st1", name: "Banho de Gel", category: "Blindagem", description: "Camada fina que fortalece as unhas naturais contra quebras e descamações.", image: "https://pbs.twimg.com/media/HIW2iJOXUAAN4NL?format=jpg&name=medium" },
    { id: "st2", name: "Blindagem", category: "Blindagem", description: "Proteção resistente sem volume excessivo sobre a unha natural.", image: "https://pbs.twimg.com/media/HIW2ipTWMAEnamk?format=jpg&name=medium" },
    { id: "st3", name: "Blindagem Cimentinho", category: "Blindagem", description: "Combinação de gel e acrílico para máxima dureza e crescimento saudável.", image: "https://pbs.twimg.com/media/HIW2lhRXQAAWoBS?format=jpg&name=medium" }
  ],
  "Estilo & Nail Art": [
    { id: "es1", name: "Formatos Personalizados", category: "Estilo", description: "Square, Almond ou Stiletto: design adaptado à anatomia das suas mãos.", image: "https://pbs.twimg.com/media/HIs4TdaXsAAOQuU?format=jpg&name=medium" },
    { id: "es2", name: "Nail Art Sofisticada", category: "Estilo", description: "Personalização com pedrarias, madrepérola e texturas para um visual exclusivo.", image: "https://pbs.twimg.com/media/HIn-0n2W8AACv9G?format=jpg&name=large" }
  ],
  "Cutilagem": [
    { id: "cu1", name: "Cutilagem Híbrida", category: "Cutilagem", description: "Técnica avançada que combina métodos manuais e mecânicos para um acabamento impecável e duradouro.", image: "https://pbs.twimg.com/media/HIt2C-eXYAA55UD?format=jpg&name=large" }
  ]
};

export const TEAM: TeamMember[] = [
  { id: "t1", name: "Bruna", role: "Founder & Estrategista", positioning: "Focada em gestão, qualidade e inovação. Idealizadora do método Beauty Glow de naturalidade consciente.", image: "https://pbs.twimg.com/media/HHo0jjRXgAQlz0C?format=jpg&name=4096x4096", imagePosition: "center 10%" },
  { id: "t2", name: "Juliana", role: "Lips & Lashes", positioning: "Líder de equipe e responsável pela qualidade técnica.", image: "https://pbs.twimg.com/media/HIn5oZ0WcAAwp2a?format=jpg&name=large" },
  { id: "t3", name: "Paloma", role: "Brows & Lashes", positioning: "Especialista em manter o rigor técnico e o conceito de sofisticação em cada detalhe do olhar.", image: "https://pbs.twimg.com/media/HIn6NfcWEAAwKy5?format=jpg&name=large", imagePosition: "center 15%" },
  { id: "t4", name: "Ellen", role: "Biomédica Esteta", positioning: "Especialista em procedimentos estéticos avançados e injetáveis, priorizando segurança absoluta e resultados naturais.", image: "https://pbs.twimg.com/media/HIrplDCWcAAvSXJ?format=jpg&name=large", imagePosition: "center 20%" }
];


export const TESTIMONIALS = [
  { 
    id: "te1", 
    author: "Maria Constantino", 
    content: "Minhas sobrancelhas estão naturalmente lindas desde que as deixei aos cuidados da Beauty Glow. Comecei com um tratamento para crescimento de pelos em falhas que foi um sucesso e não parei mais. Recomendo pra todo mundo!!",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWwxSM23NeSrUFGSrmsLR7EnoxG8byfqdBgu7F223s7MvXkl18fNA=w90-h90-p-rp-mo-br100"
  },
  { 
    id: "te2", 
    author: "Ana Paula Nunes", 
    content: "Eu não conhecia esta clínica de estética e fiquei impressionada pela qualidade do serviço. Recomendo.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWL5WCybqnR40vgrBufGAsAniU4bjd5XD6OtfYua3vbmkjbd-vT=w90-h90-p-rp-mo-br100"
  },
  { 
    id: "te3", 
    author: "Karen do Valle", 
    content: "Toda equipe maravilhosa, Bruna fez a micro em minha mãe e eu, e amamos o resultado e o cuidado especial em cada detalhe. Preço justo e serviço excepcional",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWrQmCV3W2sK0zHRtPPXw_WMqQHaP6aZCTFJr4i3Bkvc_aJfUWp=w90-h90-p-rp-mo-br100"
  },
  {
    id: "te4",
    author: "Beatriz M. Santos",
    content: "Clínica impecável! Fiz toxina botulínica e preenchimento labial com a dra. Ellen e o resultado ficou muito sutil e elegante. O espaço é lindo, acolhedor e biosseguro. Com certeza virou minha clínica de confiança em São Paulo.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXm89v7YpQ4_iPhnB9-jV_T1-99l_P8V2b-Z3Xp=s96-c"
  },
  {
    id: "te5",
    author: "Camila Rodrigues",
    content: "Excelente atendimento! O design visagista de sobrancelha e o Lash Lifting que fiz com a Paloma mudaram meu olhar sem perder a essência. Elas entendem de verdade o conceito de beleza consciente.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjV_Z-7fR0P9lS8oNuYQW4_0_f1-99l_P8V2b-Z3Xp=s96-c"
  },
  {
    id: "te6",
    author: "Isabela Fonseca",
    content: "Maravilhosa experiência na Beauty Glow. Desde a recepção até o procedimento de hidratação labial profunda, tudo perfeito. Um atendimento humanizado, focado realmente na queixa da cliente. Indico de olhos fechados!",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVk-AfgH_6-jV_T1-99l_P8V2b-Z3Xp=s96-c"
  }
];
