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

const formSchema = z.object({
  name: z.string().trim().min(1, "Campo obrigatório"),
  agreeTerms: z.boolean(),
});

export default function FormPage() {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      agreeTerms: false,
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

  const onSubmit = (data: { name: string; agreeTerms: boolean }) => {
    console.log({ data });
    const user = {
      name: data.name,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ user }));
    navigate("/experiment");
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <h3 className="text-xl font-bold">
        Preencha os dados para poder prosseguir o experimento
      </h3>
      <Form {...form}>
        <form
          className="flex flex-col gap-4 pt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
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
                  <FormLabel>Concordo em participar do experimento</FormLabel>
                  {/* <FormDescription>
                    You can manage your mobile notifications in the{" "}
                    <a href="/examples/forms">mobile settings</a> page.
                  </FormDescription> */}
                </div>
              </FormItem>
            )}
          />
          <Button className="max-w-[150px]" disabled={!isValid || !agreeTerms}>
            Iniciar experimento
          </Button>
        </form>
      </Form>
    </div>
  );
}
