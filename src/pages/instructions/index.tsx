import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function Instructions() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/wait-test");
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-bold">Instruções</h3>
      <ol>
        <li>Instrução 1</li>
        <li>Instrução 2</li>
        <li>Instrução 3</li>
        <li>Instrução 4</li>
      </ol>
      <Button onClick={handleClick}>Iniciar rodada teste</Button>
    </div>
  );
}
