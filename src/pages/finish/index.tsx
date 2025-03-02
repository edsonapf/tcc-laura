import { useEffect, useState } from "react";
import { ExperimentData } from "@/interfaces/ExperimentData";
import { STORAGE_KEY } from "@/common/consts";
import Spinner from "@/components/spinner";
import { createExperiment } from "@/api";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function Finish() {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const saveData = async () => {
      try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
          const body: ExperimentData = JSON.parse(data);
          console.log({ body });
          await createExperiment(body);
        }
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    saveData();
  }, []);

  const restartExperiment = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const errorBody: ExperimentData = JSON.parse(data);
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ user: errorBody.user })
      );
    }
    navigate("/experiment");
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 items-center justify-center [&>p]:text-xl [&>p]:font-bold">
      {isLoading ? (
        <>
          <Spinner />
          <p className="max-w-[450px] text-center">
            Por favor, aguarde enquanto estamos salvando os dados da sua
            pesquisa.
          </p>
        </>
      ) : error ? (
        <>
          <p>Erro ao salvar os dados, por favor, reinicie a pesquisa.</p>
          <Button onClick={restartExperiment}>Reiniciar pesquisa</Button>
        </>
      ) : (
        <p>Obrigado pela sua ajuda!</p>
      )}
    </div>
  );
}
