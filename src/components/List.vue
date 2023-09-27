<template>
  <Search @changeSelected="selected($event)" @changeInput="input($event)" />
  <div class="list-wrapper">
    <transition-group
    v-if="list.lenght =! 0" 
    @before-enter="beforeEnter"
    @enter="enter" 
    tag="ul" 
    appear>
        <li style="background-color:lightgrey" class="list-item" v-for="(li, index) in list" :key="li.idd" :data-index="index">
            <div>
                <img :src="li.flags.png" :alt="li.flags.alt">
                <div class="text-wrapper">
                <h1>{{li.name.common}}</h1>
                <p>
                    <strong>Population:</strong> 
                    <br> 
                    {{li.population.toLocaleString()}}
                </p>
                <p><strong>Region: </strong>{{li.subregion}}</p>
            </div>
            </div>
            
        </li>
    </transition-group>
    <div v-else>
        <h1>Please wait for data</h1>
    </div>
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
                delay: el.dataset.index * 0.02
            })
        }

        return {list, beforeEnter, enter}
    },
    mounted(){
        fetch("https://restcountries.com/v3.1/independent?status=true")
            .then(res => res.json())
            .then(data => this.list = data)
            .catch(err => console.log(err))
    },
    methods:{
        async selected(eventData){
            await fetch("https://restcountries.com/v3.1/independent?status=true")
            .then(res => res.json())
            .then(data => this.list = data)
            .catch(err => console.log(err))

            const newList = this.list.filter(el => el.region.toLowerCase() === eventData)
            this.list = newList
        },
        async input(eventData){
            await fetch("https://restcountries.com/v3.1/independent?status=true")
            .then(res => res.json())
            .then(data => this.list = data)
            .catch(err => console.log(err))

            const newList = this.list.filter(el => el.name.common.toLowerCase() === eventData.toLowerCase())
            this.list = newList
        }
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
}
.list-item{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    background-color: rgb(249, 242, 242);
    max-width: 200px;
    max-height: 300px;
    border-radius: 8px;
}
.text-wrapper{
    padding: 0 20px;
    font-size: 14px;
}
.list-item img{
    border-radius: 8px;
    width: 200px;
    height: 100px;
    max-width: 200px;
}
h1{
    font-size: 20px;
}
.list-wrapper  :hover{
    position: relative;
    top: -4px;

}
@media only screen and (max-width: 450px){
    
    .list-wrapper ul{
    grid-template-columns: 1fr
    }
    
}

    



</style>