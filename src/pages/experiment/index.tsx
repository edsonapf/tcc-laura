import { STORAGE_KEY } from "@/common/consts";
import { ExperimentData } from "@/interfaces/ExperimentData";
import { OnFinish } from "@/interfaces/OnFinish";
import HtmlKeyboardResponsePlugin from "@jspsych/plugin-html-keyboard-response";
import { initJsPsych } from "jspsych";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

// interface OnTrialStart {
//   choices: string;
//   prompt: string | null;
//   response_ends_trial: boolean;
//   stimulus: string;
//   stimulus_duration: number | null;
//   trial_duration: number | null;
// }

// interface OnInteractionDataUpdate {
//   event: string;
//   time: number;
//   trial: number;
// }

export default function Experiment() {
  const divRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
      // on_trial_start: (param: OnTrialStart) =>
      //   console.log("on_trial_start", { param }),
      // on_trial_finish: (param: OnFinish) =>
      //   console.log("on_trial_finish", { param }),
      on_finish: (finish: OnFinish) => {
        console.log({ finish });
        const dataFromStorage = localStorage.getItem(STORAGE_KEY);
        const data: ExperimentData = dataFromStorage
          ? JSON.parse(dataFromStorage)
          : null;
        if (data) {
          localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
              user: data.user,
              experiment: finish.trials,
            })
          );
          navigate("/finish");
        }
      },
    });
    const trial = {
      type: HtmlKeyboardResponsePlugin,
      stimulus: "Hello",
    };

    jsPsych.run([
      trial,
      {
        type: HtmlKeyboardResponsePlugin,
        stimulus: "World",
      },
    ]);

    // eslint-disable-next-line
  }, []);

  return (
    <div
      id="jspsych-experiment"
      className="w-full h-full flex justify-center items-center *:text-2xl *:font-bold"
      ref={divRef}
    ></div>
  );
}
