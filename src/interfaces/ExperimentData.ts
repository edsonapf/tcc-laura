import { Trial } from "./OnFinish";

export interface ExperimentData {
  user: {
    name: string;
  };
  experiment: Trial[];
}
