<template>
  <div class="flex" id="app">
    <quick-acces>
    </quick-acces>
    <nav>
      <router-link v-for="(router, index) in routers" class="nav-item" :to="{name:router.name, params: {routerColor}}" :style="{background: router.color}" @click.native="changeBorderColor(router.color)" v-bind:key="index">{{router.label}}</router-link>
    </nav>
    <main :style="{border: currentBorder}">
      <router-view :color="routerColor" class="router-view">
      </router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'home',
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
      this.currentBorder = "4px solid " + color
    },
    onloadFunctions: function(){
      const navItem = document.querySelectorAll(".nav-item");
      // Hieronder word de border gezet na het laden van alle items op de webapp
      // dit is niet volgens de vue manier dus dit moet nog gerefactored worden
      // NOTE: Needs refactoring
      navItem.forEach(function(item){
        if(item.classList.contains("router-link-active")){
          document.querySelector("main").style.border = "2px solid "+ item.style.background
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
    // console.log(this.test())
    // console.log(this.routers)
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Text+Me+One');
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
}
body{
  width: 100vw;
  height: 100vh;
  margin: 0;
  background: #7CDBD5;
  font-family: 'Text Me One', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}
main{
  width: 100%;
  height: 400px;
  background: white;
  box-shadow: 10px 10px 29px -8px rgba(0,0,0,0.43);
  border-radius: 0 0 10px 10px;
  padding: 40px;
  transition: .3s;
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
  width: 80%;
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
}

h2{
  margin: 0;
}
</style>
