"use client";
import { useState } from "react";
import { ValidacaoDocumento } from "@/lib/validacao";
export default function CpfCnpjForm() {
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [resultadoCpf, setResultadoCpf] = useState<boolean | null>(null);
  const [resultadoCnpj, setResultadoCnpj] = useState<boolean | null>(null);

  const handleValidarCPF = () => {
    const valido = ValidacaoDocumento.validarCPF(cpf);
    setResultadoCpf(valido);
  };
  const handleValidarCnpj = () => {
    const valido = ValidacaoDocumento.validarCNPJ(cnpj);
    setResultadoCnpj(valido);
  };

  return (
    <>
      <div>
        <input
          maxLength={11}
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <button onClick={handleValidarCPF}>Validar CPF</button>
        <label>
          {resultadoCpf !== null && (
            <p>{resultadoCpf ? "CPF Válido ✓" : "CPF Inválido ✗"}</p>
          )}
        </label>
      </div>
      <div>
        <input
          maxLength={14}
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
        />
        <button onClick={handleValidarCnpj}>Validar CNPJ</button>
        <label>
          {resultadoCnpj !== null && (
            <p>{resultadoCnpj ? "CNPJ Válido ✓" : "CNPJ Inválido ✗"}</p>
          )}
        </label>
      </div>
    </>
  );
}
