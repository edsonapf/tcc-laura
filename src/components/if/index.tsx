import { ReactNode } from "react";

interface Props {
  condition: boolean;
  children: ReactNode;
}

export default function If({ condition, children }: Props) {
  return condition ? children : <></>;
}
