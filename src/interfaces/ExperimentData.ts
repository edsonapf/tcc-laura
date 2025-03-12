import { Trial } from "./OnFinish";

export type TrialRequest = {
  phrasePosition: number;
  phrase: string;
  questionResponseTime: number;
} & Trial;

export interface User {
  name: string;
  age: number;
  levelOfEducation: boolean;
  gender: string;
  portugueseSpeaker: boolean;
}

export interface ExperimentData {
  user: User;
  experiment: TrialRequest[];
}
