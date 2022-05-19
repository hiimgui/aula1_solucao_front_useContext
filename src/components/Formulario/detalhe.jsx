import React from "react";
import { ContextoFormulario } from "../../context/contextoFormulario";
import { useContext } from "react";
const Detalhe = () => {
  // Aqui devemos pegar os dados do formulário para podermos mostrá-lo em a visualização.
  //lembra que definimos o estado global do {formulario la no contexto?},
  const { formulario } = useContext(ContextoFormulario);
  // *declaramos as variaveis que vamos usar para mostrar os dados do formulario. estao desestruturadas pq o formulario é um objeto com par de valor
  const { nome, sobrenome, email, nomePokemon } = formulario;
  return (
    <div className="detalhe-formulario">
      <div className="cabecalho">
        <h3>Vista prévia da solicitação</h3>
      </div>
      <section className="dados-cliente">
        <h4>Dados do Treinador</h4>
        <div className="lista">
          <p>Nome: {nome}</p>
          <p>Sobrenome: {sobrenome}</p>
          <p>Email: {email}</p>
        </div>
      </section>
      <section className="dados-cliente">
        <h4>Dados do Pokémon</h4>
        <div className="lista">
          <p>Nome: {nomePokemon}</p>
        </div>
      </section>
      <button
        className="botao-enviar"
        onClick={() => alert("Solicitação enviada :)")}
      >
        Enviar Solicitação
      </button>
    </div>
  );
};

export default Detalhe;
