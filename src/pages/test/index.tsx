import { STORAGE_KEY } from "@/common/consts";
import Question from "@/components/question";
import { EXPERIMENTS_TEST } from "@/consts";
import { ExperimentData } from "@/interfaces/ExperimentData";
import { initJsPsych } from "jspsych";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

const experiments = EXPERIMENTS_TEST.sort(() => Math.random() - 0.5);

// TODO: create component
export default function Test() {
  const [showQuestion, setShowQuestion] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [experimentIndex, setExperimentIndex] = useState(0);

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
      on_finish: () => {
        setShowQuestion(true);
      },
    });

    jsPsych.run(experiments[experimentIndex].stimulus);

    // eslint-disable-next-line
  }, [experimentIndex]);

  const handleClick = () => {
    if (experimentIndex + 1 === experiments.length) {
      navigate("/experiment");
      return;
    }

    setExperimentIndex((prev) => prev + 1);
    setShowQuestion(false);
  };

  return showQuestion ? (
    <Question
      answers={experiments[experimentIndex].answers}
      finishText="Iniciar pesquisa"
      last={experimentIndex === experiments.length - 1}
      message={
        <div className="flex flex-col gap-1 items-center">
          <p>A rodada teste foi finalizada.</p>
          <p>Clique no botão abaixo para iniciar a pesquisa.</p>
        </div>
      }
      question={experiments[experimentIndex].question}
      onNextQuestion={handleClick}
    />
  ) : (
    <div
      id="jspsych-experiment"
      className="w-full h-full flex justify-center items-center *:text-2xl *:font-bold focus-visible:outline-0"
      ref={divRef}
    ></div>
  );
}
