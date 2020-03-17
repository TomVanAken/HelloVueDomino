<template>
  <div>
    <app-Header></app-Header>
    <main role="main" class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    appHeader: Header
  }
};
</script>
<style>
</style>
