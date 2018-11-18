<template>
  <div class="painel">
    <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h2>
      <transition name="painel-fade">
        <div class="painel-conteudo" v-show="visivel">
          <slot></slot>
        </div>
      </transition>
  </div>
</template>

<script src="./Painel.js" />
<style src="./Painel.css" scoped />




