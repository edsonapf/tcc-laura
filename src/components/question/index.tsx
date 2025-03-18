import { ReactNode, useState } from "react";
import { Button } from "../ui/button";
import { capitalize } from "@/lib/utils";

interface Props {
  answers: {
    answer: string;
    isCorrect: boolean;
  }[];
  finishText: string;
  last: boolean;
  message?: ReactNode;
  question: string;
  onNextQuestion: (correct: boolean) => void;
}

export default function Question({
  answers,
  finishText,
  last,
  message,
  question,
  onNextQuestion,
}: Props) {
  const [hasAnswered, setAnswered] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);

  const handleClickAnswer = (isCorrect: boolean) => {
    setAnswered(true);
    setCorrectAnswer(isCorrect);
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center h-full focus-visible:outline-0">
      {hasAnswered ? (
        <>
          {last && Boolean(message) && message}
          <Button
            onClick={() => onNextQuestion(correctAnswer)}
            className="text-md"
          >
            {last ? finishText : "Ir para próxima frase"}
          </Button>
        </>
      ) : (
        <>
          <p className="font-bold text-xl">{question}</p>
          <div className="flex gap-10">
            {answers.map(({ answer, isCorrect }) => (
              <Button
                onClick={() => handleClickAnswer(isCorrect)}
                key={`answer-${answer}`}
              >
                {capitalize(answer)}
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
