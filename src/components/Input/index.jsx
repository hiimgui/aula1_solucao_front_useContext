import React from "react";
import { ContextoFormulario } from "../../context/contextoFormulario";
import { useContext, useState } from "react";


const Input = ({ name, label, type = "text" }) => {
  // Aqui devemos acessar o estado global para obter os dados
  // do formulário e uma maneira de atualizá-los.
  const { formulario, handleInputBlur } = useContext(ContextoFormulario);
  // Além disso, usaremos um estado local para lidar com o estado da input.
  const [value, setValue] = useState(formulario[name] || "");
  const onChange = (e) => {
    // Aqui devemos atualizar o estado local do input
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    e.preventDefault();

    // Aqui devemos atualizar o estado global com os dados de
    // cada entrada.
    // ! DICA: Podemos usar o nome de cada entrada para salvar os dados no estado global usando uma notação { chave: valor }
    // * Lembrar que a funcao aceita um objeto como parâmetro.

    handleInputBlur({
      campo: name,
      valor: value,
    });
  };

  return (
    <div className="input-receptor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
