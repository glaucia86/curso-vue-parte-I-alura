<template>
    <nav>
        <ul>
            <li v-for="rota in rotas">
                <router-link :to="rota.path ? rota.path : '/'">
                    {{ rota.titulo }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script src="./Menu.js" />
<style src="./Menu.css" />


