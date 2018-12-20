<template lang="html">
  <div class="container">
    <form id="itemForm">
      <input v-model="value" id="itemInput" type="text" name="" placeholder="wat wil ik doen vandaag?">
      <button @click="addToDo" class="btn-add">Voeg mission toe</button>
    </form>
    <div class="list">
    <todo v-on:complete-todo="completeTodo" v-on:edit-todo="editTodo" v-on:delete-todo="alertToggle" v-for="item in itemData" :item="item" :color="color"> </todo>
  </div>
   <alert v-show="alert" :item="name" :color="color" :always="always" v-on:answer="answer"> </alert>
  </div>
</template>

<script>
import Todo from './To-do-item'
import Alert from '../../Alert'

export default {
  props:['itemData', 'color'],
  components:{
    Todo,
    Alert
  },
  data(){
    return{
      value: '',
      name: 'To-do-Item',
      always: true,
      alert: false,
      neverShow: false,
      item: '',
    }
  },
  methods:{
    deleteTodo(item){
      // item.style.height = 0;
      console.log(event.target)
      // const todoIndex = this.itemData.indexOf(item);
      // this.itemData.splice(todoIndex, 1);
      // localStorage.setItem("to-do-list", JSON.stringify(this.itemData))
    },
    editTodo(item){
      const todoIndex = this.itemData.indexOf(item);
      this.itemData[todoIndex].value = item.value;
      localStorage.setItem("to-do-list", JSON.stringify(this.itemData))
    },
    addToDo(event){
      event.preventDefault();
      console.log(this.value)
      if(this.value.length >0){
        const value = this.value;
        this.$emit('create-todo',{
          value,
          done:false,
        })
        this.value = '';
        localStorage.setItem("to-do-list", JSON.stringify(this.itemData))
      }
    },
    completeTodo(item) {
      const todoIndex = this.itemData.indexOf(item);
      this.itemData[todoIndex].done = true;
      if(this.itemData.every(this.checkComplete)){
        this.$emit('resetItemData')
      }else{
        let done = 0;
        this.itemData.forEach(function(item){if(item.done === true){done++}})
        console.log(done)
      }
      // console.log("checking ",this.itemData.every(this.checkComplete))
      localStorage.setItem("to-do-list", JSON.stringify(this.itemData))
    },
    checkComplete(item){
      return item.done === true;
    },
    alertToggle(item){
      this.item = item
      if(!this.neverShow){
        this.alert = true
      }else{
        this.deleteTodo(this.item)
      }
    },
    answer(answer, neverShow){
      this.neverShow = neverShow
      if(answer === "Yes"){
        this.deleteTodo(this.item)
        this.alert = false
      }else{
        this.alert = false
      }
    },
  }
}
</script>

<style lang="css" scoped>
.btn-clear {
  margin: 20px auto;
  display: block;
}
.list{
  /* background: orange; */
  max-height: 45vh;
  overflow: auto;
  overflow-x: hidden;
}

.btn-add{
  outline: none;
  transition: .25s;
  cursor: pointer;
}
.btn-add:hover{
  background: black;
  color: white;
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
@media only screen and (max-height: 900px) {
  .list {
    max-height: 40vh;
  }
}
@media only screen and (max-height: 810px) {
  .list {
    max-height: 35vh;
  }
}
@media only screen and (max-height: 740px) {
  .list {
    max-height: 30vh;
  }
}
</style>
