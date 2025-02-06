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

const formSchema = z.object({
  name: z.string({ required_error: "test" }).trim().min(1, "Campo obrigatório"),
});

export default function FormPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
    mode: "all",
  });
  const {
    control,
    formState: { isValid },
  } = form;

  return (
    <div className="flex flex-col gap-4 w-full">
      <h3 className="text-xl font-bold">
        Preencha os dados para poder prosseguir o experimento
      </h3>
      <Form {...form}>
        <form className="flex flex-col gap-4 pt-4">
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
          <Button className="max-w-[150px]" disabled={!isValid}>
            Iniciar experimento
          </Button>
        </form>
      </Form>
    </div>
  );
}
