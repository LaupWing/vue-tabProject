<template>
<div class="todo">
  <header :style="{background: color}">
    <h2>To-do-list</h2>
    <div class="">
      <p class="todo-info">Completed Tasks: {{dummyData.filter(todo => {return todo.done === true}).length}}</p>
      <p class="todo-info">Pending Tasks: {{dummyData.filter(todo => {return todo.done === false}).length}}</p>
    </div>
  </header>

  <to-do-list v-on:create-todo="createTodo" :color="color" :dummy="dummyData"></to-do-list>

  <!-- <form id="itemForm">
    <input id="itemInput" type="text" name="" placeholder="wat wil ik doen vandaag?">
    <button @click="addItem" name="button" class="btn-add">Voeg mission toe</button>
  </form>
  <div class="itemList">
    <div class="item" v-for="item in itemData">
      {{item}}
      <div class="">
        <i @click="editItem" class="far fa-edit"></i>
        <i @click="finishedItem" class="fas fa-check-square"></i>
        <i @click="handleEvents('delete')" class="fas fa-trash"></i>
      </div>
    </div>
  </div>
  <button type="button" class="btn-clear">CLEAR</button> -->
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
      itemData: [],
      dummyData: [{
        value: 'Todo A',
        // project: 'Project A',
        done: false,
      }, {
        value: 'Todo B',
        // project: 'Project B',
        done: true,
      }, {
        value: 'Todo C',
        // project: 'Project C',
        done: false,
      }, {
        value: 'Todo D',
        // project: 'Project D',
        done: false,
      }],
    }
  },
  methods: {
    createTodo(newTodo){
      console.log(newTodo, "createtodo")
      this.dummyData.push(newTodo);
    },
    addItem: function(event) {
      event.preventDefault()
      const itemInput = document.querySelector("#itemInput")
      const textValue = itemInput.value
      itemInput.value = ""
      this.itemData.push(textValue)
    },
    editItem: function() {

    },
    finishedItem: function() {

    },
    deleteItem: function(item) {
      const itemList = document.querySelector(".itemList")
      const items = itemList.querySelectorAll(".item")
      const clickedItem = event.currentTarget.parentNode.parentNode
      const clickedItemValue = event.target.parentNode.parentNode.textContent.trim()
      console.log("halo")
      // const itemList = document.querySelector(".itemList")
      // const items = itemList.querySelectorAll(".item");
      // const clickedItem = event.currentTarget.parentNode.parentNode
      // const clickedItemValue = event.target.parentNode.parentNode.textContent.trim()
      // // console.log(clickedItem)
      // console.log(value)
      // items.forEach(function(item){
      //   console.log(item)
      //   if(item.textContent.trim()==clickedItemValue){
      //     console.log(item, "this one")
      //     console.log(value)
      //   }
      // })
      // this.itemData = this.itemData.filter(function(item) {
      //       return item !== clickedItemValue
      //     })
      // console.log(this.itemData)
      // itemList.removeChild(clickedItem)
    },
    handleEvents: function(action) {
      // const itemList = document.querySelector(".itemList")
      // const items = itemList.querySelectorAll(".item");
      // const clickedItem = event.currentTarget.parentNode.parentNode
      // const clickedItemValue = event.target.parentNode.parentNode.textContent.trim()
      // console.log(clickedItem)
      this.items.forEach(function(item) {
        console.log(item)
        if (item.textContent.trim() == this.clickedItemValue) {
          // console.log(item, "this one")
          // itemList.removeChild(item)
        }
      })
    }
  }

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
</style>
