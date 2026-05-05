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
  const handleLimpaCampos = () => {
    setCpf("");
    setCnpj("");
    setCpfCalculoDigitos("");
    setCnpjCalculoDigitos("");
    setResultadoValidacaoCpf(null);
    setResultadoValidacaoCnpj(null);
    setResultadoCalculoDigitosCpf("");
    setResultadoCalculoDigitosCnpj("");
  };
  return (
    <>
      <div className="flex flex-col columns-1 gap-2 m-6 justify-center items-center">
        <div className="flex gap-2">
          <input
            className="border rounded-md p-2 focus:outline-slate-700"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:cursor-pointer hover:bg-blue-700"
            onClick={handleValidarCPF}
          >
            Validar CPF
          </button>
          <label>
            {resultadoValidacaoCpf !== null && (
              <p>{resultadoValidacaoCpf ? "CPF Válido ✓" : "CPF Inválido ✗"}</p>
            )}
          </label>
        </div>
        <div className="flex gap-2">
          <input
            className="border rounded-md p-2 focus:outline-slate-700"
            value={cpfCalculoDigitos}
            onChange={(e) => setCpfCalculoDigitos(e.target.value)}
          />
          <button
            className="bg-sky-500 text-white py-2 px-6 rounded-full hover:cursor-pointer hover:bg-sky-700"
            onClick={handleCalculaDigitosCPF}
          >
            Descobre dígitos verificadores CPF
          </button>
          <input
            className="border rounded-md p-2 focus:outline-slate-700 w-10"
            value={resultadoCalculoDigitosCpf}
            readOnly
          />
        </div>
      </div>
      <div className="flex flex-col columns-1 gap-2 justify-center items-center">
        <div className="flex gap-2">
          <input
            maxLength={14}
            className="border rounded-md p-2 focus:outline-slate-700"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
          />
          <button
            className="bg-fuchsia-500 text-white py-2 px-6 rounded-full hover:cursor-pointer hover:bg-fuchsia-700"
            onClick={handleValidarCnpj}
          >
            Validar CNPJ
          </button>
          <label>
            {resultadoValidacaoCnpj !== null && (
              <p>
                {resultadoValidacaoCnpj ? "CNPJ Válido ✓" : "CNPJ Inválido ✗"}
              </p>
            )}
          </label>
        </div>
        <div className="flex gap-2">
          <input
            maxLength={12}
            className="border rounded-md p-2 focus:outline-slate-700"
            value={cnpjCalculoDigitos}
            onChange={(e) => setCnpjCalculoDigitos(e.target.value)}
          />
          <button
            className="bg-purple-500 text-white py-2 px-6 rounded-full hover:cursor-pointer hover:bg-purple-700"
            onClick={handleCalculaDigitosCNPJ}
          >
            Descobre dígitos verificadores CNPJ
          </button>
          <input
            className="border rounded-md p-2 focus:outline-slate-700 w-10"
            value={resultadoCalculoDigitosCnpj}
            readOnly
          />
        </div>
        <button
          className=" text-slate-700 py-2 px-6 rounded-full hover:cursor-pointer hover:bg-purple-200"
          onClick={handleLimpaCampos}
        >
          Limpar campos
        </button>
      </div>
    </>
  );
}
