"use client";
import { useState } from "react";
import { ValidacaoDocumento } from "@/lib/validacao";
export default function CpfCnpjForm() {
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [resultadoValidacaoCpf, setResultadoValidacaoCpf] = useState<
    boolean | null
  >(null);
  const [resultadoValidacaoCnpj, setResultadoValidacaoCnpj] = useState<
    boolean | null
  >(null);
  const [cpfCalculoDigitos, setCpfCalculoDigitos] = useState("");
  const [cnpjCalculoDigitos, setCnpjCalculoDigitos] = useState("");
  const [resultadoCalculoDigitosCpf, setResultadoCalculoDigitosCpf] =
    useState("");
  const [resultadoCalculoDigitosCnpj, setResultadoCalculoDigitosCnpj] =
    useState("");

  const handleValidarCPF = () => {
    const valido = ValidacaoDocumento.validarCPF(cpf);
    setResultadoValidacaoCpf(valido);
  };
  const handleValidarCnpj = () => {
    const valido = ValidacaoDocumento.validarCNPJ(cnpj);
    setResultadoValidacaoCnpj(valido);
  };
  const handleCalculaDigitosCNPJ = () => {
    const result = ValidacaoDocumento.calcularDigitosCNPJ(cnpjCalculoDigitos);
    setResultadoCalculoDigitosCnpj(result);
  };
  const handleCalculaDigitosCPF = () => {
    const result = ValidacaoDocumento.calcularDigitosCPF(cpfCalculoDigitos);
    setResultadoCalculoDigitosCpf(result);
  };

  return (
    <>
      <div className="gap-2">
        <input value={cpf} onChange={(e) => setCpf(e.target.value)} />
        <button onClick={handleValidarCPF}>Validar CPF</button>
        <label>
          {resultadoValidacaoCpf !== null && (
            <p>{resultadoValidacaoCpf ? "CPF Válido ✓" : "CPF Inválido ✗"}</p>
          )}
        </label>
        <input
          value={cpfCalculoDigitos}
          onChange={(e) => setCpfCalculoDigitos(e.target.value)}
        />
        <button onClick={handleCalculaDigitosCPF}>
          Descobre dígitos verificadores CPF
        </button>
        <label>
          {resultadoCalculoDigitosCpf !== "" && (
            <p>{resultadoCalculoDigitosCpf}</p>
          )}
        </label>
      </div>
      <div className="">
        <input
          maxLength={14}
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
        />
        <button onClick={handleValidarCnpj}>Validar CNPJ</button>
        <label>
          {resultadoValidacaoCnpj !== null && (
            <p>
              {resultadoValidacaoCnpj ? "CNPJ Válido ✓" : "CNPJ Inválido ✗"}
            </p>
          )}
        </label>
        <input
          value={cpfCalculoDigitos}
          onChange={(e) => setCnpjCalculoDigitos(e.target.value)}
        />
        <button onClick={handleCalculaDigitosCNPJ}>
          Descobre dígitos verificadores CNPJ
        </button>
        <label>
          {resultadoCalculoDigitosCnpj !== "" && (
            <p>{resultadoCalculoDigitosCnpj}</p>
          )}
        </label>
      </div>
    </>
  );
}
