<template>
  <div>
    <h1>{{ titulo }}</h1>
    <img :src="foto_1.url" :alt="foto_1.titulo"/>
    <img :src="foto_2.url" :alt="foto_2.titulo"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Alurapic",
      foto_1: {
        url: 'https://bit.ly/2MtUsdf',
        titulo: 'cachorro'
      },
      foto_2: {
        url: 'https://bit.ly/2xcTgq2',
        titulo: 'cachorro'
      }
    };
  }
};
</script>

<style>
</style>
