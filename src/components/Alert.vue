<template lang="html">
  <div class="container">
    <div class="alert">
      <p>Weet u zeker dat u <span :style="{color : color}">{{item}}</span> wilt verwijderen?</p>
      <button @click="answer('No')" type="button" name="button">Nee</button>
      <button @click="answer('Yes')" type="button" name="button">Ja</button>
      <button @click="toggle" v-show="always" class="altijd" type="button" name="button">Ja Altijd</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props:['item', 'color', 'always'],
  methods:{
    answer(answer){
      console.log(answer)
      this.$emit("answer", answer, false)
    },
    toggle(){
      // Uitzetten van de melding
      this.$emit("answer", 'Yes', true)
    }
  }
}
</script>

<style lang="css" scoped>
.alert{
  padding: 10px;
  text-align: center;
  width: 300px;
  height: 170px;
  background: white;
  border-radius: 10px;
  box-shadow: 10px 10px 29px -8px rgba(0,0,0,0.43);
}
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.4);
  position: fixed;
  top: 0;
  z-index: 100;
  left:0;
}
span{
  font-weight: 800;
}
button{
  margin: 10px;
}
.altijd{
  width: 30%;
}

</style>
