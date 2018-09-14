<template>
  <div>
    <h1>{{ titulo }}</h1>    
    <ul>
      <li v-for="foto in fotos">
        <img :src="foto.url" :alt="foto.titulo"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Alurapic",
      fotos: [
        {
          url: "https://bit.ly/2MtUsdf",
          titulo: "cachorro"
        },
        {
          url: "https://bit.ly/2xcTgq2",
          titulo: "cachorro"
        }
      ]
    };
  }
};
</script>

<style>
</style>
