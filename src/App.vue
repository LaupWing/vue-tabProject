<template>
  <div class="flex" id="app">
    <quick-acces>
    </quick-acces>
    <main>
      <nav>
          <!-- <router-link class="nav-item" to='/dailyplanner'>Daily Planner</router-link>
          <router-link class="nav-item" to='/to-do-list'>To Do List</router-link>
          <router-link class="nav-item" to='/projects'>Projects</router-link>
          <router-link class="nav-item" to='/function-steps'>Steps</router-link> -->
          <router-link v-for="router in routers" class="nav-item" :to="router.link" :style="{background: router.color}">{{router.label}}</router-link>
      </nav>
      <router-view>
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
          link: '/dailyplanner',
          label: "Daily Planner",
          color: "#F53240"
        },
        {
          link: '/to-do-list',
          label: "To do list",
          color: "#F9BE02"
        },
        {
          link: '/projects',
          label: "Projects",
          color: "#02C8A7"
        },
        {
          link: '/function-steps',
          label: "Steps",
          color: "#2E302C"
        },
        {
          link: '/timer',
          label: "Timer",
          color: "#8FC33A"
        }
        // "F53240",
        // "F9BE02",
        // "02C8A7",
        // "2E302C"
      ]
    }
  },
  methods:{
    // navItemWidth: function(){
      // console.log("test1")
      // const navItem = document.querySelectorAll(".nav-item");
      // console.log("test2")
      // console.log(`3 ${navItem}`)
    // }
  }
}

window.onload = onloadFunctions

function onloadFunctions(){
  const navItem = document.querySelectorAll(".nav-item");
  applyWidth(navItem.length)
  const heightItem = document.querySelector(".nav-item").offsetHeight
  applyOffset(heightItem)
}

function applyWidth(width){
  const widthItem = 100/width;
  console.log(widthItem)
  const navItem = document.querySelectorAll(".nav-item");
  navItem.forEach(function(item){
    item.style.width = `${widthItem}%`
    console.log(item)
  })
}

function applyOffset(height){
  console.log(height, 'testing out')
  document.querySelector("nav").style.transform = `translate(0, -${height}px)`
  document.querySelector("main").style.marginTop = `${height*2}px`
}


// document.querySelector("main").style


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
}
nav{
  display: flex;
  width: 100%;
  background: white;
}
.nav-item{
  text-decoration: none;
  display: inline-block;
  padding: 10px;
  text-align: center;
  color: white;
  background: orange;
  font-weight: 550;
}


</style>
