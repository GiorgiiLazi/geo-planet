<template>
  <div class="wrapper">
    <transition name="fade" appear>
        <section class="greet">
            <h1>Greetings!!!</h1>
            <h2><strong>Welcome</strong> to <strong>Geoplanet</strong>!!!</h2>
            <p>We strongly hope that this educational project will help you grasp understanding of Geography and in particular Political Geography</p>
            <p>This pet-project was created by Lazishvili Giorgi as a web portfolio project</p>
            <p>The idea of creation this project was taken from <a href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca">here</a>.</p>
            <p>Feel free to interact with the site and contact <a href="https://github.com/GiorgiiLazi">me</a> if you want</p>
        </section>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper{
    height: auto;
    max-height: auto;
    display: flex;
    justify-content: center;
    align-content: center;
}
.greet{
    color: white;
    display: flex;
    align-content: flex-start;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 30vh;
    margin-bottom: 20px;
    max-width: 600px;
    max-height: auto;
    border-radius: 14px;
    padding: 30px;
    background-color: blueviolet;
}
a{
    font-weight:bolder;
    text-decoration: underline;
}
.fade-enter-from{
    opacity: 0;
    transform: translateX(-500px)
}
.fade-enter-to{
    opacity: 1;
    transform: translateX(0)
}
.fade-enter-active{
    transition: all 2s ease
}

</style>