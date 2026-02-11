import "./Movimentacao.css";
import { useCadastroData } from "../../hooks/useCadastroData"; 
import { useState } from "react";

export function Movimentacao() {
    const { data } = useCadastroData();
    const [search] = useState("");

  const servicosPendentes =
    data?.filter(
      (item) =>
        item.status === false &&
        (
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.servico.toLowerCase().includes(search.toLowerCase()) ||
          item.modelo.toLowerCase().includes(search.toLowerCase())
        )
    ) || [];

    const servicosConcluidos =
    data?.filter(
      (item) =>
        item.status === true &&
        (
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.servico.toLowerCase().includes(search.toLowerCase()) ||
          item.modelo.toLowerCase().includes(search.toLowerCase())
        )
    ) || [];

    const OSopen = data?.length;

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Movimentações</h1>

      {/* CARDS */}
      <div className="cards-container">
        <div className="card green">
          <h3>OS Abertas</h3>
          <p>{OSopen}</p>
        </div>

        <div className="card blue">
          <h3>Concluídas</h3>
          <p>{servicosConcluidos.length}</p>
        </div>

        <div className="card purple">
          <h3>Faturamento</h3>
          <p>R$ 12.430</p>
        </div>

        <div className="card yellow">
          <h3>Pendentes</h3>
          <p>{servicosPendentes.length}</p>
        </div>
      </div>

      {/* GRÁFICOS */}
      <div className="charts-container">
        <div className="chart-box">
          <h3>Status das Ordens</h3>
          <div className="donut-chart"></div>
        </div>
      </div>

      {/* TABELA */}
      <div className="table-container">
        <h3>Últimas Movimentações</h3>
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Serviço</th>
              <th>Status</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>João Silva</td>
              <td>Troca de Tela</td>
              <td className="status-open">Aberta</td>
              <td>10/02/2026</td>
            </tr>
            <tr>
              <td>Maria Souza</td>
              <td>Formatação</td>
              <td className="status-done">Concluída</td>
              <td>09/02/2026</td>
            </tr>
            <tr>
              <td>Carlos Lima</td>
              <td>Limpeza Interna</td>
              <td className="status-pending">Pendente</td>
              <td>08/02/2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
