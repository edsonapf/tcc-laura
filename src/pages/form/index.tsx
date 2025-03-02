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
  age: z.number().min(1, "Campo obrigatório"),
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
      age: undefined,
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
    console.log({ data });
    const user = {
      name: data.name,
      graduating: data.graduating,
      gender: data.gender,
      age: data.age,
      portugueseSpeaker: data.portugueseSpeaker,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ user }));
    navigate("/experiment");
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
                          return;
                        }

                        field.onChange({
                          target: { value: Number(event.target.value) },
                        });
                      }}
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
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow w-fit">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Concordo em participar do pesquisa</FormLabel>
                  {/* <FormDescription>
                    You can manage your mobile notifications in the{" "}
                    <a href="/examples/forms">mobile settings</a> page.
                  </FormDescription> */}
                </div>
              </FormItem>
            )}
          />
          <Button className="max-w-[150px]" disabled={!isValid || !agreeTerms}>
            Iniciar pesquisa
          </Button>
        </form>
      </Form>
    </div>
  );
}
