<template>
  <Search/>
  <div class="list-wrapper">
    <transition-group
    @before-enter="beforeEnter"
    @enter="enter" 
    tag="ul" 
    appear>
        <li class="list-item" v-for="(li, index) in list" :key="li.idd" :data-index="index">
            <div><img :src="li.flags.png" :alt="li.flags.alt"></div>
            <div>
                <h1>{{li.name.common}}</h1>
                <p><strong>Population:</strong> {{li.population.toLocaleString()}}</p>
                <p><strong>Region: </strong>{{li.region}}, {{li.subregion}}</p>
            </div>
        </li>
    </transition-group>
  </div>
</template>

<script>
import gsap from "gsap"
import Search from "../components/UI/Search.vue"
import { ref } from 'vue'
export default {
    components:{Search},
    setup(){
        const list = ref([])

        const beforeEnter = (el) =>{
            el.style.opacity = 0;
            el.style.transform = "translateY(100px)"
        }
        const enter = (el,done) =>{
            gsap.to(el,{
                y:0,
                opacity:1,
                duration: 0.8,
                onComplete: done,
                delay: el.dataset.index * 0.3
            })
        }

        return {list, beforeEnter, enter}
    },
    mounted(){
        fetch("https://restcountries.com/v3.1/independent?status=true")
            .then(res => res.json())
            .then(data => this.list = data)
            .catch(err => console.log(err))
    }

}
</script>

<style>
.list-wrapper{
    display: flex;
    justify-content: center;
}
.list-wrapper ul{
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
.list-item{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    background-color: rgb(249, 242, 242);
    max-width: 320px;
    max-height: 400px;
    border-radius: 8px;
}
.list-item img{
    border-radius: 8px;
    width: 100%;
    height: 100%;
    max-width: 320px;
}
h1{
    font-size: 20px;
}

</style>