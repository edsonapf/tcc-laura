import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <header className="flex items-center justify-center border-b-[1px] border-b-[#22506f] p-4">
        <h1 className="font-bold text-2xl text-center">
          Pesquisa de TCC do curso de Letras-Língua Portuguesa da UFPB
        </h1>
      </header>
      <div className="items-center justify-items-center h-[calc(100vh-65px)] p-8 gap-16">
        <main className="flex flex-col gap-8 items-center w-full h-full">
          {children}
        </main>
      </div>
    </>
  );
}
