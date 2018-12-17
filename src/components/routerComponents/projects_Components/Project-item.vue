<template lang="html">
  <div class="project-item">

    <!-- Stil needs some cleaning here -->
    <header v-if="!edit" :class="{roundedBorders : show === true}" :style="{background: color}">
      <i @click="removeProject(project)" class="fas fa-trash"></i>
      <h3>
        {{project.projectname}}
      </h3>
      <div class="buttons">
        <i @click="toggleEdit" v-if="show" class="fas fa-edit enable"></i>
        <i v-if="!show" class="fas fa-edit disable"></i>
        <i v-bind:class="['far fa-arrow-alt-circle-down', (show === false) ? 'rotate' : '']" @click="showTasks"></i>
      </div>
    </header>

    <header v-if="edit" :class="{roundedBorders : show === true}" :style="{background: color}">
      <i @click="removeProject(project)" class="fas fa-trash"></i>
      <h3>
        <input type="text" name="" v-model="project.projectname">
      </h3>
        <i @click="editProject" class="fas fa-check-square"></i>
    </header>

    <div v-if="!edit" class="tasks-container">
    <div v-bind:class="['tasks', (show === false) ? 'hide' : '']">
      <div class="task" v-for="(task, index) in project.tasks">
        <p :style="{color: color}" class="indexTask">
          {{index}}
        </p>
        <p class="taskContent">
          {{task.value}}
        </p>
      </div>
    </div>
    </div>

    <div v-if="edit" class="tasks-container">
      <div v-bind:class="['tasks', (show === false) ? 'hide' : '']">
        <div class="task" v-for="(task, index) in project.tasks">
          <p :style="{color: color}" class="indexTask">
            {{index}}
          </p>
          <p class="taskContent">
            <input type="text" v-model="task.value">
          </p>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  props: ['project', 'color'],
  data() {
    return {
      show: false,
      edit: false,
    }
  },
  methods: {
    showTasks() {
      this.show = !this.show
    },
    removeProject(project) {
      this.$emit('delete-project', project)
    },
    toggleEdit() {
      this.edit = !this.edit
    },
    editProject() {
      console.log(this.project)
      this.toggleEdit()
    }
  }
}
</script>

<style lang="css" scoped>
.disable{
  opacity: 0;
  cursor: default!important;
}
.project-item{
  text-align: left;
}
.removeHeight{
  background: orange;
}
input{
  background: rgba(255,255,255,.6);
  border: none;
  padding: 5px 10px;
  transition: .25s;
  outline: none;
  width: 400px;
}
.tasks.hide{
  /* Door max height te gebruiken kan er wel een transition plaatsgevonden worden */
  /* Grappig want ik probeerde het eerst met tranform een dropdown transitie te maken maar dat er waren wat bugs */
  /* en toen kwam ik erachter dat je maxheight moest gebruiken */
  /* Maar door beide te gebruiken ziet het er best sick uit nog! */
  transform: translate(0,-100%);
  max-height: 0;
}
.roundedBorders{
  border-radius: 10px 10px 0 0;
}
.rotate{
  transform: rotate(0)!important;
}
header{
  margin: 0;
  margin-top: 20px;
  padding: 15px;
  color: white;
  transition: all .25s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.buttons{
  display: flex;
  align-items: center;
  width: 10%;
  justify-content: space-between;
}
.fa-arrow-alt-circle-down, .fa-edit, .fa-check-square{
  font-size: 25px;
  transition: .25s;
  cursor: pointer;
}
.fa-arrow-alt-circle-down{
  transform: rotate(180deg);
}
.fa-edit{
  font-size: 22px;
  transition: .5s;
}
.fa-trash{
  position: absolute;
  left: -30px;
  color: rgba(0,0,0,.15);
  font-size: 20px;
  transition: .25s;
  cursor: pointer;
}
input:hover, input:focus{
  background: white;
  /* border: rgba(0,0,0,.1) solid 1px; */
}
.fa-trash:hover{
  color: red;
  opacity: .8;
}
.fa-check-square:hover{
  color: lightblue;
}
.fa-arrow-alt-circle-down:hover, .fa-edit.enable:hover{
  opacity: .6;
}
.tasks{
  overflow: hidden;
  transition: all 1s;
  /* background: orange; */
  max-height: 300px;
}
.task{
  border-bottom: solid rgba(0,0,0,.2) 1px;
  display: flex;
  color: rgba(0,0,0,.7);
  align-items: center;
  background: rgba(0,0,0,.1);

}
.tasks-container{
  overflow: hidden;
}
.indexTask{
  width: 10%;
  max-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: rgba(0,0,0,.2) solid 1px;
  border-bottom: none;
  border-top: none;
  margin: 0;
  padding: 10px;
  font-weight: 800;
}
.taskContent{
  margin: 0;
  margin-left: 20px;
}
.task:last-of-type{
  border: none;
}
h3{
  margin: 0;
}

</style>
