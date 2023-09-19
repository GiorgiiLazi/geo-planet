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
    position:fixed;
    z-index: 3;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    margin: auto;
    background-color: rgba(0,0,0,0.4);
    color: white
}
a{
    color: white;
    text-decoration: none;
}

</style>