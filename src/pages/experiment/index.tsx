import { STORAGE_KEY } from "@/common/consts";
import { Button } from "@/components/ui/button";
import { ExperimentData, TrialRequest } from "@/interfaces/ExperimentData";
import { OnFinish, Trial } from "@/interfaces/OnFinish";
import HtmlKeyboardResponsePlugin from "@jspsych/plugin-html-keyboard-response";
import { initJsPsych } from "jspsych";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

const SPACE = " ";

const experiments = [
  {
    stimulus: [
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "Luiz",
        choices: SPACE,
      },
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
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "onde",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "vivem",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "seus avós",
        choices: SPACE,
      },
    ],
    fake: false,
    phrase: "Luiz trabalha na cidade onde vivem seus avós",
    question: "pergunta?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "Carol",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "fez",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "sua festa",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "onde",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "moram",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "seus pais",
        choices: SPACE,
      },
    ],
    fake: false,
    phrase: "Carol fez sua festa onde moram seus pais",
    question: "pergunta?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "Pedro",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "fez",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "sua tarefa",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "onde",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "pediu",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "ajuda a Mika",
        choices: SPACE,
      },
    ],
    fake: false,
    phrase: "Pedro fez sua tarefa onde pediu ajuda a Mika",
    question: "pergunta?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "Minha",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "mãe",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "é", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "muito",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "bonita",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Minha mãe é muito bonita",
    question: "pergunta?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "Minha",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "colega",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "de sala",
        choices: SPACE,
      },
      { type: HtmlKeyboardResponsePlugin, stimulus: "é", choices: SPACE },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "muito",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "inteligente",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Minha colega de sala é muito inteligente",
    question: "pergunta?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "Camila",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "saiu",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "de Cuba",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "onde",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "viveu",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "sete anos de vida",
        choices: SPACE,
      },
    ],
    fake: false,
    phrase: "Camila saiu de Cuba onde viveu sete anos de vida",
    question: "pergunta?",
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
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "legal",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "O professor de Sintaxe é legal",
    question: "pergunta?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "Ele",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "foi",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "para casa",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "onde",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "mora",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "com sua família",
        choices: SPACE,
      },
    ],
    fake: false,
    phrase: "Ele foi para casa onde mora com sua família",
    question: "pergunta?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "Maria",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "teve",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "uma infância",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "onde",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "foi",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "muito feliz",
        choices: SPACE,
      },
    ],
    fake: false,
    phrase: "Maria teve uma infância onde foi muito feliz",
    question: "pergunta?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "Fui",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "ao cinema",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "ontem",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "com",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "meu namorado",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Fui ao cinema ontem com meu namorado",
    question: "pergunta?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
  {
    stimulus: [
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "Eu",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "adoro",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "música",
        choices: SPACE,
      },
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "pop",
        choices: SPACE,
      },
    ],
    fake: true,
    phrase: "Eu adoro música pop",
    question: "pergunta?",
    answers: [
      { answer: "sim", isCorrect: true },
      { answer: "não", isCorrect: false },
    ],
  },
];
export default function Experiment() {
  const divRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [experimentIndex, setExperimentIndex] = useState(0);
  const [trialData, setTrialData] = useState<TrialRequest[]>([]);
  const [question, setQuestion] = useState({
    show: false,
    start: -1,
  });
  const [currentPhrasePosition, setCurrentPhrasePosition] = useState(1);

  const formatTrialRequest = (
    trials: Trial[],
    phrasePosition: number
  ): TrialRequest[] => {
    return trials.map((trial) => ({
      ...trial,
      trial_index: trial.trial_index + 1,
      phrase: experiments[experimentIndex].phrase,
      phrasePosition,
      questionResponseTime: -1,
    }));
  };

  useEffect(() => {
    const dataFromStorage = localStorage.getItem(STORAGE_KEY);
    const data: ExperimentData | null = dataFromStorage
      ? JSON.parse(dataFromStorage)
      : null;
    if (!data || !data.user) {
      navigate("/");
      return;
    }

    if (!divRef.current) {
      return;
    }

    divRef.current.focus();
    const jsPsych = initJsPsych({
      display_element: "jspsych-experiment",
      on_finish: (finish: OnFinish) => {
        const trialRequest = experiments[experimentIndex].fake
          ? []
          : formatTrialRequest(finish.trials, currentPhrasePosition);
        if (experimentIndex + 1 === experiments.length) {
          const dataFromStorage = localStorage.getItem(STORAGE_KEY);
          const data: ExperimentData = dataFromStorage
            ? JSON.parse(dataFromStorage)
            : null;
          if (data) {
            localStorage.setItem(
              STORAGE_KEY,
              JSON.stringify({
                user: data.user,
                experiment: [...trialData, ...trialRequest],
              })
            );
            navigate("/finish");
          }
          return;
        }

        setTrialData((prev) => {
          return [...prev, ...trialRequest];
        });
        setQuestion({
          show: true,
          start: Date.now(),
        });
      },
    });

    jsPsych.run(experiments[experimentIndex].stimulus);

    // eslint-disable-next-line
  }, [experimentIndex]);

  const handleClick = () => {
    setTrialData((prev) => {
      const last: TrialRequest = {
        ...prev[prev.length - 1],
        questionResponseTime: Date.now() - question.start,
      };
      prev[prev.length - 1] = last;
      return prev;
    });
    setCurrentPhrasePosition((prev) =>
      experiments[experimentIndex].fake ? prev : prev + 1
    );
    setExperimentIndex((prev) => prev + 1);
    setQuestion({
      show: false,
      start: -1,
    });
  };
  console.log({ trialData });

  return question.show ? (
    <div className="flex flex-col gap-2 justify-center items-center h-full focus-visible:outline-0">
      {experiments[experimentIndex].question}
      <div className="flex gap-1">
        {experiments[experimentIndex].answers.map(({ answer }) => (
          <Button onClick={handleClick} key={`answer-${answer}`}>
            {answer}
          </Button>
        ))}
      </div>
    </div>
  ) : (
    <div
      id="jspsych-experiment"
      className="w-full h-full flex justify-center items-center *:text-2xl *:font-bold focus-visible:outline-0"
      ref={divRef}
    ></div>
  );
}
