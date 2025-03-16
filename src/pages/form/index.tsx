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
  age: z.number().min(14, "Necessário idade maior que 14 anos."),
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
    <div className="flex flex-col gap-4 w-full">
      <h3 className="text-xl font-bold">
        Preencha os dados para poder prosseguir a pesquisa
      </h3>
      <Form {...form}>
        <form
          className="flex flex-col gap-2 pt-4"
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
              name="age"
              render={({ field }) => (
                <FormItem className="w-full">
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
              <FormItem className="flex flex-col items-start space-y-0 rounded-md border p-4 shadow w-fit gap-4">
                <div className="flex flex-col gap-2">
                  <div>
                    <h5 className="font-bold">
                      TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO (TCLE)
                    </h5>
                    <p className="text-sm">
                      Título da Pesquisa: Pesquisa de Psicolinguística
                    </p>
                  </div>
                  <div>
                    <p className="text-sm">
                      Pesquisadora Responsável: Laura Roberta
                    </p>
                    <p className="text-sm">
                      Contato: E-mail: laura.roberta@academico.ufpb.br |
                      WhatsApp: (83) 98796-6593
                    </p>
                  </div>
                  <ol className="list-decimal pl-4">
                    <li>
                      <h5 className="font-bold">Apresentação</h5>
                      <small>
                        Você está sendo convidado(a) a participar da pesquisa
                        "Pesquisa de Psicolinguística", cujo objetivo é calcular
                        o tempo de leitura dos voluntários em cada segmento de
                        um texto. Sua participação é voluntária, e você pode
                        desistir a qualquer momento, sem qualquer prejuízo.
                      </small>
                    </li>
                    <li>
                      <h5 className="font-bold">Procedimentos</h5>
                      <small>
                        A pesquisa consiste em um experimento de leitura
                        automonitorada, realizado no seu próprio computador. O
                        tempo estimado para a atividade é de aproximadamente 30
                        minutos. Para melhores resultados, recomenda-se que você
                        esteja em um ambiente silencioso, sem distrações.
                      </small>
                    </li>
                    <li>
                      <h5 className="font-bold">Riscos e Benefícios</h5>
                      <small>
                        Esta pesquisa não apresenta riscos aos participantes.
                        Embora não haja benefícios diretos, sua colaboração
                        contribuirá para o avanço dos estudos em
                        psicolinguística.
                      </small>
                    </li>
                    <li>
                      <h5 className="font-bold">Confidencialidade</h5>
                      <small>
                        Seus dados serão armazenados de forma segura e anônima,
                        sendo utilizados apenas para fins científicos. Nenhuma
                        informação pessoal será divulgada ou associada a você.
                      </small>
                    </li>
                    <li>
                      <h5 className="font-bold">Consentimento</h5>
                      <small>
                        Ao clicar no botão abaixo, você confirma que:
                        <br />
                        ✔️ Leu e compreendeu as informações deste termo.
                        <br />
                        ✔️ Concorda voluntariamente em participar da pesquisa.
                      </small>
                    </li>
                  </ol>
                </div>
                <div className="flex gap-2 items-center">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Aceito participar da pesquisa</FormLabel>
                  </div>
                </div>
              </FormItem>
            )}
          />
          <Button className="max-w-[150px]" disabled={!isValid || !agreeTerms}>
            Ir para instruções
          </Button>
        </form>
      </Form>
    </div>
  );
}
