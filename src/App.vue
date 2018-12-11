<template>
  <div class="flex" id="app">
    <quick-acces>
    </quick-acces>
    <main>
      <nav>
          <router-link v-for="(router, index) in routers" class="nav-item" :to="router.link" :style="{background: router.color}" v-bind:key="index">{{router.label}}</router-link>
      </nav>
      <router-view class="router-view">
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
          link: '/to-do-list',
          label: "To do list",
          color: "#F9BE02"
        },
        {
          link: '/dailyplanner',
          label: "Daily Planner",
          color: "#F53240"
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
      ],
      openTab: this.routers,
    }
  },
  methods: {

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
  const navItem = document.querySelectorAll(".nav-item");
  navItem.forEach(function(item){
    item.style.width = `${widthItem+(widthItem/10)}%`
    item.style.marginLeft = `-${widthItem/2}px`
  })
  navItem[0].style.marginLeft = 0;
}

function applyOffset(height){
  document.querySelector("nav").style.transform = `translate(0, -${height}px)`
  document.querySelector("main").style.marginTop = `${height*2}px`
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
}
nav{
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

h2{
  margin: 0;
}
</style>
