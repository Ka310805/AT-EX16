import { useState } from "react";
import "./App.css";

//use states, salvando nas states
function Acesso() {
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  //alert teste
  function sendEmail(e) {
    e.preventDefault();

    //campos vazios <
    if (nome === "" || email === "" || senha === "") {
      alert("Preencha todos os campos");
      return;
    }

    alert("Sua conta foi registrada");
    
  }

  return (
    <div className="container">
      <div className="borda "></div>
      <h1 className="title">AT - EXERCÍCIO 16</h1>
      <h3 className="subtitle">
        Ana Luiza Cavalcante - Kawuan Americo - Tarik Mazloum
      </h3>
      <form className="form" onSubmit={sendEmail}>
        <input
          className="input"
          type="text"
          placeholder="Escreve seu nome"
          onChange={(e) => setName(e.target.value)}
          value={nome}
          maxLength={60}
        />

        <input
          className="input"
          type="email"
          placeholder="Escreva seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          maxLength={60}
        />

        <input
          className="input"
          placeholder="Escreva a senha"
          onChange={(e) => setSenha(e.target.value)}
          value={senha}
        />
        <input className="button" type="submit" value="Salvar" />
      </form>
    </div>
  );
}

export default Acesso;
