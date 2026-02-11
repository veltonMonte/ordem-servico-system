package com.renovadora.Crud.cadastro;

public record CadastroRequestDTO(Long id, String name, String servico, boolean status, Integer quantidade, String data_entrada, String modelo, String numero) {

}
