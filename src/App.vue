<template>
  <AppProducts />

  Valor total do carrinho R$: {{ $store.getters.total }}
  <br />
  <br />
  {{ $store.state.user.first_name }} {{ $store.state.user.last_name }}
  <button @click="updateUser">Atualizar perfil</button>
</template>

<script>
import AppProducts from "@/components/Products/AppProducts.vue";

export default {
  name: "App",
  components: {
    AppProducts,
  },
  data() {
    return {};
  },
  methods: {
    updateUser() {
      const newUser = {
        first_name: "Bruno",
        last_name: "dos Santos",
        email: "bruno@dossantos.com",
      };
      // Chamando mutation
      //this.$store.commit("storeUser", newUser);
      // Chamando Action
      this.$store.dispatch("storeUser", newUser);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
