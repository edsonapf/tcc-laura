import Link from "@/components/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center max-w-[900px]">
        <p className="indent-8 text-justify">
          Olá, me chamo Laura Roberta, sou estudante do curso de Letras - Língua
          Poruguesa na Universidade Federal da Paraíba (UFPB) e estou no último
          período. Venho aqui, em colaboração com o Laboratório de Processamento
          Linguístico (LAPROL) e sob orientação do Professor Dr. José Ferrari
          Neto, solicitar voluntários para participar de uma pesquisa em
          Psicolinguística.
        </p>
        <p className="indent-8 text-justify">
          Para responder a pesquisa, é necessário que o voluntário tenha, no
          mínimo, 18 anos, esteja cursando uma graduação e seja falante nativo
          de português, aceite os termos de compromisso e, também, responda a
          pesquisa em um computador, de preferência em um lugar silencioso.
        </p>
      </div>
      <div className="w-full flex items-center justify-center">
        <Link href="/form">Preencher formulário</Link>
      </div>
    </>
  );
}
