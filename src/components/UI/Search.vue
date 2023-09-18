<template>
  <div class="wrapper">
    <label for="input1"></label>
    <input @change="emitInput" @keyup.enter="emitInput" v-model="input" type="text" name="" id="input1" placeholder="Search for a country">

    <select @change="emitSelect" name="" v-model="selected" id="">
        <option disabled value="filter">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
    </select>
  </div>
  
</template>

<script>
export default {
    data(){
        return{
            selected: "filter",
            input:""
        }
    },
    methods:{
        emitInput(){
            
        },
        emitSelect(){

        }
    }

}
</script>

<style scoped>
.wrapper{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-height: 50px;
    padding: 20px;
}
input{
 width: 20vw;
 padding: 5px;
}
select{
    padding: 5px;
}

</style>