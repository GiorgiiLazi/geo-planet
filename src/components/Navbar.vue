<template>
  <nav class="nav-bar">
    <span>Where in the world?</span>
    <router-link to="/">Countries</router-link>
    <router-link to="/quiz">Quiz</router-link>
    <span>Dark mode</span>
  </nav>
  <router-view/>
</template>

<script>
export default {

}
</script>

<style>
.nav-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: rgba(0,0,0,0.4)
}
a{
    color: white;
    text-decoration: none;
}

</style>