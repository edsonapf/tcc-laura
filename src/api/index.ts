import { ExperimentData } from "@/interfaces/ExperimentData";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
});

export const createExperiment = async (data: ExperimentData) => {
  await api.post("/experiment", {
    user: data.user,
    experiment: data.experiment.map((experiment) => ({
      responseTime: experiment.rt,
      stimulus: experiment.stimulus,
      timeElapsed: experiment.time_elapsed,
      trialIndex: experiment.trial_index,
      phrasePosition: experiment.phrasePosition,
      phrase: experiment.phrase,
    })),
    questionsResponses: data.questionsResponses,
  });
};
