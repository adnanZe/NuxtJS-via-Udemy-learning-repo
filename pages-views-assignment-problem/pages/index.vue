<template>
  <div>
    <button @click="onProduct">Products</button>
    <section class="container">
      <ol>
        <li>Create two routes: /products and /products/:pid</li>
        <li>Add a button to the main page. The button should navigate (programmatically) to /products</li>
        <li>Add two links to the /products page. The links should go to /products/1 and /products/2</li>
        <li>Output the product id on the /products/:pid page</li>
      </ol>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  methods:{
    onProduct(){
      this.$router.push('/products')
    }
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
