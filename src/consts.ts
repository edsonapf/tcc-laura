import HtmlKeyboardResponsePlugin from "@jspsych/plugin-html-keyboard-response";

const SPACE = " ";

export const EXPERIMENTS = [
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Luiz", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "trabalha",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "na cidade",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "onde", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "vivem", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "seus avós",
        choices: SPACE,
      },
    ],
    fake: false,
    phrase: "Luiz trabalha na cidade onde vivem seus avós",
    question: "Luiz trabalha onde vivem seus pais?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "João", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "foi", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "para casa",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "onde", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "mora", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "com sua família",
        choices: SPACE,
      },
    ],
    fake: false,
    phrase: "João foi para casa onde mora com sua família",
    question: "João mora com sua família?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Carla", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "está", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "na academia",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "onde", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "treina", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "frequentemente",
        choices: SPACE,
      },
    ],
    fake: false,
    phrase: "Carla está na academia onde treina frequentemente",
    question: "Carla treina frequentemente?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Amanda", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "irá", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "à UFPB", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "onde", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "estuda", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "Letras", choices: SPACE },
    ],
    fake: false,
    phrase: "Amanda irá à UFPB onde estuda Letras",
    question: "Amanda estuda Artes?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Edson", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "está", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "em casa", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "onde", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "trabalha",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "remoto", choices: SPACE },
    ],
    fake: false,
    phrase: "Edson está em casa onde trabalha remoto",
    question: "Edson está no shopping?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Bianca", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "foi", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "ao restaurante",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "onde", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "comeu", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "panqueca",
        choices: SPACE,
      },
    ],
    fake: false,
    phrase: "Bianca foi ao restaurante onde comeu panqueca",
    question: "Bianca comeu pizza?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Lívia", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "foi", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "à piscina",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "onde", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "fez", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "natação", choices: SPACE },
    ],
    fake: false,
    phrase: "Lívia foi à piscina onde fez natação",
    question: "Lívia foi à praia?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Lavínia", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "foi", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "ao shopping",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "onde", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "fez", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "compras", choices: SPACE },
    ],
    fake: false,
    phrase: "Lavínia foi ao shopping onde fez compras",
    question: "Lavínia foi ao shopping?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Carol", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "fez", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "sua festa",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "onde", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "todos", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "se divertiram",
        choices: SPACE,
      },
    ],
    fake: false,
    phrase: "Carol fez sua festa onde todos se divertiram",
    question: "Carol fez compras?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Pedro", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "fez", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "sua tarefa",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "onde", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "achou", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "difícil", choices: SPACE },
    ],
    fake: false,
    phrase: "Pedro fez sua tarefa onde achou difícil",
    question: "Pedro fez sua tarefa?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Maria", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "teve", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "uma infância",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "onde", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "foi", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "muito feliz",
        choices: SPACE,
      },
    ],
    fake: false,
    phrase: "Maria teve uma infância onde foi muito feliz",
    question: "Maria foi feliz durante sua infância?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Yasmin", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "ganhou", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "a camisa",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "onde", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "gostou", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "da cor", choices: SPACE },
    ],
    fake: false,
    phrase: "Yasmin ganhou a camisa onde gostou da cor",
    question: "Yasmin odiou a cor?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "Tarcísio",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "assistiu",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "ao filme",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "onde", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "o ator", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "era ruim",
        choices: SPACE,
      },
    ],
    fake: false,
    phrase: "Tarcísio assistiu ao filme onde o ator era ruim",
    question: "Tarcísio assistiu ao filme?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Ruan", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "teve", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "um sonho",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "onde", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "encontrou",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "amigos", choices: SPACE },
    ],
    fake: false,
    phrase: "Ruan teve um sonho onde encontrou amigos",
    question: "Ruan sonhou com sua mãe?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Paula", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "comemorou",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "o aniversário",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "onde", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "todos", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "beberam", choices: SPACE },
    ],
    fake: false,
    phrase: "Paula comemorou o aniversário onde todos beberam",
    question: "Paula comemorou o aniversário?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Mika", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "foi", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "à aula", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "onde", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "aprendeu",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "conteúdos",
        choices: SPACE,
      },
    ],
    fake: false,
    phrase: "Mika foi à aula onde aprendeu conteúdos",
    question: "Mika faltou a aula?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Minha", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "mãe", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "é", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "muito", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "bonita", choices: SPACE },
    ],
    fake: true,
    phrase: "Minha mãe é muito bonita",
    question: "Minha mãe é feia?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Minha", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "colega", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "de sala", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "é", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "muito", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "inteligente",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Minha colega de sala é muito inteligente",
    question: "Minha colega é inteligente?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "O professor",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "de Sintaxe",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "é", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "legal", choices: SPACE },
    ],
    fake: true,
    phrase: "O professor de Sintaxe é legal",
    question: "O professor é legal?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Fui", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "ao cinema",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "ontem", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "com", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "meu namorado",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Fui ao cinema ontem com meu namorado",
    question: "Fui ao mercado?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Eu", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "adoro", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "música", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "pop", choices: SPACE },
    ],
    fake: true,
    phrase: "Eu adoro música pop",
    question: "Eu adoro rock?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "O afilhado",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "do meu namorado",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "é", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "muito fofo",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "O afilhado do meu namorado é muito fofo",
    question: "Meu namorado é fofo?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Ela", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "foi", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "à aula", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "hoje", choices: SPACE },
    ],
    fake: true,
    phrase: "Ela foi à aula hoje",
    question: "Ela foi à aula?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Ele", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "é", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "muito", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "estudioso",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Ele é muito estudioso",
    question: "Ele é preguiçoso?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Elas", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "são", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "estudantes",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "de Psicologia",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Elas são estudantes de Psicologia",
    question: "Elas estudam Direito?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Lília", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "é", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "minha colega",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "de turma",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Lília é minha colega de turma",
    question: "Lília trouxe flores?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "O capítulo",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "da novela",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "ontem", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "foi", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "chato", choices: SPACE },
    ],
    fake: true,
    phrase: "O capítulo da novela ontem foi chato",
    question: "O capítulo foi chato?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Eu", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "adoro", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "ir", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "à praia", choices: SPACE },
    ],
    fake: true,
    phrase: "Eu adoro ir à praia",
    question: "Eu adoro ir à praia?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "Vamos almoçar",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "naquele restaurante",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "que eu falei?",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Vamos almoçar naquele restaurante que eu falei?",
    question: "Ela jantou naquele restaurante?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Eu", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "adoraria",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "sair", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "com você",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Eu adoraria sair com você",
    question: "Eu não quero sair?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "Minha série",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "preferida",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "é", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "Friends", choices: SPACE },
    ],
    fake: true,
    phrase: "Minha série preferida é Friends",
    question: "Minha série preferida é Friends?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Bia", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "foi", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "ao supermercado",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Bia foi ao supermercado",
    question: "Bia foi ao shopping?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "Meu cachorro",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "é", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "muito", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "bagunceiro",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Meu cachorro é muito bagunceiro",
    question: "Meu gato é bagunceiro?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Eu", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "adoro", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "ler", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "livros", choices: SPACE },
    ],
    fake: true,
    phrase: "Eu adoro ler livros",
    question: "Eu adoro ler livros?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Amo", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "estudar", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "libras", choices: SPACE },
    ],
    fake: true,
    phrase: "Amo estudar libras",
    question: "Eu amo estudar inglês?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Tenho", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "prova", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "semana que vem",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Tenho prova semana que vem",
    question: "Tenho prova na próxima semana?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Ana", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "é", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "muito linda",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Ana é muito linda",
    question: "Ana é linda?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "Victória",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "se formou",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "semestre",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "passado", choices: SPACE },
    ],
    fake: true,
    phrase: "Victória se formou semestre passado",
    question: "Victória se formou?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Eu", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "odeio", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "as aulas",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "de literatura",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Eu odeio as aulas de literatura",
    question: "Eu gosto das aulas de literatura?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Meu", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "professor",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "também", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "é", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "escritor",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Meu professor também é escritor",
    question: "Meu professor é nadador?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Adoro", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "assistir",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "filmes e séries",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Adoro assistir filmes e séries",
    question: "Adoro assistir?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Saí", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "para", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "passear", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "com", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "meu cachorro",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Saí para passear com meu cachorro",
    question: "Saí com meu cachorro?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Comprei", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "um", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "celular", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "novo", choices: SPACE },
    ],
    fake: true,
    phrase: "Comprei um celular novo",
    question: "Comprei um tablet?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Preciso", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "renovar", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "minha", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "habilitação",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Preciso renovar minha habilitação",
    question: "Preciso pegar meu passaporte?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Irei", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "à aula", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "hoje", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "na UFPB", choices: SPACE },
    ],
    fake: true,
    phrase: "Irei à aula hoje na UFPB",
    question: "Irei à aula hoje?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Esqueci", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "minha", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "garrafa", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "de água", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "na academia",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Esqueci minha garrafa de água na academia",
    question: "Esqueci minha garrafa?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
];

export const EXPERIMENTS_TEST = [
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Meu", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "cachorro",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "está", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "doente", choices: SPACE },
    ],
    fake: true,
    phrase: "Meu cachorro está doente",
    question: "Meu cavalo está doente?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Visitei", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "minha", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "tia", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "que", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "está", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "doente", choices: SPACE },
    ],
    fake: true,
    phrase: "Visitei minha tia que está doente",
    question: "Minha tia está doente?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Duda", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "trabalha",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "com", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "Júlia", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "em", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "uma loja",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Duda trabalha com Júlia em uma loja",
    question: "Duda e Júlia trabalham juntas?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "Carolina",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "fez", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "15 anos", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "semana", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "passada", choices: SPACE },
    ],
    fake: true,
    phrase: "Carolina fez 15 anos semana passada",
    question: "Carolina fez 15 anos?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Quero", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "ir", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "em", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "uma", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "hamburgueria",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "nova", choices: SPACE },
    ],
    fake: true,
    phrase: "Quero ir em uma hamburgueria nova",
    question: "Quero ir em uma pizzaria?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
  {
    stimulus: [
      { type: HtmlKeyboardResponsePlugin, stimulus: "Meu", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "namorado",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "me", choices: SPACE },
      { type: HtmlKeyboardResponsePlugin, stimulus: "trouxe", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "chocolate",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Meu namorado me trouxe chocolate",
    question: "Meu namorado me trouxe pipoca?",
    answers: [
      { answer: "sim", isCorrect: false },
      { answer: "não", isCorrect: true },
    ],
  },
];
