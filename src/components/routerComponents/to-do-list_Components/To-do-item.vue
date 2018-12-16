<template lang="html">
  <div v-bind:class="['container', (item.done === true) ? 'disable' : '']">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
      <div class="to-do-item" v-show="!isEditing">

        <div v-show="!item.done" @click="completeTodo(item)" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave" class="complete-btn hoverOn cursorPointer">
          <i :style="[hover ? {'color': 'white'} : {'color': 'rgba(0,0,0,0.7)'}]" class="fas fa-check cursorPointer"></i>
        </div>

        <div v-show="item.done" class="complete-btn">
          <i class="fas fa-check  disableFont"></i>
        </div>

        <div v-show="!item.done" class="to-do-content">
          {{item.value}}
        </div>
        <div v-show="item.done" class="to-do-content disableFont">
          {{item.value}}
        </div>

      </div>
      <div class="editMode" v-show="isEditing">
        <input class="editInput" type="text" v-model="item.value">
        <div @click="hideEdit" class="change">
          change
        </div>
      </div>

      <div v-show="!item.done" class="buttons">
        <i @click="showEdit" class="fas fa-edit cursorPointer"></i>
        <i @click="deleteTodo(item)" class="fas fa-trash cursorPointer"></i>
      </div>

      <div v-show="item.done" class="buttons">
        <i class="fas fa-edit cursorPointer disableFont"></i>
        <i class="fas fa-trash cursorPointer disableFont"></i>
      </div>

  </div>

</template>

<script>
export default {
  props: ['item'],
  data(){
    return{
      isEditing: false,
      hover: false,
    }
  },
  methods:{
    showEdit(){
      this.isEditing = true;
    },
    hideEdit(){
      this.isEditing = false;
    },
    handleMouseleave(){
      console.log(this.item.done)
      this.hover = false
    },
    handleMouseenter(){
      this.hover = true
    },
    deleteTodo(item){
      this.$emit('delete-todo', item)
    },
    completeTodo(item){
      this.$emit('complete-todo', item)
    }
  }
}
</script>

<style lang="css" scoped>
.container{
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  margin: 5px 0px;
  border: 1px rgba(0,0,0,.2) solid;
  transition: .25s;
}

.disable{
  background: rgba(0,0,0,0.1);
}

.disableFont{
  color: rgba(0,0,0,0.1);
}


.to-do-item{
  display: flex;
}
.to-do-content{
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.complete-btn{
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px rgba(0,0,0,.2) solid;
  transition: .25s;
}
.cursorPointer{
  cursor: pointer;
}
.hoverOn:hover{
  background: rgba(0,0,0,0.7);
}
.editMode{
  display: flex;
  width: 80%;
  height: 100%;
}
.editInput{
  border: rgba(0,0,0,.3) solid 1px;
  width: 85%;
  padding: 3px;
  outline: none;
}
.change{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  cursor: pointer;
  user-select: none;
}
.buttons{
  display: flex;
  justify-content: space-around;
  width: 20%;
}
i{
  font-size: 20px;
  color: rgba(0,0,0,0.7);
  transition: .25s;
}

</style>
