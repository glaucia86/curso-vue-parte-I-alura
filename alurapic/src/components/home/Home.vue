<template>
  <div>
    <h1 class="centralizado">Alurapic</h1>
    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Filtre pelo Título da Foto">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">

        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
          <meu-botao
            rotulo="remover"
            tipo="button"
            :confirmacao="true"
            @botaoAtivado="remove(foto)"
            estilo="perigo"/>
        </meu-painel>

      </li>
    </ul>
  </div>
</template>

<script src="./Home.js" />
<style src="./Home.css" scoped />

