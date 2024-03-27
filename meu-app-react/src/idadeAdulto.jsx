import React, { useState, useEffect } from 'react';

const IdadeAdulto = ({ title }) => {
  const [idade, setIdade] = useState(0);
  const [nome, setNome] = useState('');

  const saudacao = () => {
    return `Olá, ${nome}! Você tem ${idade} anos de idade.`;
  };

  const categoriaIdade = () => {
    return idade >= 18 ? 'adulto' : 'menor de idade';
  };

  useEffect(() => {
    console.log('Componente montado');
  }, []);

  const alteraIdade = (event) => {
    setIdade(Number(event.target.value));
  };

  const alteraNome = (event) => {
    setNome(event.target.value);
  };

  return (
    <div>
      <h1>{title}</h1>
      <label htmlFor="nome">Nome:</label>
      <input type="text" id="nome" value={nome} onChange={alteraNome} />
      <br />
      <label htmlFor="idade">Idade:</label>
      <input
        type="number"
        id="idade"
        value={idade}
        onChange={alteraIdade}
      />
      <br />
      <p>{saudacao()}</p>
      <p>Categoria de idade: {categoriaIdade()}</p>
    </div>
  );
};

export default IdadeAdulto;
