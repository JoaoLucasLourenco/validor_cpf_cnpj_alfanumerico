import CpfCnpjForm from "@/components/CpfCnpjForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 text-center">
      <main className="py-6">
        <h1 className="text-2xl font-bold">Validérico</h1>
        <h2>Validador de CPF e CNPJ alfanuméricos.</h2>
      </main>
      <section>
        <CpfCnpjForm />
      </section>
    </div>
  );
}
