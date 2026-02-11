package com.renovadora.Crud.cadastro;

public record CadastroResponseDTO(Long id, String name, String servico, boolean status, Integer quantidade, String data_entrada, String modelo, String numero) {
    public CadastroResponseDTO(Cadastro cadastro){
        this(
                cadastro.getId(),
                cadastro.getName(),
                cadastro.getServico(),
                cadastro.isStatus(),
                cadastro.getQuantidade(),
                cadastro.getData_entrada(),
                cadastro.getModelo(),
                cadastro.getNumero()
        );

    }
}
