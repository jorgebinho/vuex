<template>
  <div>
    <h2>Produtos</h2>
    <AppProduct
      v-for="product in this.$store.state.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import AppProduct from "./AppProduct.vue";
export default {
  components: { AppProduct },
};
</script>
