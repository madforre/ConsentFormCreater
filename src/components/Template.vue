<template>
  <div class="section">
    <ul class="section one">
      <li><router-link to="/template/picker">구성하기</router-link></li>
      <li><router-link to="/template/creater">제작하기</router-link></li>
      <li><router-link to="/template/save">저장하기</router-link></li>
    </ul>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>

/* Wrap section */

.section {
  /* border : 1px solid rgb(111, 135, 241); */
  height : auto;
}

.one {
  display : flex;
  border : 1px solid rgb(111, 135, 241);
  padding : 1rem;
  justify-content: space-around;
}



</style>

