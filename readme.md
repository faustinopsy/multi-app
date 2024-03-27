

> [!IMPORTANT]
> ### instalando o vue em sua forma global
> npm install -g @vue/cli

> ### criando o app, foi escolhido a versão 2
> vue create meu-app

> ### executando o app
> cd meu-app
> npm run serve

> [!OPÇÕES-COMPONENTE]
> ### Props (Propriedades)
> As propriedades passadas para um componente Vue são definidas dentro da opção props. Elas permitem que os dados sejam passados de um componente pai para um filho.
```
props: {
  nome: String,
  idade: Number
}

```
> ### Data (Dados):
> A opção data é uma função que retorna um objeto contendo os dados do componente Vue. Esses dados são reativos, o que significa que qualquer alteração neles será refletida automaticamente no DOM.
```
data() {
  return {
    count: 0,
    message: 'Hello!'
  };
}

```
> ### Mounted (Montado):
> A opção mounted é um hook de ciclo de vida que é chamado após o componente Vue ser montado no DOM. É usado para executar código após o componente ter sido renderizado.
```
mounted() {
  console.log('Componente montado');
}

```
> ### Watch (Observador):
> A opção watch é usada para observar mudanças em dados reativos e executar ações quando essas mudanças ocorrem. É útil para executar tarefas assíncronas ou complexas em resposta a alterações nos dados.
```
watch: {
  idade(novaIdade, idadeAntiga) {
    console.log(`Nova idade: ${novaIdade}, Idade antiga: ${idadeAntiga}`);
  }
}

```
> ### Computed (Computado):
> A opção computed é usada para definir propriedades computadas no componente Vue. Essas propriedades são calculadas dinamicamente com base em outras propriedades reativas e são armazenadas em cache até que uma das dependências seja alterada.
```
computed: {
  nomeCompleto() {
    return `${this.primeiroNome} ${this.ultimoNome}`;
  }
}

```
> ### Methods (Métodos):
> A opção methods é usada para definir métodos personalizados dentro do componente Vue. Esses métodos podem ser chamados de dentro do template do componente para executar ações específicas.
```
methods: {
  incrementar() {
    this.count++;
  }
}

```

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]

> [!CAUTION]