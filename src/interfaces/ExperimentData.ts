import { Trial } from "./OnFinish";

export type TrialRequest = {
  phrasePosition: number;
  phrase: string;
} & Trial;

export interface User {
  name: string;
  age: number;
  levelOfEducation: boolean;
  gender: string;
  portugueseSpeaker: boolean;
}

export interface QuestionResponse {
  phrase: string;
  timeElapsed: number;
  correct: boolean;
}

export interface ExperimentData {
  user: User;
  experiment: TrialRequest[];
  questionsResponses: QuestionResponse[];
}
