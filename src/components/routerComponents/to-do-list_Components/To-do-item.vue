<template lang="html">
  <div class="container">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
      <div class="to-do-item" v-show="!isEditing">
        <div @click="completeTodo(dum)" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave" class="complete-btn">
          <i :style="[hover ? {'color': 'white'} : {'color': 'rgba(0,0,0,0.7)'}]" class="fas fa-check"></i>
        </div>
        <div class="to-do-content">
          {{dum.value}}
        </div>
      </div>
      <div class="editMode" v-show="isEditing">
        <input class="editInput" type="text" v-model="dum.value">
        <div @click="hideEdit" class="change">
          change
        </div>
      </div>

      <div class="buttons">
        <i @click="showEdit" class="fas fa-edit"></i>
        <i @click="deleteTodo(dum)" class="fas fa-trash"></i>
      </div>

  </div>

</template>

<script>
export default {
  props: ['dum'],
  data(){
    return{
      isEditing: false,
      hover: false
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
      this.hover = false
    },
    handleMouseenter(){
      this.hover = true
    },
    deleteTodo(dum){
      this.$emit('delete-todo', dum)
    },
    completeTodo(dum){
      this.$emit('complete-todo', dum)
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
  cursor: pointer;
}
.complete-btn:hover{
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
  cursor: pointer;
  color: rgba(0,0,0,0.7)
}

</style>
