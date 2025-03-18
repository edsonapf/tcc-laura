import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function Instructions() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/test");
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-bold">Instruções</h3>
      <small className="text-sm">
        Antes de começar o experimento atente-se às instruções abaixo:
      </small>
      <div className="flex flex-col max-w-[700px] w-full gap-2 py-2">
        <p className="text-justify">
          Irá aparecer uma frase dividia em pequenas partes, uma de cada vez,
          essas partes são chamadas de segmentos, para passar para o próximo
          segmento, é necessário apertar na tecla <strong>ESPAÇO</strong> do
          computador.
        </p>
        <strong>Exemplo:</strong>
        <p>A frase é "Eu moro no Brasil"</p>
        <strong>No experimento irá aparecer:</strong>
        <div className="flex flex-col gap-[2px]">
          <strong>Eu </strong>
          <span className="font-normal">
            (O voluntário deve clicar na tecla <strong>ESPAÇO</strong> após a
            leitura do segmento para seguir adiante)
          </span>
        </div>
        <div className="flex flex-col gap-[2px]">
          <strong>moro </strong>
          <span className="font-normal">
            (O voluntário deve clicar na tecla <strong>ESPAÇO</strong> após a
            leitura do segmento para seguir adiante)
          </span>
        </div>
        <div className="flex flex-col gap-[2px]">
          <strong>no Brasil </strong>
          <span className="font-normal">
            (O voluntário deve clicar na tecla <strong>ESPAÇO</strong> após a
            leitura do segmento para seguir adiante)
          </span>
        </div>
        <strong>
          Atenção: Apesar do exemplo mostrar a frase inteira, no experimento irá
          aparecer apenas os segmentos.
        </strong>
        <p>
          Ao final do último segmento, haverá uma pergunta simples, que serve
          apenas para controle de dados.
        </p>
        <strong>Exemplo: Eu moro na Itália?</strong>
        <p>
          Opções de resposta: <strong>Sim</strong> ou <strong>Não</strong>{" "}
        </p>
        <p>
          Para ir para a próxima frase, o voluntário pode utilizar o mouse e
          clicar na opção "Ir para a próxima frase".
        </p>
        <strong>
          Atenção: Leia com atenção cada segmento pois não é permitido voltar
          para a parte anterior.
        </strong>
      </div>
      <Button onClick={handleClick}>Iniciar rodada teste</Button>
    </div>
  );
}
