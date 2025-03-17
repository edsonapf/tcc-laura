import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router";
import { STORAGE_KEY } from "@/common/consts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().trim().min(1, "Campo obrigatório"),
  age: z.number().min(18, "Necessário idade maior que 18 anos."),
  graduating: z.boolean(),
  gender: z.string().min(1, "Campo obrigatório"),
  agreeTerms: z.boolean(),
  portugueseSpeaker: z.boolean(),
});

export default function FormPage() {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      agreeTerms: false,
      graduating: undefined,
      gender: "",
      age: 0,
      portugueseSpeaker: undefined,
    },
    mode: "all",
  });
  const {
    control,
    formState: { isValid },
    watch,
    handleSubmit,
  } = form;
  const agreeTerms = watch("agreeTerms");

  const onSubmit = (data: {
    name: string;
    graduating?: boolean;
    gender: string;
    age?: number;
    portugueseSpeaker?: boolean;
    agreeTerms: boolean;
  }) => {
    const user = {
      name: data.name,
      graduating: data.graduating,
      gender: data.gender,
      age: data.age,
      portugueseSpeaker: data.portugueseSpeaker,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ user }));
    navigate("/instructions");
  };

  return (
    <div className="flex flex-col gap-4 w-full items-center pb-6">
      <h3 className="text-xl font-bold">
        Preencha os dados para poder prosseguir a pesquisa
      </h3>
      <Form {...form}>
        <form
          className="flex flex-col gap-2 pt-4 max-w-[700px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2 w-full sm:flex-row">
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Nome completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="gender"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Gênero</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione seu gênero" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="masculino">Masculino</SelectItem>
                      <SelectItem value="feminino">Feminino</SelectItem>
                      <SelectItem value="outro">
                        Prefiro não responder
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="age"
              render={({ field }) => (
                <FormItem className="w-full sm:max-w-[150px]">
                  <FormLabel>Idade</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Idade"
                      {...field}
                      onChange={(event) => {
                        if (event.target.value.match(/\D/g)) {
                          console.log("asd");
                          return;
                        }

                        field.onChange({
                          target: { value: Number(event.target.value) },
                        });
                      }}
                      value={field.value || undefined}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-2 w-full sm:flex-row">
            <FormField
              control={control}
              name="graduating"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>
                    Você está cursando uma gradução no momento?
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value === "true");
                      }}
                      defaultValue={
                        field.value === undefined
                          ? undefined
                          : String(field.value)
                      }
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">Sim</SelectItem>
                        <SelectItem value="false">Não</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="portugueseSpeaker"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>
                    Você é falante nativo da Língua Portuguesa?
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value === "true");
                      }}
                      defaultValue={
                        field.value === undefined
                          ? undefined
                          : String(field.value)
                      }
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">Sim</SelectItem>
                        <SelectItem value="false">Não</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={control}
            name="agreeTerms"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start space-y-0 rounded-md border p-4 shadow gap-4 max-w-[700px] w-full">
                <div className="flex flex-col gap-2">
                  <div>
                    <h5 className="font-bold">
                      TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO
                    </h5>
                    <p className="text-sm">
                      Pesquisa de TCC em Psicolinguística
                    </p>
                  </div>
                  <div>
                    <p className="text-sm">
                      Pesquisadores responsáveis: Laura Roberta C. de Oliveira
                      (Graduanda em Letras - Língua Portuguesa e Prof. Dr. José
                      Ferrari Neto.)
                    </p>
                    <p className="text-sm">
                      E-mail para contato: laura.roberta@academico.ufpb.br
                    </p>
                  </div>
                  <small>
                    Você irá participar de um experimento piloto de leitura
                    automonitorada, que é um método utilizado em experimentos na
                    área de Psicolinguística.
                  </small>
                  <small>
                    Sua participação é voluntária e você pode desistir a
                    qualquer momento, entretanto, caso a participação não seja
                    finalizada, os dados não serão salvos. Durante a
                    participação no experimento, é necessário que o voluntário
                    leia os segmentos com atenção, para isso, indicamos que o
                    experimento seja realizado em um lugar silencioso. O
                    experimento deve ser realizado em um computador e tem
                    duração de aproximadamente 30 minutos.
                  </small>
                  <small>
                    O experimento não traz nenhum tipo de risco ao voluntário e
                    nem nenhum tipo de benefício financeiro. Os dados expostos
                    pelo voluntário nesta pesquisa são confidenciais e serão
                    utilizados de forma anônima. Se o voluntário leu e concordar
                    em participar do experimento, clique na opção abaixo:
                  </small>
                </div>
                <div className="flex gap-2 items-center">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Li e aceito participar da pesquisa</FormLabel>
                  </div>
                </div>
              </FormItem>
            )}
          />
          <Button
            className="max-w-[200px] self-center"
            disabled={!isValid || !agreeTerms}
          >
            Ir para instruções
          </Button>
        </form>
      </Form>
    </div>
  );
}
