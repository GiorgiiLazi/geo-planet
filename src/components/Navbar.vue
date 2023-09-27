<template>
<transition  tag="div" name="nav-wrap" appear>
  <nav class="nav-bar" @click="panelOpen =! panelOpen">
    <div class="logo">
      <img src="@/assets/logo.png" alt="">
      <span class="logo">Geoplanet</span>
    </div>
    
    <router-link to="/">About</router-link>
    <router-link to="/countries">Countries</router-link>
    <router-link to="/quiz">Quiz</router-link>
    <transition tag="div" name="sun" class="toggleSun" >
      <span v-if="!darkMode" style="color:yellow" @click="changeDark" class="material-icons">
        light_mode
      </span>
      <span v-else style="color:purple" @click="changeDark" class="material-icons">
        dark_mode
      </span>
    </transition>
  </nav>
</transition>

  <router-view/>
</template>

<script>
export default {
  data(){
    return{
      darkMode: false,
      panelOpen: true
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
      } else {
        document.body.classList.remove('dark');
        document.body.classList.add('bright');
      }
      
    }
  }
}
</script>


<style>
.material-icons{
  cursor: pointer;
}
.nav-bar{
    
    font-family: 'Montserrat', sans-serif;
    position:fixed;
    display: relative;
    top: 0;
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
  display: flex;
  justify-content:space-evenly;
  width: 30%;
  align-items: center;
  text-transform: uppercase;
  font-size: 25px;
  font-weight: bold;
}
.logo img{
  width: 100%;
  max-width: 75px;
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
.toggleSun{
  position: fixed;
  margin-top: 10px;
  margin-right: 30px;
  top: 0;
  right: 0
}

/* animations */
.sun-enter-active {
  transition: all 0.3s ease;
}

.sun-leave-active {
  transition: all 0.8s ease
}
.sun-enter-from{
  transform: translateX(200px);
  opacity: 0;
}
.sun-leave-to{
  transform: translateX(-500px);
  opacity: 0;
}

.nav-wrap-enter-from{
  opacity: 0;
  transform: translateY(-100px)
}
.nav-wrap-enter-to{
  opacity: 1;
  transform: translateY(0)
}
.nav-wrap-enter-active{
  transition: all 1s ease
}

@media screen and (max-width: 400px){
  .nav-bar{
    flex-direction: column;
    justify-content: space-evenly;
    table-layout:fixed;
  }
  .nav-bar {
    margin: 0;
    padding: 15px 0;
  }
  .nav-bar *{
    margin: 0;
    padding: 5px 15px;
  }
  .logo{
  display: flex;
  width: 30%;
  align-items: center;
  text-transform: uppercase;
  font-size: 17px;
  font-weight: bold;
  }
  .logo img{
  width: 100%;
  max-width: 35px;
  display: none;
  }
  a{
    font-size:17px;
  }
  .toggleSun{
  position: absolute;
  margin-top: 5px;
  top: 5px;
  left: 5px;
  margin: 0;
  padding: 0;
  }
}




</style>