<template>
  <nav class="header">
    <ul class="menu">
      <li class="item">
        <router-link to="/" class="navbar-brand">Domino Home</router-link>
      </li>
      <li class="item">
        <router-link to="/page1" active-class="active">Page 1</router-link>
      </li>
      <li class="item">
        <router-link to="/page2" active-class="active">Page 2</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

nav.header {
  background: #dddddd;
  padding: 5px 20px;
}

ul {
  list-style-type: none;
}
a {
  color: #333333;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.menu li {
  font-size: 1.6em;
  padding: 15px 5px;
  white-space: nowrap;
}

.item {
  display: block;
  width: auto;
}
.menu li {
  padding: 15px 10px;
}
.menu li.button {
  padding-right: 0;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

.item .active {
  font-weight: bold;
}
</style>