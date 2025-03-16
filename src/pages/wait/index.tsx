import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

interface Props {
  nextPage: string;
  text: string;
}

export default function Wait({ nextPage, text }: Props) {
  const [countdown, setCountdown] = useState(3);
  const interval = useRef<NodeJS.Timeout>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    interval.current = setInterval(() => {
      setCountdown((prev) => (prev === 0 ? prev : prev - 1));
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      clearInterval(interval.current);
      navigate(nextPage);
    }
    // eslint-disable-next-line
  }, [countdown]);

  return <h3 className="text-3xl font-bold">{`${text} ${countdown}.`}</h3>;
}
