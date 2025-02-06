import HtmlKeyboardResponsePlugin from "@jspsych/plugin-html-keyboard-response";
import { initJsPsych } from "jspsych";
import { useEffect } from "react";

export default function Experiment() {
  useEffect(() => {
    const jsPsych = initJsPsych({
      display_element: "jspsych-experiment",
      on_trial_start: (param: unknown) =>
        console.log("on_trial_start", { param }),
      on_trial_finish: (param: unknown) =>
        console.log("on_trial_finish", { param }),
    });
    const trial = {
      type: HtmlKeyboardResponsePlugin,
      stimulus: "Hello world!",
    };
    jsPsych.run([trial]);
  }, []);

  return (
    <div
      id="jspsych-experiment"
      className="bg-red-600 w-full h-full flex justify-center items-center"
    ></div>
  );
}
