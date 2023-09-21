<template>
  <nav class="nav-bar">
    <span class="logo">Geo-planet</span>
    <router-link to="/">Countries</router-link>
    <router-link to="/quiz">Quiz</router-link>
    <transition tag="div" name="sun" v-if="!darkMode">
      <span  style="color:yellow" @click="changeDark" class="material-icons">
      light_mode
    </span>
    </transition>
    <transition tag="div" name="moon" v-else >
      <span  style="color:purple" @click="changeDark" class="material-icons">
      dark_mode
    </span>
    </transition>
    
    
  </nav>
  <router-view/>
</template>

<script>
export default {
  data(){
    return{
      darkMode: false
    }
  },
  mounted(){
    document.body.classList.add('bright');
    },
  methods:{
    changeDark(){
      this.darkMode =! this.darkMode
      if(this.darkMode === true){
        document.body.classList.remove('bright');
        document.body.classList.add('dark');
      }
      if(this.darkMode === false){
        document.body.classList.remove('dark');
        document.body.classList.add('bright');
      }
      
    }
  }
}
</script>


<style>
.nav-bar{
    font-family: 'Montserrat', sans-serif;
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
.logo{
  text-transform: uppercase;
  font-size: 25px;
  font-weight: bold;
}
a{
    color: white;
    text-decoration: none;
}
.router-link-active{
  padding: 10px;
  border-radius: 8px;
  background-color:lightskyblue
}

/* animations */
.sun-enter-from, .sun-leave-to, .moon-enter-from, .moon-leave-to{
  opacity: 0;
  transform: translateY(-100px)
}
.sun-enter-to, .sun-leave-from,.moon-enter-to,.moon-leave-from {
  opacity: 1;
  transform: translateY(0)
}
.sun-enter-active, .sun-leave-active,.moon-enter-active, .moon-leave-active{
  transition: all 1s ease
}

</style>