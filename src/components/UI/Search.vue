<template>
  <div class="wrapper">
    <label for="input1"></label>
    <input @keyup.enter="changeInput" v-model="input" type="text" name="" id="input1" placeholder="Search for a country">

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
    padding-top: 100px;
    margin-bottom: 100px;
}
input{
 width: 20vw;
 padding: 5px;
}
select{
    padding: 5px;
}

</style>