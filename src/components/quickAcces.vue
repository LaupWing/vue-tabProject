<template>
  <header>
    <a class="flex" href="https://www.google.nl/#cns=0">
      <div class="linktitle">Google</div>
      <img src="../assets/google-logo.png" alt="">
    </a>
    <a class="flex" href="https://nl.pinterest.com/">
      <div class="linktitle">Pinterest</div>
      <img src="../assets/pinterest-logo.png" alt="">
    </a>
    <a class="flex" href="https://github.com/">
      <div class="linktitle">Github</div>
      <img src="../assets/github-logo.png" alt="">
    </a>
  </header>
</template>
<script>

</script>
<style scoped>
  .flex{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  header{
    display: flex;
    justify-content: space-around;
    position: relative;
    width: 100%;
  }
  header a{
    width: 200px;
    height: 150px;
    background: white;
    position: relative;
    border-radius: 10px 10px 5px 5px;
    box-shadow: 10px 10px 29px -8px rgba(0,0,0,0.43);
    transition: .25s;
  }
  header img{
    width: 40%;
    margin-top: 10px;
  }
  .linktitle{
    text-align: center;
    position: absolute;
    width: 100%;
    padding: 5px;
    background: #F53240;
    color: white;
    top: 0;
    font-weight: 550;
    border-radius: 10px 10px 0px 0px;
  }
  header a:hover{
    transform: scale(1.06);
  }
</style>
