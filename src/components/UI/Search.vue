<template>
  <div class="wrapper">
    
    <input @keydown.enter="changeInput" v-model="input" type="text" name="" id="input1" placeholder="Search for a country">

    <select @change="changeSelected"  v-model="selected">
        <option disabled value="filter">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
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
        changeSelected(){
            this.$emit('changeSelected', this.selected)
        },
        changeInput(){
            this.$emit('changeInput', this.input)
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
    margin-top: 30vh;
    margin-bottom: 100px;
}
input{
 width: 400px;
 padding: 5px;
}
select{
    padding: 5px;
}
@media only screen and (max-width: 450px){
    
    .wrapper{
    flex-direction: column;
    justify-content:space-between ;
    }
    .wrapper *{
        margin: 5px;
        width: 200px;
    }
    
}

</style>