import Link from "@/components/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center max-w-[900px]">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-[48px] w-full">
          <img
            src="laprol.png"
            alt="Laprol"
            className="w-[300px] h-[80px] md:w-[440px] md:h-[120px]"
          />
          <img src="ufpb.png" alt="Laprol" className="w-[80px] md:w-[100px]" />
        </div>
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
