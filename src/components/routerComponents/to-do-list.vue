<template>
<div class="todo">
  <header :style="{background: color}">
    <h2>To-do-list</h2>
    <div class="">
      <p class="todo-info">Completed Tasks: {{itemData.filter(todo => {return todo.done === true}).length}}</p>
      <p class="todo-info">Pending Tasks: {{itemData.filter(todo => {return todo.done === false}).length}}</p>
    </div>
  </header>

  <to-do-list v-on:resetItemData="resetItemData" v-on:create-todo="createTodo" :color="color" :itemData="itemData"></to-do-list>
</div>
</template>

<script type="text/javascript">
import ToDoList from './to-do-list_Components/To-do-list_Form'

export default {
  name: 'ToDo',
  props: ['color'],
  components: {
    ToDoList
  },
  data() {
    return {
      itemData: JSON.parse(localStorage.getItem("to-do-list")) || [],
    }
  },
  methods: {
    createTodo(newTodo){
      this.itemData.push(newTodo);
      localStorage.setItem("to-do-list", JSON.stringify(this.itemData))
    },
    handleEvents: function(action) {
      this.itemData.shift()
      console.log(this.itemData)
      localStorage.setItem("to-do-list", JSON.stringify(this.itemData))
    },
    resetItemData: function(){
      // this.itemData = []
      while(this.itemData.length > 0) {
        this.itemData.pop();
      }
      localStorage.setItem("to-do-list", JSON.stringify(this.itemData))
      console.log(this.itemData)
     }
  },

}
</script>

<style media="screen" scoped>
header {
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  border-radius: 10px 10px 0 0;
}
.todo-info{
  margin: 2px;
}
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
  padding: 3px;
}

.item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  font-size: 18px;
}





/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
