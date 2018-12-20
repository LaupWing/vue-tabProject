<template>
  <div class="flex" id="app">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
    <quick-acces>
    </quick-acces>
    <div class="main-content">

    <nav>
      <router-link v-for="(router, index) in routers" class="nav-item" :to="{name:router.name, params: {routerColor}}" :style="{background: router.color}" @click.native="changeBorderColor(router.color)" v-bind:key="index">{{router.label}}</router-link>
    </nav>
    <main :style="{border: currentBorder}">
      <router-view :color="routerColor" class="router-view">
      </router-view>
    </main>
  </div>
    <footer>
      <p>Made by Laup Wing</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'home',
  components:{
  },
  data () {
    return {
      routers: [
        {
          name: 'ToDo',
          link: '/to-do-list',
          label: "To do list",
          color: "#F9BE02"
        },
        {
          name: 'Daily',
          link: '/dailyplanner',
          label: "Daily Planner",
          color: "#F53240"
        },
        {
          name: 'Projects',
          link: '/projects',
          label: "Projects",
          color: "#02C8A7"
        },
        {
          name: 'Steps',
          link: '/function-steps',
          label: "Steps",
          color: "#2E302C"
        },
        {
          name: 'Timer',
          link: '/timer',
          label: "Timer",
          color: "#8FC33A"
        },
        {
          name: 'Test',
          link: '/test',
          label: "Test",
          color: "orange"
        }
      ],
      routerColor: "rgba(0,0,0,0.6)",
      msg: "test",
      openTab: this.routers,
      currentBorder: "",
    }
  },
  methods: {
    changeBorderColor: function(color){
      this.routerColor = color
      this.currentBorder = "3px solid " + color
    },
    onloadFunctions: function(){
      const navItem = document.querySelectorAll(".nav-item");
      // Hieronder word de border gezet na het laden van alle items op de webapp
      // dit is niet volgens de vue manier dus dit moet nog gerefactored worden
      // NOTE: Needs refactoring
      navItem.forEach(function(item){
        if(item.classList.contains("router-link-active")){
          document.querySelector("main").style.border = "3px solid "+ item.style.background
        }
      })
      this.applyWidth(navItem.length)
    },
    applyWidth: function(width){
      const widthItem = 100/width;
      const navItem = document.querySelectorAll(".nav-item");
      navItem.forEach(function(item){
        item.style.width = `${widthItem+(widthItem/10)}%`
        item.style.marginLeft = `-${widthItem/2}px`
      })
      navItem[0].style.marginLeft = 0;
    },
    startingColor(){
      let currentColor;
      const currentRoute = this.$route.path
      this.routers.forEach(function(route){
        if(currentRoute === route.link){
          currentColor = route.color
        }
      })
      this.routerColor = currentColor;
    }
  },
  mounted(){
    this.onloadFunctions();
  },
  created(){
    this.startingColor()
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Text+Me+One');
@import url('https://fonts.googleapis.com/css?family=Grand+Hotel');
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
.flex{
  display: flex;
  align-items: center;
  justify-content: center;
}
#app{
  max-width: 900px;
  width: 80%;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 40px;
}
body{
  width: 100vw;
  height: 100vh;
  margin: 0;
  background: #7CDBD5;
  font-family: 'Text Me One', sans-serif;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-x: hidden;
}

.main-content{
  width: 100%;
}

main{
  width: 100%;
  min-height: 300px;
  background: white;
  box-shadow: 10px 10px 29px -8px rgba(0,0,0,0.43);
  border-radius: 0 0 10px 10px;
  padding: 40px;
  padding-top: 25px;
  transition: .3s;
  /* max-height: 470px; */
  max-height: 80vh;
}

nav{
  margin-top: 40px;
  display: flex;
  width: 100%;
}
.nav-item{
  text-decoration: none;
  display: inline-block;
  padding: 10px;
  text-align: center;
  color: white;
  background: orange;
  font-weight: 550;
  border-radius: 20px 5px 0 0;
  transition: .2s;
}
.router-link-active{
  z-index: 2;
  width: 30% !important;
}

.router-view{
  width: 85%;
  margin: auto;
}
button{
  font-family: 'Text Me One', sans-serif !important;\
  font-weight: 800 !important;
  background: transparent;
  border: black solid 1px;
  font-size: 14px;
  padding: 6px;
  width: 20%;
  cursor: pointer;
  transition: .25s;
  outline: none;
}
button:hover{
  background: black;
  color: white;
}


h2{
  margin: 0;
}
footer{
  font-family: 'Grand Hotel', cursive;
  color: white;
  position: fixed;
  bottom: 0;
  right: 20px;
  font-size: 22px;
}

/* Scroll styling */
/* From W3 schools */


/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: lightgrey;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,.2);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}



</style>
