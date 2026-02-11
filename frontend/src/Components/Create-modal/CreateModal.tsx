import "./CreateModal.css";
import { useEffect, useState } from "react";
import { useCadastroDataMutate } from "../../hooks/useCadastroMutate";
import type { CadastroData } from "../../interface/CadastroData";

interface InputProps {
  label: string;
  value: string;
  updateValue(value: string): void;
}

interface ModalProps{
  closeModal(): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      />
    </div>
  );
};

export function CreateModal({closeModal}: ModalProps) {
 const [name, setName] = useState("");
  const [servico, setServico] = useState("");
  const [status, setStatus] = useState(false);
  const [modelo, setModelo] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const[data_entrada, setDataEntrada] = useState("");
  const [numero, setNumero] = useState("");

  const {mutate, isSuccess} = useCadastroDataMutate();

  useEffect(() => {
    if (isSuccess) {
      closeModal();
    }
  }, [isSuccess, closeModal]);


  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    
    const cadastroData: CadastroData = {
      name,
      servico,
      status,
      quantidade,
      modelo,
      data_entrada,
      numero
    };
    

    mutate(cadastroData);

    
  }



  return (
    <div className="modal-overflow">
      <div className="modal-body">
        <img src="./public/cruz.png" alt="" className="button_close" onClick={closeModal}/>
        <h2>Cadastre um novo serviço</h2>

        <form className="input-container">
          
          <Input label="Nome" value={name} updateValue={setName} />
          <Input label="Serviço" value={servico} updateValue={setServico} />
          <Input label="Modelo" value={modelo} updateValue={setModelo} />
          <Input label="Quantidade" value={quantidade.toString()} updateValue={(val) => setQuantidade(Number(val))} />
          <Input label="Data de Entrada" value={data_entrada} updateValue={setDataEntrada} />
          <Input label="Número" value={numero} updateValue={setNumero} />

          <label className="checkbox">
  <input
    type="checkbox"
    checked={status}
    onChange={(e) => setStatus(e.target.checked)}
  />
  <span className="checkmark"></span>
  Concluído
  </label>


          <button onClick={submitForm}  className="btn-secundario">Cadastrar</button>
        </form>
      </div> 
    </div>
  );
}