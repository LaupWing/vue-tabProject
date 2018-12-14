<template lang="html">
  <div class="container">
    <form id="itemForm">
      <input v-model="value" id="itemInput" type="text" name="" placeholder="wat wil ik doen vandaag?">
      <button @click="addToDo" class="btn-add">Voeg mission toe</button>
    </form>
    <todo v-on:complete-todo="completeTodo" v-on:delete-todo="deleteTodo" v-for="dum in dummy" :dum="dum" :color="color"> </todo>

  </div>
</template>

<script>
import Todo from './To-do-item'
export default {
  props:['dummy', 'color'],
  components:{
    Todo,
  },
  data(){
    return{
      value: '',
    }
  },
  methods:{
    deleteTodo(dum){
      console.log(dum)
      const todoIndex = this.dummy.indexOf(dum);
      this.dummy.splice(todoIndex, 1);
    },
    addToDo(event){
      event.preventDefault();
      console.log(this.value)
      if(this.value.length >0){
        console.log("yes")
        const value = this.value;
        this.$emit('create-todo',{
          value,
          done:false,
        })
        this.value = '';
      }
    },
    completeTodo(dum) {
      console.log(dum)
      const todoIndex = this.dummy.indexOf(dum);
      this.dummy[todoIndex].done = true;
      console.log(this.dummy)
    },
  }
}
</script>

<style lang="css" scoped>
.btn-clear {
  margin: 20px auto;
  display: block;
}

#itemForm {
  width: 100%;
  display: flex;
}

#itemInput {
  width: 80%;
  padding: 10px;
  font-size: 16px;
}
</style>
