// Aqui devemos criar nosso contexto e nosso provider.
import React from "react";

//criando nosso contexto para ser consumido em outros componentes
export const ContextoFormulario = React.createContext();

//criando o provedor desse contexto, vai levar o children como argumento pq vai ser envolto globalmente no app

const ProviderFormulario = ({ children }) => {
  //criando o estado do contexto, temos um formulario com esses 3 campos, ou seja, o formulario será um objeto com campo:valor
  const [formulario, setFormulario] = React.useState({
    nome: "",
    sobrenome: "",
    email: "",
  });
  //ao sair do input, o valor do input vai ser atribuido ao campo do formulario, leva o valor do input como argumento
  //onde vou colocar?
  const handleInputBlur = (valorInput) => {
    //como o valor do input vai ser atribuido ao campo do formulario, preciso criar um novo objeto com o campo:valor, e associa-lo ao valor input e consequentemente coloco o seu estado no formulario
    const { campo, valor } = valorInput;
    setFormulario({
      ...formulario,
      [campo]: valor,
    });
  };
  return (
    <ContextoFormulario.Provider value={{ formulario, handleInputBlur }}>
      {children}
    </ContextoFormulario.Provider>
  );
};

export default ProviderFormulario;
