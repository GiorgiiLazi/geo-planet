<template>
<Navbar />
  
</template>


<script>
import Navbar from "./components/Navbar.vue"
export default {
  components: {Navbar},
  
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;500&display=swap');
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.dark{
  background: rgb(80,7,105);
  background: linear-gradient(90deg, rgba(80,7,105,1) 37%, rgba(2,0,36,1) 100%, rgba(98,9,121,1) 100%);
}
.bright{
  background-color:darkturquoise
}

</style>
