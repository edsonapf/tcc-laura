export interface Trial {
  plugin_version: string;
  response: string;
  rt: number;
  stimulus: string;
  time_elapsed: number;
  trial_index: number;
  trial_type: string;
}

export interface OnFinish {
  trials: Trial[];
}
