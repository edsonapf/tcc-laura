import { useEffect, useState } from "react";
import { ExperimentData } from "@/interfaces/ExperimentData";
import { STORAGE_KEY } from "@/common/consts";
import Spinner from "@/components/spinner";

export default function Finish() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const saveData = async () => {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const body: ExperimentData = JSON.parse(data);
        console.log({ body });
      }
      await new Promise((resolve) => setTimeout(resolve, 5000));
      localStorage.removeItem(STORAGE_KEY);
      setLoading(false);
    };
    saveData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-4 items-center justify-center [&>p]:text-xl [&>p]:font-bold">
      {isLoading ? (
        <>
          <Spinner />
          <p className="max-w-[450px] text-center">
            Por favor, aguarde enquanto estamos salvando os dados do seu
            experimento.
          </p>
        </>
      ) : (
        <p>Obrigado pela sua ajuda!</p>
      )}
    </div>
  );
}
