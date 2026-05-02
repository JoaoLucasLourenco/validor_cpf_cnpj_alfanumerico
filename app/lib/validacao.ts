class ValidacaoDocumento {
  static calcularDigitosCPF(cpf: string): string {
    const limpo = this.removeMascara(cpf);

    if (limpo.length !== 9)
      throw new Error("Informe os 9 primeiros caracteres do CPF");

    const calcularDigito = (base: string, pesos: number[]): number => {
      const soma = base.split("").reduce((acc, char, i) => {
        return acc + this.charParaValorASC(char) * pesos[i];
      }, 0);
      const resto = soma % 11;
      return resto < 2 ? 0 : 11 - resto;
    };

    const d1 = calcularDigito(limpo, [10, 9, 8, 7, 6, 5, 4, 3, 2]);
    const d2 = calcularDigito(limpo + d1, [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]);

    return `${d1}${d2}`;
  }
  static validarCPF(cpf: string): boolean {
    const limpo = this.removeMascara(cpf);
    const listaCpfInvalidos: string[] = ["12345678909"];
    if (limpo.length !== 11 || listaCpfInvalidos.includes(limpo)) return false;

    const base = limpo.slice(0, 9);
    const digitosInformados = limpo.slice(9);

    try {
      const digitosEsperados = this.calcularDigitosCPF(base);
      return digitosInformados === digitosEsperados;
    } catch {
      return false;
    }
  }
  static validarCNPJ(cnpj: string): boolean {
    const limpo = this.removeMascara(cnpj);
    const listaCNPJsInvalidos: string[] = [
      "00000000000000",
      "11111111111111",
      "22222222222222",
      "33333333333333",
      "44444444444444",
      "55555555555555",
      "66666666666666",
      "77777777777777",
      "88888888888888",
      "99999999999999",
    ];
    if (limpo.length !== 14 || listaCNPJsInvalidos.includes(limpo))
      return false;

    const base = limpo.slice(0, 12);
    const digitosInformados = limpo.slice(12);

    try {
      const digitosEsperados = this.calcularDigitosCNPJ(base);
      return digitosInformados === digitosEsperados;
    } catch {
      return false;
    }
  }

  static calcularDigitosCNPJ(cnpj: string): string {
    const limpo = this.removeMascara(cnpj);

    if (limpo.length !== 12)
      throw Error("Informe os 12 primeiros dígitos do CNPJ.");

    const calcularDigito = (base: string, pesos: number[]): number => {
      const soma = base.split("").reduce((acc, char, i) => {
        return acc + this.charParaValorASC(char) * pesos[i];
      }, 0);
      const resto = soma % 11;
      return resto < 2 ? 0 : 11 - resto;
    };

    const d1 = calcularDigito(limpo, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
    const d2 = calcularDigito(
      limpo + d1,
      [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
    );

    return `${d1}${d2}`;
  }
  private static removeMascara(documentoComMascara: string): string {
    return documentoComMascara.replace(/[.\-\/]/g, "").toUpperCase();
  }
  private static charParaValorASC(char: string): number {
    if (char >= "0" && char <= "9") return parseInt(char);
    return char.toUpperCase().charCodeAt(0) - 65 + 17;
  }
}
