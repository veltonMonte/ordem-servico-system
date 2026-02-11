interface CadastroData {
  id?: number;
  name: string;
  servico: string;
  status: boolean;
  quantidade: number;
  modelo: string;
  data_entrada: string;
  numero: string;
}

export type { CadastroData };