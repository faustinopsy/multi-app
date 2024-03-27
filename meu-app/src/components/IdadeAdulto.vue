<template>
  <div>
    <h1>{{ title }}</h1>
    <label for="nome">Nome:</label>
    <input type="text" id="nome" v-model="nome">
    <br>
    <label for="idade">Idade:</label>
    <input type="number" id="idade" v-model.number="idade">
    <br>
    <p>Categoria de idade: </p>
    <p>{{ categoriaIdade }}</p>
    <slot></slot> 
  </div>
</template>

<script>
export default {
  name: 'IdadeAdulto',
  props: {
    title: String,
    
  },
  data() {
    return {
      idade: 0, 
      nome: '',
    };
  },
  methods: {
    saudacao() {
      return `Olá, ${this.nome}! Você tem ${this.idade} anos de idade.`;
    }
  },
  computed: {
    categoriaIdade() {
      return this.idade >= 18 ? 'adulto' : 'menor de idade';
    }
  },
  mounted() {
    console.log('Componente montado');
  },
  watch: {
    idade(novaIdade, idadeAntiga) {
      console.log(`Nova idade: ${novaIdade}, Idade antiga: ${idadeAntiga}`);
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
